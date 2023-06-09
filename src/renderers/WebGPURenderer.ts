import { Camera } from "../cameras/Camera";
import { PerspectiveCamera } from "../cameras/PerspectiveCamera";
import { GPUIndexFormat, GPUTextureFormat } from "../Constants";
import { RenderableObject } from "../core/RenderableObject";
import { Context } from "../core/ResourceManagers";
import { Scene } from "../core/Scene";
import { Material } from "../materials/Material";
import { Color } from "../math/Color";
import { RenderPass } from "./RenderPass";
import { RenderTarget } from "./WebGPURenderTarget";

interface WebGPURendererParameters {
    canvas?: HTMLCanvasElement;
    powerPreference?: GPUPowerPreference;
    sampleCount?: number;
    antialias?: boolean;
}

interface RendererSize {
    width: number;
    height: number;
}

export class WebGPURenderer extends RenderPass {
    private _parameters: WebGPURendererParameters;
    private _canvas: HTMLCanvasElement;
    private _device: GPUDevice;
    private _presentationFormat: GPUTextureFormat = Context.textureFormat;
    private _context: GPUCanvasContext;
    private _alphaMode: GPUCanvasAlphaMode = "premultiplied";
    private _size: RendererSize;
    private _pixelRatio = window.devicePixelRatio || 1;
    private _sampleCount = 1;
    private _clearColor = new Color(1, 1, 1);
    private _sizeChanged = false;

    private _renderPassDescriptor: GPURenderPassDescriptor;

    private _currentRenderTarget: RenderTarget = null;

    constructor(parameters: WebGPURendererParameters = {}) {
        super();
        this._parameters = parameters;

        if (this._parameters.antialias === true) {
            this._sampleCount = parameters.sampleCount === undefined ? 4 : parameters.sampleCount;
        } else {
            this._sampleCount = 1;
        }

        this._init();
    }

    private _init() {
        if (!this._parameters.canvas) {
            this._canvas = document.createElement("canvas");
            this._canvas.style.width = "100%";
            this._canvas.style.height = "100%";
        } else {
            this._canvas = this._parameters.canvas;
        }

        this._device = Context.activeDevice;

        this._context = this._canvas.getContext("webgpu");
        this._context.configure({
            device: this._device,
            format: this._presentationFormat,
            alphaMode: this._alphaMode,
        });

        this._initGlobalData();

        this._renderPassDescriptor = {
            colorAttachments: [
                {
                    view: null,
                    resolveTarget: undefined,
                    clearValue: {
                        r: this._clearColor.r,
                        g: this._clearColor.g,
                        b: this._clearColor.b,
                        a: 1.0,
                    },
                    loadOp: "clear",
                    storeOp: "store",
                },
            ] as Array<GPURenderPassColorAttachment>,
            depthStencilAttachment: {
                view: null,
                depthClearValue: 1.0,
                depthLoadOp: "clear",
                depthStoreOp: "store",
            } as GPURenderPassDepthStencilAttachment,
        };
    }

    _initGlobalData() {
        Context.activeDevice = this._device;
    }

    public setSize(width: number, height: number) {
        this._size = {
            width: width,
            height: height,
        };
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
        super._setupColorBuffer(this._size, this._pixelRatio, this.sampleCount, this.presentationFormat);
        super._setupDepthBuffer(this._size, this._pixelRatio, this.sampleCount);
        this._sizeChanged = true;
    }

    public render(scene: Scene, camera: Camera) {
        if (!this._colorAttachmentView) {
            this.setSize(this._canvas.clientWidth, this._canvas.clientHeight);
        }

        if (this._sizeChanged) {
            if (PerspectiveCamera.Is(camera)) {
                const perspectiveCamera = camera as PerspectiveCamera;
                perspectiveCamera.aspect = this._canvas.width / this._canvas.height;
                perspectiveCamera.updateProjectionMatrix();
            }

            this._sizeChanged = false;
        }
        camera.update();
        const sceneUpdated = scene.update(camera);

        let descriptor = undefined;
        if (this._currentRenderTarget) {
            this._currentRenderTarget.depthTexture;
            descriptor = this._currentRenderTarget.getDescriptor();
        } else {
            const view =
                this.sampleCount > 1 ? this._colorAttachmentView : this._context.getCurrentTexture().createView();
            const resolveTarget = this.sampleCount > 1 ? this._context.getCurrentTexture().createView() : undefined;
            (this._renderPassDescriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].view = view;
            (this._renderPassDescriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].resolveTarget =
                resolveTarget;
            this._renderPassDescriptor.depthStencilAttachment.view = this._depthBuffer.createView();

            descriptor = this._renderPassDescriptor;
        }

        const commandEncoder = this.device.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(descriptor);

        const materialObjects = scene.renderableObjs;
        for (const [material, objects] of materialObjects) {
            if (sceneUpdated) {
                material.pipeline.needsCompile = true;
            }
            this._renderSamePipeline(passEncoder, material, objects, scene);
        }

        passEncoder.end();

        this.device.queue.submit([commandEncoder.finish()]);
    }

    public setRenderTarget(renderTarget: RenderTarget) {
        this._currentRenderTarget = renderTarget;
    }

    private _renderSamePipeline(
        passEncoder: GPURenderPassEncoder,
        material: Material,
        objects: Array<RenderableObject>,
        scene: Scene
    ) {
        if (material.pipeline.needsCompile) material.pipeline.compilePipeline(this, scene);

        passEncoder.setPipeline(material.pipeline.pipeline);

        material.pipeline.createCommonBindGroups(scene);
        material.pipeline.bindCommonUniform(passEncoder);

        material.updateBinds();

        for (let i = 0; i < objects.length; ++i) {
            material.pipeline.createObjectBindGroup(objects[i]);
            material.pipeline.bindObjectUnform(passEncoder, objects[i]);
            this._renderObject(passEncoder, objects[i]);
        }
    }

    private _renderObject(passEncoder: GPURenderPassEncoder, object: RenderableObject) {
        object.update();

        const geometry = object.geometry;
        geometry.update();
        geometry.setVertexBuffer(passEncoder, object.material.shaderOptions.attributeValues);
        if (geometry.indices) {
            passEncoder.setIndexBuffer(geometry.indices.buffer.buffer, GPUIndexFormat.Uint32);
            passEncoder.drawIndexedIndirect(object.geometry.drawBuffer.buffer, 0);
        } else {
            passEncoder.drawIndirect(object.geometry.drawBuffer.buffer, 0);
        }
    }

    get domElement() {
        return this._canvas;
    }

    get device() {
        return this._device;
    }

    get presentationFormat() {
        return this._presentationFormat;
    }

    get sampleCount() {
        return this._sampleCount;
    }
}
