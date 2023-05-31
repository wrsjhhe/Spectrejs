import { Camera } from "../cameras/Camera";
import { PerspectiveCamera } from "../cameras/PerspectiveCamera";
import { GPUIndexFormat, GPUTextureFormat } from "../Constants";
import { Environment } from "../core/Environment";
import { GPUBufferWrapper } from "../core/GPUBufferWrapper";
import { RenderableObject } from "../core/RenderableObject";
import { Scene } from "../core/Scene";
import { Color } from "../math/Color";
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

export class WebGPURenderer {
    private _parameters: WebGPURendererParameters;
    private _canvas: HTMLCanvasElement;
    private _powerPreference: GPUPowerPreference;
    private _adapter: GPUAdapter;
    private _device: GPUDevice;
    private _presentationFormat: GPUTextureFormat = GPUTextureFormat.BGRA8Unorm;
    private _context: GPUCanvasContext;
    private _alphaMode: GPUCanvasAlphaMode = "premultiplied";
    private _colorBuffer: GPUTexture;
    private _depthBuffer: GPUTexture;
    private _size: RendererSize;
    private _pixelRatio = window.devicePixelRatio || 1;
    private _colorAttachmentView: GPUTextureView;
    private _sampleCount: number = 1;
    private _clearColor = new Color(1, 1, 1);
    private _sizeChanged = false;

    private _renderPassDescriptor : GPURenderPassDescriptor;

    constructor(parameters: WebGPURendererParameters = {}) {
        this._parameters = parameters;

        if (this._parameters.antialias === true) {
            this._sampleCount = parameters.sampleCount === undefined ? 4 : parameters.sampleCount;
        } else {
            this._sampleCount = 1;
        }
    }

    public async init() {
        if (!this._parameters.canvas) {
            this._canvas = document.createElement("canvas");
            this._canvas.style.width = "100%";
            this._canvas.style.height = "100%";
        } else {
            this._canvas = this._parameters.canvas;
        }

        this._powerPreference = this._parameters.powerPreference
            ? this._parameters.powerPreference
            : "high-performance";
        this._adapter = await navigator.gpu.requestAdapter({
            powerPreference: this._powerPreference,
        });

        this._device = await this._adapter.requestDevice();

        this._context = this._canvas.getContext("webgpu");
        this._context.configure({
            device: this._device,
            format: this._presentationFormat,
            alphaMode: this._alphaMode,
        });

        //this._setupColorBuffer();
        this._initGlobalData();

        this._renderPassDescriptor = {
            colorAttachments: [
                {
                    view: null,
                    resolveTarget: undefined,
                    clearValue: { r: this._clearColor.r, g: this._clearColor.g, b: this._clearColor.b, a: 1.0 },
                    loadOp: "clear",
                    storeOp: "store",
                },
            ],
            depthStencilAttachment: {
                view: null,
                depthClearValue: 1.0,
                depthLoadOp: 'clear',
                depthStoreOp: 'store',
              },
        };
    }

    _initGlobalData() {
        Environment.activeDevice = this._device;
    }

    public setSize(width: number, height: number) {
        this._size = {
            width: width,
            height: height,
        };
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
        this._setupColorBuffer();
        this._setupDepthBuffer();
        this._sizeChanged = true;
    }

    public render(scene: Scene, camera: Camera) {
        if (!this._colorAttachmentView) {
            this.setSize(this._canvas.clientWidth, this._canvas.clientHeight);
        }

        if (this._sizeChanged) {
            if(PerspectiveCamera.Is(camera)){
                const perspectiveCamera = camera as PerspectiveCamera;
                perspectiveCamera.aspect = this._canvas.width / this._canvas.height;
                perspectiveCamera.updateProjectionMatrix();
            }

            this._sizeChanged = false;
        }
        camera.updateWorldMatrix();
        const commandEncoder = this.device.createCommandEncoder();

        const view = this.sampleCount > 1 ? this._colorAttachmentView : this._context.getCurrentTexture().createView();
        const resolveTarget = this.sampleCount > 1 ? this._context.getCurrentTexture().createView() : undefined;
        (this._renderPassDescriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].view = view;
        (this._renderPassDescriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].resolveTarget = resolveTarget;
        (this._renderPassDescriptor.depthStencilAttachment as GPURenderPassDepthStencilAttachment).view = this._depthBuffer.createView();

        const passEncoder = commandEncoder.beginRenderPass(this._renderPassDescriptor);
        for (let i = 0; i < scene.children.length; ++i) {
            const child = scene.children[i] as RenderableObject;
            this._renderObject(passEncoder, child, camera);
        }

        passEncoder.end();

        this.device.queue.submit([commandEncoder.finish()]);
    }

    private _renderObject(passEncoder: GPURenderPassEncoder, object: RenderableObject, camera: Camera) {
        object.update(this, camera);
        passEncoder.setPipeline(object.pipeline);
        object.bindUniform(passEncoder);

        const geometry = object.geometry;
        geometry.update(this);
        geometry.setVertexBuffer(passEncoder);
        if (geometry.indices) {
            passEncoder.setIndexBuffer(geometry.indices.buffer.buffer, GPUIndexFormat.Uint32);
            passEncoder.drawIndexedIndirect(object.geometry.drawBuffer.buffer, 0);
        } else {
            passEncoder.drawIndirect(object.geometry.drawBuffer.buffer, 0);
        }
    }

    private _beforRender(){
        
    }

    private _setupColorBuffer() {
        const device = this._device;

        if (device) {
            if (this._colorBuffer) this._colorBuffer.destroy();

            this._colorBuffer = this._device.createTexture({
                size: {
                    width: Math.floor(this._size.width * this._pixelRatio),
                    height: Math.floor(this._size.height * this._pixelRatio),
                    depthOrArrayLayers: 1,
                },
                sampleCount: this._sampleCount,
                format: this._presentationFormat,
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
            this._colorAttachmentView = this._colorBuffer.createView();
        }
    }

    private _setupDepthBuffer() {

		if ( this._depthBuffer ) this._depthBuffer.destroy();

		this._depthBuffer = this.device.createTexture( {
			label: 'depthBuffer',
			size: {
                width: Math.floor(this._size.width * this._pixelRatio),
                height: Math.floor(this._size.height * this._pixelRatio),
                depthOrArrayLayers: 1,
            },
			sampleCount: this._sampleCount,
			format: GPUTextureFormat.Depth24Plus,
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC
		} );

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
