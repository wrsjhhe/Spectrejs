import * as MathUtils from '../math/MathUtils';
import { Vector2 } from '../math/Vector2';
import { Matrix3 } from '../math/Matrix3';
import * as Constants from '../Constants';
import { Source } from './Source';

const t_nullCanvas = document.createElement("canvas") as HTMLCanvasElement;
t_nullCanvas.width = 10;
t_nullCanvas.height = 10;
const t_ctx = t_nullCanvas.getContext("2d");
t_ctx.fillStyle = "#ff0000";
t_ctx.fillRect(0, 0, t_nullCanvas.width, t_nullCanvas.height);

const t_nullImage = document.createElement("img") as HTMLImageElement;
t_nullImage.width = 1;
t_nullImage.height = 1;
t_nullImage.src = t_nullCanvas.toDataURL();
export class Texture {
    static DEFAULT_IMAGE:HTMLImageElement = t_nullImage;
    static DEFAULT_MAPPING = Constants.UVMapping;
    static DEFAULT_ANISOTROPY = 1;

    public uuid = MathUtils.generateUUID();

    public name = '';

    public source:Source;
    public mipmaps:any = [];

    public mapping:number;
    public channel = 0;

    public wrapS:number;
    public wrapT:number;

    public magFilter:number;
    public minFilter:number;

    public anisotropy:number;

    public format:number;
    public type:number;

    public offset = new Vector2( 0, 0 );
    public repeat = new Vector2( 1, 1 );
    public center = new Vector2( 0, 0 );
    public rotation = 0;

    public matrixAutoUpdate = true;
    public matrix = new Matrix3();

    public generateMipmaps = true;
    public premultiplyAlpha = false;
    public flipY = true;
    public unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

    public colorSpace: string;
    
    public version = 0;

	public isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
	public needsPMREMUpdate = false; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, 
        wrapS = Constants.ClampToEdgeWrapping, wrapT = Constants.ClampToEdgeWrapping, 
        magFilter = Constants.LinearFilter, minFilter = Constants.LinearMipmapLinearFilter, 
        format = Constants.RGBAFormat, type = Constants.UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, 
        colorSpace = Constants.NoColorSpace ) {

		this.uuid = MathUtils.generateUUID();

		this.name = '';

		this.source = new Source( image );
		this.mipmaps = [];

		this.mapping = mapping;
		this.channel = 0;

		this.wrapS = wrapS;
		this.wrapT = wrapT;

		this.magFilter = magFilter;
		this.minFilter = minFilter;

		this.anisotropy = anisotropy;

		this.format = format;
		this.type = type;

		this.colorSpace = colorSpace;
	}

	get image() {

		return this.source.data;

	}

	set image( value:any ) {

		this.source.data = value;

	}

	updateMatrix() {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	}

	clone() {

		return new Texture().copy( this );

	}

	copy( source:Texture ) {

		this.name = source.name;

		this.source = source.source;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;
		this.channel = source.channel;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.colorSpace = source.colorSpace;

		this.needsUpdate = true;

		return this;

	}

	transformUv( uv:Vector2 ) {

		if ( this.mapping !== Constants.UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case Constants.RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case Constants.ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case Constants.MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case Constants.RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case Constants.ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case Constants.MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

	set needsUpdate( value:boolean ) {

		if ( value === true ) {

			this.version ++;
			this.source.needsUpdate = true;

		}

	}

}

export const NullTexture = new Texture();