import { Scene } from "../core/Scene";
import { Material } from "../materials/Material";
import { Shader } from "./Shader";
import * as basic from "./ShaderBasic";

export class DepthShader extends Shader {
    constructor(material: Material) {
        super(material);
    }

    protected override _createVertexShader(scene: Scene): void {
        this._vertexShaderCode = `
            ${basic.bind_value(0, scene.bindValues.get("projectionMatrix"))}
            ${basic.bind_value(0, scene.bindValues.get("matrixWorldInverse"))}

            @group(2) @binding(0) var<uniform> modelMatrix : mat4x4<f32>;
            
            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
            }

            @vertex
            fn main(
            @location(0) position : vec3<f32>,
            ) -> VertexOutput {
                var output : VertexOutput;
                ${basic.transform_vert(this.flipY)}
                
                return output;
            }
        `;
    }

    protected override _createFragmentShader(scene: Scene): void {
        this._fragmentShaderCode = "";
    }
}
