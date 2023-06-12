import { Vector4 } from "./../math/Vector4";
import { Texture } from "./../textures/Texture";
import { DepthTexture } from "./../textures/DepthTexture";
import { GPUAddressMode, GPUFilterMode, GPUMipmapFilterMode, GPUTextureFormat } from "../Constants";
import { RenderPass } from "./RenderPass";

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
    samples?: number;
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

    wrapU: GPUAddressMode = GPUAddressMode.MirrorRepeat;
    wrapV: GPUAddressMode = GPUAddressMode.MirrorRepeat;
    wrapW: GPUAddressMode = GPUAddressMode.MirrorRepeat;
    magFilter: GPUFilterMode = GPUFilterMode.Linear;
    minFilter: GPUFilterMode = GPUFilterMode.Linear;
    mipmapFilter: GPUMipmapFilterMode = GPUMipmapFilterMode.Linear;
    anisotropy = Texture.DEFAULT_ANISOTROPY;

    offset: any;
    repeat: any;
    type: any;
    mipmapSize: any;

    constructor(width = 1, height = 1, options: RenderTargetOptions = {}) {
        super();
        this.width = width;
        this.height = height;
        this.depth = 1;

        this.scissor = new Vector4(0, 0, width, height);
        this.scissorTest = false;

        this.viewport = new Vector4(0, 0, width, height);

        const image = document.createElement("img") as HTMLImageElement;
        image.width = width;
        image.height = height;

        this.texture = new Texture(
            image,
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

        this.texture.flipY = false;
        this.texture.mipmapSize = options.mipmapSize !== undefined ? options.mipmapSize : 1;
        this.texture.internalFormat = options.internalFormat !== undefined ? options.internalFormat : null;
        this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : GPUFilterMode.Linear;

        this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
        this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : false;

        this.depthTexture = options.depthTexture !== undefined ? options.depthTexture : null;

        this._sampleCount = options.samples !== undefined ? options.samples : 1;

        super._setupColorBuffer({ width, height }, window.devicePixelRatio, this._sampleCount, this.texture.format);
        super._setupDepthBuffer({ width, height }, window.devicePixelRatio, this._sampleCount);
    }

    setSize(width: number, height: number, depth = 1) {
        if (this.width !== width || this.height !== height || this.depth !== depth) {
            this.width = width;
            this.height = height;
            this.depth = depth;

            this.texture.image.width = width;
            this.texture.image.height = height;
            this.texture.image.depth = depth;
        }

        this.viewport.set(0, 0, width, height);
        this.scissor.set(0, 0, width, height);

        super._setupColorBuffer({ width, height }, window.devicePixelRatio, this._sampleCount, this.texture.format);
        super._setupDepthBuffer({ width, height }, window.devicePixelRatio, this._sampleCount);
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

        const view = this._sampleCount > 1 ? this._colorAttachmentView : this.texture.bind.gpuTexture.createView();
        const resolveTarget = this._sampleCount > 1 ? this.texture.bind.gpuTexture.createView() : undefined;
        (descriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].view = view;
        (descriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].resolveTarget = resolveTarget;
        descriptor.depthStencilAttachment.view = this._depthBuffer.createView();

        return descriptor;
    }
}
