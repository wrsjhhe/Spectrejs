import { Material } from "../materials/Material";

export abstract class ShaderBase{
    protected _vertexShaderCode: string;
    protected _fragmentShaderCode: string;
    protected _material: Material;

    constructor(material: Material){
        this._material = material;
    }

    public recreate() {
        this._createVertexShader();
        this._createFragmentShader();
    }

    protected abstract _createVertexShader():void;

    protected abstract _createFragmentShader():void;

    public get vertexShaderCode() {
        return this._vertexShaderCode;
    }

    public get fragmentShaderCode() {
        return this._fragmentShaderCode;
    }
}