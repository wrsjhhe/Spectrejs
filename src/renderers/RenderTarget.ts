import { Vector4 } from "../math/Vector4";
import { Texture } from "../textures/Texture";
import { DepthTexture } from "../textures/DepthTexture";
import { GPUAddressMode, GPUFilterMode, GPUMipmapFilterMode, GPUTextureFormat } from "../Constants";
import { RenderPass } from "./RenderPass";
import { Context } from "../core/Context";
import { FrameBufferTexture } from "../textures/FrameBufferTexture";

export interface RenderTargetOptions {
    wrapU?: GPUAddressMode | undefined;
    wrapV?: GPUAddressMode | undefined;
    wrapW?: GPUAddressMode | undefined;
    magFilter?: GPUFilterMode | undefined;
    minFilter?: GPUFilterMode | undefined;
    mipmapFilter?: GPUMipmapFilterMode | undefined;
    format?: GPUTextureFormat | undefined; // RGBAFormat;
    anisotropy?: number | undefined; // 1;
    depthBuffer?: boolean | undefined; // true;
    stencilBuffer?: boolean | undefined; // false;
    mipmapSize?: number | undefined; // true;
    depthTexture?: DepthTexture | undefined;
    sampleCount?: number;
    internalFormat?: any;
}

export class RenderTarget extends RenderPass {
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

    wrapU: GPUAddressMode = GPUAddressMode.ClampToEdge;
    wrapV: GPUAddressMode = GPUAddressMode.ClampToEdge;
    wrapW: GPUAddressMode = GPUAddressMode.ClampToEdge;
    magFilter: GPUFilterMode = GPUFilterMode.Linear;
    minFilter: GPUFilterMode = GPUFilterMode.Linear;
    mipmapFilter: GPUMipmapFilterMode = GPUMipmapFilterMode.Linear;
    anisotropy = 1;

    offset: any;
    repeat: any;
    type: any;
    mipmapSize: any;

    constructor(width = 1, height = 1, options: RenderTargetOptions = {}) {
        super();

        this._flipY = true;

        this.width = width;
        this.height = height;
        this.depth = 1;

        this.scissor = new Vector4(0, 0, width, height);
        this.scissorTest = false;

        this.viewport = new Vector4(0, 0, width, height);

        this.texture = new FrameBufferTexture(
            { width: width * Context.pixelRatio, height: height * Context.pixelRatio },
            options.wrapU,
            options.wrapV,
            options.wrapW,
            options.magFilter,
            options.minFilter,
            options.mipmapFilter,
            options.format,
            options.anisotropy
        );
        this.texture.isRenderTargetTexture = true;

        this.texture.flipY = true;
        this.texture.mipmapSize = options.mipmapSize !== undefined ? options.mipmapSize : 1;
        this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : GPUFilterMode.Linear;

        this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
        this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : false;

        this.depthTexture = options.depthTexture !== undefined ? options.depthTexture : null;

        this._sampleCount = options.sampleCount !== undefined ? options.sampleCount : 1;

        super._setupColorBuffer({ width, height }, this._sampleCount, this.texture.format);
        super._setupDepthBuffer({ width, height }, this._sampleCount);
    }

    public updated() {
        this.texture.needsUpdate = true;
    }

    setSize(width: number, height: number, depth = 1) {
        if (this.width !== width || this.height !== height || this.depth !== depth) {
            this.width = width * Context.pixelRatio;
            this.height = height * Context.pixelRatio;
            this.depth = depth;
        }

        this.viewport.set(0, 0, width, height);
        this.scissor.set(0, 0, width, height);

        super._setupColorBuffer({ width, height }, this._sampleCount, this.texture.format);
        super._setupDepthBuffer({ width, height }, this._sampleCount);
    }

    public getDescriptor() {
        const descriptor = {
            colorAttachments: [
                {
                    view: null,
                    resolveTarget: undefined,
                    clearValue: { r: 0, g: 0, b: 0, a: 0.0 },
                    loadOp: "clear",
                    storeOp: "store",
                },
            ] as Iterable<GPURenderPassColorAttachment>,
            depthStencilAttachment: {
                depthClearValue: 1.0,
                depthLoadOp: "clear",
                depthStoreOp: "store",
            } as GPURenderPassDepthStencilAttachment,
        };

        const view = this._sampleCount > 1 ? this._colorAttachmentView : this.texture.targetTexture.gpuTexutureView;
        const resolveTarget = this._sampleCount > 1 ? this.texture.targetTexture.gpuTexutureView : undefined;
        (descriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].view = view;
        (descriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].resolveTarget = resolveTarget;
        descriptor.depthStencilAttachment.view = this._depthBuffer.createView();

        return descriptor;
    }
}
