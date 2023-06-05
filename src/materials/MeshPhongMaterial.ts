import { BindType } from "../Constants";
import { Color } from "../math/Color";
import { Material } from "./Material";

export class MeshPhongMaterial extends Material{
    
    public specular = new Color( 0x111111 ); //高光反射
    public emissive = new Color( 0x000000 ); //自发光
    
    constructor(){
        super();
    }

    protected _setDefaultShaderOptions(){
        super._setDefaultShaderOptions();
        
        this._setValue(this._shaderOptions.locationValues,"normal");

        
    }



}