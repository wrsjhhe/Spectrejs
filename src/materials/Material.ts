import { Uniform } from "../core/uniforms/Uniform";
import { Color } from "../math/Color";
import { Texture } from "../textures/Texture";
import { UniformDataType } from "../Constants";
import { BufferUniform } from "../core/uniforms/BufferUniform";
import { SamplerUniform } from "../core/uniforms/SamplerUniform";
import { TextureUniform } from "../core/uniforms/TextureUniform";
import { MathUtils } from "../math/MathUtils";
import { Pipleline } from "../core/Pipeline";
import { MeshBasicShader } from "../shaders/MeshBasicShader";

export interface ShaderItem {
    index: number;
}
export class Material {
    private _vertexShader: string;
    private _fragmentShader: string;
    private _uniforms: Map<string, Uniform> = new Map();
    private _color: Color;
    private _map: Texture = null;
    private _parameters = new Uint32Array(4);
    private _pipeline: Pipleline;
    private _shader: MeshBasicShader;

    private _shaderOptions = {
        locationValues: new Map<string,ShaderItem>(),
        bindValues: new Map<string,ShaderItem>()
    };

    public uuid: string;
    public needsCreateBindGroup = true;
    public needsCompile = true;



    constructor() {
        this.uuid = MathUtils.generateUUID();
        this._setDefaultShaderOptions();
        this._pipeline = new Pipleline(this);
        this._shader = new MeshBasicShader(this);

        const parametersUniform = new BufferUniform("parameters", 0, this._parameters, GPUShaderStage.FRAGMENT);
        this._uniforms.set("parameters", parametersUniform);

        this.color = new Color(1.0, 1.0, 1.0);
    }

    public updateUniforms() {
        for (const uniform of this.uniforms.values()) {
            uniform.update();
            if (uniform.type === UniformDataType.texture) {
                const textureUniform = uniform as TextureUniform;
                if (textureUniform.changed && !this.needsCreateBindGroup) {
                    this.needsCreateBindGroup = true;
                    textureUniform.changed = false;
                }
            }
        }
    }


    public getBindLayout() {
        const entriesLayout: Array<GPUBindGroupLayoutEntry> = [];
        for (const uniform of this.uniforms.values()) {
            if (uniform.type === UniformDataType.buffer) {
                const bufferUnform = uniform as BufferUniform;
                entriesLayout.push({
                    binding: bufferUnform.binding,
                    visibility: bufferUnform.flags,
                    buffer: {
                        type: "uniform",
                        minBindingSize: bufferUnform.buffer.size,
                    },
                });
            } else if (uniform.type === UniformDataType.sampler) {
                const samplerUnform = uniform as SamplerUniform;
                entriesLayout.push({
                    binding: samplerUnform.binding,
                    visibility: samplerUnform.flags,
                    sampler: {
                        type: "filtering",
                    },
                });
            } else if (uniform.type === UniformDataType.texture) {
                const textureUnform = uniform as TextureUniform;
                entriesLayout.push({
                    binding: textureUnform.binding,
                    visibility: textureUnform.flags,
                    texture: {},
                });
            }
        }
        return entriesLayout;
    }

    public getBindGroup() {
        const entriesGroup = new Array<GPUBindGroupEntry>();
        for (const uniform of this.uniforms.values()) {
            if (uniform.type === UniformDataType.buffer) {
                const bufferUnform = uniform as BufferUniform;
                entriesGroup.push({
                    binding: bufferUnform.binding,
                    resource: {
                        buffer: bufferUnform.buffer,
                    },
                });
            } else if (uniform.type === UniformDataType.sampler) {
                const samplerUnform = uniform as SamplerUniform;
                entriesGroup.push({
                    binding: samplerUnform.binding,
                    resource: samplerUnform.sampler,
                });
            } else if (uniform.type === UniformDataType.texture) {
                const textureUnform = uniform as TextureUniform;
                entriesGroup.push({
                    binding: textureUnform.binding,
                    resource: textureUnform.textureBuffer.createView(),
                });
            }
        }
        this.needsCreateBindGroup = false;
        return entriesGroup;
    }

    private _setDefaultShaderOptions(){
        this._shaderOptions.locationValues.set("position",{
            index:this._shaderOptions.locationValues.size
        });

        this._shaderOptions.locationValues.set("normal",{
            index:this._shaderOptions.locationValues.size
        });

        this._shaderOptions.bindValues.set("parameters",{
            index:this._shaderOptions.bindValues.size
        });
    }

    public set color(v: Color) {
        this._color = v;

        if(!this._uniforms.get("color")){
            this._shaderOptions.bindValues.set("color",{
                index:this._shaderOptions.bindValues.size
            });
            const colorUniform = new BufferUniform("color", this._uniforms.size, this._color.toArray(), GPUShaderStage.FRAGMENT);
            this._uniforms.set("color", colorUniform);
        }else{
            const bufferUnform = this._uniforms.get("color") as BufferUniform;
            bufferUnform.data = this._color.toArray();
        }
    }

    public set map(v: Texture | null) {
        if(v === null && this._map !== null){
            this._uniforms.get("sampler").destroy();
            this._uniforms.get("texture").destroy();
            this._uniforms.delete("sampler");
            this._uniforms.delete("texture");

            this._shaderOptions.locationValues.delete("uv");
            this._shaderOptions.bindValues.delete("sampler");
            this._shaderOptions.bindValues.delete("texture");

            this.needsCreateBindGroup = true;
            this.pipeline.needsCompile = true;

        }else if(v !== null && this._map === null){
            this._shaderOptions.locationValues.set("uv",{
                index:this._shaderOptions.locationValues.size
            });

            this._shaderOptions.bindValues.set("sampler",{
                index:this._shaderOptions.bindValues.size
            });
            const samplerUniform = new SamplerUniform("sampler", this._uniforms.size, GPUShaderStage.FRAGMENT);
            this._uniforms.set("sampler", samplerUniform);
   
            
            this._shaderOptions.bindValues.set("texture",{
                index:this._shaderOptions.bindValues.size
            });
            const textureUniform = new TextureUniform("texture", this._uniforms.size, v, GPUShaderStage.FRAGMENT);
            this._uniforms.set("texture", textureUniform);

            this.needsCreateBindGroup = true;
            this.pipeline.needsCompile = true;
        }else if(v !== null && this._map !== null){
            this.needsCreateBindGroup = true;
        }
        this._map = v;

        (this._uniforms.get("texture") as TextureUniform).texture = v;
    }

    public get color() {
        return this._color;
    }

    public get map() {
        return this._map;
    }

    public get vertexShader() {
        return this._vertexShader;
    }

    public get fragmentShader() {
        return this._fragmentShader;
    }

    public get uniforms() {
        return this._uniforms;
    }

    public get shaderOptions() {
        return this._shaderOptions;
    }

    public get shader() {
        return this._shader;
    }

    public get pipeline() {
        return this._pipeline;
    }
}
