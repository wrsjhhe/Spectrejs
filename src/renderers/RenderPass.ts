import { GPUTextureFormat } from "../Constants";
import { Context } from "../core/Context";

export interface RendererSize {
    width: number;
    height: number;
}

export abstract class RenderPass {
    protected _colorBuffer: GPUTexture;
    protected _depthBuffer: GPUTexture;

    protected _colorAttachmentView: GPUTextureView;

    protected _sampleCount = 1;

    protected _presentationFormat: GPUTextureFormat = Context.textureFormat;

    protected _flipY = false;

    constructor() {}

    protected _setupColorBuffer(size: RendererSize, sampleCount: number, presentationFormat: GPUTextureFormat) {
        const device = Context.activeDevice;

        if (device) {
            if (this._colorBuffer) this._colorBuffer.destroy();

            this._colorBuffer = device.createTexture({
                size: {
                    width: Math.floor(size.width * Context.pixelRatio),
                    height: Math.floor(size.height * Context.pixelRatio),
                    depthOrArrayLayers: 1,
                },
                sampleCount: sampleCount,
                format: presentationFormat,
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
            this._colorAttachmentView = this._colorBuffer.createView();
        }
    }

    protected _setupDepthBuffer(size: RendererSize, sampleCount: number) {
        const device = Context.activeDevice;
        if (this._depthBuffer) this._depthBuffer.destroy();

        this._depthBuffer = device.createTexture({
            label: "depthBuffer",
            size: {
                width: Math.floor(size.width * Context.pixelRatio),
                height: Math.floor(size.height * Context.pixelRatio),
                depthOrArrayLayers: 1,
            },
            sampleCount: sampleCount,
            format: GPUTextureFormat.Depth24Plus,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        });
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
