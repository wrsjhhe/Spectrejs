import { BufferGeometry } from "./BufferGeometry";
import { Material } from "../materials/Material";
import { Object3D } from "./Object3D";
import { Uniform } from "./Uniform";
import { Matrix4 } from "../math/Matrix4";
import { WebGPURenderer } from "../renderers/WebGPURenderer";
import { Camera } from "../cameras/Camera";

const t_matrix = new Matrix4();

const u_projection = "projectionMatrix"
const u_view = "viewMatrix"
const u_modelTranform = "modelMatrix";
export class RenderableObject extends Object3D{

    public get type() {
		return "RenderableObject";
    }

	public static Is(object:Object3D){
        return object instanceof RenderableObject;
	}

    protected _geometry : BufferGeometry;
    protected _material : Material;


    private _pipeline : GPURenderPipeline;
    private _uniforms : Map<string,Uniform> = new Map();

    private _needCompile = true;
    private _bindGroups : Array<GPUBindGroup> = [];
    private _bindGroupLayouts : Array<GPUBindGroupLayout> = [];

    constructor(geometry : BufferGeometry,material:Material){
        super();
        this._geometry = geometry;
        this._material = material;

        this._needCompile = true;

        this._initInitialUniform();
    }

    public update(renderer:WebGPURenderer,camera:Camera){
        this.updateMatrixWorld();
        if(this._needCompile){
            this._createBindLayout(renderer.device);
            this._compilePipeline(renderer);
            this._createBindGroup(renderer.device);
            this._needCompile = false;
        }

        this._updateUniformValue(camera);
    }


    public bindUniform(passEncoder:GPURenderPassEncoder){
        for(let i = 0;i < this._bindGroups.length;++i){
            passEncoder.setBindGroup(i, this._bindGroups[i]);
        }
    }

    public override updateMatrixWorld(){
        const needsUpdate = this.matrixWorldNeedsUpdate;
        super.updateMatrixWorld();

        if(needsUpdate){
            this._uniforms.get(u_modelTranform).data = this.matrixWorld.toArray();
        }

    }

    private _initInitialUniform(){
        t_matrix.identity();
        const projectionUniform = new Uniform(u_projection,0,t_matrix.toArray(),GPUShaderStage.VERTEX); 
        this._uniforms.set(u_projection,projectionUniform);

        const viewUniform = new Uniform(u_view,1,t_matrix.toArray(),GPUShaderStage.VERTEX); 
        this._uniforms.set(u_view,viewUniform);

        const tranformUniform = new Uniform(u_modelTranform,2,t_matrix.toArray(),GPUShaderStage.VERTEX);
        this._uniforms.set(u_modelTranform,tranformUniform);
    } 

    private createVetexBuffers(){
        const buffers : Array<GPUVertexBufferLayout> = [];
        let index = 0;
        for(const attr of this.geometry.attributes.values()){
            const buffer = {
                // 顶点长度，以字节为单位
                arrayStride: attr.byteLength * attr.itemSize,
                attributes: [
                    {
                        // 变量索引
                        shaderLocation: index,
                        // 偏移
                        offset: 0,
                        // 参数格式
                        format: attr.format
                    },
                ]
            }
            ++index;
            buffers.push(buffer);
        }
        return buffers;
    }

    private _compilePipeline(renderer:WebGPURenderer){
        const device = renderer.device;

        const buffers = this.createVetexBuffers();

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
                cullMode: 'back',
            },
            multisample: {
                count: renderer.sampleCount,
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: 'less',
                format: 'depth24plus',
              },
        });
    }

    private _createBindGroup(device:GPUDevice){
        const entriesGroup1 = new Array<GPUBindGroupEntry>;
        const entriesGroup2 = new Array<GPUBindGroupEntry>;
        for(const uniform of this._uniforms.values()){
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

        for(const uniform of this._material.uniforms.values()){
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
        for(const uniform of this._uniforms.values()){
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

        for(const uniform of this._material.uniforms.values()){
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

    public _updateUniformValue(camera:Camera){
        for(const uniform of this._uniforms.values()){
            if(uniform.name === u_projection){
                uniform.data = camera.projectionMatrix.toArray();
            }else if(uniform.name === u_view){
                uniform.data = camera.matrixWorldInverse.toArray();
            }
            uniform.update();
        }
        for(const uniform of this._material.uniforms.values()){
            uniform.update();
        }
    }


    public set needCompile(v:boolean){
        this._needCompile = v;
    }

    public get pipeline(){
        return this._pipeline;
    }

    get geometry(){
        return this._geometry;
    }

    get material(){
        return this._material;
    }
}