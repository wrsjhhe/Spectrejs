import { BindType, NumberArrayType } from "../../Constants";
import { GPUBufferWrapper } from "../GPUBufferWrapper";
import { BindValue } from "./BindValue";

export class BufferUniform extends BindValue{
    private _buffer : GPUBufferWrapper;
    private _data : NumberArrayType;

    constructor(name:string,data:NumberArrayType,flags:GPUShaderStageFlags){
        super(name,flags);
        this._buffer = new GPUBufferWrapper(GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,data);
        this._data = data;
    }

    public override destroy(): void {
        this._buffer.destroy();
    }

    public override get type(){
        return BindType.buffer;
    }
    
    public set data(v:NumberArrayType){
        this._needsUpdate = true;
        this._data = v;
    }

    public override update(){
        if(this._needsUpdate){
            if(this._data.byteLength!==this._buffer.size){
                //this._buffer.destroy();
                this._buffer = new GPUBufferWrapper(GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,this._data);
            }else{
                this._buffer.update(this._data);
            }

            this._needsUpdate = false;
        }
    }

    public get buffer(){
        return this._buffer.buffer;
    }
}