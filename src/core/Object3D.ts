import { Quaternion } from '../math/Quaternion';
import { Vector3 } from '../math/Vector3';
import { Matrix4 } from '../math/Matrix4';
import { Euler } from '../math/Euler';
import * as MathUtils from '../math/MathUtils';
import { Color } from '../math/Color';


//import { Scene } from './Scene';

let _object3DId = 0;

const _v1 = /*@__PURE__*/ new Vector3();
const _q1 = /*@__PURE__*/ new Quaternion();
const _m1 = /*@__PURE__*/ new Matrix4();
const _target = /*@__PURE__*/ new Vector3();

const _position = /*@__PURE__*/ new Vector3();
const _scale = /*@__PURE__*/ new Vector3();
const _quaternion = /*@__PURE__*/ new Quaternion();

const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

export class Object3D {

    static DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );
    static DEFAULT_MATRIX_AUTO_UPDATE = false;
    static DEFAULT_MATRIX_WORLD_AUTO_UPDATE = false;

    public get type(){
		return "Object3D";
    }

	public static Is(object:Object3D){
		return object instanceof Object3D;
	}

    public readonly uuid = MathUtils.generateUUID();
    public name : string;
    public up : Vector3;

    private _parent : Object3D;
    private _children : Array<Object3D>;

	private _position = new Vector3();
	private _rotation = new Euler();
	private _scale = new Vector3(1,1,1);
	private _quaternion = new Quaternion();
	
	public matrix = new Matrix4();
	public matrixWorld = new Matrix4();

	public matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
	public matrixWorldNeedsUpdate = false;

	public matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer

	public visible = true;

	public castShadow = false;
	public receiveShadow = false;

	public frustumCulled = true;
	public renderOrder = 0;

	public userData:any = {};

	public isInstancedMesh = false;
	public count = 0;
	public instanceMatrix : Matrix4;
	public instanceColor : Color ;

	constructor() {

		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

		this.name = '';

		this._parent = null;
		this._children = [];

		this.up = Object3D.DEFAULT_UP.clone();

		const onRotationChange = ( e:Euler) => {

			this.quaternion.setFromEuler( e,false );

		}

		const onQuaternionChange = (q:Quaternion) => {

			this.rotation.setFromQuaternion( q, undefined,false );

		}
		this._rotation.onChange( onRotationChange );
		this._quaternion.onChange( onQuaternionChange );

	}

    onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	applyMatrix4( matrix:Matrix4 ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		this.matrix.premultiply( matrix );

		this.matrix.decompose( this._position, this._quaternion, this._scale );

	}

	applyQuaternion( q:Quaternion ) {

		this._quaternion.premultiply( q );

		return this;

	}

	setRotationFromAxisAngle( axis:Vector3, angle:number ) {

		// assumes axis is normalized

		this._quaternion.setFromAxisAngle( axis, angle );

	}

	setRotationFromEuler( euler:Euler ) {

		this._quaternion.setFromEuler( euler );

	}

	setRotationFromMatrix( m:Matrix4 ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this._quaternion.setFromRotationMatrix( m );

	}

	setRotationFromQuaternion( q:Quaternion ) {

		// assumes q is normalized

		this._quaternion.copy( q );

	}

	rotateOnAxis( axis:Vector3, angle:number ) {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		_q1.setFromAxisAngle( axis, angle );

		this._quaternion.multiply( _q1 );

		return this;

	}

	rotateOnWorldAxis( axis:Vector3, angle:number ) {

		// rotate object on axis in world space
		// axis is assumed to be normalized
		// method assumes no rotated parent

		_q1.setFromAxisAngle( axis, angle );

		this._quaternion.premultiply( _q1 );

		return this;

	}

	rotateX( angle:number ) {

		return this.rotateOnAxis( _xAxis, angle );

	}

	rotateY( angle:number) {

		return this.rotateOnAxis( _yAxis, angle );

	}

	rotateZ( angle:number ) {

		return this.rotateOnAxis( _zAxis, angle );

	}

	translateOnAxis( axis:Vector3, distance:number ) {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		_v1.copy( axis ).applyQuaternion( this._quaternion );

		this._position.add( _v1.multiplyScalar( distance ) );

		return this;

	}

	translateX( distance:number ) {

		return this.translateOnAxis( _xAxis, distance );

	}

	translateY( distance:number ) {

		return this.translateOnAxis( _yAxis, distance );

	}

	translateZ( distance:number ) {

		return this.translateOnAxis( _zAxis, distance );

	}

	localToWorld( vector:Vector3 ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( this.matrixWorld );

	}

	worldToLocal( vector:Vector3 ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( _m1.copy( this.matrixWorld ).invert() );

	}

	lookAt( target:Vector3 ) {

		// This method does not support objects having non-uniformly-scaled parent(s)

		_target.copy( target );

		const parent = this.parent;

		this.updateWorldMatrix( true, false );

		_position.setFromMatrixPosition( this.matrixWorld );

		if ( (this as any).isCamera || (this as any).isLight) {

			_m1.lookAt( _position, _target, this.up );

		} else {

			_m1.lookAt( _target, _position, this.up );

		}

		this._quaternion.setFromRotationMatrix( _m1 );

		if ( parent ) {

			_m1.extractRotation( parent.matrixWorld );
			_q1.setFromRotationMatrix( _m1 );
			this._quaternion.premultiply( _q1.invert() );

		}

	}

	add( object:Object3D ) {

		if ( object === this ) {

			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
			return this;

		}

		if ( (object as any).isScene ) {

			console.error( 'THREE.Object3D.add: scene can\'t be added.', object );
			return this;

		}

		if ( object.parent !== null ) {

			object.parent.remove( object );

		}

		object._parent = this;
		this.children.push( object );

		object.traverseAncestors((parent)=>{
			if((parent as any).isScene)
				(parent as any).handleAdded(object);
		});

		return this;

	}

	remove( object:Object3D ) {

		const index = this.children.indexOf( object );

		if ( index !== - 1 ) {

			object._parent = null;
			this.children.splice( index, 1 );

		}

		object.traverseAncestors((parent)=>{
			if((parent as any).isScene)
				(parent as any)._handleRemoved(object);
		});

		return this;

	}


	removeFromParent() {

		const parent = this.parent;

		if ( parent !== null ) {

			parent.remove( this );

		}

		return this;

	}

	clear() {

		for ( let i = 0; i < this.children.length; i ++ ) {

			const object = this.children[ i ];

			object._parent = null;

		}

		this.children.length = 0;

		return this;


	}

	attach( object:Object3D ) {

		// adds object as a child of this, while maintaining the object's world transform

		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

		this.updateWorldMatrix( true, false );

		_m1.copy( this.matrixWorld ).invert();

		if ( object.parent !== null ) {

			object.parent.updateWorldMatrix( true, false );

			_m1.multiply( object.parent.matrixWorld );

		}

		object.applyMatrix4( _m1 );

		this.add( object );

		object.updateWorldMatrix( false, true );

		return this;

	}

	getWorldPosition( target:Vector3 ) {

		this.updateWorldMatrix( true, false );

		return target.setFromMatrixPosition( this.matrixWorld );

	}

	getWorldQuaternion( target:Quaternion ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position, target, _scale );

		return target;

	}

	getWorldScale( target:Vector3 ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position, _quaternion, target );

		return target;

	}

	getWorldDirection( target:Vector3 ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

	}

	raycast( /* raycaster, intersects */ ) {}

	traverse( callback:(object:Object3D)=>void ) {

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	}

	traverseVisible( callback:(object:Object3D)=>void ) {

		if ( this.visible === false ) return;

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	}

	traverseAncestors( callback:(object:Object3D)=>void ) {

		const parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	}

	updateMatrix() {

		this.matrix.compose( this._position, this._quaternion, this._scale );

		this.matrixWorldNeedsUpdate = true;

	}

	updateMatrixWorld() {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

			this.matrixWorldNeedsUpdate = false;

		}

		// update children

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			const child = children[ i ];

			if ( child.matrixWorldAutoUpdate === true ) {

				child.updateMatrixWorld();

			}

		}

	}

	updateWorldMatrix( updateParents = false, updateChildren = false ) {

		const parent = this.parent;

		if ( updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true ) {

			parent.updateWorldMatrix( true, false );

		}

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.parent === null ) {

			this.matrixWorld.copy( this.matrix );

		} else {

			this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

		}

		// update children

		if ( updateChildren === true ) {

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				if ( child.matrixWorldAutoUpdate === true ) {

					child.updateWorldMatrix( false, true );

				}

			}

		}

	}

	clone( recursive = false ) {

		return new Object3D().copy( this, recursive );

	}

	copy( source:Object3D, recursive = true ) {

		this.name = source.name;

		this.up.copy( source.up );

		this._position.copy( source._position );
		this._rotation.order = source._rotation.order;
		this._quaternion.copy( source._quaternion );
		this._scale.copy( source._scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;

		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( let i = 0; i < source.children.length; i ++ ) {

				const child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}
    public get parent(){
        return this._parent;
    }

    public get children(){
        return this._children;
    }
	
	public set position(v:Vector3){
		this._position.copy(v);
	}

	public get position(){
		return this._position;
	}

	public set scale(v:Vector3){
		this._scale.copy(v);
	}

	public get scale(){
		return this._scale;
	}

	public get quaternion(){
		return this._quaternion;
	}

	public set quaternion(v:Quaternion){
		this._quaternion.copy(v);
		this._rotation.setFromQuaternion( v, undefined );
	}

	public get rotation(){
		return this._rotation;
	}

	public set rotation(v:Euler){
		this._rotation.copy(v);
		this._quaternion.setFromEuler( v );
	}

}