import { Object3D } from '../core/Object3D';
import { BindBuffer } from '../core/binds/BindBuffer';
import { Matrix4 } from '../math/Matrix4';
import { Vector3 } from '../math/Vector3';
import { IdentifyMatrix4 } from '../utils/TempValues';

const u_projection = "projectionMatrix";
const u_view = "matrixWorldInverse";
export class Camera extends Object3D {

    public get type() {
		return "Camera";
    }

	public static Is(object:Object3D){
		return object instanceof Camera;
	}

	public get isCamera(){
		return true;
	}

	public matrixWorldInverse = new Matrix4();

	public projectionMatrix = new Matrix4();

	public projectionMatrixInverse = new Matrix4();

	private _uniforms: Map<string, BindBuffer> = new Map();

	constructor() {

		super();
		this.matrixAutoUpdate = true;
		this.matrixWorldNeedsUpdate = true;
		this._initInitialUniform();
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

	public update(){
		this.updateWorldMatrix();
		this._updateUniformValue();
	}

	private _updateUniformValue(){
		let uniform = this._uniforms.get(u_projection);
		uniform.data = this.projectionMatrix.toArray();
		uniform.update();
		uniform = this._uniforms.get(u_view);
		uniform.data = this.matrixWorldInverse.toArray();
		uniform.update();
	}

	private _initInitialUniform() {
		const matrixBuffer = IdentifyMatrix4.toArray();
        const projectionUniform = new BindBuffer( matrixBuffer);
        this._uniforms.set(u_projection, projectionUniform);

        const viewUniform = new BindBuffer(matrixBuffer);
        this._uniforms.set(u_view, viewUniform);
    }

	public get uniforms(){
		return this._uniforms;
	}

}
