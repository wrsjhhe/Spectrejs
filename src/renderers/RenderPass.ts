import { GPUTextureFormat } from "../Constants";
import { Context } from "../core/ResourceManagers";

export interface RendererSize {
    width: number;
    height: number;
}

export abstract class RenderPass {
    protected _colorBuffer: GPUTexture;
    protected _depthBuffer: GPUTexture;

    protected _colorAttachmentView: GPUTextureView;

    protected _setupColorBuffer(
        size: RendererSize,
        pixelRatio: number,
        sampleCount: number,
        presentationFormat: GPUTextureFormat
    ) {
        const device = Context.activeDevice;

        if (device) {
            if (this._colorBuffer) this._colorBuffer.destroy();

            this._colorBuffer = device.createTexture({
                size: {
                    width: Math.floor(size.width * pixelRatio),
                    height: Math.floor(size.height * pixelRatio),
                    depthOrArrayLayers: 1,
                },
                sampleCount: sampleCount,
                format: presentationFormat,
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
            this._colorAttachmentView = this._colorBuffer.createView();
        }
    }

    protected _setupDepthBuffer(size: RendererSize, pixelRatio: number, sampleCount: number) {
        const device = Context.activeDevice;
        if (this._depthBuffer) this._depthBuffer.destroy();

        this._depthBuffer = device.createTexture({
            label: "depthBuffer",
            size: {
                width: Math.floor(size.width * pixelRatio),
                height: Math.floor(size.height * pixelRatio),
                depthOrArrayLayers: 1,
            },
            sampleCount: sampleCount,
            format: GPUTextureFormat.Depth24Plus,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        });
    }
}
