import {
    DeepTexturePixelFormat,
    DepthFormat,
    DepthStencilFormat,
    GPUFilterMode,
    GPUTextureFormat,
    MagnificationTextureFilter,
    Mapping,
    MinificationTextureFilter,
    NearestFilter,
    TextureDataType,
    UnsignedInt248Type,
    UnsignedIntType,
    Wrapping,
} from "../Constants";
import { Texture } from "./Texture";

export class DepthTexture extends Texture {
    public flipY: boolean;
    public magFilter: GPUFilterMode;
    public minFilter: GPUFilterMode;
    public generateMipmaps: boolean;
    public format: GPUTextureFormat;
    public type: TextureDataType;

    constructor(
        width: number,
        height: number,
        type?: TextureDataType,
        mapping?: Mapping,
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

        if (type === undefined && format === GPUTextureFormat.Depth24Plus) type = UnsignedIntType;
        if (type === undefined && format === GPUTextureFormat.Depth24PlusStencil8) type = UnsignedInt248Type;

        super(null, mapping, wrapU, wrapV, wrapW, magFilter, minFilter, mipmapFilter, format, type, anisotropy);

        this.image = { width: width, height: height };

        this.magFilter = magFilter !== undefined ? magFilter : GPUFilterMode.Nearest;
        this.minFilter = minFilter !== undefined ? minFilter : GPUFilterMode.Nearest;

        this.flipY = false;
        this.generateMipmaps = false;
    }
}
