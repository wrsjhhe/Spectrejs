/* eslint-disable no-unused-vars */
export type NumberArrayType = Float32Array | Int32Array | Int8Array | Uint32Array | Uint16Array | Uint8Array;

export const GPUPrimitiveTopology = {
    PointList: "point-list" as GPUPrimitiveTopology,
    LineList: "line-list" as GPUPrimitiveTopology,
    LineStrip: "line-strip" as GPUPrimitiveTopology,
    TriangleList: "triangle-list" as GPUPrimitiveTopology,
    TriangleStrip: "triangle-strip" as GPUPrimitiveTopology,
};

export const GPUCompareFunction = {
    Never: "never" as GPUCompareFunction,
    Less: "less" as GPUCompareFunction,
    Equal: "equal" as GPUCompareFunction,
    LessEqual: "less-equal" as GPUCompareFunction,
    Greater: "greater" as GPUCompareFunction,
    NotEqual: "not-equal" as GPUCompareFunction,
    GreaterEqual: "greater-equal" as GPUCompareFunction,
    Always: "always" as GPUCompareFunction,
};

export const GPUStoreOp = {
    Store: "store",
    Discard: "discard",
};

export const GPULoadOp = {
    Load: "load",
    Clear: "clear",
};

export const GPUFrontFace = {
    CCW: "ccw",
    CW: "cw",
};

export const GPUCullMode = {
    None: "none" as GPUCullMode,
    Front: "front" as GPUCullMode,
    Back: "back" as GPUCullMode,
};

export const GPUIndexFormat = {
    Uint16: "uint16" as GPUIndexFormat,
    Uint32: "uint32" as GPUIndexFormat,
};

export const GPUVertexFormat = {
    Uint8x2: "uint8x2" as GPUVertexFormat,
    Uint8x4: "uint8x4" as GPUVertexFormat,
    Sint8x2: "sint8x2" as GPUVertexFormat,
    Sint8x4: "sint8x4" as GPUVertexFormat,
    Unorm8x2: "unorm8x2" as GPUVertexFormat,
    Unorm8x4: "unorm8x4" as GPUVertexFormat,
    Snorm8x2: "snorm8x2" as GPUVertexFormat,
    Snorm8x4: "snorm8x4" as GPUVertexFormat,
    Uint16x2: "uint16x2" as GPUVertexFormat,
    Uint16x4: "uint16x4" as GPUVertexFormat,
    Sint16x2: "sint16x2" as GPUVertexFormat,
    Sint16x4: "sint16x4" as GPUVertexFormat,
    Unorm16x2: "unorm16x2" as GPUVertexFormat,
    Unorm16x4: "unorm16x4" as GPUVertexFormat,
    Snorm16x2: "snorm16x2" as GPUVertexFormat,
    Snorm16x4: "snorm16x4" as GPUVertexFormat,
    Float16x2: "float16x2" as GPUVertexFormat,
    Float16x4: "float16x4" as GPUVertexFormat,
    Float32: "float32" as GPUVertexFormat,
    Float32x2: "float32x2" as GPUVertexFormat,
    Float32x3: "float32x3" as GPUVertexFormat,
    Float32x4: "float32x4" as GPUVertexFormat,
    Uint32: "uint32" as GPUVertexFormat,
    Uint32x2: "uint32x2" as GPUVertexFormat,
    Uint32x3: "uint32x3" as GPUVertexFormat,
    Uint32x4: "uint32x4" as GPUVertexFormat,
    Sint32: "sint32" as GPUVertexFormat,
    Sint32x2: "sint32x2" as GPUVertexFormat,
    Sint32x3: "sint32x3" as GPUVertexFormat,
    Sint32x4: "sint32x4" as GPUVertexFormat,
};

