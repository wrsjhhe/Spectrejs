import { Light } from './Light';
import { DirectionalLightShadow } from './DirectionalLightShadow';
import { Object3D } from '../core/Object3D.js';
import { Color } from '../spectre';

class DirectionalLight extends Light {

	public get type(){
		return "DirectionalLight";
    }

	public static Is(object:Object3D){
		return object instanceof DirectionalLight;
	}

	private _target = new Object3D();

	constructor( color:Color, intensity = 1 ) {

		super( color, intensity );

		this.position.copy( Object3D.DEFAULT_UP );
		this.updateMatrix();

		//this.shadow = new DirectionalLightShadow();

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
