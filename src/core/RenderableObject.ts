import Object3D from "./Object3D";
import BufferGeometry from "./BufferGeometry";
import Material from "../materials/Material";

export default class RenderableObject extends Object3D{

    protected _geometry : BufferGeometry;
    protected _material : Material;


    constructor(geometry : BufferGeometry,material:Material){
        super();
        this._geometry = geometry;
        this._material = material;
    }

    

    get geometry(){
        return this._geometry;
    }

    get material(){
        return this._material;
    }
}