import {
    DeepTexturePixelFormat,
    DepthFormat,
    DepthStencilFormat,
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
    public magFilter: MagnificationTextureFilter;
    public minFilter: MinificationTextureFilter;
    public generateMipmaps: boolean;
    public format: DeepTexturePixelFormat;
    public type: TextureDataType;

    constructor(
        width: number,
        height: number,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        anisotropy?: number,
        format?: DeepTexturePixelFormat
    ) {
        format = format !== undefined ? format : DepthFormat;

        if (type === undefined && format === DepthFormat)
            type = UnsignedIntType;
        if (type === undefined && format === DepthStencilFormat)
            type = UnsignedInt248Type;

        super(
            null,
            mapping,
            wrapS,
            wrapT,
            magFilter,
            minFilter,
            format,
            type,
            anisotropy
        );

        this.image = { width: width, height: height };

        this.magFilter = magFilter !== undefined ? magFilter : NearestFilter;
        this.minFilter = minFilter !== undefined ? minFilter : NearestFilter;

        this.flipY = false;
        this.generateMipmaps = false;
    }
}
