import { BufferGeometry } from "./BufferGeometry";
import { Material } from "../materials/Material";
import { Object3D } from "./Object3D";
import { Matrix4 } from "../math/Matrix4";
import { WebGPURenderer } from "../renderers/WebGPURenderer";
import { Camera } from "../cameras/Camera";
import { BufferUniform } from "./uniforms/BufferUniform";

const t_matrix = new Matrix4();

const u_projection = "projectionMatrix";
const u_view = "viewMatrix";
const u_modelTranform = "modelMatrix";
export class RenderableObject extends Object3D {
    public get type() {
        return "RenderableObject";
    }

    public static Is(object: Object3D) {
        return object instanceof RenderableObject;
    }

    protected _geometry: BufferGeometry;
    protected _material: Material;

    private _pipeline: GPURenderPipeline;
    private _selfUniforms: Map<string, BufferUniform> = new Map();

    private _needsCompile = true;
    private _bindGroups: Map<string,GPUBindGroup> = new Map();
    private _bindGroupLayouts: Array<GPUBindGroupLayout> = [];

    constructor(geometry: BufferGeometry, material: Material) {
        super();
        this._geometry = geometry;
        this._material = material;

        this._needsCompile = true;

        this._initInitialUniform();
    }

    public update(renderer: WebGPURenderer, camera: Camera) {
        this.updateMatrixWorld();
        if (this._needsCompile) {
            this._createBindLayout(renderer.device);
            this._compilePipeline(renderer);
            this._createSelfBindGroup(renderer.device);
            this._createMaterialBindGroup(renderer.device);
            this._needsCompile = false;
        }

        if(this.material.needsCreateBindGroup)
            this._createMaterialBindGroup(renderer.device);

        this._updateUniformValue(camera);
    }

    public bindUniform(passEncoder: GPURenderPassEncoder) {
        let index = 0;
        for (const group of this._bindGroups.values()) {
            passEncoder.setBindGroup(index++, group);
        }
    }

    public override updateMatrixWorld() {
        const needsUpdate = this.matrixWorldNeedsUpdate;
        super.updateMatrixWorld();

        if (needsUpdate) {
            this._selfUniforms.get(u_modelTranform).data = this.matrixWorld.toArray();
        }
    }

    private _initInitialUniform() {
        t_matrix.identity();
        const projectionUniform = new BufferUniform(u_projection, 0, t_matrix.toArray(), GPUShaderStage.VERTEX);
        this._selfUniforms.set(u_projection, projectionUniform);

        const viewUniform = new BufferUniform(u_view, 1, t_matrix.toArray(), GPUShaderStage.VERTEX);
        this._selfUniforms.set(u_view, viewUniform);

        const tranformUniform = new BufferUniform(u_modelTranform, 2, t_matrix.toArray(), GPUShaderStage.VERTEX);
        this._selfUniforms.set(u_modelTranform, tranformUniform);
    }

    private _compilePipeline(renderer: WebGPURenderer) {
        const device = renderer.device;

        const buffers = this.geometry.createVetexBuffers();

        this._pipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({
                bindGroupLayouts: [...this._bindGroupLayouts],
              }),
            vertex: {
                module: device.createShaderModule({
                    code: this.material.vertexShader,
                }),
                entryPoint: "main",
                buffers: buffers,
            },
            fragment: {
                module: device.createShaderModule({
                    code: this.material.fragmentShader,
                }),
                entryPoint: "main",
                targets: [
                    {
                        format: renderer.presentationFormat,
                        blend: {
                            color: {
                                srcFactor: "src-alpha",
                                dstFactor: "one-minus-src-alpha",
                            },
                            alpha: {
                                srcFactor: "one",
                                dstFactor: "one-minus-src-alpha",
                            },
                        },
                    },
                ],
            },
            primitive: {
                topology: "triangle-list",
                cullMode: "back",
            },
            multisample: {
                count: renderer.sampleCount,
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: "depth24plus",
            },
        });
    }

    private _createBindLayout(device: GPUDevice) {
        const entriesLayout1 = new Array<GPUBindGroupLayoutEntry>();
        for (const uniform of this._selfUniforms.values()) {
            entriesLayout1.push({
                binding: uniform.binding,
                visibility: uniform.flags,
                buffer: {
                    type: "uniform",
                    minBindingSize: uniform.buffer.size,
                },
            });
        }

        this._bindGroupLayouts.push(
            device.createBindGroupLayout({
                entries: entriesLayout1,
            })
        );

        const entriesLayout2 = this.material.createBindLayout();
        this._bindGroupLayouts.push(
            device.createBindGroupLayout({
                entries: entriesLayout2,
            })
        );
    }

    private _createSelfBindGroup(device: GPUDevice) {
        const entriesGroup = new Array<GPUBindGroupEntry>();
        for (const uniform of this._selfUniforms.values()) {
            entriesGroup.push({
                binding: uniform.binding,
                resource: {
                    buffer: uniform.buffer,
                },
            });
        }
        this._bindGroups.set("self",
            device.createBindGroup({
                layout: this.pipeline.getBindGroupLayout(0),
                entries: entriesGroup,
            })
        );


    }

    private _createMaterialBindGroup(device: GPUDevice) {
        const entriesGroup = this.material.createBindGroup(device);
        this._bindGroups.set("material",
            device.createBindGroup({
                layout: this.pipeline.getBindGroupLayout(1),
                entries: entriesGroup,
            })
        );
    }

    public _updateUniformValue(camera: Camera) {
        for (const uniform of this._selfUniforms.values()) {
            if (uniform.name === u_projection) {
                uniform.data = camera.projectionMatrix.toArray();
            } else if (uniform.name === u_view) {
                uniform.data = camera.matrixWorldInverse.toArray();
            }
            uniform.update();
        }

        this._material.updateUniforms();
    }

    public set needCompile(v: boolean) {
        this._needsCompile = v;
    }

    public get pipeline() {
        return this._pipeline;
    }

    get geometry() {
        return this._geometry;
    }

    get material() {
        return this._material;
    }
}
