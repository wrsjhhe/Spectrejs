import * as GPUConstances from '../Constants'
import { GPUBufferWrapper } from './GPUBufferWrapper';
import WebGPURenderer from '../renderers/WebGPURenderer';
type NumberArrayType = Float32Array | Int8Array | Uint32Array;;
export default class BufferAttribute{
    private _array : NumberArrayType;
    private _count : number = 0;
    private _itemSize : number = 0;
    private _format : GPUVertexFormat;
    private _normalized : boolean = false;
    private _byteLength : number = 0;
    private _name : string = '';
    private _needsUpdate : boolean = false;
    private _gpuBuffer : GPUBufferWrapper;
    private _usage : GPUFlagsConstant = GPUBufferUsage.VERTEX;

    get buffer(){
        return this._gpuBuffer;
    }

    constructor( array : NumberArrayType, format:GPUVertexFormat, normalized? : boolean){
        this._array = array;
        this._format = format;
        this._parseFormat();
        this._normalized = normalized?normalized:this._normalized;
    }


    private _parseFormat(){
        switch(this._format){
            case GPUConstances.GPUVertexFormat.Float32x3:{
                this._itemSize = 3;
                this._byteLength = 4;
                this._count = this._array.length / this._itemSize;
                break;
            }
            case GPUConstances.GPUVertexFormat.Uint32:{
                this._itemSize = 1;
                this._byteLength = 4;
                this._count = this._array.length / this._itemSize;
                break;
            }
            default:{
                throw new Error('unknown format');
            }
        }
    }

    public update(){
        if(this._gpuBuffer === undefined){
            this._gpuBuffer = new GPUBufferWrapper(
                this._usage | GPUBufferUsage.COPY_DST,
                this._array);
        }else{
            if(this.needsUpdate){
                this._gpuBuffer.update(this._array);
                this.needsUpdate = false;
            }
        }

        
    }

    get array():RelativeIndexable<number>{
        return this._array;
    }

    get count():number{
        return this._count;
    }

    set count(v : number){
        this._count = v;
    }

    get itemSize():number{
        return this._itemSize;
    }

    set itemSize(v : number){
        this._itemSize = v;
    }

    get name():string{
        return this._name;
    }

    set name(v : string){
        this._name = v;
    }

    get needsUpdate():boolean{
        return this._needsUpdate;
    }

    set needsUpdate(v : boolean){
        this._needsUpdate = v;
    }

    set Usage(v : GPUFlagsConstant){
        this._usage = v;
    }
}