export const GPUTextureFormat = {
    // 8-bit formats

    R8Unorm: "r8unorm" as GPUTextureFormat,
    R8Snorm: "r8snorm",
    R8Uint: "r8uint",
    R8Sint: "r8sint",

    // 16-bit formats

    R16Uint: "r16uint" as GPUTextureFormat,
    R16Sint: "r16sint" as GPUTextureFormat,
    R16Float: "r16float" as GPUTextureFormat,
    RG8Unorm: "rg8unorm" as GPUTextureFormat,
    RG8Snorm: "rg8snorm" as GPUTextureFormat,
    RG8Uint: "rg8uint" as GPUTextureFormat,
    RG8Sint: "rg8sint" as GPUTextureFormat,

    // 32-bit formats

    R32Uint: "r32uint" as GPUTextureFormat,
    R32Sint: "r32sint" as GPUTextureFormat,
    R32Float: "r32float" as GPUTextureFormat,
    RG16Uint: "rg16uint" as GPUTextureFormat,
    RG16Sint: "rg16sint" as GPUTextureFormat,
    RG16Float: "rg16float" as GPUTextureFormat,
    RGBA8Unorm: "rgba8unorm" as GPUTextureFormat,
    RGBA8UnormSRGB: "rgba8unorm-srgb" as GPUTextureFormat,
    RGBA8Snorm: "rgba8snorm" as GPUTextureFormat,
    RGBA8Uint: "rgba8uint" as GPUTextureFormat,
    RGBA8Sint: "rgba8sint" as GPUTextureFormat,
    BGRA8Unorm: "bgra8unorm" as GPUTextureFormat,
    BGRA8UnormSRGB: "bgra8unorm-srgb" as GPUTextureFormat,
    // Packed 32-bit formats
    RGB9E5UFloat: "rgb9e5ufloat" as GPUTextureFormat,
    RGB10A2Unorm: "rgb10a2unorm" as GPUTextureFormat,
    RG11B10uFloat: "rgb10a2unorm" as GPUTextureFormat,

    // 64-bit formats

    RG32Uint: "rg32uint" as GPUTextureFormat,
    RG32Sint: "rg32sint" as GPUTextureFormat,
    RG32Float: "rg32float" as GPUTextureFormat,
    RGBA16Uint: "rgba16uint" as GPUTextureFormat,
    RGBA16Sint: "rgba16sint" as GPUTextureFormat,
    RGBA16Float: "rgba16float" as GPUTextureFormat,

    // 128-bit formats

    RGBA32Uint: "rgba32uint" as GPUTextureFormat,
    RGBA32Sint: "rgba32sint" as GPUTextureFormat,
    RGBA32Float: "rgba32float" as GPUTextureFormat,

    // Depth and stencil formats

    Stencil8: "stencil8" as GPUTextureFormat,
    Depth16Unorm: "depth16unorm" as GPUTextureFormat,
    Depth24Plus: "depth24plus" as GPUTextureFormat,
    Depth24PlusStencil8: "depth24plus-stencil8" as GPUTextureFormat,
    Depth32Float: "depth32float" as GPUTextureFormat,

    // BC compressed formats usable if 'texture-compression-bc' is both
    // supported by the device/user agent and enabled in requestDevice.

    BC1RGBAUnorm: "bc1-rgba-unorm" as GPUTextureFormat,
    BC1RGBAUnormSRGB: "bc1-rgba-unorm-srgb" as GPUTextureFormat,
    BC2RGBAUnorm: "bc2-rgba-unorm" as GPUTextureFormat,
    BC2RGBAUnormSRGB: "bc2-rgba-unorm-srgb" as GPUTextureFormat,
    BC3RGBAUnorm: "bc3-rgba-unorm" as GPUTextureFormat,
    BC3RGBAUnormSRGB: "bc3-rgba-unorm-srgb" as GPUTextureFormat,
    BC4RUnorm: "bc4-r-unorm" as GPUTextureFormat,
    BC4RSNorm: "bc4-r-snorm" as GPUTextureFormat,
    BC5RGUnorm: "bc5-rg-unorm" as GPUTextureFormat,
    BC5RGSnorm: "bc5-rg-snorm" as GPUTextureFormat,
    BC6HRGBUFloat: "bc6h-rgb-ufloat" as GPUTextureFormat,
    BC6HRGBFloat: "bc6h-rgb-float" as GPUTextureFormat,
    BC7RGBAUnorm: "bc7-rgba-unorm" as GPUTextureFormat,
    BC7RGBAUnormSRGB: "bc7-rgba-srgb" as GPUTextureFormat,

    // 'depth24unorm-stencil8' extension

    Depth24UnormStencil8: "depth24unorm-stencil8" as GPUTextureFormat,

    // 'depth32float-stencil8' extension

    Depth32FloatStencil8: "depth32float-stencil8" as GPUTextureFormat,
};

