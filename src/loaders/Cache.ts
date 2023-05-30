export class Cache {

	public static enabled = false;

	static files:any = {};

	public static add ( key:string, file:any ) {

		if ( this.enabled === false ) return;

		// console.log( 'THREE.Cache', 'Adding key:', key );

		this.files[ key ] = file;

	}

	public static get ( key:string ) {

		if ( this.enabled === false ) return;

		// console.log( 'THREE.Cache', 'Checking key:', key );

		return this.files[ key ];

	}

	public static remove ( key:string ) {

		delete this.files[ key ];

	}

	public static clear () {

		this.files = {};

	}

}