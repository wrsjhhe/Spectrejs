import { Material } from "../materials/Material";
import { Scene } from "../spectre";
import { Shader } from "./Shader";
import * as basic from "./ShaderBasic"

export class MeshPhysicalShader extends Shader {

    constructor(material: Material) {
        super(material);
    }

    protected _createVertexShader(scene: Scene): void {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = { index: 1 } as basic.IndexObj;
        const uvItem = shaderOptions.attributeValues.get("uv");
        const normalItem = shaderOptions.attributeValues.get("normal");

        this._vertexShaderCode = `
            ${basic.bind_value(0, scene.bindValues.get("projectionMatrix"))}
            ${basic.bind_value(0, scene.bindValues.get("matrixWorldInverse"))}

            @group(2) @binding(0) var<uniform> modelMatrix : mat4x4<f32>;

            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
                ${basic.itemVary_value(uvItem, indexObj)}
                ${basic.itemVary_value(normalItem, indexObj)}
                ${basic.customVary_value("vViewPosition", "vec3<f32>", indexObj)}
            }

            @vertex
            fn main(
            @location(0) position : vec3<f32>,
            ${basic.location_vert(normalItem)}
            ${basic.location_vert(uvItem)}
            ) -> VertexOutput {
                var output : VertexOutput;
                ${basic.transform_vert()}
                ${basic.uv_vert(uvItem)}
                output.vViewPosition = - mvPosition.xyz;
                output.normal = normal;
                return output;
            }
        
        `
    }


