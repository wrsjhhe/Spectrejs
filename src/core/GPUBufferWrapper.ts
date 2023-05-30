import { Environment } from "./Environment";

export class GPUBufferWrapper{

    private _size : GPUSize64;
    private _usage : GPUBufferUsageFlags;
    public buffer : GPUBuffer;
    constructor(usage: GPUBufferUsageFlags,data:any){
        this._size = data.byteLength;
        this._usage = usage;
        this.buffer = Environment.activeDevice.createBuffer( {
            size:this._size,
            usage: usage,
            mappedAtCreation: true
        } );

        new data.constructor( this.buffer.getMappedRange() ).set( data );
        this.buffer.unmap();
    }

    public update(data:any){
        Environment.activeDevice.queue.writeBuffer(this.buffer,0,data);
    }

    public destroy(){
        this.buffer.destroy();
    }

    public get size(){
        return this._size;
    }

    public get usage(){
        return this._usage;
    }
}