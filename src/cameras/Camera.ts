import { Object3D } from '../core/Object3D';
import { Matrix4 } from '../math/Matrix4';
import { Vector3 } from '../math/Vector3';

class Camera extends Object3D {

    public get type() {
		return "Camera";
    }

	public matrixWorldInverse = new Matrix4();

	public projectionMatrix = new Matrix4();

	public projectionMatrixInverse = new Matrix4();

	constructor() {

		super();

	}

	override copy( source:Camera, recursive = false ) {

		super.copy( source, recursive );

		this.matrixWorldInverse.copy( source.matrixWorldInverse );

		this.projectionMatrix.copy( source.projectionMatrix );
		this.projectionMatrixInverse.copy( source.projectionMatrixInverse );

		return this;

	}

	getWorldDirection( target:Vector3 ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( - e[ 8 ], - e[ 9 ], - e[ 10 ] ).normalize();

	}

	updateMatrixWorld() {

		super.updateMatrixWorld();

		this.matrixWorldInverse.copy( this.matrixWorld ).invert();

	}

	updateWorldMatrix( updateParents = false, updateChildren = false ) {

		super.updateWorldMatrix( updateParents, updateChildren );

		this.matrixWorldInverse.copy( this.matrixWorld ).invert();

	}

	clone() {

		return new Camera().copy( this );

	}

}

export { Camera };
