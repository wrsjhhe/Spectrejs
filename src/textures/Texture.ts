import * as MathUtils from "../math/MathUtils";
import { Vector2 } from "../math/Vector2";
import { Matrix3 } from "../math/Matrix3";
import { Source } from "./Source";
import { GPUAddressMode, GPUFilterMode, GPUTextureFormat, GPUMipmapFilterMode } from "../Constants";
import { BindTexture } from "../core/binds/BindTexture";
import { BindSampler } from "../core/binds/BindSampler";

export class Texture {
    static DEFAULT_ANISOTROPY = 1;

    public uuid = MathUtils.generateUUID();

    public name = "";

    public source: Source;
    public mipmapSize: number;

    public channel = 0;

    public wrapU: GPUAddressMode;
    public wrapV: GPUAddressMode;
    public wrapW: GPUAddressMode;

    public magFilter: GPUFilterMode;
    public minFilter: GPUFilterMode;

    public mipmapFilter: GPUMipmapFilterMode;

    public anisotropy: number;

    public format: GPUTextureFormat;

    public offset = new Vector2(0, 0);
    public repeat = new Vector2(1, 1);
    public center = new Vector2(0, 0);
    public rotation = 0;

    public matrixAutoUpdate = true;
    public matrix = new Matrix3();

    public premultiplyAlpha = false;
    public flipY = true;
    public unpackAlignment = 4; // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

    public version = 0;

    public isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
    public needsPMREMUpdate = false; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

    public internalFormat: any = null;

    private _bind: BindTexture;
    private _sampler: BindSampler;

    constructor(
        image: HTMLImageElement,
        wrapU: GPUAddressMode = GPUAddressMode.MirrorRepeat,
        wrapV: GPUAddressMode = GPUAddressMode.MirrorRepeat,
        wrapW: GPUAddressMode = GPUAddressMode.MirrorRepeat,
        magFilter: GPUFilterMode = GPUFilterMode.Linear,
        minFilter: GPUFilterMode = GPUFilterMode.Linear,
        mipmapFilter: GPUMipmapFilterMode = GPUMipmapFilterMode.Linear,
        format: GPUTextureFormat = GPUTextureFormat.RGBA8Unorm,
        anisotropy = Texture.DEFAULT_ANISOTROPY
    ) {
        this.uuid = MathUtils.generateUUID();

        this.name = "";

        this.source = new Source(image);
        this.mipmapSize = 1;

        this.channel = 0;

        this.wrapU = wrapU;
        this.wrapV = wrapV;
        this.wrapW = wrapW;

        this.magFilter = magFilter;
        this.minFilter = minFilter;
        this.mipmapFilter = mipmapFilter;

        this.anisotropy = anisotropy;

        this.format = format;
    }

    get image() {
        return this.source.data;
    }

    set image(value: any) {
        this.source.data = value;
    }

    updateMatrix() {
        this.matrix.setUvTransform(
            this.offset.x,
            this.offset.y,
            this.repeat.x,
            this.repeat.y,
            this.rotation,
            this.center.x,
            this.center.y
        );
    }

    clone() {
        return new Texture(this.image).copy(this);
    }

    copy(source: Texture) {
        this.name = source.name;

        this.source = source.source;
        this.mipmapSize = source.mipmapSize;

        this.channel = source.channel;

        this.wrapU = source.wrapU;
        this.wrapV = source.wrapV;

        this.magFilter = source.magFilter;
        this.minFilter = source.minFilter;

        this.anisotropy = source.anisotropy;

        this.format = source.format;

        this.offset.copy(source.offset);
        this.repeat.copy(source.repeat);
        this.center.copy(source.center);
        this.rotation = source.rotation;

        this.matrixAutoUpdate = source.matrixAutoUpdate;
        this.matrix.copy(source.matrix);

        this.premultiplyAlpha = source.premultiplyAlpha;
        this.flipY = source.flipY;
        this.unpackAlignment = source.unpackAlignment;

        this.needsUpdate = true;

        return this;
    }

    set needsUpdate(value: boolean) {
        if (value === true) {
            if (this._bind) this._bind.update();

            this.version++;
            this.source.needsUpdate = true;
        }
    }

    get bind() {
        if (!this._bind) {
            this._bind = new BindTexture(this, this.mipmapSize, !this.isRenderTargetTexture);
        }
        return this._bind;
    }

    get sampler() {
        if (!this._sampler) this._sampler = new BindSampler(this);
        return this._sampler;
    }
}

const _nullCanvas = document.createElement("canvas") as HTMLCanvasElement;
_nullCanvas.width = 1;
_nullCanvas.height = 1;
const _ctx = _nullCanvas.getContext("2d");
_ctx.fillStyle = "#ffffff";
_ctx.fillRect(0, 0, _nullCanvas.width, _nullCanvas.height);

const _nullImage = document.createElement("img") as HTMLImageElement;
_nullImage.width = 1;
_nullImage.height = 1;
_nullImage.src = _nullCanvas.toDataURL();
export const NullTexture = new Texture(_nullImage);
