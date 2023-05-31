import { BufferAttribute } from "./BufferAttribute";
import { GPUBufferWrapper } from "./GPUBufferWrapper";
import { WebGPURenderer } from "../renderers/WebGPURenderer";

export class BufferGeometry{
    
    private _attributes : Map<string,BufferAttribute> = new Map();
    private _indices : BufferAttribute = null;
    private _drawBuffer:GPUBufferWrapper = null;
    
    constructor(){
        
    }

    public update(renderer:WebGPURenderer){
        this.updateDrawBuffer(renderer.device);
        for(const attribute of this._attributes.values()){
            attribute.update();
        }

        this._indices && this._indices.update();
    }

    public createVetexBufferLayouts(){
        const bufferLayouts : Array<GPUVertexBufferLayout> = [];
        let index = 0;
        for(const attr of this.attributes.values()){
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
            bufferLayouts.push(buffer);
        }
        return bufferLayouts;
    }

    public setVertexBuffer(passEncoder:GPURenderPassEncoder){
        let index = 0;
        for(const attribute of this._attributes.values()){
            passEncoder.setVertexBuffer(index, attribute.buffer.buffer);
            ++index;
        }
    }

    public setIndex(attribute : BufferAttribute):BufferGeometry{
        if(attribute.count !== this._indices?.count && this._drawBuffer){
            this._drawBuffer.destroy();
            this._drawBuffer = null;
        }

        this._indices = attribute;
        attribute.Usage = GPUBufferUsage.INDEX;
        return this;
    }

    public setAttribute(name : string,attribute : BufferAttribute ):BufferGeometry{
        this._attributes.set(name,attribute);
        return this;
    }

    public getAttribute ( name : string ) : BufferAttribute{
        return this._attributes.get(name);
    }

    public updateDrawBuffer(device:GPUDevice){

        if(!this._drawBuffer){
            const k = this.indices?5:4;
            const parameters = new Uint32Array(k);
            if(this.indices){
                parameters[0] = this.indices.count; // The indexCount value
                parameters[1] = 1; // The instanceCount value
                parameters[2] = 0; // The firstIndex value
                parameters[3] = 0; // The baseVertex value
                parameters[4] = 0; // The firstInstance value
            }else{
                parameters[0] = this.getAttribute("position").count; // The vertexCount value
                parameters[1] = 1; // The instanceCount value
                parameters[2] = 0; // The firstVertex value
                parameters[3] = 0; // The firstInstance value
            }
            this._drawBuffer = new GPUBufferWrapper(
                GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
                parameters); 
        }
        
    }

    public get attributes(){
        return this._attributes;
    }

    public get indices():BufferAttribute{
        return this._indices;
    }

    get drawBuffer():GPUBufferWrapper{
        return this._drawBuffer;
    }
}