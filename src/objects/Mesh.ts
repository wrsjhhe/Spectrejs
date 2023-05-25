import BufferGeometry from "../core/BufferGeometry";
import Material from "../materials/Material";
import { Matrix4 } from "../math/Matrix4";
import RenderableObject from "../core/RenderableObject";

export default class Mesh extends RenderableObject{

    private _matrix : Matrix4;
    private _matrixWorld : Matrix4;

    constructor(geometry : BufferGeometry,material:Material){
        super(geometry,material);
    }




    get type(){
        return "Mesh";
    }
}