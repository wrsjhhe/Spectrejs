import { BindType } from "../Constants";
import { Color } from "../math/Color";
import { MeshPhongShader } from "../shaders/MeshPhongShader";
import { Material } from "./Material";

export class MeshPhongMaterial extends Material{
    
    public specular = new Color( 0x111111 ); //高光反射
    public emissive = new Color( 0x000000 ); //自发光
    
    constructor(){
        super();

        this._shader = new MeshPhongShader(this);
    }

    protected _setDefaultShaderOptions(){
        super._setDefaultShaderOptions();
        
        this._setValue(this._shaderOptions.locationValues,"normal","vec3<f32>");

        

        
    }



}