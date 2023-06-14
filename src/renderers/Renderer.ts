import { Camera } from "../cameras/Camera";
import { PerspectiveCamera } from "../cameras/PerspectiveCamera";
import { GPUIndexFormat } from "../Constants";
import { Context } from "../core/Context";
import { Pipleline } from "../core/Pipeline";
import { RenderableObject } from "../core/RenderableObject";
import { PipelineCache } from "../core/ResourceManagers";
import { Scene } from "../core/Scene";
import { DepthMaterial } from "../materials/DepthMaterial";
import { Material } from "../materials/Material";
import { Color } from "../math/Color";
import { OrthographicCamera } from "../spectre";
import { DepthTarget } from "./DepthTarget";
import { RenderPass } from "./RenderPass";
import { RenderTarget } from "./RenderTarget";

interface WebGPURendererParameters {
    canvas?: HTMLCanvasElement;
    powerPreference?: GPUPowerPreference;
    sampleCount?: number;
    antialias?: boolean;
}
export class Renderer extends RenderPass {
    private _parameters: WebGPURendererParameters;
    private _canvas: HTMLCanvasElement;
    private _device: GPUDevice;
    private _context: GPUCanvasContext;
    private _alphaMode: GPUCanvasAlphaMode = "premultiplied";
    private _clearColor = new Color(0, 0, 0);
    private _sizeChanged = false;

    private _renderPassDescriptor: GPURenderPassDescriptor;

    private _currentRenderTarget: RenderTarget = null;

    private _depthMaterial = new DepthMaterial();
    private _depthPass = new DepthTarget(1024, 1024);
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

    public set clearColor(v: Color) {
        this._clearColor.copy(v);
    }

    public setRenderTarget(renderTarget: RenderTarget) {
        this._currentRenderTarget = renderTarget;
    }

    public setSize(width: number, height: number) {
        const res = super.setSize(width, height);
        if (res) {
            this._canvas.width = width * Context.pixelRatio;
            this._canvas.height = height * Context.pixelRatio;
            super._setupColorBuffer(this.presentationFormat);
            super._setupDepthBuffer();
            this._sizeChanged = true;
        }
        return res;
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
            } else if (OrthographicCamera.Is(camera)) {
                const orthographicCamera = camera as OrthographicCamera;
                orthographicCamera.updateProjectionMatrix();
            }

            this._sizeChanged = false;
        }
        camera.update();

        const commandEncoder = Context.beginCommandEncoder();
        const sceneUpdated = scene.update(camera);
        this._renderShadow(scene, commandEncoder);

        scene.update(camera, true);

        let pass = this as RenderPass;
        let descriptor = undefined;
        if (this._currentRenderTarget) {
            descriptor = this._currentRenderTarget.getDescriptor();
            pass = this._currentRenderTarget;
        } else {
            const view =
                this.sampleCount > 1 ? this._colorAttachmentView : this._context.getCurrentTexture().createView();
            const resolveTarget = this.sampleCount > 1 ? this._context.getCurrentTexture().createView() : undefined;
            (this._renderPassDescriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].view = view;
            (this._renderPassDescriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].resolveTarget =
                resolveTarget;
            this._renderPassDescriptor.depthStencilAttachment.view = this._depthTexture.createView();

            descriptor = this._renderPassDescriptor;

            (this._renderPassDescriptor.colorAttachments as Array<GPURenderPassColorAttachment>)[0].clearValue = {
                r: this._clearColor.r,
                g: this._clearColor.g,
                b: this._clearColor.b,
                a: 1.0,
            };
        }

        const passEncoder = commandEncoder.beginRenderPass(descriptor);

        const materialObjects = scene.renderableObjs;
        for (const [material, objects] of materialObjects) {
            const pipeline = PipelineCache.get(pass, material, scene, sceneUpdated);
            this._renderSamePipeline(passEncoder, material, objects, scene, camera, pipeline);
        }

        passEncoder.end();
        if (this._currentRenderTarget) {
            this._currentRenderTarget.updated();
        }
        Context.finishCommand();
    }

    private _renderShadow(scene: Scene, commandEncoder: GPUCommandEncoder) {
        const directionalLights = scene.directionalLights;

        const objects: Array<RenderableObject> = [];
        for (const dirLight of directionalLights.values()) {
            scene.update(dirLight.shadow.camera, true);
            for (const objs of scene.renderableObjs.values()) {
                objects.push(...objs);
            }
        }
        const descriptor = this._depthPass.getDescriptor();
        const passEncoder = commandEncoder.beginRenderPass(descriptor);

        const pipeline = PipelineCache.get(this._depthPass, this._depthMaterial, scene, true);
        for (const dirLight of directionalLights.values()) {
            this._renderSamePipeline(
                passEncoder,
                this._depthMaterial,
                objects,
                scene,
                dirLight.shadow.camera,
                pipeline
            );
        }
        passEncoder.end();
    }

    private _renderSamePipeline(
        passEncoder: GPURenderPassEncoder,
        material: Material,
        objects: Array<RenderableObject>,
        scene: Scene,
        camera: Camera,
        pipeline: Pipleline
    ) {
        material.updateBinds();

        passEncoder.setPipeline(pipeline.GPUPipeline);

        pipeline.createCommonBindGroups(scene);
        pipeline.bindCommonUniform(passEncoder);

        for (let i = 0; i < objects.length; ++i) {
            pipeline.createObjectBindGroup(objects[i]);
            pipeline.bindObjectUnform(passEncoder, objects[i]);
            this._renderObject(passEncoder, objects[i], camera);
        }
    }

    private _renderObject(passEncoder: GPURenderPassEncoder, object: RenderableObject, camera: Camera) {
        object.update();
        object.updateNormalMatrix(camera);

        if (!object.visible) return;

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
