import { Vector4 } from './../math/Vector4';
import { Texture } from './../textures/Texture';
import { DepthTexture } from './../textures/DepthTexture';
import {
    Wrapping,
    TextureDataType,
    MinificationTextureFilter,
    MagnificationTextureFilter,
    ColorSpace,
    LinearFilter,
    Mapping,
} from '../Constants';

export interface RenderTargetOptions {
    mapping?: Mapping | undefined;
    wrapS?: Wrapping | undefined;
    wrapT?: Wrapping | undefined;
    magFilter?: MagnificationTextureFilter | undefined;
    minFilter?: MinificationTextureFilter | undefined;
    format?: number | undefined; // RGBAFormat;
    type?: TextureDataType | undefined; // UnsignedByteType;
    anisotropy?: number | undefined; // 1;
    depthBuffer?: boolean | undefined; // true;
    stencilBuffer?: boolean | undefined; // false;
    generateMipmaps?: boolean | undefined; // true;
    depthTexture?: DepthTexture | undefined;
    colorSpace?: ColorSpace | undefined;
    samples?: number;
    internalFormat?:any;
}

export class RenderTarget {

    width: number;
    height: number;
    depth: number;

    scissor: Vector4;
    scissorTest: boolean;
    viewport: Vector4;
    texture: Texture;
    depthBuffer: boolean;
    stencilBuffer: boolean;
    depthTexture: DepthTexture;
    samples: number;
    wrapS: any;
    wrapT: any;
    magFilter: any;
    minFilter: any;
    anisotropy: any;
    offset: any;
    repeat: any;
    format: any;
    type: any;
    generateMipmaps: any;

    constructor(width = 1, height = 1, options?: RenderTargetOptions){
		this.width = width;
		this.height = height;
		this.depth = 1;

		this.scissor = new Vector4( 0, 0, width, height );
		this.scissorTest = false;

		this.viewport = new Vector4( 0, 0, width, height );

		const image = document.createElement("img") as HTMLImageElement;
        image.width = width;
        image.height = height;

		this.texture = new Texture( image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace );
		this.texture.isRenderTargetTexture = true;

		this.texture.flipY = false;
		this.texture.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : false;
		this.texture.internalFormat = options.internalFormat !== undefined ? options.internalFormat : null;
		this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : LinearFilter;

		this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
		this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : false;

		this.depthTexture = options.depthTexture !== undefined ? options.depthTexture : null;

		this.samples = options.samples !== undefined ? options.samples : 0;
    }

    setSize( width:number, height:number, depth = 1 ){
		if ( this.width !== width || this.height !== height || this.depth !== depth ) {

			this.width = width;
			this.height = height;
			this.depth = depth;

			this.texture.image.width = width;
			this.texture.image.height = height;
			this.texture.image.depth = depth;
		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );
    }
}
