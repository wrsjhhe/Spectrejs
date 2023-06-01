import { BindType } from "../../Constants";

export abstract class BindValue{
    private _name : string;
    private _flags : GPUShaderStageFlags;

    protected _needsUpdate = true;

    constructor(name:string,flags:GPUShaderStageFlags){
        this._name = name;
        this._flags = flags;
    }

    public abstract get type():BindType;

    public destroy(){}

    public update(){}

    public get name(){
        return this._name;
    }

    public get flags(){
        return this._flags;
    }
}