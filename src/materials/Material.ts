import triangleVertWGSL from "./shaders/triangle.vert.wgsl";
import redFragWGSL from "./shaders/red.frag.wgsl";
import WebGPURenderer from "../core/WebGPURenderer";
import { Uniform } from "../core/Uniform";
export default class Material{
    private _vertexShader : string;
    private _fragmentShader :string;
    private _pipeline : GPURenderPipeline;
    private _uniform : Array<Uniform> = [];
    private _color = new Float32Array([1.0,1.0,1.0,1.0]);
    private _needCompile = true;
    private _bindGroup : GPUBindGroup;
    private _bindGroupLayout : GPUBindGroupLayout;
    get pipeline(){
        return this._pipeline;
    }

    constructor(){
        this._vertexShader = triangleVertWGSL;
        this._fragmentShader = redFragWGSL;

        this._initInitialUniform();

        this._needCompile = true;
    }

    private _initInitialUniform(){
        const colorUniform = new Uniform("color",0,this._color);
        this._uniform.push(colorUniform);
    } 

    public update(renderer:WebGPURenderer){
        if(this._needCompile){
            this._createBindLayout(renderer.device);
            this._compilePipeline(renderer);
            this._createBindGroup(renderer.device);
            this._needCompile = false;
        }
    }

    public bindUniform(passEncoder:GPURenderPassEncoder){
        passEncoder.setBindGroup(0, this._bindGroup)
    }

    private _compilePipeline(renderer:WebGPURenderer){
        const device = renderer.device;
        this._pipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({
                bindGroupLayouts: [this._bindGroupLayout],
              }),
            vertex: {
                module: device.createShaderModule({
                    code: this._vertexShader,
                }),
                entryPoint: "main",
                buffers: [
                    {
                        // 顶点长度，以字节为单位
                        arrayStride: 3 * 4,
                        attributes: [
                            {
                                // 变量索引
                                shaderLocation: 0,
                                // 偏移
                                offset: 0,
                                // 参数格式
                                format: "float32x3",
                            },
                        ],
                    },
                ],
            },
            fragment: {
                module: device.createShaderModule({
                    code: this._fragmentShader,
                }),
                entryPoint: "main",
                targets: [
                    {
                        format: renderer.presentationFormat,
                        blend:{
                            color:{
                                srcFactor: 'src-alpha',
                                dstFactor: 'one-minus-src-alpha',
                            },
                            alpha:{
                                srcFactor: 'one',
                                dstFactor: 'one-minus-src-alpha',
                            }
                        }
                    },
                ],
            },
            primitive: {
                topology: "triangle-list",
            },
            multisample: {
                count: renderer.sampleCount,
            },
        });
    }

    private _createBindGroup(device:GPUDevice){
        const entriesGroup = new Array<GPUBindGroupEntry>;
        for(const uniform of this._uniform){
            entriesGroup.push({
                binding:uniform.binding,
                resource:{
                    buffer:uniform.buffer
                }
            });
        }

        this._bindGroup = device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries:entriesGroup
        });
    }

    private _createBindLayout(device:GPUDevice){
        const entriesLayout = new Array<GPUBindGroupLayoutEntry>;
        for(const uniform of this._uniform){
            entriesLayout.push({
                binding:uniform.binding,
                visibility: GPUShaderStage.FRAGMENT,
                buffer:{
                    type: 'uniform',
                    minBindingSize:uniform.buffer.size
                }
            });
        }

        this._bindGroupLayout = device.createBindGroupLayout({
            entries:entriesLayout
        });
    }

    public updateUniformValue(name:string,data:any){
        for(const uniform of this._uniform){
            if(uniform.name === name){
                uniform.update(this._color);
                return;
            }
        }
    }

    public get color(){
        return this._color;
    }

    public set color(v){
        this._color = v;
        this.updateUniformValue("color",this._color);
    }

}