import { GPUAddressMode, GPUFilterMode, GPUMipmapFilterMode, GPUTextureFormat } from "../Constants";
import { Size } from "../core/Defines";
import { Texture } from "./Texture";

export class DepthTexture extends Texture {
    constructor(
        size: Size,
        wrapU: GPUAddressMode = GPUAddressMode.ClampToEdge,
        wrapV: GPUAddressMode = GPUAddressMode.ClampToEdge,
        wrapW: GPUAddressMode = GPUAddressMode.ClampToEdge,
        magFilter: GPUFilterMode = GPUFilterMode.Linear,
        minFilter: GPUFilterMode = GPUFilterMode.Linear,
        mipmapFilter: GPUMipmapFilterMode = GPUMipmapFilterMode.Linear,
        format: GPUTextureFormat = GPUTextureFormat.Depth24Plus,
        anisotropy = 1
    ) {
        format = format !== undefined ? format : GPUTextureFormat.Depth24Plus;

        super(size, wrapU, wrapV, wrapW, magFilter, minFilter, mipmapFilter, format, anisotropy);
    }
}
