import { Camera } from "../cameras/Camera";
import { Material, WebGPURenderer } from "../spectre";
import { BindGroupLayoutIndexInfo, Environment, GlobalGroupLayoutInfo, ObjectGroupLayoutInfo, VertexBufferLayoutInfo } from "./Environment";
import { RenderableObject } from "./RenderableObject";


export class Pipleline {
    private _material: Material;
    private _pipeline: GPURenderPipeline;

    private _bindGroupLayouts: Array<GPUBindGroupLayout> = [];
    private _vertexBufferLayouts: Array<GPUVertexBufferLayout> = [];

    private _cameraBindGroups: any = {};
    private _materialBindGroup: GPUBindGroup;
    private _objectBindGroups: any = {};

    public needsCompile = true;

    constructor(material: Material) {
        this._material = material;
    }

    public compilePipeline(renderer: WebGPURenderer) {
        if (!this.needsCompile) return;

        this._beforeCompile();
        this._compile(renderer);

        this.needsCompile = false;
    }

    public bindCommonUniform(passEncoder: GPURenderPassEncoder,camera:Camera) {

        passEncoder.setBindGroup(0, this._cameraBindGroups[camera.uuid]);
        passEncoder.setBindGroup(1, this._materialBindGroup);
    }

    public bindObjectUnform(passEncoder: GPURenderPassEncoder,object:RenderableObject){
        passEncoder.setBindGroup(2, this._objectBindGroups[object.uuid]);
    }

    private _compile(renderer: WebGPURenderer) {
        const device = renderer.device;
        this.material.shader.recreate();

        this._pipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({
                bindGroupLayouts: [...this._bindGroupLayouts],
            }),
            vertex: {
                module: device.createShaderModule({
                    code: this.material.shader.vertexShaderCode,
                }),
                entryPoint: "main",
                buffers: this._vertexBufferLayouts,
            },
            fragment: {
                module: device.createShaderModule({
                    code: this.material.shader.fragmentShaderCode,
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

    /****************************create layout start ***********************************/
    private _createVertexBufferLayouts() {
        this._vertexBufferLayouts.length = 0;

        for (const [key,value] of this._material.shaderOptions.locationValues) {

            this._vertexBufferLayouts.push({
                arrayStride:
                    (VertexBufferLayoutInfo as any)[key].byteLength *
                    (VertexBufferLayoutInfo as any)[key].itemSize,
                attributes: [
                    {
                        shaderLocation: value.index,
                        offset: 0,
                        format: (VertexBufferLayoutInfo as any)[key].format,
                    },
                ],
            });
            
        }
    }

    private _createGlobalBindLayout() {
        const entries = new Array<GPUBindGroupLayoutEntry>();
        for (const key in GlobalGroupLayoutInfo) {
            entries.push({
                binding: (GlobalGroupLayoutInfo as any)[key].binding,
                visibility: (GlobalGroupLayoutInfo as any)[key].flags,
                buffer: {
                    type: "uniform",
                },
            });
        }

        this._bindGroupLayouts.push(
            Environment.activeDevice.createBindGroupLayout({
                entries: entries,
            })
        );
    }

    private _createMaterialBindLayout() {
        const entries = this.material.getBindLayout();
        this._bindGroupLayouts.push(
            Environment.activeDevice.createBindGroupLayout({
                entries: entries,
            })
        );
    }

    private _createObjectBindLayout() {
        const entries = new Array<GPUBindGroupLayoutEntry>();
        for (const key in ObjectGroupLayoutInfo) {
            entries.push({
                binding: (ObjectGroupLayoutInfo as any)[key].binding,
                visibility: (ObjectGroupLayoutInfo as any)[key].flags,
                buffer: {
                    type: "uniform",
                },
            });
        }
        this._bindGroupLayouts.push(
            Environment.activeDevice.createBindGroupLayout({
                entries: entries,
            })
        );
    }

    private _createBindLayouts() {
        this._bindGroupLayouts.length = 0;
        this._createGlobalBindLayout(); //Layout 0
        this._createMaterialBindLayout(); //Layout 1
        this._createObjectBindLayout(); //Layout 2
    }

    /****************************create layout end ***********************************/

    /****************************create group start ***********************************/
    private _createGlobalBindGroup(camera: Camera) {
        if (this._cameraBindGroups[camera.uuid]) return;
        const group = new Array<GPUBindGroupEntry>();
        for (const key in GlobalGroupLayoutInfo) {
            group.push({
                binding: (GlobalGroupLayoutInfo as any)[key].binding,
                resource: {
                    buffer: camera.uniforms.get(key).buffer,
                },
            });
        }

        this._cameraBindGroups[camera.uuid] = Environment.activeDevice.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(BindGroupLayoutIndexInfo.global),
            entries: group,
        });
    }

    private _createMaterialBindGroup() {
        if (!this.material.needsCreateBindGroup) return;
        const group = this.material.getBindGroup();

        this._materialBindGroup = Environment.activeDevice.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(BindGroupLayoutIndexInfo.material),
            entries: group,
        });
        this.material.needsCreateBindGroup = false;
    }

    private _createObjectBindGroup(objects: Array<RenderableObject>) {
        const newObjs: Array<RenderableObject> = [];
        for (let i = 0; i < objects.length; ++i) {
            if (!this._objectBindGroups[objects[i].uuid]) {
                newObjs.push(objects[i]);
            }
        }
        if (newObjs.length === 0) return;

        for (let i = 0; i < newObjs.length; ++i) {
            const object = newObjs[i];
            const group = new Array<GPUBindGroupEntry>();
            for (const key in ObjectGroupLayoutInfo) {
                group.push({
                    binding: (ObjectGroupLayoutInfo as any)[key].binding,
                    resource: {
                        buffer: object.uniforms.get(key).buffer,
                    },
                });
            }
            this._objectBindGroups[object.uuid] = Environment.activeDevice.createBindGroup({
                layout: this.pipeline.getBindGroupLayout(BindGroupLayoutIndexInfo.object),
                entries: group,
            });
        }
    }
    public createBindGroups(camera: Camera, objects: Array<RenderableObject>) {
        this._createGlobalBindGroup(camera); //Group 0
        this._createMaterialBindGroup(); //Group 1
        this._createObjectBindGroup(objects); //Group 2
    }

    /****************************create group end ***********************************/
    private _beforeCompile() {
        this._createBindLayouts();
        this._createVertexBufferLayouts();
    }

    public get pipeline() {
        return this._pipeline;
    }

    public get material() {
        return this._material;
    }
}