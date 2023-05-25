import { GPUBufferWrapper } from "./GPUBufferWrapper";

export class Uniform{
    private _name : string;
    private _buffer : GPUBufferWrapper;
    private _binding : number;
    constructor(name:string,binding:number,data:any){
        this._name = name;
        this._binding = binding;
        this._buffer = new GPUBufferWrapper(GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,data);

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

}