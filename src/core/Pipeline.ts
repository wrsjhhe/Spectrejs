import { GPUBlendFactor, GPUCompareFunction, GPUCullMode, GPUPrimitiveTopology, GPUTextureFormat } from "../Constants";
import { Material } from "../materials/Material";
import { WebGPURenderer } from "../renderers/WebGPURenderer";
import { BindGroupLayoutIndexInfo, ObjectGroupLayoutInfo } from "./Defines";
import { RenderableObject } from "./RenderableObject";
import { Cache, Context } from "./ResourceManagers"
import { Scene } from "./Scene";

export class Pipleline {
    private _material: Material;
    private _pipeline: GPURenderPipeline;

    private _bindGroupLayouts: Array<GPUBindGroupLayout> = [];
    private _vertexBufferLayouts: Array<GPUVertexBufferLayout> = [];

    private _globalBindGroups: GPUBindGroup;
    private _materialBindGroup: GPUBindGroup;
    private _objectBindGroups: any = {};

    public needsCompile = true;
    public needsCreateMatBindGroup = true;

    constructor(material: Material) {
        this._material = material;

        Cache.add("pipelineObjectBindGroup",this._objectBindGroups);
    }

    public compilePipeline(renderer: WebGPURenderer,scene:Scene) {
        if (!this.needsCompile) return;

        this.needsCreateMatBindGroup = true;

        this._beforeCompile(scene);
        this._compile(renderer,scene);

        this.needsCompile = false;
    }

    public bindCommonUniform(passEncoder: GPURenderPassEncoder) {

        passEncoder.setBindGroup(0, this._globalBindGroups);
        passEncoder.setBindGroup(1, this._materialBindGroup);
    }

    public bindObjectUnform(passEncoder: GPURenderPassEncoder,object:RenderableObject){
        passEncoder.setBindGroup(2, this._objectBindGroups[object.uuid]);
    }

    private _compile(renderer: WebGPURenderer,scene:Scene) {
        const device = renderer.device;
        this.material.shader.recreate(scene);

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
                                srcFactor: GPUBlendFactor.SrcAlpha,
                                dstFactor: GPUBlendFactor.OneMinusSrcAlpha,
                            },
                            alpha: {
                                srcFactor: GPUBlendFactor.One,
                                dstFactor: GPUBlendFactor.OneMinusSrcAlpha,
                            },
                        },
                    },
                ],
            },
            primitive: {
                topology: GPUPrimitiveTopology.TriangleList,
                cullMode: GPUCullMode.Back,
            },
            multisample: {
                count: renderer.sampleCount,
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: GPUCompareFunction.Less,
                format: GPUTextureFormat.Depth24Plus,
            },
        });
    }

    /****************************create layout start ***********************************/
    private _createVertexBufferLayouts() {
        this._vertexBufferLayouts.length = 0;

        for (const value of this._material.shaderOptions.attributeValues.values()) {

            this._vertexBufferLayouts.push({
                arrayStride:value.itemSize,
                attributes: [
                    {
                        shaderLocation: value.index,
                        offset: 0,
                        format: value.format,
                    },
                ],
            });
            
        }
    }

    private _createGlobalBindLayout(scene:Scene) {
        const entries = scene.getBindLayout();
        this._bindGroupLayouts.push(
            Context.activeDevice.createBindGroupLayout({
                entries: entries,
            })
        );
    }

    private _createMaterialBindLayout() {
        const entries = this.material.getBindLayout();
        this._bindGroupLayouts.push(
            Context.activeDevice.createBindGroupLayout({
                entries: entries,
            })
        );
    }

    private _createObjectBindLayout() {
        const entries = new Array<GPUBindGroupLayoutEntry>();
        for (const key in ObjectGroupLayoutInfo) {
            entries.push({
                binding: (ObjectGroupLayoutInfo as any)[key].index,
                visibility: (ObjectGroupLayoutInfo as any)[key].visibility,
                buffer: {
                    type: "uniform",
                },
            });
        }
        this._bindGroupLayouts.push(
            Context.activeDevice.createBindGroupLayout({
                entries: entries,
            })
        );
    }

    private _createBindLayouts(scene:Scene) {
        this._bindGroupLayouts.length = 0;
        this._createGlobalBindLayout(scene); //Layout 0
        this._createMaterialBindLayout(); //Layout 1
        this._createObjectBindLayout(); //Layout 2
    }

    /****************************create layout end ***********************************/

    /****************************create group start ***********************************/
    private _createGlobalBindGroup(scene:Scene) {
        if(!this.needsCreateMatBindGroup)
            return;

        const group =  scene.getBindGroup();

        this._globalBindGroups = Context.activeDevice.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(BindGroupLayoutIndexInfo.global),
            entries: group,
        });
    }

    private _createMaterialBindGroup() {
        if (!this.needsCreateMatBindGroup) 
            return;
        const group = this.material.getBindGroup();

        this._materialBindGroup = Context.activeDevice.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(BindGroupLayoutIndexInfo.material),
            entries: group,
        });

    }

    public createObjectBindGroup(object: RenderableObject){
        if (this._objectBindGroups[object.uuid]) {
            return;
        }

        const group = new Array<GPUBindGroupEntry>();
        for (const key in ObjectGroupLayoutInfo) {
            group.push({
                binding: (ObjectGroupLayoutInfo as any)[key].index,
                resource: {
                    buffer: object.uniforms.get(key).buffer,
                },
            });
        }
        this._objectBindGroups[object.uuid] = Context.activeDevice.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(BindGroupLayoutIndexInfo.object),
            entries: group,
        });

    }

    public createCommonBindGroups(scene:Scene) {
        this._createGlobalBindGroup(scene); //Group 0
        this._createMaterialBindGroup(); //Group 1

        this.needsCreateMatBindGroup = false;
    }

    /****************************create group end ***********************************/
    private _beforeCompile(scene:Scene) {
        this._createBindLayouts(scene);
        this._createVertexBufferLayouts();
    }

    public get pipeline() {
        return this._pipeline;
    }

    public get material() {
        return this._material;
    }
}