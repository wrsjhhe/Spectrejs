import { NumberArrayType, UniformDataType } from "../../Constants";
import { GPUBufferWrapper } from "../GPUBufferWrapper";
import { Uniform } from "./Uniform";

export class BufferUniform extends Uniform{
    private _buffer : GPUBufferWrapper;
    private _data : NumberArrayType;

    constructor(name:string,binding:number,data:NumberArrayType,flags:GPUShaderStageFlags){
        super(name,binding,flags);
        this._buffer = new GPUBufferWrapper(GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,data);
        this._data = data;
    }

    public override get type(){
        return UniformDataType.buffer;
    }
    
    public set data(v:NumberArrayType){
        for(let i = 0;i < v.length;++i){
            if(v[i] !== this._data[i]){
                this._needsUpdate = true;
                break;
            }
        }
        if(this._needsUpdate){
            this._data = v;
        }
    }

    public override update(){
        if(this._needsUpdate){
            this._buffer.update(this._data);
            this._needsUpdate = false;
        }
    }

    public get buffer(){
        return this._buffer.buffer;
    }
}