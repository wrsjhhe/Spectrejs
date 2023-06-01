import { Material } from "../materials/Material";
import { CommonUtils } from "../utils/CommonUtils";
import { ShaderBase } from "./ShaderBase";
import * as basic from "./ShaderBasic"

export class MeshBasicShader extends ShaderBase {

    constructor(material: Material) {
        super(material);
    }

    protected override _createVertexShader() {
        const shaderOptions = this._material.shaderOptions;
        this._vertexShaderCode = `
            ${basic.location_transform_vert()}

            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
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

    protected override  _createFragmentShader(){
        const shaderOptions = this._material.shaderOptions;

        this._fragmentShaderCode = `
            @group(1) @binding(0) var<uniform> parameters : vec4<u32>;
            ${basic.bind_color_frag(shaderOptions.bindValues.get("color"))}
            ${basic.bind_textureSampler_frag(shaderOptions.bindValues.get("sampler"))}
            ${basic.bind_texture_frag(shaderOptions.bindValues.get("texture"))}
            
            @fragment
            fn main(
                ${basic.in_uv_frag(shaderOptions.locationValues.get("uv"))}
            ) -> @location(0) vec4<f32> {
                ${basic.textureSampler_frag(shaderOptions.bindValues.get("texture"))}
                ${basic.color_frag(shaderOptions.bindValues.get("color"),CommonUtils.isDefined(shaderOptions.bindValues.get("texture")))}
            }

        `;
    }
}
