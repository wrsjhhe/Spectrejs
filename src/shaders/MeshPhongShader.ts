import { Material } from "../materials/Material";
import { Scene } from "../core/Scene";
import { Shader } from "./Shader";
import * as basic from "./ShaderBasic";

export class MeshPhongShader extends Shader {
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
        
        `;
    }

    protected _createFragmentShader(scene: Scene): void {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = { index: 1 } as basic.IndexObj;
        const uvItem = shaderOptions.attributeValues.get("uv");
        const normalItem = shaderOptions.attributeValues.get("normal");

        this._fragmentShaderCode = `
            const RECIPROCAL_PI = 0.3183098861837907;
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

            struct BlinnPhongMaterial {

                diffuseColor:vec3<f32>,
                specularColor:vec3<f32>,
                specularShininess:f32,
                specularStrength:f32,
            
            };

            struct DirectionalLight {
                color:vec4<f32>,
                direction:vec4<f32>,
            };

            ${basic.encoding_pars()}

            fn saturate( a:f32 )->f32 {
                return clamp( a, 0.0, 1.0 );
            } 

            fn BRDF_Lambert( diffuseColor:vec3<f32> )->vec3<f32> {

                return RECIPROCAL_PI * diffuseColor;
            
            }

            fn F_Schlick( f0:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {

                var fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
            
                return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
            
            } 

            fn G_BlinnPhong_Implicit()->f32 {

                return 0.25;
            
            }

            fn D_BlinnPhong( shininess:f32, dotNH:f32)->f32 {

                return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
            
            }

            fn BRDF_BlinnPhong( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, specularColor:vec3<f32>, shininess:f32 )->vec3<f32> {

                var halfDir = normalize( lightDir + viewDir );
            
                var dotNH = saturate( dot( normal, halfDir ) );
                var dotVH = saturate( dot( viewDir, halfDir ) );
            
                var F = F_Schlick( specularColor, 1.0, dotVH );
            
                var G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );
            
                var D = D_BlinnPhong( shininess, dotNH );
            
                return F * ( G * D );
            
            }

            fn RE_Direct_BlinnPhong( 
                directLight:IncidentLight, 
                geometry:GeometricContext, 
                material:BlinnPhongMaterial, 
                reflectedLight: ptr<function,ReflectedLight>
                ) {

                var dotNL = saturate( dot( geometry.normal, directLight.direction ) );
                var irradiance = dotNL * directLight.color;

                (*reflectedLight).directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
            
                (*reflectedLight).directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
            }

            ${basic.bind_value(0, scene.bindValues.get("directionalLights"))}

            ${basic.bind_value(1, shaderOptions.bindValues.get("parameters"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("color"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("colorSampler"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("colorTexture"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("specular"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("emissive"))}
            ${basic.bind_value(1, shaderOptions.bindValues.get("shininess"))}

            @fragment
            fn main(
                ${basic.itemVary_value(uvItem, indexObj)}
                ${basic.itemVary_value(normalItem, indexObj)}
                ${basic.customVary_value("vViewPosition", "vec3<f32>", indexObj)}
            ) -> @location(0) vec4<f32> {
                var baseColor:vec4<f32>;
                ${basic.getColor_frag(
                    shaderOptions.bindValues.get("colorTexture"),
                    shaderOptions.bindValues.get("colorSampler"),
                    shaderOptions.bindValues.get("color")
                )}

                ${basic.input_encoding("baseColor")}
                var diffuse = baseColor.xyz;

                var opacity = 1.;
                var specularStrength = 1.;

                var diffuseColor = vec4<f32>( diffuse, opacity );
                var reflectedLight:ReflectedLight;
                reflectedLight.directDiffuse = vec3<f32>( 0.0 );
                reflectedLight.directSpecular = vec3<f32>( 0.0 );
                reflectedLight.indirectDiffuse = vec3<f32>( 0.0 );
                reflectedLight.indirectSpecular = vec3<f32>( 0.0 );

                var totalEmissiveRadiance = emissive;

                var material:BlinnPhongMaterial;
                material.diffuseColor = diffuse;
                material.specularColor = specular;
                material.specularShininess = shininess;
                material.specularStrength = specularStrength;

                var geometry:GeometricContext;

                geometry.position = - vViewPosition;
                geometry.normal = normal;
                //geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
                geometry.viewDir = normalize( vViewPosition );

                ${
                    scene.directionalLights.size > 0
                        ? `
                    for(var i = 0u;i < ${scene.directionalLights.size}u;i++){
                        var directionalLight = directionalLights[i];
        
                        var directLight:IncidentLight;
                        directLight.color = directionalLight.color.xyz;
                        directLight.direction = directionalLight.direction.xyz;
                        //directLight.direction = vec3<f32>(0.,1.,0.);
                        directLight.visible = true;
        
                        RE_Direct_BlinnPhong( directLight, geometry, material, &reflectedLight );
                    }
                
                `
                        : ``
                }

                var outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

                var finalColor = vec4( outgoingLight, diffuseColor.a );
                ${basic.end_encoding("finalColor")}

                return finalColor;
            }
        `;
    }
}
