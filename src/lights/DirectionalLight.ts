import { Light } from './Light';
import { BindBuffer } from '../core/binds/BindBuffer';
import *  as TMPValues from '../utils/TMPValues';
import { Color } from '../math/Color';
import { Object3D } from '../core/Object3D';


class DirectionalLight extends Light {

	public get type(){
		return "DirectionalLight";
    }

	public static Is(object:Object3D){
		return object instanceof DirectionalLight;
	}

	private _target = new Object3D();

	private _uniform: BindBuffer;

	constructor( color:Color, intensity = 1 ) {

		super( color, intensity );

		this.position.copy( Object3D.DEFAULT_UP );
		this.updateMatrix();

		//this.shadow = new DirectionalLightShadow();

		const arrayBuffer = new Float32Array(6);
		arrayBuffer.set(this.color.toArray());

		const normal = TMPValues.Vector0.subVectors(this._target.position,this.position);
		arrayBuffer.set(normal.toArray(),3);

		this._uniform = new BindBuffer("color",arrayBuffer);
		
	}

	public get uniform(){
		return this._uniform;
	}

	public set target(v:Object3D){
		this._target = v;
	}

	public get target(){
		return this._target;
	}

	dispose() {

		//this.shadow.dispose();

	}

	copy( source:DirectionalLight ) {

		super.copy( source );

		this._target = source._target.clone();
		//this.shadow = source.shadow.clone();

		return this;

	}

}

export { DirectionalLight };
