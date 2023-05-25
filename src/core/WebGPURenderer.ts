import * as GPUConstances from '../Constants'
import { GPUIndexFormat } from '../Constants';
import { GPUBufferWrapper } from './GPUBufferWrapper';
import RenderableObject from './RenderableObject';
import Scene from './Scene';
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

export default class WebGPURenderer {
    private _parameters: WebGPURendererParameters;
    private _canvas: HTMLCanvasElement;
    private _powerPreference: GPUPowerPreference;
    private _adapter: GPUAdapter;
    private _device: GPUDevice;
    private _presentationFormat: GPUTextureFormat = GPUConstances.GPUTextureFormat.BGRA8Unorm;
    private _context: GPUCanvasContext;
    private _alphaMode: GPUCanvasAlphaMode = "premultiplied";
    private _colorBuffer: GPUTexture;
    private _size: RendererSize;
    private _pixelRatio = window.devicePixelRatio || 1;
    private _colorAttachmentView: GPUTextureView;
    private _sampleCount:number = 1;

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
    }

    _initGlobalData(){
        GPUBufferWrapper.device = this.device;
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

    get sampleCount(){
        return this._sampleCount;
    }

    public setSize(width:number,height:number){
        this._size = {
            width: this._canvas.clientWidth,
            height: this._canvas.clientHeight,
        };
        this._canvas.width = this._size.width * this._pixelRatio;
        this._canvas.height = this._size.height * this._pixelRatio;
        this._setupColorBuffer();
    }

    public render(scene:Scene){
        if(!this._colorAttachmentView){
            this.setSize(this._canvas.clientWidth,this._canvas.clientHeight);
        }

        const commandEncoder = this.device.createCommandEncoder();

        const renderPassDescriptor: GPURenderPassDescriptor = {
            colorAttachments: [
                {
                    view: this._colorAttachmentView,
                    resolveTarget: this._context.getCurrentTexture().createView(),
                    clearValue: { r: 0.4, g: 0.4, b: 0.4, a: 1.0 },
                    loadOp: "clear",
                    storeOp: "store",
                },
            ],
        };

        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        this._renderObject(passEncoder,scene.children[0] as RenderableObject);
  
        passEncoder.end();

        this.device.queue.submit([commandEncoder.finish()]);
    }

    private _renderObject(passEncoder:GPURenderPassEncoder,object:RenderableObject){
        const material = object.material;
        material.update(this);
        passEncoder.setPipeline(material.pipeline);
        material.bindUniform(passEncoder);
        
        const geometry = object.geometry;
        geometry.update(this);
        passEncoder.setVertexBuffer(0, geometry.getAttribute("position").buffer.buffer);
        if(geometry.indices){
            passEncoder.setIndexBuffer(geometry.indices.buffer.buffer, GPUIndexFormat.Uint32);
            passEncoder.drawIndexedIndirect(object.geometry.drawBuffer.buffer,0);
        }else{
            passEncoder.drawIndirect(object.geometry.drawBuffer.buffer,0);
        }
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
}
