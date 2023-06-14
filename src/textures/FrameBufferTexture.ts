import { GPUAddressMode, GPUFilterMode, GPUMipmapFilterMode, GPUTextureFormat } from "../Constants";
import { BindTexture } from "../core/binds/BindTexture";
import { Size } from "../core/Defines";
import { Texture } from "./Texture";
import { TextureMipmapGenerator } from "./TextureMipmapGenerator";

export class FrameBufferTexture extends Texture {
    private _targetTexture: BindTexture;

    constructor(
        size: Size,
        wrapU: GPUAddressMode = GPUAddressMode.ClampToEdge,
        wrapV: GPUAddressMode = GPUAddressMode.ClampToEdge,
        wrapW: GPUAddressMode = GPUAddressMode.ClampToEdge,
        magFilter: GPUFilterMode = GPUFilterMode.Linear,
        minFilter: GPUFilterMode = GPUFilterMode.Linear,
        mipmapFilter: GPUMipmapFilterMode = GPUMipmapFilterMode.Linear,
        format: GPUTextureFormat = GPUTextureFormat.BGRA8Unorm,
        anisotropy = 1
    ) {
        super(size, wrapU, wrapV, wrapW, magFilter, minFilter, mipmapFilter, format, anisotropy);
    }

    public override set needsUpdate(value: boolean) {
        if (value === true) {
            if (this._bind && this._targetTexture) {
                this._bind.copyTexture(this._targetTexture.gpuTexture);
            }
            if (this.mipmapSize > 1) TextureMipmapGenerator.webGPUGenerateMipmap(this);
        }
    }

    public get targetTexture() {
        if (!this._targetTexture) {
            this._targetTexture = new BindTexture(
                this,
                GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
                1
            );
        }
        return this._targetTexture;
    }
}
