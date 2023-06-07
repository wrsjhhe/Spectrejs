import { Scene } from "../core/Scene";
import { Material } from "../materials/Material";
import { Shader } from "./Shader";
import * as basic from "./ShaderBasic"

export class MeshBasicShader extends Shader {

    constructor(material: Material) {
        super(material);
    }

    protected override _createVertexShader(scene:Scene) {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = {index:1} as basic.IndexObj;

        const uvItem = shaderOptions.attributeValues.get("uv");

        this._vertexShaderCode = `
            ${basic.bind_value(0,scene.bindValues.get("projectionMatrix"))}
            ${basic.bind_value(0,scene.bindValues.get("matrixWorldInverse"))}

            @group(2) @binding(0) var<uniform> modelMatrix : mat4x4<f32>;
            
            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
                ${basic.itemVary_value(uvItem,indexObj)}
            }

            @vertex
            fn main(
            @location(0) position : vec3<f32>,
            ${basic.location_vert(uvItem)}
            ) -> VertexOutput {
                var output : VertexOutput;
                ${basic.transform_vert()}
                ${basic.uv_vert(uvItem)}
                return output;
            }
        
        `
    }

    protected override  _createFragmentShader(scene:Scene){
        const shaderOptions = this._material.shaderOptions;
        const indexObj = {index:1} as basic.IndexObj;
        const uvItem = shaderOptions.attributeValues.get("uv");

        this._fragmentShaderCode = `
            ${basic.bind_value(1,shaderOptions.bindValues.get("parameters"))}
            ${basic.bind_value(1,shaderOptions.bindValues.get("color"))}
            ${basic.bind_value(1,shaderOptions.bindValues.get("colorSampler"))}
            ${basic.bind_value(1,shaderOptions.bindValues.get("texture"))}
            


            @fragment
            fn main(
                ${basic.itemVary_value(uvItem,indexObj)}
            ) -> @location(0) vec4<f32> {
                var baseColor:vec4<f32>;
                ${basic.getColor_frag(shaderOptions.bindValues.get("texture"),shaderOptions.bindValues.get("color"))}
                return baseColor;
            }

        `;
    }
}
