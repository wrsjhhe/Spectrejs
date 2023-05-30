import { ImageLoader } from './ImageLoader';
import { Texture } from '../textures/Texture';
import { Loader } from './Loader';
import { LoadingManager } from './LoadingManager';

class TextureLoader extends Loader {

	public image:HTMLImageElement;

	constructor( manager : LoadingManager = undefined ) {

		super( manager );

	}

	load( url:string, onLoad:Function, onProgress:Function, onError:Function ) {

		const texture = new Texture();

		const loader = new ImageLoader( this.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.setPath( this.path );

		loader.load( url, function ( image:HTMLImageElement ) {

			texture.image = image;
			texture.needsUpdate = true;

			if ( onLoad !== undefined ) {

				onLoad( texture );

			}

		}, onProgress, onError );

		return texture;

	}

}


export { TextureLoader };