    protected _createFragmentShader(scene: Scene): void {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = { index: 1 } as basic.IndexObj;
        const uvItem = shaderOptions.attributeValues.get("uv");
        const normalItem = shaderOptions.attributeValues.get("normal");

        this._fragmentShaderCode = `
            const RECIPROCAL_PI = 0.3183098861837907;
            const EPSILON = 1e-6;
            struct IncidentLight {
                color:vec3<f32>,
                direction:vec3<f32>,
                visible:bool,
            };

            struct ReflectedLight {
                directDiffuse:vec3<f32>,
                directSpecular:vec3<f32>,
                indirectDiffuse:vec3<f32>,
                indirectSpecular:vec3<f32>,
            };

            struct GeometricContext {
                position:vec3<f32>,
                normal:vec3<f32>,
                viewDir:vec3<f32>,
            };

            struct PhysicalMaterial {
                diffuseColor:vec3<f32>,
                roughness:f32,
                specularColor:vec3<f32>,
                specularF90:f32,
            };
                   
            fn Schlick_to_F0( f:vec3<f32>, f90:f32, dotVH:f32)->vec3<f32> {
                var x = clamp( 1.0 - dotVH, 0.0, 1.0 );
                var x2 = x * x;
                var x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
            
                return ( f - vec3<f32>( f90,f90,f90) * x5 ) / ( 1.0 - x5 );
            }
            
            fn V_GGX_SmithCorrelated(  alpha:f32, dotNL:f32, dotNV:f32)->f32 {
            
                var a2 = pow( alpha , 2.0 );
            
                var gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow( dotNV, 2.0) );
                var gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow( dotNL, 2.0) );
            
                return 0.5 / max( gv + gl, EPSILON );
            
            }
            
            fn D_GGX( alpha:f32,  dotNH:f32 )->f32 {
            
                var a2 = pow( alpha , 2.0);
            
                var denom = pow( dotNH,2.0 ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1
            
                return RECIPROCAL_PI * a2 / pow( denom ,2.0);
            
            }

            fn F_Schlick( f0:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {
                var fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
                return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
            } 
            
        
            
            fn BRDF_GGX( lightDir:vec3<f32>, viewDir:vec3<f32>,normal:vec3<f32>, material:PhysicalMaterial )->vec3<f32>{
            
                var f0 = material.specularColor;
                var f90 = material.specularF90;
                var roughness = material.roughness;
            
                var alpha = pow( roughness ,2.0); // UE4's roughness
            
                var halfDir = normalize( lightDir + viewDir );
            
                var dotNL = saturate( dot( normal, lightDir ) );
                var dotNV = saturate( dot( normal, viewDir ) );
                var dotNH = saturate( dot( normal, halfDir ) );
                var dotVH = saturate( dot( viewDir, halfDir ) );
            
                var F = F_Schlick( f0, f90, dotVH );
            
                var V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
            
                var D = D_GGX( alpha, dotNH );
              
                return F * ( V * D );
            
            }
            
            
            fn LTC_Uv( N:vec3<f32>, V:vec3<f32>, roughness:f32 )->vec2<f32> {
            
                var LUT_SIZE = 64.0;
                var LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
                var LUT_BIAS = 0.5 / LUT_SIZE;
            
                var dotNV = saturate( dot( N, V ) );
            
                // texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
                var uv = vec2<f32> ( roughness, sqrt( 1.0 - dotNV ) );
            
                uv = uv * LUT_SCALE + LUT_BIAS;
            
                return uv;
            
            }
            
            fn LTC_ClippedSphereFormFactor(  f:vec3<f32>  )->f32 {
            
                var l = length( f );
            
                return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
            
            }
                 

            fn IBLSheenBRDF( normal:vec3<f32>,viewDir:vec3<f32>, roughness:f32 )->f32 {
            
                var dotNV = saturate( dot( normal, viewDir ) );
            
                var r2 = roughness * roughness;
            
                var a = select(-8.48 * r2 + 14.3 * roughness - 9.95,  -339.2 * r2 + 161.4 * roughness - 25.9 , roughness < 0.25);
            
                var b = select(1.97 * r2 - 3.27 * roughness + 0.72, 44.0 * r2 - 23.7 * roughness + 3.26,roughness < 0.25 );
            
                var DG = exp( a * dotNV + b ) + select( 0.1 * ( roughness - 0.25 ), 0.0 ,roughness < 0.25 );
            
                return saturate( DG * RECIPROCAL_PI );
            
            }

            fn DFGApprox( normal:vec3<f32>, viewDir:vec3<f32>, roughness:f32 )->vec2<f32>{
            
                var dotNV = saturate( dot( normal, viewDir ) );
            
                var c0 = vec4<f32>( - 1, - 0.0275, - 0.572, 0.022 );
            
                var c1 = vec4<f32>( 1, 0.0425, 1.04, - 0.04 );
            
                var r = roughness * c0 + c1;
            
                var a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
            
                var fab = vec2<f32>( - 1.04, 1.04 ) * a004 + r.zw;
            
                return fab;
            
            }
            
            fn EnvironmentBRDF( normal:vec3<f32>, viewDir:vec3<f32>, specularColor:vec3<f32>,specularF90:f32 ,roughness:f32  )->vec3<f32> {
            
                var fab = DFGApprox( normal, viewDir, roughness );
            
                return specularColor * fab.x + specularF90 * fab.y;
            
            }
            
            fn computeMultiscattering(  normal:vec3<f32>, viewDir:vec3<f32>, specularColor:vec3<f32>, specularF90:f32 , roughness:f32, singleScatter:ptr<function,vec3<f32>>, multiScatter:ptr<function,vec3<f32>> ) {
            
                var fab = DFGApprox( normal, viewDir, roughness );
            
            
                var Fr = specularColor;
            
                var FssEss = Fr * fab.x + specularF90 * fab.y;
            
                var Ess = fab.x + fab.y;
                var Ems = 1.0 - Ess;
            
                var Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
                var Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
            
                (*singleScatter) += FssEss;
                (*multiScatter) += Fms * Ems;
            
            }

            fn BRDF_Lambert(diffuseColor:vec3<f32>  ) ->vec3<f32> {

                return RECIPROCAL_PI * diffuseColor;
            
            }
            
            fn RE_Direct_Physical(directLight:IncidentLight, geometry:GeometricContext, material:PhysicalMaterial, reflectedLight:ptr<function,ReflectedLight> ) {
            
                var dotNL = saturate( dot( geometry.normal, directLight.direction ) );
            
                var irradiance = dotNL * directLight.color;
            
                (*reflectedLight).directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
            
                (*reflectedLight).directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
            }
            
            fn RE_IndirectDiffuse_Physical( irradiance:vec3<f32>, geometry:GeometricContext, material:PhysicalMaterial, reflectedLight:ptr<function,ReflectedLight> ) {
            
                (*reflectedLight).indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
            
            }
            
            fn RE_IndirectSpecular_Physical( radiance:vec3<f32>, irradiance:vec3<f32>, clearcoatRadiance:vec3<f32>, geometry:GeometricContext, material:PhysicalMaterial, reflectedLight:ptr<function,ReflectedLight>) {      
                // Both indirect specular and indirect diffuse light accumulate here
            
                var singleScattering = vec3<f32>( 0.0 );
                var multiScattering = vec3<f32>( 0.0 );
                var cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
                computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, &singleScattering, &multiScattering );
            
                var totalScattering = singleScattering + multiScattering;
                var diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
            
                (*reflectedLight).indirectSpecular += radiance * singleScattering;
                (*reflectedLight).indirectSpecular += multiScattering * cosineWeightedIrradiance;
            
                (*reflectedLight).indirectDiffuse += diffuse * cosineWeightedIrradiance;
            
            }
            
      
            fn computeSpecularOcclusion(dotNV:f32, ambientOcclusion:f32, roughness:f32 )->f32 {
            
                return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
            
            }

            struct DirectionalLight {
                color:vec4<f32>,
                direction:vec4<f32>,
            };

            fn saturate( a:f32 )->f32 {
                return clamp( a, 0.0, 1.0 );
            } 

            ${basic.bind_value(0, scene.bindValues.get("directionalLights"))}

            ${basic.bind_value(1, shaderOptions.bindValues.get("parameters"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("color"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("colorSampler"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("texture"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("specular"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("emissive"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("roughness"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("metalness"))}

            @fragment
            fn main(
                ${basic.itemVary_value(uvItem, indexObj)}
                ${basic.itemVary_value(normalItem, indexObj)}
                ${basic.customVary_value("vViewPosition", "vec3<f32>", indexObj)}
            ) -> @location(0) vec4<f32> {
                var baseColor:vec4<f32>;
                ${basic.getColor_frag(shaderOptions.bindValues.get("texture"), shaderOptions.bindValues.get("color"))}

                var diffuse = baseColor.xyz;
                // var emissive = vec3<f32>(0.0,0.0,0.0);
                // var specular = vec3<f32>(0.043,0.043,0.043);
                // var shininess = 30.;
                var opacity = 1.;
                var specularStrength = 1.;

                var diffuseColor = vec4<f32>( diffuse, opacity );
                var reflectedLight:ReflectedLight;
                reflectedLight.directDiffuse = vec3<f32>( 0.0 );
                reflectedLight.directSpecular = vec3<f32>( 0.0 );
                reflectedLight.indirectDiffuse = vec3<f32>( 0.0 );
                reflectedLight.indirectSpecular = vec3<f32>( 0.0 );

                var totalEmissiveRadiance = emissive;
                var geometryNormal = normal;
                var roughnessFactor = roughness;
                var metalnessFactor = metalness;
                var material:PhysicalMaterial;
                material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
                material.specularColor = mix( vec3<f32>( 0.04 ), diffuseColor.rgb, metalnessFactor );
	            material.specularF90 = 1.0;

                var dxy = max( abs( dpdx( geometryNormal ) ), abs( dpdy( geometryNormal ) ) );
                var geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

                material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
                material.roughness += geometryRoughness;
                material.roughness = min( material.roughness, 1.0 );

                var geometry:GeometricContext;

                geometry.position = - vViewPosition;
                geometry.normal = normal;
                //geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
                geometry.viewDir = normalize( vViewPosition );

                ${scene.directionalLights.size > 0 ? `
                    for(var i = 0u;i < ${scene.directionalLights.size}u;i++){
                        var directionalLight = directionalLights[i];
        
                        var directLight:IncidentLight;
                        directLight.color = directionalLight.color.xyz;
                        directLight.direction = directionalLight.direction.xyz;
                        //directLight.direction = vec3<f32>(0.,1.,0.);
                        directLight.visible = true;
        
                        RE_Direct_Physical( directLight, geometry, material, &reflectedLight );

                        // var radiance = vec3<f32>( 0.0 );
                        // var iblIrradiance = vec3<f32>( 0.0 );
                        // var clearcoatRadiance = vec3<f32>( 0.0 );
                        // RE_IndirectSpecular_Physical( radiance, iblIrradiance, clearcoatRadiance, geometry, material, &reflectedLight );
                    }
                
                `: ``}

               

                var totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
                var totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
                var outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
                var finalColor = vec4( reflectedLight.directSpecular, diffuseColor.a );

                return finalColor;
            }
        `;
    }
}