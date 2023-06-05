import { BindType, GPUVertexFormat } from "../Constants";

export class Context{
    private static _activeDevice:GPUDevice;
    public static get activeDevice(): GPUDevice{
        return Context._activeDevice;
    }

    public static set activeDevice(v:GPUDevice) {

        Context._activeDevice = v;

        GlobalGroupLayoutInfo.projectionMatrix.flags = GPUShaderStage.VERTEX;
        GlobalGroupLayoutInfo.matrixWorldInverse.flags = GPUShaderStage.VERTEX;
        ObjectGroupLayoutInfo.matrixWorld.flags = GPUShaderStage.VERTEX;
    }
}

export const BindGroupLayoutIndexInfo = {
    global : 0,
    material : 1,
    object : 2,
    custom : 3
}

export const GlobalGroupLayoutInfo = {
    projectionMatrix:{
        binding : 0,
        flags : 0,
    },
    matrixWorldInverse:{
        binding : 1,
        flags : 0
    }
}

export const ObjectGroupLayoutInfo = {
    matrixWorld:{
        binding : 0,
        flags : 0
    }
}

export const VertexBufferLayoutInfo = {
	position:{
		byteLength:4,
		itemSize:3,
		format:GPUVertexFormat.Float32x3
	},
	normal:{
		byteLength:4,
		itemSize:3,
		format:GPUVertexFormat.Float32x3
	},
	uv:{
		byteLength:4,
		itemSize:2,
		format:GPUVertexFormat.Float32x2
	}
};

export interface ShaderItem {
    index: number;
    itemSize?:number
}

export interface AttributeShaderItem extends ShaderItem {
    size:number
}

export interface BindShaderItem extends ShaderItem {
    bindType?:BindType,
}