import * as MathUtils from "../math/MathUtils";
import { Vector2 } from "../math/Vector2";
import { Matrix3 } from "../math/Matrix3";
import { GPUAddressMode, GPUFilterMode, GPUTextureFormat, GPUMipmapFilterMode } from "../Constants";
import { BindTexture } from "../core/binds/BindTexture";
import { BindSampler } from "../core/binds/BindSampler";
import { Size } from "../core/Defines";
import { TextureMipmapGenerator } from "./TextureMipmapGenerator";

export abstract class Texture {
    public uuid = MathUtils.generateUUID();

    public name = "";

    public mipmapSize: number;

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

    public flipY = false;

    public isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not

    private _targetTexture: BindTexture;
    protected _bind: BindTexture;
    protected _sampler: BindSampler;

    public readonly width: number;
    public readonly height: number;

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
        this.uuid = MathUtils.generateUUID();

        this.name = "";

        this.width = size.width;
        this.height = size.height;

        this.mipmapSize = 1;

        this.wrapU = wrapU;
        this.wrapV = wrapV;
        this.wrapW = wrapW;

        this.magFilter = magFilter;
        this.minFilter = minFilter;
        this.mipmapFilter = mipmapFilter;

        this.anisotropy = anisotropy;

        this.format = format;
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

    set needsUpdate(value: boolean) {
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

    public get bind() {
        if (!this._bind) {
            const usage =
                GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT;

            this._bind = new BindTexture(this, usage, this.mipmapSize);
        }

        return this._bind;
    }

    public get sampler() {
        if (!this._sampler) this._sampler = new BindSampler(this);
        return this._sampler;
    }
}
