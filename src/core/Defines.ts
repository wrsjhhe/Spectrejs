/* eslint-disable no-unused-vars */

import { GPUBufferBindingType, GPUSamplerBindingType } from "../Constants";

export const BindGroupLayoutIndexInfo = {
    global: 0,
    material: 1,
    object: 2,
    custom: 3,
};

export enum BindType {
    buffer = 1,
    storage = 2,
    sampler = 3,
    texture = 4,
}

export interface ShaderItem {
    name: string;
    index: number;
    shaderItemType: string;
}

export interface AttributeShaderItem extends ShaderItem {
    format: GPUVertexFormat;
    itemSize: number;
}

export interface BindShaderItem extends ShaderItem {
    bindType: BindType;
    visibility: GPUShaderStageFlags;
}

export const ObjectGroupLayoutInfo = {
    matrixWorld: {
        index: 0,
        bindType: BindType.buffer,
        visibility: GPUShaderStage.VERTEX,
    } as BindShaderItem,
    normalMatrix: {
        index: 1,
        bindType: BindType.buffer,
        visibility: GPUShaderStage.VERTEX,
    } as BindShaderItem,
};

export function getLayoutEntity(item: BindShaderItem) {
    if (item.bindType === BindType.buffer) {
        return {
            binding: item.index,
            visibility: item.visibility,
            buffer: {
                type: GPUBufferBindingType.Uniform,
            },
        } as GPUBindGroupLayoutEntry;
    } else if (item.bindType === BindType.sampler) {
        return {
            binding: item.index,
            visibility: item.visibility,
            sampler: {
                type: GPUSamplerBindingType.Filtering,
            },
        } as GPUBindGroupLayoutEntry;
    } else if (item.bindType === BindType.texture) {
        return {
            binding: item.index,
            visibility: item.visibility,
            texture: {},
        } as GPUBindGroupLayoutEntry;
    }
}
