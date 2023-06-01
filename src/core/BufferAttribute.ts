import { NumberArrayType } from '../Constants';
import { GPUBufferWrapper } from './GPUBufferWrapper';

export class BufferAttribute{
    private _array : NumberArrayType;
    private _count : number = 0;
    private _itemSize : number = 0;
    private _format : GPUVertexFormat | GPUIndexFormat;
    private _normalized : boolean = false;
    private _byteLength : number = 0;
    private _name : string = '';
    private _needsUpdate : boolean = false;
    private _gpuBuffer : GPUBufferWrapper;
    private _usage : GPUFlagsConstant = GPUBufferUsage.VERTEX;

    get buffer(){
        return this._gpuBuffer;
    }

    constructor( array : NumberArrayType, format:GPUVertexFormat | GPUIndexFormat,itemSize : number, normalized? : boolean){
        this._array = array;
        this._format = format;
        this._itemSize = itemSize;
        this._parseFormat();
        this._normalized = normalized?normalized:this._normalized;
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

    private _parseFormat(){
        this._itemSize = this._itemSize;
        this._byteLength = this._array.BYTES_PER_ELEMENT;
        this._count = this._array.length / this._itemSize;
    }


    get format(){
        return this._format;
    }

    get array():NumberArrayType{
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

    get byteLength(){
        return this._byteLength;
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