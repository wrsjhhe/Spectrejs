import { GPUVertexFormat } from "../Constants";
import { BindBuffer } from "../core/binds/BindBuffer";
import { BindType } from "../core/Defines";
import { DirectionalLight } from "../lights/DirectionalLight";
import { Light } from "../lights/Light";
import { Color } from "../math/Color";
import { MeshPhongShader } from "../shaders/MeshPhongShader";
import { Material } from "./Material";

export class MeshPhongMaterial extends Material{
    
    private _specular = new Color( 0x111111 ); //高光反射
    private _emissive = new Color( 0x000000 ); //自发光
    private _shininess = 30;
    
    constructor(){
        super();

        this._shader = new MeshPhongShader(this);

        this._setAttributeValue("normal","vec3<f32>",GPUVertexFormat.Float32x3,4*3);

        this._uniforms.set("specular", new BindBuffer("specular", this._specular.toArray()));
        this._setBindValue("specular","vec3<f32>",BindType.buffer, GPUShaderStage.FRAGMENT);
        this._uniforms.set("emissive", new BindBuffer("emissive", this._emissive.toArray()));
        this._setBindValue("emissive","vec3<f32>",BindType.buffer, GPUShaderStage.FRAGMENT);
        this._uniforms.set("shininess", new BindBuffer("shininess", new Float32Array([this._shininess])));
        this._setBindValue("shininess","f32",BindType.buffer, GPUShaderStage.FRAGMENT);
    }

    public override setLights(lights:IterableIterator<Light>){
        for(const light of lights){
            if(DirectionalLight.Is(light)){
                const dirLight = light as DirectionalLight;
                dirLight.uniform;
            }
        }
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

    public set shininess(v:number){
        this._shininess = v;
        (this._uniforms.get("specular") as BindBuffer).data = new Float32Array([v]);
    }
}