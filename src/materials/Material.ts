import { BindValue } from "../core/binds/BindValue";
import { Color } from "../math/Color";
import { Texture } from "../textures/Texture";
import { BindType, GPUBufferBindingType, GPUSamplerBindingType } from "../Constants";
import { BufferUniform } from "../core/binds/BindBuffer";
import { SamplerUniform } from "../core/binds/BindSampler";
import { TextureUniform } from "../core/binds/BindTexture";
import { MathUtils } from "../math/MathUtils";
import { Pipleline } from "../core/Pipeline";
import { MeshBasicShader } from "../shaders/MeshBasicShader";

export interface ShaderItem {
    index: number;
    bindType?:BindType
}
export class Material {

    private _uniforms: Map<string, BindValue> = new Map();
    private _color: Color;
    private _map: Texture = null;
    private _parameters = new Uint32Array(4);
    private _pipeline: Pipleline;
    private _transparent: boolean = false;
    private _opacity: number = 1;

    protected _shader: MeshBasicShader;

    protected _shaderOptions = {
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

        const parametersUniform = new BufferUniform("parameters", this._parameters, GPUShaderStage.FRAGMENT);
        this._uniforms.set("parameters", parametersUniform);

        this.color = new Color(1.0, 1.0, 1.0);
    }

    public updateUniforms() {
        for (const uniform of this.uniforms.values()) {
            uniform.update();
            if (uniform.type === BindType.texture) {
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
        for(const [name,bindOption] of this._shaderOptions.bindValues){
            if(bindOption.bindType === BindType.buffer){
                const bufferUnform = this.uniforms.get(name) as BufferUniform;
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bufferUnform.flags,
                    buffer: {
                        type: GPUBufferBindingType.Uniform,
                        minBindingSize: bufferUnform.buffer.size,
                    },
                });
            }else if(bindOption.bindType === BindType.sampler){
                const samplerUnform = this.uniforms.get(name) as SamplerUniform;
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: samplerUnform.flags,
                    sampler: {
                        type: GPUSamplerBindingType.Filtering,
                    },
                });
            }else if(bindOption.bindType === BindType.texture){
                const textureUnform = this.uniforms.get(name) as TextureUniform;
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: textureUnform.flags,
                    texture: {},
                });
            }
        }
        
        return entriesLayout;
    }

    public getBindGroup() {
        const entriesGroup = new Array<GPUBindGroupEntry>();

        for(const [name,bindOption] of this._shaderOptions.bindValues){
            if(bindOption.bindType === BindType.buffer){
                const bufferUnform = this.uniforms.get(name) as BufferUniform;
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: {
                        buffer: bufferUnform.buffer,
                    },
                });
            }else if(bindOption.bindType === BindType.sampler){
                const samplerUnform = this.uniforms.get(name) as SamplerUniform;
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: samplerUnform.sampler,
                });
            }else if(bindOption.bindType === BindType.texture){
                const textureUnform = this.uniforms.get(name) as TextureUniform;
                entriesGroup.push({
                    binding: bindOption.index,
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
            index:this._shaderOptions.bindValues.size,
            bindType:BindType.buffer
        });
    }

    public set color(v: Color) {
        this._color = v;

        if(!this._uniforms.get("color")){
            this._shaderOptions.bindValues.set("color",{
                index:this._shaderOptions.bindValues.size,
                bindType:BindType.buffer
            });
            const colorUniform = new BufferUniform("color", this._color.toArray(), GPUShaderStage.FRAGMENT);
            this._uniforms.set("color", colorUniform);
        }else{
            const bufferUnform = this._uniforms.get("color") as BufferUniform;
            bufferUnform.data = this._color.toArray();
        }
    }

    public set map(v: Texture | null) {
        if(v === this._map)
            return;

        if(v === null && this._map !== null){
            this._uniforms.get("sampler").destroy();
            this._uniforms.get("texture").destroy();
            this._uniforms.delete("sampler");
            this._uniforms.delete("texture");

            this._shaderOptions.locationValues.delete("uv");
            this._shaderOptions.bindValues.delete("sampler");
            this._shaderOptions.bindValues.delete("texture");

            this.pipeline.needsCompile = true;

        }else if(v !== null && this._map === null){
            this._shaderOptions.locationValues.set("uv",{
                index:this._shaderOptions.locationValues.size
            });

            this._shaderOptions.bindValues.set("sampler",{
                index:this._shaderOptions.bindValues.size,
                bindType:BindType.sampler
            });
            const samplerUniform = new SamplerUniform("sampler", GPUShaderStage.FRAGMENT);
            this._uniforms.set("sampler", samplerUniform);
   
            
            this._shaderOptions.bindValues.set("texture",{
                index:this._shaderOptions.bindValues.size,
                bindType:BindType.texture
            });
            const textureUniform = new TextureUniform("texture", v, GPUShaderStage.FRAGMENT);
            this._uniforms.set("texture", textureUniform);

            this.pipeline.needsCompile = true;
        }

        this.needsCreateBindGroup = true;
        this._map = v;

        (this._uniforms.get("texture") as TextureUniform).texture = v;
    }

    public set transparent(v:boolean){
        if(this._transparent === v)
            return;
        this._transparent = v;
        
    }

    public get transparent(){
        return this._transparent;
    }

    public get color() {
        return this._color;
    }

    public get map() {
        return this._map;
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
