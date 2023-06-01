import { Material } from "../materials/Material";
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

    private _createFragmentShader(){
        const shaderOptions = this._material.shaderOptions;

        this._fragmentShaderCode = `
            @group(1) @binding(0) var<uniform> parameters : vec4<u32>;
            ${basic.bind_color_frag(shaderOptions.bindValues.get("color"))}
            ${basic.bind_colorSampler_frag(shaderOptions.bindValues.get("sampler"))}
            ${basic.bind_texture_frag(shaderOptions.bindValues.get("texture"))}
            
            @fragment
            fn main(
                ${basic.in_uv_frag(shaderOptions.locationValues.get("uv"))}
            ) -> @location(0) vec4<f32> {
                ${basic.textureSampler_frag(shaderOptions.bindValues.get("texture"))}
                ${basic.color_frag(shaderOptions.bindValues.get("texture"))}
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
