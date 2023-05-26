import triangleVertWGSL from "../shaders/triangle.vert.wgsl";
import redFragWGSL from "../shaders/red.frag.wgsl";
import WebGPURenderer from "../core/WebGPURenderer";
import { Uniform } from "../core/Uniform";
import { Color } from "../math/Color";
import { Matrix4 } from "../math/Matrix4";
export default class Material{
    private _vertexShader : string;
    private _fragmentShader :string;
    private _pipeline : GPURenderPipeline;
    private _uniform1 : Array<Uniform> = [];
    private _uniform2 : Array<Uniform> = [];
    private _color = new Color(1.0,1.0,1.0);
    private _needCompile = true;
    private _bindGroups : Array<GPUBindGroup> = [];
    private _bindGroupLayouts : Array<GPUBindGroupLayout> = [];

    public get pipeline(){
        return this._pipeline;
    }

    public set needCompile(v:boolean){
        this._needCompile = v;
    }

    constructor(){
        this._vertexShader = triangleVertWGSL;
        this._fragmentShader = redFragWGSL;

        this._initInitialUniform();

        this._needCompile = true;
    }

    private _initInitialUniform(){
        const tranformUniform = new Uniform("tranform",0,new Matrix4().toArray(),GPUShaderStage.VERTEX);
        this._uniform1.push(tranformUniform);

        const colorUniform = new Uniform("color",0,this._color.toArray(),GPUShaderStage.FRAGMENT);
        this._uniform2.push(colorUniform);
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
        for(let i = 0;i < this._bindGroups.length;++i){
            passEncoder.setBindGroup(i, this._bindGroups[i])
        }
    
    }

    private _compilePipeline(renderer:WebGPURenderer){
        const device = renderer.device;
        this._pipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({
                bindGroupLayouts: [...this._bindGroupLayouts],
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
        const entriesGroup1 = new Array<GPUBindGroupEntry>;
        const entriesGroup2 = new Array<GPUBindGroupEntry>;
        for(const uniform of this._uniform1){
            entriesGroup1.push({
                binding:uniform.binding,
                resource:{
                    buffer:uniform.buffer
                }
            });
        }

        this._bindGroups.push(device.createBindGroup({
                layout: this.pipeline.getBindGroupLayout(0),
                entries:entriesGroup1
            })
        );

        for(const uniform of this._uniform2){
            entriesGroup2.push({
                binding:uniform.binding,
                resource:{
                    buffer:uniform.buffer
                }
            });
        }

        this._bindGroups.push(device.createBindGroup({
                layout: this.pipeline.getBindGroupLayout(1),
                entries:entriesGroup2
            })
        );
    }

    private _createBindLayout(device:GPUDevice){
        const entriesLayout1 = new Array<GPUBindGroupLayoutEntry>;
        const entriesLayout2 = new Array<GPUBindGroupLayoutEntry>;
        for(const uniform of this._uniform1){
            entriesLayout1.push({
                binding:uniform.binding,
                visibility: uniform.flags,
                buffer:{
                    type: 'uniform',
                    minBindingSize:uniform.buffer.size
                }
            });
        }

        this._bindGroupLayouts.push(device.createBindGroupLayout({
                entries:entriesLayout1
            })
        );

        for(const uniform of this._uniform2){
            entriesLayout2.push({
                binding:uniform.binding,
                visibility: uniform.flags,
                buffer:{
                    type: 'uniform',
                    minBindingSize:uniform.buffer.size
                }
            });
        }

        this._bindGroupLayouts.push(device.createBindGroupLayout({
                entries:entriesLayout2
            })
        );
        
    }

    public updateUniformValue(name:string,data:any){
        const allUniforms = [...this._uniform1,...this._uniform2];
        for(const uniform of allUniforms){
            if(uniform.name === name){
                uniform.update(this._color.toArray());
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