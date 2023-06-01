import { Object3D } from "../core/Object3D";
import { Color } from "../spectre";

export class Light extends Object3D {
    
    public get type(){
		return "Light";
    }

	public static Is(object:Object3D){
		return object instanceof Light;
	}


    private _color:Color;
    private _intensity:number;

    constructor(color:Color, intensity = 1){
        super();

        this._color = color;
        this._intensity = intensity;
    }
}
