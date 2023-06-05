import { Material } from "../materials/Material";
import { Shader } from "./Shader";
import * as basic from "./ShaderBasic"

export class MeshPhongShader extends Shader {

    constructor(material: Material){
        super(material);
    }

    protected _createVertexShader(): void {
        this._vertexShaderCode = `

            vViewPosition = - mvPosition.xyz;
        
        `;
        const shaderOptions = this._material.shaderOptions;
        this._vertexShaderCode = `
            ${basic.location_transform_vert()}

            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
                ${basic.out_uv_vert(shaderOptions.locationValues.get("normal"))}
                ${basic.out_uv_vert(shaderOptions.locationValues.get("uv"))}
            }

            @vertex
            fn main(
            @location(0) position : vec3<f32>,
            ${basic.location_normal_vert(shaderOptions.locationValues.get("normal"))}
            ${basic.location_uv_vert(shaderOptions.locationValues.get("uv"))}
            ) -> VertexOutput {
                var output : VertexOutput;
                ${basic.transform_vert()}
                ${basic.uv_vert(shaderOptions.locationValues.get("uv"))}
                return output;
            }
        
        `
    }
    protected _createFragmentShader(): void {

        this._fragmentShaderCode = `
            var diffuse = color.xyz;
            var emissive = vec3<f32>(0.0,0.0,0.0);
            var emissive = vec3<f32>(0.04,0.04,0.04);
            var shininess = 30.;
            var opacity = 1.;

            struct IncidentLight {
                vec3 color;
                vec3 direction;
                bool visible;
            };

            struct ReflectedLight {
                vec3 directDiffuse;
                vec3 directSpecular;
                vec3 indirectDiffuse;
                vec3 indirectSpecular;
            };

            struct GeometricContext {
                vec3 position;
                vec3 normal;
                vec3 viewDir;
            };

            vec4 diffuseColor = vec4( diffuse, opacity );
            ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
            vec3 totalEmissiveRadiance = emissive;

            // uniform vec3 diffuse;
            // uniform vec3 emissive;
            // uniform vec3 specular;
            // uniform float shininess;
            // uniform float opacity;

            BlinnPhongMaterial material;
            material.diffuseColor = diffuse;
            material.specularColor = specular;
            material.specularShininess = shininess;
            material.specularStrength = specularStrength;

            GeometricContext geometry;

            geometry.position = - vViewPosition;
            geometry.normal = normal;
            geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

            #define saturate( a ) clamp( a, 0.0, 1.0 )

            vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

                return RECIPROCAL_PI * diffuseColor;
            
            } // validated

            float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

                // Original approximation by Christophe Schlick '94
                // float fresnel = pow( 1.0 - dotVH, 5.0 );
            
                // Optimized variant (presented by Epic at SIGGRAPH '13)
                // https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
                float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
            
                return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
            
            } // validated

            float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

                // geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
                return 0.25;
            
            }

            float D_BlinnPhong( const in float shininess, const in float dotNH ) {

                return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
            
            }

            vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

                vec3 halfDir = normalize( lightDir + viewDir );
            
                float dotNH = saturate( dot( normal, halfDir ) );
                float dotVH = saturate( dot( viewDir, halfDir ) );
            
                vec3 F = F_Schlick( specularColor, 1.0, dotVH );
            
                float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );
            
                float D = D_BlinnPhong( shininess, dotNH );
            
                return F * ( G * D );
            
            } // validated

            void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

                float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
                vec3 irradiance = dotNL * directLight.color;
            
                reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
            
                reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
            
            }

            const num_dir_lights = 0u;
            #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

            DirectionalLight directionalLight;

            for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

                directionalLight = directionalLights[ i ];

                getDirectionalLightInfo( directionalLight, geometry, directLight );

                RE_Direct_BlinnPhong( directLight, geometry, material, reflectedLight );

            }

        #endif
        vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

        gl_FragColor = vec4( outgoingLight, diffuseColor.a );
        `;
    }
}