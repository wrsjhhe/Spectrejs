import { Material } from "../materials/Material";
import { Shader } from "./Shader";
import * as basic from "./ShaderBasic"

export class MeshBasicShader extends Shader {

    constructor(material: Material) {
        super(material);
    }

    protected override _createVertexShader() {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = {index:1} as basic.IndexObj;

        const uvItem = shaderOptions.attributeValues.get("uv");

        this._vertexShaderCode = `
            ${basic.location_transform_vert()}

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

    protected override  _createFragmentShader(){
        const shaderOptions = this._material.shaderOptions;
        const indexObj = {index:1} as basic.IndexObj;
        const uvItem = shaderOptions.attributeValues.get("uv");

        this._fragmentShaderCode = `
            ${basic.bind_value_frag(shaderOptions.bindValues.get("parameters"))}
            ${basic.bind_value_frag(shaderOptions.bindValues.get("color"))}
            ${basic.bind_value_frag(shaderOptions.bindValues.get("colorSampler"))}
            ${basic.bind_value_frag(shaderOptions.bindValues.get("texture"))}
            


            @fragment
            fn main(
                ${basic.itemVary_value(uvItem,indexObj)}
            ) -> @location(0) vec4<f32> {
                var baseColor:vec4<f32>;
                ${basic.getColo_frag(shaderOptions.bindValues.get("texture"),shaderOptions.bindValues.get("color"))}
                return baseColor;
            }

        `;
    }
}
