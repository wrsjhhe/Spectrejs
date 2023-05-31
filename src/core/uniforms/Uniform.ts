
export abstract class Uniform{
    private _name : string;
    private _binding : number;
    private _flags : GPUShaderStageFlags;

    protected _needsUpdate = true;

    constructor(name:string,binding:number,flags:GPUShaderStageFlags){
        this._name = name;
        this._binding = binding;
        this._flags = flags;
    }

    public abstract get type():string;

    public destroy(){}

    public update(){}

    public get name(){
        return this._name;
    }

    public get binding(){
        return this._binding;
    }

    public get flags(){
        return this._flags;
    }
}