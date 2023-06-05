import { Material } from "../materials/Material";
import { ShaderBase } from "./ShaderBase";

export class MeshPhongShader extends ShaderBase {

    constructor(material: Material){
        super(material);
    }

    protected _createVertexShader(): void {
        this._vertexShaderCode = `

            vViewPosition = - mvPosition.xyz;
        
        `;
    }
    protected _createFragmentShader(): void {
        this._fragmentShaderCode = `
            var diffuse = color.xyz;
            var emissive = vec3<f32>(0.0,0.0,0.0);
            var emissive = vec3<f32>(0.04,0.04,0.04);
            var shininess = 30.;
            var opacity = 1.;

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
        `;
    }
}