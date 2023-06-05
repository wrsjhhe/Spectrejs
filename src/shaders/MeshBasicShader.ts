import { Material } from "../materials/Material";
import { CommonUtils } from "../utils/CommonUtils";
import { Shader } from "./Shader";
import * as basic from "./ShaderBasic"

export class MeshBasicShader extends Shader {

    constructor(material: Material) {
        super(material);
    }

    protected override _createVertexShader() {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = {index:1} as basic.IndexObj;

        const uvItem = shaderOptions.locationValues.get("uv");

        this._vertexShaderCode = `
            ${basic.location_transform_vert()}

            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
                ${basic.varyValue(uvItem,indexObj)}
            }

            @vertex
            fn main(
            @location(0) position : vec3<f32>,
            ${basic.location_uv_vert(uvItem)}
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
        const uvItem = shaderOptions.locationValues.get("uv");

        this._fragmentShaderCode = `
            ${basic.bind_buffer_frag(shaderOptions.bindValues.get("parameters"))}
            ${basic.bind_buffer_frag(shaderOptions.bindValues.get("color"))}
            ${basic.bind_sampler_frag(shaderOptions.bindValues.get("colorSampler"))}
            ${basic.bind_sampler_frag(shaderOptions.bindValues.get("texture"))}
            
            @fragment
            fn main(
                ${basic.varyValue(uvItem,indexObj)}
            ) -> @location(0) vec4<f32> {
                ${basic.getColo_frag(shaderOptions.bindValues.get("texture"),shaderOptions.bindValues.get("color"))}
            }

        `;
    }
}
