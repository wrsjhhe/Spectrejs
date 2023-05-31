import { GPUVertexFormat } from "../Constants";

export class Environment{
    public static activeDevice : GPUDevice;
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
        flags : GPUShaderStage.VERTEX,
    },
    matrixWorldInverse:{
        binding : 1,
        flags : GPUShaderStage.VERTEX
    }
}

export const ObjectGroupLayoutInfo = {
    matrixWorld:{
        binding : 0,
        flags : GPUShaderStage.VERTEX
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