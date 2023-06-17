import { GPUAddressMode, GPUFilterMode, GPUMipmapFilterMode, GPUTextureFormat } from "../Constants";
import { BindTexture } from "../core/binds/BindTexture";
import { Context } from "../core/Context";
import { Texture } from "./Texture";
import { TextureMipmapGenerator } from "./TextureMipmapGenerator";

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

export class ImageTexture extends Texture {
    private _image: HTMLImageElement;

    constructor(
        image: HTMLImageElement = _nullImage,
        wrapU: GPUAddressMode = GPUAddressMode.ClampToEdge,
        wrapV: GPUAddressMode = GPUAddressMode.ClampToEdge,
        wrapW: GPUAddressMode = GPUAddressMode.ClampToEdge,
        magFilter: GPUFilterMode = GPUFilterMode.Linear,
        minFilter: GPUFilterMode = GPUFilterMode.Linear,
        mipmapFilter: GPUMipmapFilterMode = GPUMipmapFilterMode.Linear,
        format: GPUTextureFormat = GPUTextureFormat.BGRA8Unorm,
        anisotropy = 1
    ) {
        const size = {
            width: image.width,
            height: image.height,
        };
        super(size, wrapU, wrapV, wrapW, magFilter, minFilter, mipmapFilter, format, anisotropy);
        this._image = image;
    }

    get image() {
        return this._image;
    }

    set image(value: HTMLImageElement) {
        this._image = value;
    }

    public get bind() {
        if (!this._bind) {
            const usage =
                GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT;

            this._bind = new BindTexture(this, usage, this.mipmapSize);

            createImageBitmap(this._image).then((imageBitmap: ImageBitmap) => {
                Context.activeDevice.queue.copyExternalImageToTexture(
                    { source: imageBitmap },
                    { texture: this._bind.gpuTexture },
                    [this.width, this.height]
                );
                if (this.mipmapSize > 1) {
                    TextureMipmapGenerator.webGPUGenerateMipmap(this);
                }
            });
        }

        return this._bind;
    }

    public clone() {
        return new ImageTexture().copy(this);
    }

    copy(source: ImageTexture) {
        this.name = "";

        this.mipmapSize = 1;

        this.wrapU = source.wrapU;
        this.wrapV = source.wrapV;
        this.wrapW = source.wrapW;

        this.magFilter = source.magFilter;
        this.minFilter = source.minFilter;
        this.mipmapFilter = source.mipmapFilter;

        this.anisotropy = source.anisotropy;

        this.format = source.format;
        this.image = source.image;

        this.userData = JSON.parse(JSON.stringify(source.userData));
        return this;
    }
    // attributes
}
