import { Light } from './Light';
import { Color } from '../math/Color';
import { Object3D } from '../core/Object3D';
import { Vector3 } from '../spectre';
import { DirectionalLightShadow } from './DirectionalLightShadow';
import * as TempValues from "../utils/TempValues"

export class DirectionalLight extends Light {

	public get type(){
		return "DirectionalLight";
    }

	public static Is(object:Object3D){
		return object instanceof DirectionalLight;
	}

	private _target = new Object3D();
	private _shadow = new DirectionalLightShadow();
	private _direction = new Vector3();
	public needsUpdate = true;

	constructor( color:Color, intensity = 1 ) {

		super( color, intensity );

		this.matrixAutoUpdate = true;

		this.position.copy( Object3D.DEFAULT_UP );
		this.updateMatrix();

		this.update();
	}

	public update(){
		if(this.needsUpdate){
			this.updateMatrixWorld();
			TempValues.Vector0.setFromMatrixPosition(this._target.matrixWorld);
			TempValues.Vector1.setFromMatrixPosition(this.matrixWorld);
			this._direction.subVectors(TempValues.Vector1,TempValues.Vector0);
		}
		this.needsUpdate = false;
	}

	public get direction(){
		return this._direction;
	}

	public get target(){
		return this._target;
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
