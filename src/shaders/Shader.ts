import { Material } from "../materials/Material";
import { Scene } from "../core/Scene";

export abstract class Shader {
    protected _vertexShaderCode: string;
    protected _fragmentShaderCode: string;
    protected _material: Material;

    constructor(material: Material) {
        this._material = material;
    }

    public recreate(scene: Scene) {
        this._createVertexShader(scene);
        this._createFragmentShader(scene);
    }

    protected abstract _createVertexShader(scene: Scene): void;

    protected abstract _createFragmentShader(scene: Scene): void;

    public get vertexShaderCode() {
        return this._vertexShaderCode;
    }

    public get fragmentShaderCode() {
        return this._fragmentShaderCode;
    }
}
