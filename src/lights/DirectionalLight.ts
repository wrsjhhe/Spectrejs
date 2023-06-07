import { Light } from './Light';
import { BindBuffer } from '../core/binds/BindBuffer';
import { Color } from '../math/Color';
import { Object3D } from '../core/Object3D';
import { Vector3 } from '../spectre';


export class DirectionalLight extends Light {

	public get type(){
		return "DirectionalLight";
    }

	public static Is(object:Object3D){
		return object instanceof DirectionalLight;
	}

	private _direction = new Vector3();

	public needsUpdate = false;

	constructor( color:Color, intensity = 1 ) {

		super( color, intensity );

		this.updateMatrix();

		//this.shadow = new DirectionalLightShadow();

		this._direction.copy( Object3D.DEFAULT_UP);
	}

	public set direction(v:Vector3){
		this._direction.copy(v);
		this.needsUpdate = true;
	}

	public get direction(){
		return this._direction;
	}

	dispose() {

		//this.shadow.dispose();

	}

	copy( source:DirectionalLight ) {

		super.copy( source );

		this._direction.copy(source._direction)
		//this.shadow = source.shadow.clone();

		return this;

	}

}
