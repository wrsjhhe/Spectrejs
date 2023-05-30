import { NumberArrayType } from "../Constants";
import { GPUBufferWrapper } from "./GPUBufferWrapper";

export class Uniform{
    private _name : string;
    private _buffer : GPUBufferWrapper;
    private _binding : number;
    private _flags : GPUShaderStageFlags;
    private _data : NumberArrayType;
    private _needsUpdate = true;

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


    constructor(name:string,binding:number,data:NumberArrayType,flags:GPUShaderStageFlags){
        this._name = name;
        this._binding = binding;
        this._buffer = new GPUBufferWrapper(GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,data);
        this._flags = flags;
        this._data = data;
    }

    public update(){
        if(this._needsUpdate){
            this._buffer.update(this._data);
            this._needsUpdate = false;
        }
    }

    public get name(){
        return this._name;
    }

    public get buffer(){
        return this._buffer.buffer;
    }

    public get binding(){
        return this._binding;
    }

    public get flags(){
        return this._flags;
    }

}