import { GPUVertexFormat } from "../Constants";
import { BindBuffer } from "../core/binds/BindBuffer";
import { BindType } from "../core/Defines";
import { DirectionalLight } from "../lights/DirectionalLight";
import { Light } from "../lights/Light";
import { Color } from "../math/Color";
import { MeshPhysicalShader } from "../shaders/MeshPhysicalShader";
import { Material } from "./Material";

export class MeshPhysicalMaterial extends Material{
    
    private _specular = new Color( 0x111111 ); //高光反射
    private _emissive = new Color( 0x000000 ); //自发光
    private _roughness = 0.5;
    private _metalness = 0.0;
    
    constructor(){
        super();

        this._shader = new MeshPhysicalShader(this);

        this._setAttributeValue("normal","vec3<f32>",GPUVertexFormat.Float32x3,4*3);

        this._uniforms.set("specular", new BindBuffer("specular", this._specular.toArray()));
        this._setBindValue("specular","vec3<f32>",BindType.buffer, GPUShaderStage.FRAGMENT);
        this._uniforms.set("emissive", new BindBuffer("emissive", this._emissive.toArray()));
        this._setBindValue("emissive","vec3<f32>",BindType.buffer, GPUShaderStage.FRAGMENT);
        this._uniforms.set("roughness", new BindBuffer("roughness", new Float32Array([this._roughness])));
        this._setBindValue("roughness","f32",BindType.buffer, GPUShaderStage.FRAGMENT);
        this._uniforms.set("metalness", new BindBuffer("metalness", new Float32Array([this._metalness])));
        this._setBindValue("metalness","f32",BindType.buffer, GPUShaderStage.FRAGMENT);
    }

    public override get applyLight(){
        return false;
    }

    public set specular(v:Color){
        this._specular.copy(v);
        (this._uniforms.get("specular") as BindBuffer).data = v.toArray();
    }

    public set emissive(v:Color){
        this._emissive.copy(v);
        (this._uniforms.get("emissive") as BindBuffer).data = v.toArray();
    }

    public set roughness(v:number){
        this._roughness = v;
        (this._uniforms.get("roughness") as BindBuffer).data = new Float32Array([v]);
    }

    public set metalness(v:number){
        this._metalness = v;
        (this._uniforms.get("metalness") as BindBuffer).data = new Float32Array([v]);
    }
}