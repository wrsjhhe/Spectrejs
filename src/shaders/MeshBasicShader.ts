import { Material } from "../spectre";
import * as basic from "./ShaderBasic"

export class MeshBasicShader {
    private _vertexShaderCode: string;
    private _fragmentShaderCode: string;
    private _material: Material;

    constructor(material: Material) {
        this._material = material;
    }

    public recreate() {
        this._createVertexShader();
        this._createFragmentShader();
    }

    private _createVertexShader() {
        const shaderOptions = this._material.shaderOptions;
        this._vertexShaderCode = `
            ${basic.transform_paras()}

            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
                ${basic.vary_uv(shaderOptions.locationValues.get("uv"))}
            }

            @vertex
            fn main(
            @location(0) position : vec3<f32>,
            ${basic.location_normal(shaderOptions.locationValues.get("normal"))}
            ${basic.location_uv(shaderOptions.locationValues.get("uv"))}
            ) -> VertexOutput {
                var output : VertexOutput;
                ${basic.transform()}
                ${basic.uv(shaderOptions.locationValues.get("uv"))}
                return output;
            }
        
        `
    }

    private _createFragmentShader(){
        const shaderOptions = this._material.shaderOptions;

        this._fragmentShaderCode = `
            @group(1) @binding(0) var<uniform> parameters : vec4<u32>;
            ${basic.color_paras(shaderOptions.bindValues.get("color"))}
            ${basic.colorSampler_paras(shaderOptions.bindValues.get("sampler"))}
            ${basic.texture_paras(shaderOptions.bindValues.get("texture"))}
            
            @fragment
            fn main(
                ${basic.vary_uv(shaderOptions.locationValues.get("uv"))}
            ) -> @location(0) vec4<f32> {
                ${basic.textureSampler(shaderOptions.bindValues.get("texture"))}
                ${basic.color(shaderOptions.bindValues.get("texture"))}
            }

        `;
    }

    public get vertexShaderCode() {
        return this._vertexShaderCode;
    }

    public get fragmentShaderCode() {
        return this._fragmentShaderCode;
    }
}
