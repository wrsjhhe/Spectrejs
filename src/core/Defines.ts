/* eslint-disable no-unused-vars */

export const BindGroupLayoutIndexInfo = {
    global : 0,
    material : 1,
    object : 2,
    custom : 3
}


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

export const ObjectGroupLayoutInfo = {
    matrixWorld:{
        index : 0,
        bindType : BindType.buffer,
        visibility: GPUShaderStage.VERTEX
    } as BindShaderItem
}