export const GPUAddressMode = {
    ClampToEdge: "clamp-to-edge" as GPUAddressMode,
    Repeat: "repeat" as GPUAddressMode,
    MirrorRepeat: "mirror-repeat" as GPUAddressMode,
};

export const GPUFilterMode = {
    Linear: "linear" as GPUFilterMode,
    Nearest: "nearest" as GPUFilterMode,
};

export const GPUMipmapFilterMode = {
    Linear: "linear" as GPUMipmapFilterMode,
    Nearest: "nearest" as GPUMipmapFilterMode,
};

export const GPUBlendFactor = {
    Zero: "zero" as GPUBlendFactor,
    One: "one" as GPUBlendFactor,
    SrcColor: "src-color" as GPUBlendFactor,
    OneMinusSrcColor: "one-minus-src-color" as GPUBlendFactor,
    SrcAlpha: "src-alpha" as GPUBlendFactor,
    OneMinusSrcAlpha: "one-minus-src-alpha" as GPUBlendFactor,
    DstColor: "dst-color" as GPUBlendFactor,
    OneMinusDstColor: "one-minus-dst-color" as GPUBlendFactor,
    DstAlpha: "dst-alpha" as GPUBlendFactor,
    OneMinusDstAlpha: "one-minus-dst-alpha" as GPUBlendFactor,
    SrcAlphaSaturated: "src-alpha-saturated" as GPUBlendFactor,
    BlendColor: "blend-color" as GPUBlendFactor,
    OneMinusBlendColor: "one-minus-blend-color" as GPUBlendFactor,
};

export const GPUBlendOperation = {
    Add: "add",
    Subtract: "subtract",
    ReverseSubtract: "reverse-subtract",
    Min: "min",
    Max: "max",
};

export const GPUColorWriteFlags = {
    None: 0,
    Red: 0x1,
    Green: 0x2,
    Blue: 0x4,
    Alpha: 0x8,
    All: 0xf,
};

export const GPUStencilOperation = {
    Keep: "keep",
    Zero: "zero",
    Replace: "replace",
    Invert: "invert",
    IncrementClamp: "increment-clamp",
    DecrementClamp: "decrement-clamp",
    IncrementWrap: "increment-wrap",
    DecrementWrap: "decrement-wrap",
};

export const GPUBindingType = {
    UniformBuffer: "uniform-buffer",
    StorageBuffer: "storage-buffer",
    ReadonlyStorageBuffer: "readonly-storage-buffer",
    Sampler: "sampler",
    ComparisonSampler: "comparison-sampler",
    SampledTexture: "sampled-texture",
    MultisampledTexture: "multisampled-texture",
    ReadonlyStorageTexture: "readonly-storage-texture",
    WriteonlyStorageTexture: "writeonly-storage-texture",
};

export const GPUTextureDimension = {
    OneD: "1d",
    TwoD: "2d",
    ThreeD: "3d",
};

export const GPUTextureViewDimension = {
    OneD: "1d",
    TwoD: "2d",
    TwoDArray: "2d-array",
    Cube: "cube",
    CubeArray: "cube-array",
    ThreeD: "3d",
};

export const GPUInputStepMode = {
    Vertex: "vertex",
    Instance: "instance",
};

export const GPUSamplerBindingType = {
    Filtering: "filtering" as GPUSamplerBindingType,
    NonFiltering: "non-filtering" as GPUSamplerBindingType,
    Comparison: "comparison" as GPUSamplerBindingType,
};

export const GPUBufferBindingType = {
    Uniform: "uniform" as GPUBufferBindingType,
    Storage: "storage" as GPUBufferBindingType,
    ReadOnlyStorage: "read-only-storage" as GPUBufferBindingType,
};

export const GPUChunkSize = 16; // size of a chunk in bytes (STD140 layout)

export const BlendColorFactor = 211;
export const OneMinusBlendColorFactor = 212;

export const GPUMapModeFlags = {
    Read: 0x0001,
    Write: 0x0002,
};

export enum MOUSE {
    LEFT = 0,
    MIDDLE = 1,
    RIGHT = 2,
    ROTATE = 0,
    DOLLY = 1,
    PAN = 2,
}

export enum TOUCH {
    ROTATE = 0,
    PAN = 1,
    DOLLY_PAN = 2,
    DOLLY_ROTATE = 3,
}
