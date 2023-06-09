import { GPUVertexFormat } from "../Constants";
import { BindBuffer } from "../core/binds/BindBuffer";
import { BindType } from "../core/Defines";
import { Color } from "../math/Color";
import { MeshPhongShader } from "../shaders/MeshPhongShader";
import { Material } from "./Material";

export class MeshPhongMaterial extends Material {
    private _specular = new Color(0x111111); //高光反射
    private _emissive = new Color(0x000000); //自发光
    private _shininess = 30;

    constructor() {
        super();

        this._shader = new MeshPhongShader(this);

        this._setAttributeItem("normal", "vec3<f32>", GPUVertexFormat.Float32x3, 4 * 3);

        this._bindMap.set("specular", new BindBuffer(this._specular.toArray()));
        this._setBindItem("specular", "vec3<f32>", BindType.buffer, GPUShaderStage.FRAGMENT);
        this._bindMap.set("emissive", new BindBuffer(this._emissive.toArray()));
        this._setBindItem("emissive", "vec3<f32>", BindType.buffer, GPUShaderStage.FRAGMENT);
        this._bindMap.set("shininess", new BindBuffer(new Float32Array([this._shininess])));
        this._setBindItem("shininess", "f32", BindType.buffer, GPUShaderStage.FRAGMENT);
    }

    public set specular(v: Color) {
        this._specular.copy(v);
        (this._bindMap.get("specular") as BindBuffer).data = v.toArray();
    }

    public set emissive(v: Color) {
        this._emissive.copy(v);
        (this._bindMap.get("emissive") as BindBuffer).data = v.toArray();
    }

    public set shininess(v: number) {
        this._shininess = v;
        (this._bindMap.get("specular") as BindBuffer).data = new Float32Array([v]);
    }
}
