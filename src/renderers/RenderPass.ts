import { GPUTextureFormat } from "../Constants";
import { Context } from "../core/Context";
import { Size } from "../core/Defines";

export abstract class RenderPass {
    protected _size: Size;

    protected _colorBuffer: GPUTexture;
    protected _depthBuffer: GPUTexture;

    protected _colorAttachmentView: GPUTextureView;

    protected _sampleCount = 1;

    protected _presentationFormat: GPUTextureFormat = Context.textureFormat;

    protected _flipY = false;

    constructor(size: Size = { width: 1, height: 1 }) {
        this._size = size;
    }

    public setSize(width: number, height: number) {
        if (this._size.width !== width || this._size.height !== height) {
            this._size.width = width;
            this._size.height = height;

            return true;
        }

        return false;
    }

    protected _setupColorBuffer(presentationFormat: GPUTextureFormat) {
        const device = Context.activeDevice;

        if (device) {
            if (this._colorBuffer) this._colorBuffer.destroy();

            this._colorBuffer = device.createTexture({
                size: {
                    width: Math.floor(this._size.width * Context.pixelRatio),
                    height: Math.floor(this._size.height * Context.pixelRatio),
                    depthOrArrayLayers: 1,
                },
                sampleCount: this._sampleCount,
                format: presentationFormat,
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
            this._colorAttachmentView = this._colorBuffer.createView();
        }
    }

    protected _setupDepthBuffer() {
        const device = Context.activeDevice;
        if (this._depthBuffer) this._depthBuffer.destroy();

        this._depthBuffer = device.createTexture({
            label: "depthBuffer",
            size: {
                width: Math.floor(this._size.width * Context.pixelRatio),
                height: Math.floor(this._size.height * Context.pixelRatio),
                depthOrArrayLayers: 1,
            },
            sampleCount: this._sampleCount,
            format: GPUTextureFormat.Depth24Plus,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        });
    }

    public get size() {
        return this._size;
    }

    public get sampleCount() {
        return this._sampleCount;
    }

    public get presentationFormat() {
        return this._presentationFormat;
    }

    public get flipY() {
        return this._flipY;
    }
}
