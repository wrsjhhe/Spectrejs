import { GPUFilterMode, GPUTextureFormat } from "../Constants";
import { Texture } from "./Texture";

export class DepthTexture extends Texture {
    public flipY: boolean;
    public magFilter: GPUFilterMode;
    public minFilter: GPUFilterMode;
    public generateMipmaps: boolean;
    public format: GPUTextureFormat;

    constructor(
        width: number,
        height: number,
        wrapU?: GPUAddressMode,
        wrapV?: GPUAddressMode,
        wrapW?: GPUAddressMode,
        magFilter?: GPUFilterMode,
        minFilter?: GPUFilterMode,
        mipmapFilter?: GPUMipmapFilterMode,
        anisotropy?: number,
        format?: GPUTextureFormat
    ) {
        format = format !== undefined ? format : GPUTextureFormat.Depth24Plus;

        super(null, wrapU, wrapV, wrapW, magFilter, minFilter, mipmapFilter, format, anisotropy);

        this.image = { width: width, height: height };

        this.magFilter = magFilter !== undefined ? magFilter : GPUFilterMode.Nearest;
        this.minFilter = minFilter !== undefined ? minFilter : GPUFilterMode.Nearest;

        this.flipY = false;
        this.generateMipmaps = false;
    }
}
