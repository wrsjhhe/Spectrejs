import { BufferGeometry } from "../core/BufferGeometry";
import { Material } from "../materials/Material";
import { RenderableObject } from "../core/RenderableObject";
import { Object3D } from "../core/Object3D";

export class Mesh extends RenderableObject{

    public get type(){
        return "Mesh";
    }

	public static Is(object:Object3D){
		return object instanceof Mesh;
	}
    
    constructor(geometry : BufferGeometry,material:Material){
        super(geometry,material);
    }

}