import triangleVertWGSL from "../shaders/basic.vert.wgsl";
import redFragWGSL from "../shaders/basic.frag.wgsl";
import { Uniform } from "../core/uniforms/Uniform";
import { Color } from "../math/Color";
import { NullTexture, Texture } from "../textures/Texture";
import { UniformDataType } from "../Constants";
import { BufferUniform } from "../core/uniforms/BufferUniform";
import { SamplerUniform } from "../core/uniforms/SamplerUniform";
import { TextureUniform } from "../core/uniforms/TextureUniform";
import { CommonUtils } from "../utils/CommonUtils";

export class Material{
    private _vertexShader : string;
    private _fragmentShader :string;
    private _uniforms : Map<string,Uniform> = new Map();
    private _color = new Color(1.0,1.0,1.0);
    private _map = NullTexture;
    private _useMap = false;
    private _parameters = new Uint32Array(4);

    public needsCreateBindGroup = true;
    public needsCompile = true;

    constructor(){
        this._vertexShader = triangleVertWGSL;
        this._fragmentShader = redFragWGSL;

        this._initInitialUniform();
    }

    public createBindLayout(){
        const entriesLayout:Array<GPUBindGroupLayoutEntry> = [];
        for(const uniform of this.uniforms.values()){
            if(uniform.type === UniformDataType.buffer){
                const bufferUnform = uniform as BufferUniform;
                entriesLayout.push({
                    binding:bufferUnform.binding,
                    visibility: bufferUnform.flags,
                    buffer:{
                        type: 'uniform',
                        minBindingSize:bufferUnform.buffer.size
                    }
                });
            } else if(uniform.type === UniformDataType.sampler){
                const samplerUnform = uniform as SamplerUniform;
                entriesLayout.push({
                    binding:samplerUnform.binding,
                    visibility: samplerUnform.flags,
                    sampler:{
                        type: 'filtering'
                    }
                });
            } else if(uniform.type === UniformDataType.texture){
                const textureUnform = uniform as TextureUniform;
                entriesLayout.push({
                    binding:textureUnform.binding,
                    visibility: textureUnform.flags,
                    texture:{}
                });
            }
            
        }
        return entriesLayout;
    }

    public createBindGroup(device:GPUDevice){
        const entriesGroup = new Array<GPUBindGroupEntry>;
        for(const uniform of this.uniforms.values()){
            if(uniform.type === UniformDataType.buffer){
                const bufferUnform = uniform as BufferUniform;
                entriesGroup.push({
                    binding:bufferUnform.binding,
                    resource:{
                        buffer:bufferUnform.buffer
                    }
                });
            } else if(uniform.type === UniformDataType.sampler){
                const samplerUnform = uniform as SamplerUniform;
                entriesGroup.push({
                    binding:samplerUnform.binding,
                    resource:samplerUnform.sampler
                });
            } else if(uniform.type === UniformDataType.texture){
                const textureUnform = uniform as TextureUniform;
                entriesGroup.push({
                    binding:textureUnform.binding,
                    resource:textureUnform.data.createView()
                });
            }
        }
        this.needsCreateBindGroup = false;
        return entriesGroup;
    }

    public updateUniforms(){
        for (const uniform of this.uniforms.values()) {
            uniform.update();
            if(uniform.type === UniformDataType.texture){
                const textureUniform = uniform as TextureUniform;
                if(textureUniform.changed){
                    this.needsCreateBindGroup = true;
                }
            }
        }
    }

    private _initInitialUniform(){
        const parametersUniform = new BufferUniform("parameters",0,this._parameters,GPUShaderStage.FRAGMENT); 
        this._uniforms.set("parameters",parametersUniform);

        const colorUniform = new BufferUniform("color",1,this._color.toArray(),GPUShaderStage.FRAGMENT);
        this._uniforms.set("color",colorUniform);

        const samplerUniform = new SamplerUniform("sampler",2,GPUShaderStage.FRAGMENT);
        this._uniforms.set("sampler",samplerUniform);

        const textureUniform = new TextureUniform("texture",3,this.map, GPUShaderStage.FRAGMENT);
        this._uniforms.set("texture",textureUniform);
    } 

    public set color(v:Color){
        this._color = v;
        const bufferUnform = this._uniforms.get("color") as BufferUniform;
        bufferUnform.data = this._color.toArray();
    }

    public set map(v:Texture){
        if(v !== NullTexture && CommonUtils.isDefined(v)){
            this._map = v;
            this._useMap = true;
        }else{
            this._map = NullTexture;
            this._useMap = false;
        }

        const textureUnform = this._uniforms.get("texture") as TextureUniform;
        textureUnform.texture = v;
        
    }

    public get color(){
        return this._color;
    }

    public get map(){
        return this._map;
    }

    public get vertexShader(){
        return this._vertexShader;
    }

    public get fragmentShader(){
        return this._fragmentShader;
    }

    public get uniforms(){
        return this._uniforms;
    }



}