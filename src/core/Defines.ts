import { GPUVertexFormat } from "../Constants";


export const BindGroupLayoutIndexInfo = {
    global : 0,
    material : 1,
    object : 2,
    custom : 3
}

// export const VertexBufferLayoutInfo = {
// 	position:{
// 		byteLength:4,
// 		itemSize:3,
// 		format:GPUVertexFormat.Float32x3
// 	},
// 	normal:{
// 		byteLength:4,
// 		itemSize:3,
// 		format:GPUVertexFormat.Float32x3
// 	},
// 	uv:{
// 		byteLength:4,
// 		itemSize:2,
// 		format:GPUVertexFormat.Float32x2
// 	}
// };




export enum BindType{
	buffer = 1,
    storage = 2,
	sampler = 3,
	texture = 4
}

export interface ShaderItem {
    name: string;
    index: number;
    shaderItemType:string;
}

export interface AttributeShaderItem extends ShaderItem {
    format:GPUVertexFormat;
    itemSize:number;
}

export interface BindShaderItem extends ShaderItem {
    bindType:BindType;
    visibility:GPUShaderStageFlags;
}

export const GlobalGroupLayoutInfo = {
    projectionMatrix:{
        index : 0,
        bindType : BindType.buffer,
        visibility: GPUShaderStage.VERTEX
    } as BindShaderItem,
    matrixWorldInverse:{
        index : 1,
        bindType : BindType.buffer,
        visibility: GPUShaderStage.VERTEX
    } as BindShaderItem
}

export const ObjectGroupLayoutInfo = {
    matrixWorld:{
        index : 0,
        bindType : BindType.buffer,
        visibility: GPUShaderStage.VERTEX
    } as BindShaderItem
}