import { GPUBufferWrapper } from "./GPUBufferWrapper";

export class Uniform{
    private _name : string;
    private _buffer : GPUBufferWrapper;
    private _binding : number;
    private _flags : GPUShaderStageFlags;
    constructor(name:string,binding:number,data:any,flags:GPUShaderStageFlags){
        this._name = name;
        this._binding = binding;
        this._buffer = new GPUBufferWrapper(GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,data);
        this._flags = flags;
    }

    public update(data:any){
        this._buffer.update(data);
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