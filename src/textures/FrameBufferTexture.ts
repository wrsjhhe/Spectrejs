import { GPUAddressMode, GPUFilterMode, GPUMipmapFilterMode, GPUTextureFormat } from "../Constants";
import { Size } from "../core/Defines";
import { Texture } from "./Texture";

export class FrameBufferTexture extends Texture {
    constructor(
        size: Size,
        wrapU: GPUAddressMode = GPUAddressMode.ClampToEdge,
        wrapV: GPUAddressMode = GPUAddressMode.ClampToEdge,
        wrapW: GPUAddressMode = GPUAddressMode.ClampToEdge,
        magFilter: GPUFilterMode = GPUFilterMode.Linear,
        minFilter: GPUFilterMode = GPUFilterMode.Linear,
        mipmapFilter: GPUMipmapFilterMode = GPUMipmapFilterMode.Linear,
        format: GPUTextureFormat = GPUTextureFormat.BGRA8Unorm,
        anisotropy = 1
    ) {
        super(size, wrapU, wrapV, wrapW, magFilter, minFilter, mipmapFilter, format, anisotropy);
    }
}
