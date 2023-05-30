import triangleVertWGSL from "../shaders/triangle.vert.wgsl";
import redFragWGSL from "../shaders/red.frag.wgsl";
import { Uniform } from "../core/Uniform";
import { Color } from "../math/Color";
import { Texture } from "../textures/Texture";
export class Material{
    private _vertexShader : string;
    private _fragmentShader :string;
    private _uniforms : Map<string,Uniform> = new Map();
    private _color = new Color(1.0,1.0,1.0);
    private _map : Texture;

    constructor(){
        this._vertexShader = triangleVertWGSL;
        this._fragmentShader = redFragWGSL;

        this._initInitialUniform();
    }

    private _initInitialUniform(){
        const colorUniform = new Uniform("color",0,this._color.toArray(),GPUShaderStage.FRAGMENT);
        this._uniforms.set("color",colorUniform);
    } 

    public set color(v:Color){
        this._color = v;
        for(const uniform of this._uniforms.values()){
            if(uniform.name === "color"){
                uniform.data = this._color.toArray();
            }
        }
    }

    public set map(v:Texture){
        this._map = v;
    }

    public get color(){
        return this._color;
    }

    public get map(){
        return this._map;
    }

    public get vertexShader(){
        return this._vertexShader;
    }

    public get fragmentShader(){
        return this._fragmentShader;
    }

    public get uniforms(){
        return this._uniforms;
    }



}