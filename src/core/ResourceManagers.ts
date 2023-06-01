export class Cache {

	public static enabled = false;

	static caches:any = {};

	public static add ( key:string, obj:any ) {

		if ( this.enabled === false ) return;

		// console.log( 'THREE.Cache', 'Adding key:', key );

		this.caches[ key ] = obj;

	}

	public static get ( key:string ) {

		if ( this.enabled === false ) return;

		// console.log( 'THREE.Cache', 'Checking key:', key );

		return this.caches[ key ];

	}

	public static remove ( key:string ) {

		delete this.caches[ key ];

	}

	public static clear () {

		this.caches = {};

	}

}

export class GPUGarbageDestroyer{
	
	public static destroy(garbage:any,destroyFunc:(g:any)=>void){
		setTimeout(() => {
			destroyFunc(garbage);
		}, 5000);
	}
}