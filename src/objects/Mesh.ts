import BufferGeometry from "../core/BufferGeometry";
import Material from "../materials/Material";
import RenderableObject from "../core/RenderableObject";

export default class Mesh extends RenderableObject{

    public get type(){
        return "Mesh";
    }

    constructor(geometry : BufferGeometry,material:Material){
        super(geometry,material);
    }

}