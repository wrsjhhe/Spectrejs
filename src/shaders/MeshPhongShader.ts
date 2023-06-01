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
            uniform vec3 diffuse;
            uniform vec3 emissive;
            uniform vec3 specular;
            uniform float shininess;
            uniform float opacity;

            BlinnPhongMaterial material;
            material.diffuseColor = diffuseColor.rgb;
            material.specularColor = specular;
            material.specularShininess = shininess;
            material.specularStrength = specularStrength;

            GeometricContext geometry;

            geometry.position = - vViewPosition;
            geometry.normal = normal;
            geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

            #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

            DirectionalLight directionalLight;
            #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
            DirectionalLightShadow directionalLightShadow;
            #endif

            #pragma unroll_loop_start
            for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

                directionalLight = directionalLights[ i ];

                getDirectionalLightInfo( directionalLight, geometry, directLight );

                #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
                directionalLightShadow = directionalLightShadows[ i ];
                directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
                #endif

                RE_Direct( directLight, geometry, material, reflectedLight );

            }
            #pragma unroll_loop_end

        #endif
        `;
    }
}