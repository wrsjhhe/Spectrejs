import { GPUVertexFormat } from "../Constants";
import { BindBuffer } from "../core/binds/BindBuffer";
import { BindType } from "../core/Defines";
import { Color } from "../math/Color";
import { MeshPhysicalShader } from "../shaders/MeshPhysicalShader";
import { Material } from "./Material";

export class MeshPhysicalMaterial extends Material {
    private _specular = new Color(0x111111); //高光反射
    private _emissive = new Color(0x000000); //自发光
    private _roughness = 0.5;
    private _metalness = 0.5;

    constructor() {
        super();

        this._shader = new MeshPhysicalShader(this);

        this._setAttributeItem("normal", "vec3<f32>", GPUVertexFormat.Float32x3, 4 * 3);

        this._bindMap.set("specular", new BindBuffer(this._specular.toArray()));
        this._setBindItem("specular", "vec3<f32>", BindType.buffer, GPUShaderStage.FRAGMENT);
        this._bindMap.set("emissive", new BindBuffer(this._emissive.toArray()));
        this._setBindItem("emissive", "vec3<f32>", BindType.buffer, GPUShaderStage.FRAGMENT);
        this._bindMap.set("roughness", new BindBuffer(new Float32Array([this._roughness])));
        this._setBindItem("roughness", "f32", BindType.buffer, GPUShaderStage.FRAGMENT);
        this._bindMap.set("metalness", new BindBuffer(new Float32Array([this._metalness])));
        this._setBindItem("metalness", "f32", BindType.buffer, GPUShaderStage.FRAGMENT);
    }

    public set specular(v: Color) {
        this._specular.copy(v);
        (this._bindMap.get("specular") as BindBuffer).data = v.toArray();
    }

    public set emissive(v: Color) {
        this._emissive.copy(v);
        (this._bindMap.get("emissive") as BindBuffer).data = v.toArray();
    }

    public set roughness(v: number) {
        this._roughness = v;
        (this._bindMap.get("roughness") as BindBuffer).data = new Float32Array([v]);
    }

    public set metalness(v: number) {
        this._metalness = v;
        (this._bindMap.get("metalness") as BindBuffer).data = new Float32Array([v]);
    }

    clone() {
        return new MeshPhysicalMaterial().copy(this);
    }

    copy(source: MeshPhysicalMaterial) {
        super.copy(source);
        this.specular = source._specular;
        this.emissive = source._emissive;
        this.metalness = source._metalness;
        this.roughness = source._roughness;
        return this;
    }
}
