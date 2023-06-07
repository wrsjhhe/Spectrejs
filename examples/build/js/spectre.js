/******/ var __webpack_modules__ = ({

/***/ "./src/Constants.ts":
/*!**************************!*\
  !*** ./src/Constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlphaFormat: () => (/* binding */ AlphaFormat),
/* harmony export */   BlendColorFactor: () => (/* binding */ BlendColorFactor),
/* harmony export */   ByteType: () => (/* binding */ ByteType),
/* harmony export */   ClampToEdgeWrapping: () => (/* binding */ ClampToEdgeWrapping),
/* harmony export */   CubeReflectionMapping: () => (/* binding */ CubeReflectionMapping),
/* harmony export */   CubeRefractionMapping: () => (/* binding */ CubeRefractionMapping),
/* harmony export */   CubeUVReflectionMapping: () => (/* binding */ CubeUVReflectionMapping),
/* harmony export */   DepthFormat: () => (/* binding */ DepthFormat),
/* harmony export */   DepthStencilFormat: () => (/* binding */ DepthStencilFormat),
/* harmony export */   EquirectangularReflectionMapping: () => (/* binding */ EquirectangularReflectionMapping),
/* harmony export */   EquirectangularRefractionMapping: () => (/* binding */ EquirectangularRefractionMapping),
/* harmony export */   FloatType: () => (/* binding */ FloatType),
/* harmony export */   GPUAddressMode: () => (/* binding */ GPUAddressMode),
/* harmony export */   GPUBindingType: () => (/* binding */ GPUBindingType),
/* harmony export */   GPUBlendFactor: () => (/* binding */ GPUBlendFactor),
/* harmony export */   GPUBlendOperation: () => (/* binding */ GPUBlendOperation),
/* harmony export */   GPUBufferBindingType: () => (/* binding */ GPUBufferBindingType),
/* harmony export */   GPUChunkSize: () => (/* binding */ GPUChunkSize),
/* harmony export */   GPUColorWriteFlags: () => (/* binding */ GPUColorWriteFlags),
/* harmony export */   GPUCompareFunction: () => (/* binding */ GPUCompareFunction),
/* harmony export */   GPUCullMode: () => (/* binding */ GPUCullMode),
/* harmony export */   GPUFilterMode: () => (/* binding */ GPUFilterMode),
/* harmony export */   GPUFrontFace: () => (/* binding */ GPUFrontFace),
/* harmony export */   GPUIndexFormat: () => (/* binding */ GPUIndexFormat),
/* harmony export */   GPUInputStepMode: () => (/* binding */ GPUInputStepMode),
/* harmony export */   GPULoadOp: () => (/* binding */ GPULoadOp),
/* harmony export */   GPUMapModeFlags: () => (/* binding */ GPUMapModeFlags),
/* harmony export */   GPUPrimitiveTopology: () => (/* binding */ GPUPrimitiveTopology),
/* harmony export */   GPUSamplerBindingType: () => (/* binding */ GPUSamplerBindingType),
/* harmony export */   GPUStencilOperation: () => (/* binding */ GPUStencilOperation),
/* harmony export */   GPUStoreOp: () => (/* binding */ GPUStoreOp),
/* harmony export */   GPUTextureDimension: () => (/* binding */ GPUTextureDimension),
/* harmony export */   GPUTextureFormat: () => (/* binding */ GPUTextureFormat),
/* harmony export */   GPUTextureViewDimension: () => (/* binding */ GPUTextureViewDimension),
/* harmony export */   GPUVertexFormat: () => (/* binding */ GPUVertexFormat),
/* harmony export */   HalfFloatType: () => (/* binding */ HalfFloatType),
/* harmony export */   IntType: () => (/* binding */ IntType),
/* harmony export */   LinearFilter: () => (/* binding */ LinearFilter),
/* harmony export */   LinearMipMapLinearFilter: () => (/* binding */ LinearMipMapLinearFilter),
/* harmony export */   LinearMipMapNearestFilter: () => (/* binding */ LinearMipMapNearestFilter),
/* harmony export */   LinearMipmapLinearFilter: () => (/* binding */ LinearMipmapLinearFilter),
/* harmony export */   LinearMipmapNearestFilter: () => (/* binding */ LinearMipmapNearestFilter),
/* harmony export */   LuminanceAlphaFormat: () => (/* binding */ LuminanceAlphaFormat),
/* harmony export */   LuminanceFormat: () => (/* binding */ LuminanceFormat),
/* harmony export */   MOUSE: () => (/* binding */ MOUSE),
/* harmony export */   MirroredRepeatWrapping: () => (/* binding */ MirroredRepeatWrapping),
/* harmony export */   NearestFilter: () => (/* binding */ NearestFilter),
/* harmony export */   NearestMipMapLinearFilter: () => (/* binding */ NearestMipMapLinearFilter),
/* harmony export */   NearestMipMapNearestFilter: () => (/* binding */ NearestMipMapNearestFilter),
/* harmony export */   NearestMipmapLinearFilter: () => (/* binding */ NearestMipmapLinearFilter),
/* harmony export */   NearestMipmapNearestFilter: () => (/* binding */ NearestMipmapNearestFilter),
/* harmony export */   NoColorSpace: () => (/* binding */ NoColorSpace),
/* harmony export */   OneMinusBlendColorFactor: () => (/* binding */ OneMinusBlendColorFactor),
/* harmony export */   RGBAFormat: () => (/* binding */ RGBAFormat),
/* harmony export */   RGBAIntegerFormat: () => (/* binding */ RGBAIntegerFormat),
/* harmony export */   RGFormat: () => (/* binding */ RGFormat),
/* harmony export */   RGIntegerFormat: () => (/* binding */ RGIntegerFormat),
/* harmony export */   RedFormat: () => (/* binding */ RedFormat),
/* harmony export */   RedIntegerFormat: () => (/* binding */ RedIntegerFormat),
/* harmony export */   RepeatWrapping: () => (/* binding */ RepeatWrapping),
/* harmony export */   ShortType: () => (/* binding */ ShortType),
/* harmony export */   TOUCH: () => (/* binding */ TOUCH),
/* harmony export */   UVMapping: () => (/* binding */ UVMapping),
/* harmony export */   UnsignedByteType: () => (/* binding */ UnsignedByteType),
/* harmony export */   UnsignedInt248Type: () => (/* binding */ UnsignedInt248Type),
/* harmony export */   UnsignedIntType: () => (/* binding */ UnsignedIntType),
/* harmony export */   UnsignedShort4444Type: () => (/* binding */ UnsignedShort4444Type),
/* harmony export */   UnsignedShort5551Type: () => (/* binding */ UnsignedShort5551Type),
/* harmony export */   UnsignedShortType: () => (/* binding */ UnsignedShortType)
/* harmony export */ });
const GPUPrimitiveTopology = {
    PointList: 'point-list',
    LineList: 'line-list',
    LineStrip: 'line-strip',
    TriangleList: 'triangle-list',
    TriangleStrip: 'triangle-strip',
};
const GPUCompareFunction = {
    Never: 'never',
    Less: 'less',
    Equal: 'equal',
    LessEqual: 'less-equal',
    Greater: 'greater',
    NotEqual: 'not-equal',
    GreaterEqual: 'greater-equal',
    Always: 'always'
};
const GPUStoreOp = {
    Store: 'store',
    Discard: 'discard'
};
const GPULoadOp = {
    Load: 'load',
    Clear: 'clear'
};
const GPUFrontFace = {
    CCW: 'ccw',
    CW: 'cw'
};
const GPUCullMode = {
    None: 'none',
    Front: 'front',
    Back: 'back'
};
const GPUIndexFormat = {
    Uint16: 'uint16',
    Uint32: 'uint32'
};
const GPUVertexFormat = {
    Uint8x2: 'uint8x2',
    Uint8x4: 'uint8x4',
    Sint8x2: 'sint8x2',
    Sint8x4: 'sint8x4',
    Unorm8x2: 'unorm8x2',
    Unorm8x4: 'unorm8x4',
    Snorm8x2: 'snorm8x2',
    Snorm8x4: 'snorm8x4',
    Uint16x2: 'uint16x2',
    Uint16x4: 'uint16x4',
    Sint16x2: 'sint16x2',
    Sint16x4: 'sint16x4',
    Unorm16x2: 'unorm16x2',
    Unorm16x4: 'unorm16x4',
    Snorm16x2: 'snorm16x2',
    Snorm16x4: 'snorm16x4',
    Float16x2: 'float16x2',
    Float16x4: 'float16x4',
    Float32: 'float32',
    Float32x2: 'float32x2',
    Float32x3: 'float32x3',
    Float32x4: 'float32x4',
    Uint32: 'uint32',
    Uint32x2: 'uint32x2',
    Uint32x3: 'uint32x3',
    Uint32x4: 'uint32x4',
    Sint32: 'sint32',
    Sint32x2: 'sint32x2',
    Sint32x3: 'sint32x3',
    Sint32x4: 'sint32x4'
};
const GPUTextureFormat = {
    // 8-bit formats
    R8Unorm: 'r8unorm',
    R8Snorm: 'r8snorm',
    R8Uint: 'r8uint',
    R8Sint: 'r8sint',
    // 16-bit formats
    R16Uint: 'r16uint',
    R16Sint: 'r16sint',
    R16Float: 'r16float',
    RG8Unorm: 'rg8unorm',
    RG8Snorm: 'rg8snorm',
    RG8Uint: 'rg8uint',
    RG8Sint: 'rg8sint',
    // 32-bit formats
    R32Uint: 'r32uint',
    R32Sint: 'r32sint',
    R32Float: 'r32float',
    RG16Uint: 'rg16uint',
    RG16Sint: 'rg16sint',
    RG16Float: 'rg16float',
    RGBA8Unorm: 'rgba8unorm',
    RGBA8UnormSRGB: 'rgba8unorm-srgb',
    RGBA8Snorm: 'rgba8snorm',
    RGBA8Uint: 'rgba8uint',
    RGBA8Sint: 'rgba8sint',
    BGRA8Unorm: 'bgra8unorm',
    BGRA8UnormSRGB: 'bgra8unorm-srgb',
    // Packed 32-bit formats
    RGB9E5UFloat: 'rgb9e5ufloat',
    RGB10A2Unorm: 'rgb10a2unorm',
    RG11B10uFloat: 'rgb10a2unorm',
    // 64-bit formats
    RG32Uint: 'rg32uint',
    RG32Sint: 'rg32sint',
    RG32Float: 'rg32float',
    RGBA16Uint: 'rgba16uint',
    RGBA16Sint: 'rgba16sint',
    RGBA16Float: 'rgba16float',
    // 128-bit formats
    RGBA32Uint: 'rgba32uint',
    RGBA32Sint: 'rgba32sint',
    RGBA32Float: 'rgba32float',
    // Depth and stencil formats
    Stencil8: 'stencil8',
    Depth16Unorm: 'depth16unorm',
    Depth24Plus: 'depth24plus',
    Depth24PlusStencil8: 'depth24plus-stencil8',
    Depth32Float: 'depth32float',
    // BC compressed formats usable if 'texture-compression-bc' is both
    // supported by the device/user agent and enabled in requestDevice.
    BC1RGBAUnorm: 'bc1-rgba-unorm',
    BC1RGBAUnormSRGB: 'bc1-rgba-unorm-srgb',
    BC2RGBAUnorm: 'bc2-rgba-unorm',
    BC2RGBAUnormSRGB: 'bc2-rgba-unorm-srgb',
    BC3RGBAUnorm: 'bc3-rgba-unorm',
    BC3RGBAUnormSRGB: 'bc3-rgba-unorm-srgb',
    BC4RUnorm: 'bc4-r-unorm',
    BC4RSNorm: 'bc4-r-snorm',
    BC5RGUnorm: 'bc5-rg-unorm',
    BC5RGSnorm: 'bc5-rg-snorm',
    BC6HRGBUFloat: 'bc6h-rgb-ufloat',
    BC6HRGBFloat: 'bc6h-rgb-float',
    BC7RGBAUnorm: 'bc7-rgba-unorm',
    BC7RGBAUnormSRGB: 'bc7-rgba-srgb',
    // 'depth24unorm-stencil8' extension
    Depth24UnormStencil8: 'depth24unorm-stencil8',
    // 'depth32float-stencil8' extension
    Depth32FloatStencil8: 'depth32float-stencil8',
};
const GPUAddressMode = {
    ClampToEdge: 'clamp-to-edge',
    Repeat: 'repeat',
    MirrorRepeat: 'mirror-repeat'
};
const GPUFilterMode = {
    Linear: 'linear',
    Nearest: 'nearest'
};
const GPUBlendFactor = {
    Zero: 'zero',
    One: 'one',
    SrcColor: 'src-color',
    OneMinusSrcColor: 'one-minus-src-color',
    SrcAlpha: 'src-alpha',
    OneMinusSrcAlpha: 'one-minus-src-alpha',
    DstColor: 'dst-color',
    OneMinusDstColor: 'one-minus-dst-color',
    DstAlpha: 'dst-alpha',
    OneMinusDstAlpha: 'one-minus-dst-alpha',
    SrcAlphaSaturated: 'src-alpha-saturated',
    BlendColor: 'blend-color',
    OneMinusBlendColor: 'one-minus-blend-color'
};
const GPUBlendOperation = {
    Add: 'add',
    Subtract: 'subtract',
    ReverseSubtract: 'reverse-subtract',
    Min: 'min',
    Max: 'max'
};
const GPUColorWriteFlags = {
    None: 0,
    Red: 0x1,
    Green: 0x2,
    Blue: 0x4,
    Alpha: 0x8,
    All: 0xF
};
const GPUStencilOperation = {
    Keep: 'keep',
    Zero: 'zero',
    Replace: 'replace',
    Invert: 'invert',
    IncrementClamp: 'increment-clamp',
    DecrementClamp: 'decrement-clamp',
    IncrementWrap: 'increment-wrap',
    DecrementWrap: 'decrement-wrap'
};
const GPUBindingType = {
    UniformBuffer: 'uniform-buffer',
    StorageBuffer: 'storage-buffer',
    ReadonlyStorageBuffer: 'readonly-storage-buffer',
    Sampler: 'sampler',
    ComparisonSampler: 'comparison-sampler',
    SampledTexture: 'sampled-texture',
    MultisampledTexture: 'multisampled-texture',
    ReadonlyStorageTexture: 'readonly-storage-texture',
    WriteonlyStorageTexture: 'writeonly-storage-texture'
};
const GPUTextureDimension = {
    OneD: '1d',
    TwoD: '2d',
    ThreeD: '3d'
};
const GPUTextureViewDimension = {
    OneD: '1d',
    TwoD: '2d',
    TwoDArray: '2d-array',
    Cube: 'cube',
    CubeArray: 'cube-array',
    ThreeD: '3d'
};
const GPUInputStepMode = {
    Vertex: 'vertex',
    Instance: 'instance'
};
const GPUSamplerBindingType = {
    Filtering: "filtering",
    NonFiltering: "non-filtering",
    Comparison: "comparison"
};
const GPUBufferBindingType = {
    Uniform: "uniform",
    Storage: "storage",
    ReadOnlyStorage: "read-only-storage"
};
const GPUChunkSize = 16; // size of a chunk in bytes (STD140 layout)
const BlendColorFactor = 211;
const OneMinusBlendColorFactor = 212;
const GPUMapModeFlags = {
    Read: 0x0001,
    Write: 0x0002
};
var MOUSE;
(function (MOUSE) {
    MOUSE[MOUSE["LEFT"] = 0] = "LEFT";
    MOUSE[MOUSE["MIDDLE"] = 1] = "MIDDLE";
    MOUSE[MOUSE["RIGHT"] = 2] = "RIGHT";
    MOUSE[MOUSE["ROTATE"] = 0] = "ROTATE";
    MOUSE[MOUSE["DOLLY"] = 1] = "DOLLY";
    MOUSE[MOUSE["PAN"] = 2] = "PAN";
})(MOUSE || (MOUSE = {}));
var TOUCH;
(function (TOUCH) {
    TOUCH[TOUCH["ROTATE"] = 0] = "ROTATE";
    TOUCH[TOUCH["PAN"] = 1] = "PAN";
    TOUCH[TOUCH["DOLLY_PAN"] = 2] = "DOLLY_PAN";
    TOUCH[TOUCH["DOLLY_ROTATE"] = 3] = "DOLLY_ROTATE";
})(TOUCH || (TOUCH = {}));
const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const AlphaFormat = 1021;
const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBAIntegerFormat = 1033;
const NoColorSpace = '';


/***/ }),

/***/ "./src/cameras/Camera.ts":
/*!*******************************!*\
  !*** ./src/cameras/Camera.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _core_Object3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Object3D */ "./src/core/Object3D.ts");
/* harmony import */ var _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/binds/BindBuffer */ "./src/core/binds/BindBuffer.ts");
/* harmony import */ var _math_Matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Matrix4 */ "./src/math/Matrix4.ts");
/* harmony import */ var _utils_TMPValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/TMPValues */ "./src/utils/TMPValues.ts");




const u_projection = "projectionMatrix";
const u_view = "matrixWorldInverse";
class Camera extends _core_Object3D__WEBPACK_IMPORTED_MODULE_0__.Object3D {
    get type() {
        return "Camera";
    }
    static Is(object) {
        return object instanceof Camera;
    }
    get isCamera() {
        return true;
    }
    constructor() {
        super();
        this.matrixWorldInverse = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_2__.Matrix4();
        this.projectionMatrix = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_2__.Matrix4();
        this.projectionMatrixInverse = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_2__.Matrix4();
        this._uniforms = new Map();
        this.matrixAutoUpdate = true;
        this.matrixWorldNeedsUpdate = true;
        this._initInitialUniform();
    }
    copy(source, recursive = false) {
        super.copy(source, recursive);
        this.matrixWorldInverse.copy(source.matrixWorldInverse);
        this.projectionMatrix.copy(source.projectionMatrix);
        this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
        return this;
    }
    getWorldDirection(target) {
        this.updateWorldMatrix(true, false);
        const e = this.matrixWorld.elements;
        return target.set(-e[8], -e[9], -e[10]).normalize();
    }
    updateMatrixWorld() {
        super.updateMatrixWorld();
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(updateParents = false, updateChildren = false) {
        super.updateWorldMatrix(updateParents, updateChildren);
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
        return new Camera().copy(this);
    }
    update() {
        this.updateWorldMatrix();
        this._updateUniformValue();
    }
    _updateUniformValue() {
        let uniform = this._uniforms.get(u_projection);
        uniform.data = this.projectionMatrix.toArray();
        uniform.update();
        uniform = this._uniforms.get(u_view);
        uniform.data = this.matrixWorldInverse.toArray();
        uniform.update();
    }
    _initInitialUniform() {
        const matrixBuffer = _utils_TMPValues__WEBPACK_IMPORTED_MODULE_3__.IdentifyMatrix4.toArray();
        const projectionUniform = new _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__.BindBuffer(u_projection, matrixBuffer);
        this._uniforms.set(u_projection, projectionUniform);
        const viewUniform = new _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__.BindBuffer(u_view, matrixBuffer);
        this._uniforms.set(u_view, viewUniform);
    }
    get uniforms() {
        return this._uniforms;
    }
}


/***/ }),

/***/ "./src/cameras/OrthographicCamera.ts":
/*!*******************************************!*\
  !*** ./src/cameras/OrthographicCamera.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrthographicCamera: () => (/* binding */ OrthographicCamera)
/* harmony export */ });
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ "./src/cameras/Camera.ts");

class OrthographicCamera extends _Camera__WEBPACK_IMPORTED_MODULE_0__.Camera {
    get type() {
        return "OrthographicCamera";
    }
    static Is(object) {
        return object instanceof OrthographicCamera;
    }
    constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2000) {
        super();
        this.zoom = 1;
        this.left = -1;
        this.right = 1;
        this.top = 1;
        this.bottom = -1;
        this.near = 0.1;
        this.far = 2000;
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
        this.near = near;
        this.far = far;
        this.updateProjectionMatrix();
    }
    copy(source, recursive = false) {
        super.copy(source, recursive);
        this.left = source.left;
        this.right = source.right;
        this.top = source.top;
        this.bottom = source.bottom;
        this.near = source.near;
        this.far = source.far;
        this.zoom = source.zoom;
        this.view = source.view === null ? null : Object.assign({}, source.view);
        return this;
    }
    setViewOffset(fullWidth, fullHeight, x, y, width, height) {
        if (this.view === null) {
            this.view = {
                enabled: true,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            };
        }
        this.view.enabled = true;
        this.view.fullWidth = fullWidth;
        this.view.fullHeight = fullHeight;
        this.view.offsetX = x;
        this.view.offsetY = y;
        this.view.width = width;
        this.view.height = height;
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
        if (this.view !== null) {
            this.view.enabled = false;
        }
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const dx = (this.right - this.left) / (2 * this.zoom);
        const dy = (this.top - this.bottom) / (2 * this.zoom);
        const cx = (this.right + this.left) / 2;
        const cy = (this.top + this.bottom) / 2;
        let left = cx - dx;
        let right = cx + dx;
        let top = cy + dy;
        let bottom = cy - dy;
        if (this.view !== null && this.view.enabled) {
            const scaleW = (this.right - this.left) / this.view.fullWidth / this.zoom;
            const scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            left += scaleW * this.view.offsetX;
            right = left + scaleW * this.view.width;
            top -= scaleH * this.view.offsetY;
            bottom = top - scaleH * this.view.height;
        }
        this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far);
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
}


/***/ }),

/***/ "./src/cameras/PerspectiveCamera.ts":
/*!******************************************!*\
  !*** ./src/cameras/PerspectiveCamera.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerspectiveCamera: () => (/* binding */ PerspectiveCamera)
/* harmony export */ });
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ "./src/cameras/Camera.ts");
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.ts");


class PerspectiveCamera extends _Camera__WEBPACK_IMPORTED_MODULE_0__.Camera {
    get type() {
        return "PerspectiveCamera";
    }
    static Is(object) {
        return object instanceof PerspectiveCamera;
    }
    constructor(fov = 50, aspect = 1, near = 0.1, far = 2000) {
        super();
        this.fov = 50;
        this.aspect = 1;
        this.near = 0.1;
        this.far = 2000;
        this.zoom = 1;
        this.focus = 10;
        this.filmGauge = 35;
        this.filmOffset = 10;
        this.fov = fov;
        this.zoom = 1;
        this.near = near;
        this.far = far;
        this.focus = 10;
        this.aspect = aspect;
        this.view = null;
        this.filmGauge = 35; // width of the film (default in millimeters)
        this.filmOffset = 0; // horizontal film offset (same unit as gauge)
        this.updateProjectionMatrix();
    }
    copy(source, recursive = false) {
        super.copy(source, recursive);
        this.fov = source.fov;
        this.zoom = source.zoom;
        this.near = source.near;
        this.far = source.far;
        this.focus = source.focus;
        this.aspect = source.aspect;
        this.view = source.view === null ? null : Object.assign({}, source.view);
        this.filmGauge = source.filmGauge;
        this.filmOffset = source.filmOffset;
        return this;
    }
    /**
     * Sets the FOV by focal length in respect to the current .filmGauge.
     *
     * The default film gauge is 35, so that the focal length can be specified for
     * a 35mm (full frame) camera.
     *
     * Values for focal length and film gauge must have the same unit.
     */
    setFocalLength(focalLength) {
        /** see {@link http://www.bobatkins.com/photography/technical/field_of_view.html} */
        const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;
        this.fov = _math_MathUtils__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG * 2 * Math.atan(vExtentSlope);
        this.updateProjectionMatrix();
    }
    /**
     * Calculates the focal length from the current .fov and .filmGauge.
     */
    getFocalLength() {
        const vExtentSlope = Math.tan(_math_MathUtils__WEBPACK_IMPORTED_MODULE_1__.DEG2RAD * 0.5 * this.fov);
        return 0.5 * this.getFilmHeight() / vExtentSlope;
    }
    getEffectiveFOV() {
        return _math_MathUtils__WEBPACK_IMPORTED_MODULE_1__.RAD2DEG * 2 * Math.atan(Math.tan(_math_MathUtils__WEBPACK_IMPORTED_MODULE_1__.DEG2RAD * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
        // film not completely covered in portrait format (aspect < 1)
        return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
        // film not completely covered in landscape format (aspect > 1)
        return this.filmGauge / Math.max(this.aspect, 1);
    }
    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or
     * multi-monitor/multi-machine setups.
     *
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
     * the monitors are in grid like this
     *
     *   +---+---+---+
     *   | A | B | C |
     *   +---+---+---+
     *   | D | E | F |
     *   +---+---+---+
     *
     * then for each monitor you would call it like this
     *
     *   const w = 1920;
     *   const h = 1080;
     *   const fullWidth = w * 3;
     *   const fullHeight = h * 2;
     *
     *   --A--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     *   --B--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     *   --C--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     *   --D--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     *   --E--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     *   --F--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
     *
     *   Note there is no reason monitors have to be the same size or in a grid.
     */
    setViewOffset(fullWidth, fullHeight, x, y, width, height) {
        this.aspect = fullWidth / fullHeight;
        if (this.view === null) {
            this.view = {
                enabled: true,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            };
        }
        this.view.enabled = true;
        this.view.fullWidth = fullWidth;
        this.view.fullHeight = fullHeight;
        this.view.offsetX = x;
        this.view.offsetY = y;
        this.view.width = width;
        this.view.height = height;
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
        if (this.view !== null) {
            this.view.enabled = false;
        }
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const near = this.near;
        let top = near * Math.tan(_math_MathUtils__WEBPACK_IMPORTED_MODULE_1__.DEG2RAD * 0.5 * this.fov) / this.zoom;
        let height = 2 * top;
        let width = this.aspect * height;
        let left = -0.5 * width;
        const view = this.view;
        if (this.view !== null && this.view.enabled) {
            const fullWidth = view.fullWidth, fullHeight = view.fullHeight;
            left += view.offsetX * width / fullWidth;
            top -= view.offsetY * height / fullHeight;
            width *= view.width / fullWidth;
            height *= view.height / fullHeight;
        }
        const skew = this.filmOffset;
        if (skew !== 0)
            left += near * skew / this.getFilmWidth();
        this.projectionMatrix.makePerspective(left, left + width, top, top - height, near, this.far);
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
}


/***/ }),

/***/ "./src/controls/OrbitControls.ts":
/*!***************************************!*\
  !*** ./src/controls/OrbitControls.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrbitControls: () => (/* binding */ OrbitControls)
/* harmony export */ });
/* harmony import */ var _cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cameras/OrthographicCamera */ "./src/cameras/OrthographicCamera.ts");
/* harmony import */ var _cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cameras/PerspectiveCamera */ "./src/cameras/PerspectiveCamera.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _math_Quaternion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Quaternion */ "./src/math/Quaternion.ts");
/* harmony import */ var _math_Spherical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/Spherical */ "./src/math/Spherical.ts");
/* harmony import */ var _math_Vector2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math/Vector2 */ "./src/math/Vector2.ts");
/* harmony import */ var _math_Vector3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../math/Vector3 */ "./src/math/Vector3.ts");







const STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_DOLLY: 4,
    TOUCH_PAN: 5
};
const EPS = 0.000001;
const twoPI = 2 * Math.PI;
/**
* @author qiao / https://github.com/qiao
* @author mrdoob / http://mrdoob.com
* @author alteredq / http://alteredqualia.com/
* @author WestLangley / http://github.com/WestLangley
* @author erich666 / http://erichaines.com
* @author nicolaspanel / http://github.com/nicolaspanel
*
* This set of controls performs orbiting, dollying (zooming), and panning.
* Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
*    Orbit - left mouse / touch: one finger move
*    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
*    Pan - right mouse, or arrow keys / touch:  finger swipe
*/
class OrbitControls {
    constructor(object, domElement, domWindow) {
        this.camera = object;
        this.domElement = domElement;
        this.window = (domWindow !== undefined) ? domWindow : window;
        // Set to false to disable this control
        this.enabled = true;
        // "target" sets the location of focus, where the object orbits around
        this.target = new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3();
        // How far you can dolly in and out ( PerspectiveCamera only )
        this.minDistance = 0;
        this.maxDistance = Infinity;
        // How far you can zoom in and out ( OrthographicCamera only )
        this.minZoom = 0;
        this.maxZoom = Infinity;
        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        this.minPolarAngle = 0; // radians
        this.maxPolarAngle = Math.PI; // radians
        // How far you can orbit horizontally, upper and lower limits.
        // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
        this.minAzimuthAngle = -Infinity; // radians
        this.maxAzimuthAngle = Infinity; // radians
        // Set to true to enable damping (inertia)
        // If damping is enabled, you must call controls.update() in your animation loop
        this.enableDamping = false;
        this.dampingFactor = 0.25;
        // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
        // Set to false to disable zooming
        this.enableZoom = true;
        this.zoomSpeed = 1.0;
        // Set to false to disable rotating
        this.enableRotate = true;
        this.rotateSpeed = 1.0;
        // Set to false to disable panning
        this.enablePan = true;
        this.keyPanSpeed = 7.0; // pixels moved per arrow key push
        // Set to true to automatically rotate around the target
        // If auto-rotate is enabled, you must call controls.update() in your animation loop
        this.autoRotate = false;
        this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
        // Set to false to disable use of the keys
        this.enableKeys = true;
        // The four arrow keys
        this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
        // Mouse buttons
        this.mouseButtons = { ORBIT: _Constants__WEBPACK_IMPORTED_MODULE_2__.MOUSE.LEFT, ZOOM: _Constants__WEBPACK_IMPORTED_MODULE_2__.MOUSE.MIDDLE, PAN: _Constants__WEBPACK_IMPORTED_MODULE_2__.MOUSE.RIGHT };
        // for reset
        this.target0 = this.target.clone();
        this.position0 = this.camera.position.clone();
        this.zoom0 = this.camera.zoom;
        // for update speedup
        this.updateOffset = new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3();
        // so camera.up is the orbit axis
        this.updateQuat = new _math_Quaternion__WEBPACK_IMPORTED_MODULE_3__.Quaternion().setFromUnitVectors(object.up, new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3(0, 1, 0));
        this.updateQuatInverse = this.updateQuat.clone().invert();
        this.updateLastPosition = new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3();
        this.updateLastTargetPosition = new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3();
        this.updateLastQuaternion = new _math_Quaternion__WEBPACK_IMPORTED_MODULE_3__.Quaternion();
        this.state = STATE.NONE;
        this.scale = 1;
        // current position in spherical coordinates
        this.spherical = new _math_Spherical__WEBPACK_IMPORTED_MODULE_4__.Spherical();
        this.sphericalDelta = new _math_Spherical__WEBPACK_IMPORTED_MODULE_4__.Spherical();
        this.panOffset = new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3();
        this.zoomChanged = false;
        this.rotateStart = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.rotateEnd = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.rotateDelta = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.panStart = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.panEnd = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.panDelta = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.dollyStart = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.dollyEnd = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.dollyDelta = new _math_Vector2__WEBPACK_IMPORTED_MODULE_5__.Vector2();
        this.panLeftV = new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3();
        this.panUpV = new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3();
        this.panInternalOffset = new _math_Vector3__WEBPACK_IMPORTED_MODULE_6__.Vector3();
        // event handlers - FSM: listen for events and reset state
        this.onMouseDown = (event) => {
            if (this.enabled === false)
                return;
            event.preventDefault();
            if (event.button === this.mouseButtons.ORBIT) {
                if (this.enableRotate === false)
                    return;
                this.rotateStart.set(event.clientX, event.clientY);
                this.state = STATE.ROTATE;
            }
            else if (event.button === this.mouseButtons.ZOOM) {
                if (this.enableZoom === false)
                    return;
                this.dollyStart.set(event.clientX, event.clientY);
                this.state = STATE.DOLLY;
            }
            else if (event.button === this.mouseButtons.PAN) {
                if (this.enablePan === false)
                    return;
                this.panStart.set(event.clientX, event.clientY);
                this.state = STATE.PAN;
            }
            if (this.state !== STATE.NONE) {
                document.addEventListener('mousemove', this.onMouseMove, false);
                document.addEventListener('mouseup', this.onMouseUp, false);
                //this.dispatchEvent( START_EVENT );
            }
        };
        this.onMouseMove = (event) => {
            if (this.enabled === false)
                return;
            event.preventDefault();
            if (this.state === STATE.ROTATE) {
                if (this.enableRotate === false)
                    return;
                this.rotateEnd.set(event.clientX, event.clientY);
                this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
                const element = this.domElement;
                // rotating across whole screen goes 360 degrees around
                this.rotateLeft(2 * Math.PI * this.rotateDelta.x / element.clientWidth * this.rotateSpeed);
                // rotating up and down along whole screen attempts to go 360, but limited to 180
                this.rotateUp(2 * Math.PI * this.rotateDelta.y / element.clientHeight * this.rotateSpeed);
                this.rotateStart.copy(this.rotateEnd);
                this.update();
            }
            else if (this.state === STATE.DOLLY) {
                if (this.enableZoom === false)
                    return;
                this.dollyEnd.set(event.clientX, event.clientY);
                this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);
                if (this.dollyDelta.y > 0) {
                    this.dollyIn(this.getZoomScale());
                }
                else if (this.dollyDelta.y < 0) {
                    this.dollyOut(this.getZoomScale());
                }
                this.dollyStart.copy(this.dollyEnd);
                this.update();
            }
            else if (this.state === STATE.PAN) {
                if (this.enablePan === false)
                    return;
                this.panEnd.set(event.clientX, event.clientY);
                this.panDelta.subVectors(this.panEnd, this.panStart);
                this.pan(this.panDelta.x, this.panDelta.y);
                this.panStart.copy(this.panEnd);
                this.update();
            }
        };
        this.onMouseUp = () => {
            if (this.enabled === false)
                return;
            document.removeEventListener('mousemove', this.onMouseMove, false);
            document.removeEventListener('mouseup', this.onMouseUp, false);
            this.state = STATE.NONE;
        };
        this.onMouseWheel = (event) => {
            if (this.enabled === false || this.enableZoom === false || (this.state !== STATE.NONE && this.state !== STATE.ROTATE))
                return;
            event.preventDefault();
            event.stopPropagation();
            if (event.deltaY < 0) {
                this.dollyOut(this.getZoomScale());
            }
            else if (event.deltaY > 0) {
                this.dollyIn(this.getZoomScale());
            }
            this.update();
            //this.dispatchEvent( START_EVENT ); // not sure why these are here...
            //this.dispatchEvent( END_EVENT );
        };
        this.onKeyDown = (event) => {
            if (this.enabled === false || this.enableKeys === false || this.enablePan === false)
                return;
            switch (event.keyCode) {
                case this.keys.UP:
                    {
                        this.pan(0, this.keyPanSpeed);
                        this.update();
                    }
                    break;
                case this.keys.BOTTOM:
                    {
                        this.pan(0, -this.keyPanSpeed);
                        this.update();
                    }
                    break;
                case this.keys.LEFT:
                    {
                        this.pan(this.keyPanSpeed, 0);
                        this.update();
                    }
                    break;
                case this.keys.RIGHT:
                    {
                        this.pan(-this.keyPanSpeed, 0);
                        this.update();
                    }
                    break;
            }
        };
        this.onTouchStart = (event) => {
            if (this.enabled === false)
                return;
            switch (event.touches.length) {
                // one-fingered touch: rotate
                case 1:
                    {
                        if (this.enableRotate === false)
                            return;
                        this.rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
                        this.state = STATE.TOUCH_ROTATE;
                    }
                    break;
                // two-fingered touch: dolly
                case 2:
                    {
                        if (this.enableZoom === false)
                            return;
                        const dx = event.touches[0].pageX - event.touches[1].pageX;
                        const dy = event.touches[0].pageY - event.touches[1].pageY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        this.dollyStart.set(0, distance);
                        this.state = STATE.TOUCH_DOLLY;
                    }
                    break;
                // -fingered touch: pan
                case 3:
                    {
                        if (this.enablePan === false)
                            return;
                        this.panStart.set(event.touches[0].pageX, event.touches[0].pageY);
                        this.state = STATE.TOUCH_PAN;
                    }
                    break;
                default: {
                    this.state = STATE.NONE;
                }
            }
            if (this.state !== STATE.NONE) {
                //this.dispatchEvent( START_EVENT );
            }
        };
        this.onTouchMove = (event) => {
            if (this.enabled === false)
                return;
            event.preventDefault();
            event.stopPropagation();
            switch (event.touches.length) {
                // one-fingered touch: rotate
                case 1:
                    {
                        if (this.enableRotate === false)
                            return;
                        if (this.state !== STATE.TOUCH_ROTATE)
                            return; // is this needed?...
                        this.rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
                        this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
                        const element = this.domElement;
                        // rotating across whole screen goes 360 degrees around
                        this.rotateLeft(2 * Math.PI * this.rotateDelta.x / element.clientWidth * this.rotateSpeed);
                        // rotating up and down along whole screen attempts to go 360, but limited to 180
                        this.rotateUp(2 * Math.PI * this.rotateDelta.y / element.clientHeight * this.rotateSpeed);
                        this.rotateStart.copy(this.rotateEnd);
                        this.update();
                    }
                    break;
                // two-fingered touch: dolly
                case 2:
                    {
                        if (this.enableZoom === false)
                            return;
                        if (this.state !== STATE.TOUCH_DOLLY)
                            return; // is this needed?...
                        //console.log( 'handleTouchMoveDolly' );
                        const dx = event.touches[0].pageX - event.touches[1].pageX;
                        const dy = event.touches[0].pageY - event.touches[1].pageY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        this.dollyEnd.set(0, distance);
                        this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);
                        if (this.dollyDelta.y > 0) {
                            this.dollyOut(this.getZoomScale());
                        }
                        else if (this.dollyDelta.y < 0) {
                            this.dollyIn(this.getZoomScale());
                        }
                        this.dollyStart.copy(this.dollyEnd);
                        this.update();
                    }
                    break;
                // -fingered touch: pan
                case 3:
                    {
                        if (this.enablePan === false)
                            return;
                        if (this.state !== STATE.TOUCH_PAN)
                            return; // is this needed?...
                        this.panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
                        this.panDelta.subVectors(this.panEnd, this.panStart);
                        this.pan(this.panDelta.x, this.panDelta.y);
                        this.panStart.copy(this.panEnd);
                        this.update();
                    }
                    break;
                default: {
                    this.state = STATE.NONE;
                }
            }
        };
        this.onTouchEnd = () => {
            if (this.enabled === false)
                return;
            this.state = STATE.NONE;
        };
        this.onContextMenu = (event) => {
            event.preventDefault();
        };
        this.domElement.addEventListener('contextmenu', this.onContextMenu, false);
        this.domElement.addEventListener('mousedown', this.onMouseDown, false);
        this.domElement.addEventListener('wheel', this.onMouseWheel, false);
        this.domElement.addEventListener('touchstart', this.onTouchStart, false);
        this.domElement.addEventListener('touchend', this.onTouchEnd, false);
        this.domElement.addEventListener('touchmove', this.onTouchMove, false);
        this.window.addEventListener('keydown', this.onKeyDown, false);
        // force an update at start
        this.update();
    }
    update() {
        const position = this.camera.position;
        this.updateOffset.copy(position).sub(this.target);
        // rotate offset to "y-axis-is-up" space
        this.updateOffset.applyQuaternion(this.updateQuat);
        // angle from z-axis around y-axis
        this.spherical.setFromVector3(this.updateOffset);
        if (this.autoRotate && this.state === STATE.NONE) {
            this.rotateLeft(this.getAutoRotationAngle());
        }
        if (this.enableDamping) {
            this.spherical.theta += this.sphericalDelta.theta * this.dampingFactor;
            this.spherical.phi += this.sphericalDelta.phi * this.dampingFactor;
        }
        else {
            this.spherical.theta += this.sphericalDelta.theta;
            this.spherical.phi += this.sphericalDelta.phi;
        }
        // restrict theta to be between desired limits
        let min = this.minAzimuthAngle;
        let max = this.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max)) {
            if (min < -Math.PI)
                min += twoPI;
            else if (min > Math.PI)
                min -= twoPI;
            if (max < -Math.PI)
                max += twoPI;
            else if (max > Math.PI)
                max -= twoPI;
            if (min <= max) {
                this.spherical.theta = Math.max(min, Math.min(max, this.spherical.theta));
            }
            else {
                this.spherical.theta = (this.spherical.theta > (min + max) / 2) ?
                    Math.max(min, this.spherical.theta) :
                    Math.min(max, this.spherical.theta);
            }
        }
        // restrict phi to be between desired limits
        this.spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this.spherical.phi));
        this.spherical.makeSafe();
        this.spherical.radius *= this.scale;
        // restrict radius to be between desired limits
        this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));
        // move target to panned location
        if (this.enableDamping === true) {
            this.target.addScaledVector(this.panOffset, this.dampingFactor);
        }
        else {
            this.target.add(this.panOffset);
        }
        this.updateOffset.setFromSpherical(this.spherical);
        // rotate offset back to "camera-up-vector-is-up" space
        this.updateOffset.applyQuaternion(this.updateQuatInverse);
        position.copy(this.target).add(this.updateOffset);
        this.camera.lookAt(this.target);
        if (this.enableDamping === true) {
            this.sphericalDelta.theta *= (1 - this.dampingFactor);
            this.sphericalDelta.phi *= (1 - this.dampingFactor);
            this.panOffset.multiplyScalar(1 - this.dampingFactor);
        }
        else {
            this.sphericalDelta.set(0, 0, 0);
            this.panOffset.set(0, 0, 0);
        }
        this.scale = 1;
        // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8
        if (this.zoomChanged ||
            this.updateLastPosition.distanceToSquared(this.camera.position) > EPS ||
            8 * (1 - this.updateLastQuaternion.dot(this.camera.quaternion)) > EPS ||
            this.updateLastTargetPosition.distanceToSquared(this.target) > 0) {
            this.updateLastPosition.copy(this.camera.position);
            this.updateLastQuaternion.copy(this.camera.quaternion);
            this.updateLastTargetPosition.copy(this.target);
            this.zoomChanged = false;
            return true;
        }
        return false;
        // this.spherical.theta += this.sphericalDelta.theta;
        // this.spherical.phi += this.sphericalDelta.phi;
        // // restrict theta to be between desired limits
        // this.spherical.theta = Math.max( this.minAzimuthAngle, Math.min( this.maxAzimuthAngle, this.spherical.theta ) );
        // // restrict phi to be between desired limits
        // this.spherical.phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, this.spherical.phi ) );
        // this.spherical.makeSafe();
        // this.spherical.radius *= this.scale;
        // // restrict radius to be between desired limits
        // this.spherical.radius = Math.max( this.minDistance, Math.min( this.maxDistance, this.spherical.radius ) );
        // // move target to panned location
        // this.target.add( this.panOffset );
        // this.updateOffset.setFromSpherical( this.spherical );
        // // rotate offset back to "camera-up-vector-is-up" space
        // this.updateOffset.applyQuaternion( this.updateQuatInverse );
        // position.copy( this.target ).add( this.updateOffset );
        // this.camera.lookAt( this.target );
        // if ( this.enableDamping === true ) {
        //   this.sphericalDelta.theta *= ( 1 - this.dampingFactor );
        //   this.sphericalDelta.phi *= ( 1 - this.dampingFactor );
        // } else {
        //   this.sphericalDelta.set( 0, 0, 0 );
        // }
        // this.scale = 1;
        // this.panOffset.set( 0, 0, 0 );
        // // update condition is:
        // // min(camera displacement, camera rotation in radians)^2 > EPS
        // // using small-angle approximation cos(x/2) = 1 - x^2 / 8
        // if ( this.zoomChanged ||
        //   this.updateLastPosition.distanceToSquared( this.camera.position ) > EPS ||
        //   8 * ( 1 - this.updateLastQuaternion.dot( this.camera.quaternion ) ) > EPS ) {
        //   //this.dispatchEvent( CHANGE_EVENT );
        //   this.updateLastPosition.copy( this.camera.position );
        //   this.updateLastQuaternion.copy( this.camera.quaternion );
        //   this.zoomChanged = false;
        //   return true;
        // }
        // return false;
    }
    panLeft(distance, objectMatrix) {
        this.panLeftV.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
        this.panLeftV.multiplyScalar(-distance);
        this.panOffset.add(this.panLeftV);
    }
    panUp(distance, objectMatrix) {
        this.panUpV.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
        this.panUpV.multiplyScalar(distance);
        this.panOffset.add(this.panUpV);
    }
    // deltaX and deltaY are in pixels; right and down are positive
    pan(deltaX, deltaY) {
        const element = this.domElement;
        if (this._checkPerspectiveCamera(this.camera)) {
            // perspective
            const position = this.camera.position;
            this.panInternalOffset.copy(position).sub(this.target);
            let targetDistance = this.panInternalOffset.length();
            // half of the fov is center to top of screen
            targetDistance *= Math.tan((this.camera.fov / 2) * Math.PI / 180.0);
            // we actually don't use screenWidth, since perspective camera is fixed to screen height
            this.panLeft(2 * deltaX * targetDistance / element.clientHeight, this.camera.matrix);
            this.panUp(2 * deltaY * targetDistance / element.clientHeight, this.camera.matrix);
        }
        else if (this._checkOrthographicCamera(this.camera)) {
            // orthographic
            this.panLeft(deltaX * (this.camera.right - this.camera.left) / this.camera.zoom / element.clientWidth, this.camera.matrix);
            this.panUp(deltaY * (this.camera.top - this.camera.bottom) / this.camera.zoom / element.clientHeight, this.camera.matrix);
        }
        else {
            // camera neither orthographic nor perspective
            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
            this.enablePan = false;
        }
    }
    dollyIn(dollyScale) {
        if (this._checkPerspectiveCamera(this.camera)) {
            this.scale /= dollyScale;
        }
        else if (this._checkOrthographicCamera(this.camera)) {
            this.camera.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.camera.zoom * dollyScale));
            this.camera.updateProjectionMatrix();
            this.zoomChanged = true;
        }
        else {
            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
            this.enableZoom = false;
        }
    }
    dollyOut(dollyScale) {
        if (this._checkPerspectiveCamera(this.camera)) {
            this.scale *= dollyScale;
        }
        else if (this._checkOrthographicCamera(this.camera)) {
            this.camera.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.camera.zoom / dollyScale));
            this.camera.updateProjectionMatrix();
            this.zoomChanged = true;
        }
        else {
            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
            this.enableZoom = false;
        }
    }
    getAutoRotationAngle() {
        return 2 * Math.PI / 60 / 60 * this.autoRotateSpeed;
    }
    getZoomScale() {
        return Math.pow(0.95, this.zoomSpeed);
    }
    rotateLeft(angle) {
        this.sphericalDelta.theta -= angle;
    }
    rotateUp(angle) {
        this.sphericalDelta.phi -= angle;
    }
    getPolarAngle() {
        return this.spherical.phi;
    }
    getAzimuthalAngle() {
        return this.spherical.theta;
    }
    dispose() {
        this.domElement.removeEventListener('contextmenu', this.onContextMenu, false);
        this.domElement.removeEventListener('mousedown', this.onMouseDown, false);
        this.domElement.removeEventListener('wheel', this.onMouseWheel, false);
        this.domElement.removeEventListener('touchstart', this.onTouchStart, false);
        this.domElement.removeEventListener('touchend', this.onTouchEnd, false);
        this.domElement.removeEventListener('touchmove', this.onTouchMove, false);
        document.removeEventListener('mousemove', this.onMouseMove, false);
        document.removeEventListener('mouseup', this.onMouseUp, false);
        this.window.removeEventListener('keydown', this.onKeyDown, false);
        //this.dispatchEvent( { type: 'dispose' } ); // should this be added here?
    }
    reset() {
        this.target.copy(this.target0);
        this.camera.position.copy(this.position0);
        this.camera.zoom = this.zoom0;
        this.camera.updateProjectionMatrix();
        //this.dispatchEvent( CHANGE_EVENT );
        this.update();
        this.state = STATE.NONE;
    }
    saveState() {
        this.target0.copy(this.target);
        this.position0.copy(this.camera.position);
        // Check whether the camera has zoom property
        if (this._checkOrthographicCamera(this.camera) || this._checkPerspectiveCamera(this.camera)) {
            this.zoom0 = this.camera.zoom;
        }
    }
    // backward compatibility
    get center() {
        console.warn('OrbitControls: .center has been renamed to .target');
        return this.target;
    }
    get noZoom() {
        console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
        return !this.enableZoom;
    }
    set noZoom(value) {
        console.warn('OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
        this.enableZoom = !value;
    }
    /**
     * TS typeguard. Checks whether the provided camera is PerspectiveCamera.
     * If the check passes (returns true) the passed camera will have the type PerspectiveCamera in the if branch where the check was performed.
     * @param camera Object to be checked.
     */
    _checkPerspectiveCamera(camera) {
        return _cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera.Is(camera);
    }
    /**
     * TS typeguard. Checks whether the provided camera is OrthographicCamera.
     * If the check passes (returns true) the passed camera will have the type OrthographicCamera in the if branch where the check was performed.
     * @param camera Object to be checked.
     */
    _checkOrthographicCamera(camera) {
        return _cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera.Is(camera);
    }
}


/***/ }),

/***/ "./src/core/BufferAttribute.ts":
/*!*************************************!*\
  !*** ./src/core/BufferAttribute.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferAttribute: () => (/* binding */ BufferAttribute)
/* harmony export */ });
/* harmony import */ var _GPUBufferWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GPUBufferWrapper */ "./src/core/GPUBufferWrapper.ts");

class BufferAttribute {
    get buffer() {
        return this._gpuBuffer;
    }
    constructor(array, format, itemSize, normalized) {
        this._count = 0;
        this._itemSize = 0;
        this._normalized = false;
        this._byteLength = 0;
        this._name = '';
        this._needsUpdate = false;
        this._usage = GPUBufferUsage.VERTEX;
        this._array = array;
        this._format = format;
        this._itemSize = itemSize;
        this._parseFormat();
        this._normalized = normalized ? normalized : this._normalized;
    }
    update() {
        if (this._gpuBuffer === undefined) {
            this._gpuBuffer = new _GPUBufferWrapper__WEBPACK_IMPORTED_MODULE_0__.GPUBufferWrapper(this._usage | GPUBufferUsage.COPY_DST, this._array);
        }
        else {
            if (this.needsUpdate) {
                this._gpuBuffer.update(this._array);
                this.needsUpdate = false;
            }
        }
    }
    _parseFormat() {
        this._itemSize = this._itemSize;
        this._byteLength = this._array.BYTES_PER_ELEMENT;
        this._count = this._array.length / this._itemSize;
    }
    get format() {
        return this._format;
    }
    get array() {
        return this._array;
    }
    get count() {
        return this._count;
    }
    set count(v) {
        this._count = v;
    }
    get itemSize() {
        return this._itemSize;
    }
    set itemSize(v) {
        this._itemSize = v;
    }
    get byteLength() {
        return this._byteLength;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get needsUpdate() {
        return this._needsUpdate;
    }
    set needsUpdate(v) {
        this._needsUpdate = v;
    }
    set Usage(v) {
        this._usage = v;
    }
}


/***/ }),

/***/ "./src/core/BufferGeometry.ts":
/*!************************************!*\
  !*** ./src/core/BufferGeometry.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferGeometry: () => (/* binding */ BufferGeometry)
/* harmony export */ });
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.ts");
/* harmony import */ var _GPUBufferWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GPUBufferWrapper */ "./src/core/GPUBufferWrapper.ts");


class BufferGeometry {
    constructor() {
        this._attributes = new Map();
        this._indices = null;
        this._drawBuffer = null;
        this.uuid = _math_MathUtils__WEBPACK_IMPORTED_MODULE_0__.MathUtils.generateUUID();
    }
    update() {
        this.updateDrawBuffer();
        for (const attribute of this._attributes.values()) {
            attribute.update();
        }
        this._indices && this._indices.update();
    }
    createVetexBufferLayouts() {
        const bufferLayouts = [];
        let index = 0;
        for (const attr of this.attributes.values()) {
            const buffer = {
                // 顶点长度，以字节为单位
                arrayStride: attr.byteLength * attr.itemSize,
                attributes: [
                    {
                        // 变量索引
                        shaderLocation: index,
                        // 偏移
                        offset: 0,
                        // 参数格式
                        format: attr.format,
                    },
                ],
            };
            ++index;
            bufferLayouts.push(buffer);
        }
        return bufferLayouts;
    }
    setVertexBuffer(passEncoder, locationValues) {
        for (const value of locationValues.values()) {
            const attr = this._attributes.get(value.name);
            if (attr)
                passEncoder.setVertexBuffer(value.index, attr.buffer.buffer);
        }
    }
    setIndex(attribute) {
        if (attribute.count !== this._indices?.count && this._drawBuffer) {
            this._drawBuffer.destroy();
            this._drawBuffer = null;
        }
        this._indices = attribute;
        attribute.Usage = GPUBufferUsage.INDEX;
        return this;
    }
    setAttribute(name, attribute) {
        this._attributes.set(name, attribute);
        return this;
    }
    getAttribute(name) {
        return this._attributes.get(name);
    }
    updateDrawBuffer() {
        if (!this._drawBuffer) {
            const k = this.indices ? 5 : 4;
            const parameters = new Uint32Array(k);
            if (this.indices) {
                parameters[0] = this.indices.count; // The indexCount value
                parameters[1] = 1; // The instanceCount value
                parameters[2] = 0; // The firstIndex value
                parameters[3] = 0; // The baseVertex value
                parameters[4] = 0; // The firstInstance value
            }
            else {
                parameters[0] = this.getAttribute("position").count; // The vertexCount value
                parameters[1] = 1; // The instanceCount value
                parameters[2] = 0; // The firstVertex value
                parameters[3] = 0; // The firstInstance value
            }
            this._drawBuffer = new _GPUBufferWrapper__WEBPACK_IMPORTED_MODULE_1__.GPUBufferWrapper(GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT, parameters);
        }
    }
    get attributes() {
        return this._attributes;
    }
    get indices() {
        return this._indices;
    }
    get drawBuffer() {
        return this._drawBuffer;
    }
}


/***/ }),

/***/ "./src/core/Defines.ts":
/*!*****************************!*\
  !*** ./src/core/Defines.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindGroupLayoutIndexInfo: () => (/* binding */ BindGroupLayoutIndexInfo),
/* harmony export */   BindType: () => (/* binding */ BindType),
/* harmony export */   ObjectGroupLayoutInfo: () => (/* binding */ ObjectGroupLayoutInfo)
/* harmony export */ });
/* eslint-disable no-unused-vars */
const BindGroupLayoutIndexInfo = {
    global: 0,
    material: 1,
    object: 2,
    custom: 3
};
var BindType;
(function (BindType) {
    BindType[BindType["buffer"] = 1] = "buffer";
    BindType[BindType["storage"] = 2] = "storage";
    BindType[BindType["sampler"] = 3] = "sampler";
    BindType[BindType["texture"] = 4] = "texture";
})(BindType || (BindType = {}));
const ObjectGroupLayoutInfo = {
    matrixWorld: {
        index: 0,
        bindType: BindType.buffer,
        visibility: GPUShaderStage.VERTEX
    }
};


/***/ }),

/***/ "./src/core/GPUBufferWrapper.ts":
/*!**************************************!*\
  !*** ./src/core/GPUBufferWrapper.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GPUBufferWrapper: () => (/* binding */ GPUBufferWrapper)
/* harmony export */ });
/* harmony import */ var _ResourceManagers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceManagers */ "./src/core/ResourceManagers.ts");

class GPUBufferWrapper {
    constructor(usage, data) {
        this._size = data.byteLength;
        this._usage = usage;
        this.buffer = _ResourceManagers__WEBPACK_IMPORTED_MODULE_0__.Context.activeDevice.createBuffer({
            size: this._size,
            usage: usage,
            mappedAtCreation: true
        });
        new data.constructor(this.buffer.getMappedRange()).set(data);
        this.buffer.unmap();
    }
    update(data) {
        _ResourceManagers__WEBPACK_IMPORTED_MODULE_0__.Context.activeDevice.queue.writeBuffer(this.buffer, 0, data);
    }
    destroy() {
        this.buffer.destroy();
    }
    get size() {
        return this._size;
    }
    get usage() {
        return this._usage;
    }
}


/***/ }),

/***/ "./src/core/Object3D.ts":
/*!******************************!*\
  !*** ./src/core/Object3D.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Object3D: () => (/* binding */ Object3D)
/* harmony export */ });
/* harmony import */ var _math_Quaternion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Quaternion */ "./src/math/Quaternion.ts");
/* harmony import */ var _math_Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector3 */ "./src/math/Vector3.ts");
/* harmony import */ var _math_Matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Matrix4 */ "./src/math/Matrix4.ts");
/* harmony import */ var _math_Euler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Euler */ "./src/math/Euler.ts");
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.ts");





//import { Scene } from './Scene';
let _object3DId = 0;
const _v1 = /*@__PURE__*/ new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3();
const _q1 = /*@__PURE__*/ new _math_Quaternion__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
const _m1 = /*@__PURE__*/ new _math_Matrix4__WEBPACK_IMPORTED_MODULE_2__.Matrix4();
const _target = /*@__PURE__*/ new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3();
const _position = /*@__PURE__*/ new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3();
const _scale = /*@__PURE__*/ new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3();
const _quaternion = /*@__PURE__*/ new _math_Quaternion__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
const _xAxis = /*@__PURE__*/ new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 0, 0);
const _yAxis = /*@__PURE__*/ new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0);
const _zAxis = /*@__PURE__*/ new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1);
class Object3D {
    get type() {
        return "Object3D";
    }
    static Is(object) {
        return object instanceof Object3D;
    }
    constructor() {
        this._position = new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        this._rotation = new _math_Euler__WEBPACK_IMPORTED_MODULE_3__.Euler();
        this._scale = new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1);
        this._quaternion = new _math_Quaternion__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        this.matrix = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_2__.Matrix4();
        this.matrixWorld = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_2__.Matrix4();
        this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
        this.matrixWorldNeedsUpdate = false;
        this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer
        this.visible = true;
        this.castShadow = false;
        this.receiveShadow = false;
        this.frustumCulled = true;
        this.renderOrder = 0;
        this.userData = {};
        this.isInstancedMesh = false;
        this.count = 0;
        Object.defineProperty(this, 'id', { value: _object3DId++ });
        this.uuid = _math_MathUtils__WEBPACK_IMPORTED_MODULE_4__.generateUUID();
        this.name = '';
        this._parent = null;
        this._children = [];
        this.up = Object3D.DEFAULT_UP.clone();
        const onRotationChange = (e) => {
            this.quaternion.setFromEuler(e, false);
        };
        const onQuaternionChange = (q) => {
            this.rotation.setFromQuaternion(q, undefined, false);
        };
        this._rotation.onChange(onRotationChange);
        this._quaternion.onChange(onQuaternionChange);
    }
    onBeforeRender( /* renderer, scene, camera, geometry, material, group */) { }
    onAfterRender( /* renderer, scene, camera, geometry, material, group */) { }
    applyMatrix4(matrix) {
        if (this.matrixAutoUpdate)
            this.updateMatrix();
        this.matrix.premultiply(matrix);
        this.matrix.decompose(this._position, this._quaternion, this._scale);
    }
    applyQuaternion(q) {
        this._quaternion.premultiply(q);
        return this;
    }
    setRotationFromAxisAngle(axis, angle) {
        // assumes axis is normalized
        this._quaternion.setFromAxisAngle(axis, angle);
    }
    setRotationFromEuler(euler) {
        this._quaternion.setFromEuler(euler);
    }
    setRotationFromMatrix(m) {
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        this._quaternion.setFromRotationMatrix(m);
    }
    setRotationFromQuaternion(q) {
        // assumes q is normalized
        this._quaternion.copy(q);
    }
    rotateOnAxis(axis, angle) {
        // rotate object on axis in object space
        // axis is assumed to be normalized
        _q1.setFromAxisAngle(axis, angle);
        this._quaternion.multiply(_q1);
        return this;
    }
    rotateOnWorldAxis(axis, angle) {
        // rotate object on axis in world space
        // axis is assumed to be normalized
        // method assumes no rotated parent
        _q1.setFromAxisAngle(axis, angle);
        this._quaternion.premultiply(_q1);
        return this;
    }
    rotateX(angle) {
        return this.rotateOnAxis(_xAxis, angle);
    }
    rotateY(angle) {
        return this.rotateOnAxis(_yAxis, angle);
    }
    rotateZ(angle) {
        return this.rotateOnAxis(_zAxis, angle);
    }
    translateOnAxis(axis, distance) {
        // translate object by distance along axis in object space
        // axis is assumed to be normalized
        _v1.copy(axis).applyQuaternion(this._quaternion);
        this._position.add(_v1.multiplyScalar(distance));
        return this;
    }
    translateX(distance) {
        return this.translateOnAxis(_xAxis, distance);
    }
    translateY(distance) {
        return this.translateOnAxis(_yAxis, distance);
    }
    translateZ(distance) {
        return this.translateOnAxis(_zAxis, distance);
    }
    localToWorld(vector) {
        this.updateWorldMatrix(true, false);
        return vector.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(vector) {
        this.updateWorldMatrix(true, false);
        return vector.applyMatrix4(_m1.copy(this.matrixWorld).invert());
    }
    lookAt(target) {
        // This method does not support objects having non-uniformly-scaled parent(s)
        _target.copy(target);
        const parent = this.parent;
        this.updateWorldMatrix(true, false);
        _position.setFromMatrixPosition(this.matrixWorld);
        if (this.isCamera || this.isLight) {
            _m1.lookAt(_position, _target, this.up);
        }
        else {
            _m1.lookAt(_target, _position, this.up);
        }
        this._quaternion.setFromRotationMatrix(_m1);
        if (parent) {
            _m1.extractRotation(parent.matrixWorld);
            _q1.setFromRotationMatrix(_m1);
            this._quaternion.premultiply(_q1.invert());
        }
    }
    add(object) {
        if (object === this) {
            console.error('THREE.Object3D.add: object can\'t be added as a child of itself.', object);
            return this;
        }
        if (object.isScene) {
            console.error('THREE.Object3D.add: scene can\'t be added.', object);
            return this;
        }
        if (object.parent !== null) {
            object.parent.remove(object);
        }
        object._parent = this;
        this.children.push(object);
        object.traverseAncestors((parent) => {
            if (parent.isScene)
                parent.handleAdded(object);
        });
        return this;
    }
    remove(object) {
        const index = this.children.indexOf(object);
        if (index !== -1) {
            object._parent = null;
            this.children.splice(index, 1);
        }
        object.traverseAncestors((parent) => {
            if (parent.isScene)
                parent._handleRemoved(object);
        });
        return this;
    }
    removeFromParent() {
        const parent = this.parent;
        if (parent !== null) {
            parent.remove(this);
        }
        return this;
    }
    clear() {
        for (let i = 0; i < this.children.length; i++) {
            const object = this.children[i];
            object._parent = null;
        }
        this.children.length = 0;
        return this;
    }
    attach(object) {
        // adds object as a child of this, while maintaining the object's world transform
        // Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)
        this.updateWorldMatrix(true, false);
        _m1.copy(this.matrixWorld).invert();
        if (object.parent !== null) {
            object.parent.updateWorldMatrix(true, false);
            _m1.multiply(object.parent.matrixWorld);
        }
        object.applyMatrix4(_m1);
        this.add(object);
        object.updateWorldMatrix(false, true);
        return this;
    }
    getWorldPosition(target) {
        this.updateWorldMatrix(true, false);
        return target.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(target) {
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(_position, target, _scale);
        return target;
    }
    getWorldScale(target) {
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(_position, _quaternion, target);
        return target;
    }
    getWorldDirection(target) {
        this.updateWorldMatrix(true, false);
        const e = this.matrixWorld.elements;
        return target.set(e[8], e[9], e[10]).normalize();
    }
    raycast( /* raycaster, intersects */) { }
    traverse(callback) {
        callback(this);
        const children = this.children;
        for (let i = 0, l = children.length; i < l; i++) {
            children[i].traverse(callback);
        }
    }
    traverseVisible(callback) {
        if (this.visible === false)
            return;
        callback(this);
        const children = this.children;
        for (let i = 0, l = children.length; i < l; i++) {
            children[i].traverseVisible(callback);
        }
    }
    traverseAncestors(callback) {
        const parent = this.parent;
        if (parent !== null) {
            callback(parent);
            parent.traverseAncestors(callback);
        }
    }
    updateMatrix() {
        this.matrix.compose(this._position, this._quaternion, this._scale);
        this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld() {
        if (this.matrixAutoUpdate)
            this.updateMatrix();
        if (this.matrixWorldNeedsUpdate) {
            if (this.parent === null) {
                this.matrixWorld.copy(this.matrix);
            }
            else {
                this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
            }
            this.matrixWorldNeedsUpdate = false;
        }
        // update children
        const children = this.children;
        for (let i = 0, l = children.length; i < l; i++) {
            const child = children[i];
            if (child.matrixWorldAutoUpdate === true) {
                child.updateMatrixWorld();
            }
        }
    }
    updateWorldMatrix(updateParents = false, updateChildren = false) {
        const parent = this.parent;
        if (updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true) {
            parent.updateWorldMatrix(true, false);
        }
        if (this.matrixAutoUpdate)
            this.updateMatrix();
        if (this.parent === null) {
            this.matrixWorld.copy(this.matrix);
        }
        else {
            this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
        // update children
        if (updateChildren === true) {
            const children = this.children;
            for (let i = 0, l = children.length; i < l; i++) {
                const child = children[i];
                if (child.matrixWorldAutoUpdate === true) {
                    child.updateWorldMatrix(false, true);
                }
            }
        }
    }
    clone(recursive = false) {
        return new Object3D().copy(this, recursive);
    }
    copy(source, recursive = true) {
        this.name = source.name;
        this.up.copy(source.up);
        this._position.copy(source._position);
        this._rotation.order = source._rotation.order;
        this._quaternion.copy(source._quaternion);
        this._scale.copy(source._scale);
        this.matrix.copy(source.matrix);
        this.matrixWorld.copy(source.matrixWorld);
        this.matrixAutoUpdate = source.matrixAutoUpdate;
        this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
        this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
        this.visible = source.visible;
        this.castShadow = source.castShadow;
        this.receiveShadow = source.receiveShadow;
        this.frustumCulled = source.frustumCulled;
        this.renderOrder = source.renderOrder;
        this.userData = JSON.parse(JSON.stringify(source.userData));
        if (recursive === true) {
            for (let i = 0; i < source.children.length; i++) {
                const child = source.children[i];
                this.add(child.clone());
            }
        }
        return this;
    }
    get parent() {
        return this._parent;
    }
    get children() {
        return this._children;
    }
    set position(v) {
        this._position.copy(v);
    }
    get position() {
        return this._position;
    }
    set scale(v) {
        this._scale.copy(v);
    }
    get scale() {
        return this._scale;
    }
    get quaternion() {
        return this._quaternion;
    }
    set quaternion(v) {
        this._quaternion.copy(v);
        this._rotation.setFromQuaternion(v, undefined);
    }
    get rotation() {
        return this._rotation;
    }
    set rotation(v) {
        this._rotation.copy(v);
        this._quaternion.setFromEuler(v);
    }
}
Object3D.DEFAULT_UP = new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0);
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = false;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = false;


/***/ }),

/***/ "./src/core/Pipeline.ts":
/*!******************************!*\
  !*** ./src/core/Pipeline.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pipleline: () => (/* binding */ Pipleline)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _Defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Defines */ "./src/core/Defines.ts");
/* harmony import */ var _ResourceManagers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceManagers */ "./src/core/ResourceManagers.ts");



class Pipleline {
    constructor(material) {
        this._bindGroupLayouts = [];
        this._vertexBufferLayouts = [];
        this._objectBindGroups = {};
        this.needsCompile = true;
        this.needsCreateMatBindGroup = true;
        this._material = material;
        _ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.Cache.add("pipelineObjectBindGroup", this._objectBindGroups);
    }
    compilePipeline(renderer, scene) {
        if (!this.needsCompile)
            return;
        this.needsCreateMatBindGroup = true;
        this._beforeCompile(scene);
        this._compile(renderer, scene);
        this.needsCompile = false;
    }
    bindCommonUniform(passEncoder) {
        passEncoder.setBindGroup(0, this._globalBindGroups);
        passEncoder.setBindGroup(1, this._materialBindGroup);
    }
    bindObjectUnform(passEncoder, object) {
        passEncoder.setBindGroup(2, this._objectBindGroups[object.uuid]);
    }
    _compile(renderer, scene) {
        const device = renderer.device;
        this.material.shader.recreate(scene);
        this._pipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({
                bindGroupLayouts: [...this._bindGroupLayouts],
            }),
            vertex: {
                module: device.createShaderModule({
                    code: this.material.shader.vertexShaderCode,
                }),
                entryPoint: "main",
                buffers: this._vertexBufferLayouts,
            },
            fragment: {
                module: device.createShaderModule({
                    code: this.material.shader.fragmentShaderCode,
                }),
                entryPoint: "main",
                targets: [
                    {
                        format: renderer.presentationFormat,
                        blend: {
                            color: {
                                srcFactor: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUBlendFactor.SrcAlpha,
                                dstFactor: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUBlendFactor.OneMinusSrcAlpha,
                            },
                            alpha: {
                                srcFactor: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUBlendFactor.One,
                                dstFactor: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUBlendFactor.OneMinusSrcAlpha,
                            },
                        },
                    },
                ],
            },
            primitive: {
                topology: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUPrimitiveTopology.TriangleList,
                cullMode: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUCullMode.Back,
            },
            multisample: {
                count: renderer.sampleCount,
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUCompareFunction.Less,
                format: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUTextureFormat.Depth24Plus,
            },
        });
    }
    /****************************create layout start ***********************************/
    _createVertexBufferLayouts() {
        this._vertexBufferLayouts.length = 0;
        for (const value of this._material.shaderOptions.attributeValues.values()) {
            this._vertexBufferLayouts.push({
                arrayStride: value.itemSize,
                attributes: [
                    {
                        shaderLocation: value.index,
                        offset: 0,
                        format: value.format,
                    },
                ],
            });
        }
    }
    _createGlobalBindLayout(scene) {
        const entries = scene.getBindLayout();
        this._bindGroupLayouts.push(_ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.Context.activeDevice.createBindGroupLayout({
            entries: entries,
        }));
    }
    _createMaterialBindLayout() {
        const entries = this.material.getBindLayout();
        this._bindGroupLayouts.push(_ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.Context.activeDevice.createBindGroupLayout({
            entries: entries,
        }));
    }
    _createObjectBindLayout() {
        const entries = new Array();
        for (const key in _Defines__WEBPACK_IMPORTED_MODULE_1__.ObjectGroupLayoutInfo) {
            entries.push({
                binding: _Defines__WEBPACK_IMPORTED_MODULE_1__.ObjectGroupLayoutInfo[key].index,
                visibility: _Defines__WEBPACK_IMPORTED_MODULE_1__.ObjectGroupLayoutInfo[key].visibility,
                buffer: {
                    type: "uniform",
                },
            });
        }
        this._bindGroupLayouts.push(_ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.Context.activeDevice.createBindGroupLayout({
            entries: entries,
        }));
    }
    _createBindLayouts(scene) {
        this._bindGroupLayouts.length = 0;
        this._createGlobalBindLayout(scene); //Layout 0
        this._createMaterialBindLayout(); //Layout 1
        this._createObjectBindLayout(); //Layout 2
    }
    /****************************create layout end ***********************************/
    /****************************create group start ***********************************/
    _createGlobalBindGroup(scene) {
        if (!this.needsCreateMatBindGroup)
            return;
        const group = scene.getBindGroup();
        this._globalBindGroups = _ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.Context.activeDevice.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(_Defines__WEBPACK_IMPORTED_MODULE_1__.BindGroupLayoutIndexInfo.global),
            entries: group,
        });
    }
    _createMaterialBindGroup() {
        if (!this.needsCreateMatBindGroup)
            return;
        const group = this.material.getBindGroup();
        this._materialBindGroup = _ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.Context.activeDevice.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(_Defines__WEBPACK_IMPORTED_MODULE_1__.BindGroupLayoutIndexInfo.material),
            entries: group,
        });
    }
    createObjectBindGroup(object) {
        if (this._objectBindGroups[object.uuid]) {
            return;
        }
        const group = new Array();
        for (const key in _Defines__WEBPACK_IMPORTED_MODULE_1__.ObjectGroupLayoutInfo) {
            group.push({
                binding: _Defines__WEBPACK_IMPORTED_MODULE_1__.ObjectGroupLayoutInfo[key].index,
                resource: {
                    buffer: object.uniforms.get(key).buffer,
                },
            });
        }
        this._objectBindGroups[object.uuid] = _ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.Context.activeDevice.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(_Defines__WEBPACK_IMPORTED_MODULE_1__.BindGroupLayoutIndexInfo.object),
            entries: group,
        });
    }
    createCommonBindGroups(scene) {
        this._createGlobalBindGroup(scene); //Group 0
        this._createMaterialBindGroup(); //Group 1
        this.needsCreateMatBindGroup = false;
    }
    /****************************create group end ***********************************/
    _beforeCompile(scene) {
        this._createBindLayouts(scene);
        this._createVertexBufferLayouts();
    }
    get pipeline() {
        return this._pipeline;
    }
    get material() {
        return this._material;
    }
}


/***/ }),

/***/ "./src/core/RenderableObject.ts":
/*!**************************************!*\
  !*** ./src/core/RenderableObject.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderableObject: () => (/* binding */ RenderableObject)
/* harmony export */ });
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object3D */ "./src/core/Object3D.ts");
/* harmony import */ var _binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binds/BindBuffer */ "./src/core/binds/BindBuffer.ts");
/* harmony import */ var _utils_TMPValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/TMPValues */ "./src/utils/TMPValues.ts");



const u_modelTranform = "matrixWorld";
class RenderableObject extends _Object3D__WEBPACK_IMPORTED_MODULE_0__.Object3D {
    get type() {
        return "RenderableObject";
    }
    static Is(object) {
        return object instanceof RenderableObject;
    }
    get isRenderableObject() {
        return true;
    }
    constructor(geometry, material) {
        super();
        this._uniforms = new Map();
        this._geometry = geometry;
        this._material = material;
        this._initInitialUniform();
    }
    update() {
        this.updateMatrixWorld();
        this._updateUniformValue();
    }
    updateMatrixWorld() {
        const needsUpdate = this.matrixWorldNeedsUpdate;
        super.updateMatrixWorld();
        if (needsUpdate) {
            this._uniforms.get(u_modelTranform).data = this.matrixWorld.toArray();
        }
    }
    _initInitialUniform() {
        const tranformUniform = new _binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__.BindBuffer(u_modelTranform, _utils_TMPValues__WEBPACK_IMPORTED_MODULE_2__.IdentifyMatrix4.toArray());
        this._uniforms.set(u_modelTranform, tranformUniform);
    }
    _updateUniformValue() {
        for (const uniform of this._uniforms.values()) {
            uniform.update();
        }
    }
    get pipeline() {
        return this._pipeline;
    }
    get geometry() {
        return this._geometry;
    }
    get material() {
        return this._material;
    }
    get uniforms() {
        return this._uniforms;
    }
}


/***/ }),

/***/ "./src/core/ResourceManagers.ts":
/*!**************************************!*\
  !*** ./src/core/ResourceManagers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cache: () => (/* binding */ Cache),
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   DelayDestroyer: () => (/* binding */ DelayDestroyer)
/* harmony export */ });
class Cache {
    static add(key, obj) {
        if (this.enabled === false)
            return;
        // console.log( 'THREE.Cache', 'Adding key:', key );
        this.caches[key] = obj;
    }
    static get(key) {
        if (this.enabled === false)
            return;
        // console.log( 'THREE.Cache', 'Checking key:', key );
        return this.caches[key];
    }
    static remove(key) {
        delete this.caches[key];
    }
    static clear() {
        this.caches = {};
    }
}
Cache.enabled = false;
Cache.caches = {};
class Context {
    static get activeDevice() {
        return Context._activeDevice;
    }
    static set activeDevice(v) {
        Context._activeDevice = v;
    }
}
class DelayDestroyer {
    static destroy(garbage, destroyFunc, time = DelayDestroyer.delayTime) {
        setTimeout(() => {
            destroyFunc(garbage);
        }, time);
    }
}
DelayDestroyer.delayTime = 5000;


/***/ }),

/***/ "./src/core/Scene.ts":
/*!***************************!*\
  !*** ./src/core/Scene.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scene: () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _lights_DirectionalLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lights/DirectionalLight */ "./src/lights/DirectionalLight.ts");
/* harmony import */ var _utils_CommonUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CommonUtils */ "./src/utils/CommonUtils.ts");
/* harmony import */ var _Defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Defines */ "./src/core/Defines.ts");
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Object3D */ "./src/core/Object3D.ts");
/* harmony import */ var _RenderableObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RenderableObject */ "./src/core/RenderableObject.ts");
/* harmony import */ var _binds_BindBuffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./binds/BindBuffer */ "./src/core/binds/BindBuffer.ts");







const t_cameraBindValue = [
    {
        name: "projectionMatrix",
        index: 0,
        shaderItemType: "mat4x4<f32>",
        bindType: _Defines__WEBPACK_IMPORTED_MODULE_3__.BindType.buffer,
        visibility: GPUShaderStage.VERTEX,
    },
    {
        name: "matrixWorldInverse",
        index: 1,
        shaderItemType: "mat4x4<f32>",
        bindType: _Defines__WEBPACK_IMPORTED_MODULE_3__.BindType.buffer,
        visibility: GPUShaderStage.VERTEX,
    },
];
class Scene extends _Object3D__WEBPACK_IMPORTED_MODULE_4__.Object3D {
    get type() {
        return "Scene";
    }
    static Is(object) {
        return object instanceof Scene;
    }
    get isScene() {
        return true;
    }
    constructor() {
        super();
        this._renderableObjects = new Map();
        this._directionalLights = new Map();
        this._bindValues = new Map();
        this._entriesLayout = new Array();
        this._entriesGroup = new Array();
        this._lastSetCamera = null;
        this.needsRecreateBind = true;
    }
    update(camrea) {
        this._lastSetCamera = camrea;
        if (this.needsRecreateBind) {
            this._createLayout();
            this._createBindGroup();
            this.needsRecreateBind = false;
            return true;
        }
        return false;
    }
    getBindLayout() {
        return this._entriesLayout;
    }
    getBindGroup() {
        return this._entriesGroup;
    }
    handleAdded(object) {
        object.traverse((child) => {
            if (_RenderableObject__WEBPACK_IMPORTED_MODULE_5__.RenderableObject.Is(child)) {
                this._addRenderableObject(child);
            }
            else if (_lights_DirectionalLight__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight.Is(child)) {
                this._addDirectionalLight(child);
            }
        });
    }
    handleRemoved(object) {
        object.traverse((child) => {
            if (_RenderableObject__WEBPACK_IMPORTED_MODULE_5__.RenderableObject.Is(child)) {
                this._removeRenderableObject(child);
            }
            else if (_lights_DirectionalLight__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight.Is(child)) {
                this._removeDirectionalLight(child);
            }
        });
    }
    _createBindGroup() {
        this._entriesGroup.length = 0;
        this._entriesGroup.push({
            binding: 0,
            resource: {
                buffer: this._lastSetCamera.uniforms.get("projectionMatrix").buffer,
            },
        });
        this._entriesGroup.push({
            binding: 1,
            resource: {
                buffer: this._lastSetCamera.uniforms.get("matrixWorldInverse").buffer,
            },
        });
        if (this._directionalLights.size > 0) {
            this._entriesGroup.push({
                binding: 2,
                resource: {
                    buffer: this._directionalLightBuffer.buffer,
                },
            });
        }
    }
    _createLayout() {
        this._bindValues.clear();
        this._entriesLayout.length = 0;
        for (const cameraBind of t_cameraBindValue) {
            this._bindValues.set(cameraBind.name, cameraBind);
        }
        if (this._directionalLights.size > 0) {
            this._bindValues.set("directionalLights", {
                name: "directionalLights",
                index: this._bindValues.size,
                shaderItemType: `array<DirectionalLight,${this._directionalLights.size}>`,
                bindType: _Defines__WEBPACK_IMPORTED_MODULE_3__.BindType.buffer,
                visibility: GPUShaderStage.FRAGMENT,
            });
            if (this._directionalLightBuffer)
                this._directionalLightBuffer.destroy();
            const arrayBuffer = new Float32Array(8 * this._directionalLights.size);
            let offset = 0;
            for (const dirLight of this._directionalLights.values()) {
                arrayBuffer.set(dirLight.color.toArray(), offset);
                offset += 4;
                const normal = dirLight.direction;
                arrayBuffer.set(normal.toArray(), offset);
                offset += 4;
            }
            this._directionalLightBuffer = new _binds_BindBuffer__WEBPACK_IMPORTED_MODULE_6__.BindBuffer("directionalLight", arrayBuffer);
        }
        for (const bindOption of this._bindValues.values()) {
            if (bindOption.bindType === _Defines__WEBPACK_IMPORTED_MODULE_3__.BindType.buffer) {
                this._entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    buffer: {
                        type: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUBufferBindingType.Uniform
                    },
                });
            }
            else if (bindOption.bindType === _Defines__WEBPACK_IMPORTED_MODULE_3__.BindType.sampler) {
                this._entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    sampler: {
                        type: _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUSamplerBindingType.Filtering,
                    },
                });
            }
            else if (bindOption.bindType === _Defines__WEBPACK_IMPORTED_MODULE_3__.BindType.texture) {
                this._entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    texture: {},
                });
            }
        }
    }
    _addRenderableObject(renderableObj) {
        const material = renderableObj.material;
        const objs = this._renderableObjects.get(material);
        if (objs) {
            objs.push(renderableObj);
        }
        else {
            this._renderableObjects.set(material, []);
            this._renderableObjects.get(material).push(renderableObj);
        }
    }
    _removeRenderableObject(renderableObj) {
        const material = renderableObj.material;
        const arr = this._renderableObjects.get(material);
        if (arr) {
            _utils_CommonUtils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils.removeArrayItemByValue(arr, renderableObj);
        }
    }
    _addDirectionalLight(light) {
        this._directionalLights.set(light.uuid, light);
        this.needsRecreateBind = true;
    }
    _removeDirectionalLight(light) {
        this._directionalLights.delete(light.uuid);
        this.needsRecreateBind = true;
    }
    get renderableObjs() {
        return this._renderableObjects;
    }
    get directionalLights() {
        return this._directionalLights;
    }
    get bindValues() {
        return this._bindValues;
    }
}


/***/ }),

/***/ "./src/core/binds/BindBuffer.ts":
/*!**************************************!*\
  !*** ./src/core/binds/BindBuffer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindBuffer: () => (/* binding */ BindBuffer)
/* harmony export */ });
/* harmony import */ var _Defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Defines */ "./src/core/Defines.ts");
/* harmony import */ var _GPUBufferWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GPUBufferWrapper */ "./src/core/GPUBufferWrapper.ts");
/* harmony import */ var _ResourceManagers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ResourceManagers */ "./src/core/ResourceManagers.ts");
/* harmony import */ var _BindValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BindValue */ "./src/core/binds/BindValue.ts");




class BindBuffer extends _BindValue__WEBPACK_IMPORTED_MODULE_3__.BindValue {
    constructor(name, data) {
        super(name);
        this._buffer = new _GPUBufferWrapper__WEBPACK_IMPORTED_MODULE_1__.GPUBufferWrapper(GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST, data);
        this._data = data;
    }
    destroy() {
        this._buffer.destroy();
    }
    get type() {
        return _Defines__WEBPACK_IMPORTED_MODULE_0__.BindType.buffer;
    }
    set data(v) {
        this._needsUpdate = true;
        this._data = v;
    }
    update() {
        if (this._needsUpdate) {
            if (this._data.byteLength !== this._buffer.size) {
                _ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.DelayDestroyer.destroy(this._buffer, (data) => {
                    data.destroy();
                });
                this._buffer = new _GPUBufferWrapper__WEBPACK_IMPORTED_MODULE_1__.GPUBufferWrapper(GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST, this._data);
            }
            else {
                this._buffer.update(this._data);
            }
            this._needsUpdate = false;
        }
    }
    get buffer() {
        return this._buffer.buffer;
    }
}


/***/ }),

/***/ "./src/core/binds/BindSampler.ts":
/*!***************************************!*\
  !*** ./src/core/binds/BindSampler.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindSampler: () => (/* binding */ BindSampler)
/* harmony export */ });
/* harmony import */ var _Defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Defines */ "./src/core/Defines.ts");
/* harmony import */ var _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResourceManagers */ "./src/core/ResourceManagers.ts");
/* harmony import */ var _BindValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BindValue */ "./src/core/binds/BindValue.ts");



class BindSampler extends _BindValue__WEBPACK_IMPORTED_MODULE_2__.BindValue {
    constructor(name) {
        super(name);
        this._sampler = _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__.Context.activeDevice.createSampler({
            magFilter: 'linear',
            minFilter: 'linear',
        });
    }
    get type() {
        return _Defines__WEBPACK_IMPORTED_MODULE_0__.BindType.sampler;
    }
    get sampler() {
        return this._sampler;
    }
}


/***/ }),

/***/ "./src/core/binds/BindTexture.ts":
/*!***************************************!*\
  !*** ./src/core/binds/BindTexture.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindTexture: () => (/* binding */ BindTexture)
/* harmony export */ });
/* harmony import */ var _Defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Defines */ "./src/core/Defines.ts");
/* harmony import */ var _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ResourceManagers */ "./src/core/ResourceManagers.ts");
/* harmony import */ var _BindValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BindValue */ "./src/core/binds/BindValue.ts");



class BindTexture extends _BindValue__WEBPACK_IMPORTED_MODULE_2__.BindValue {
    constructor(name, texture) {
        super(name);
        this.changed = false;
        this._texture = texture;
        createImageBitmap(this._texture.image).then((imageBitmap) => {
            this._textureBuffer = _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__.Context.activeDevice.createTexture({
                size: [imageBitmap.width, imageBitmap.height, 1],
                format: "rgba8unorm",
                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });
            _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__.Context.activeDevice.queue.copyExternalImageToTexture({ source: imageBitmap }, { texture: this._textureBuffer }, [imageBitmap.width, imageBitmap.height]);
        });
        this._needsUpdate = false;
    }
    update() {
        if (this._needsUpdate) {
            createImageBitmap(this._texture.image).then((imageBitmap) => {
                _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__.DelayDestroyer.destroy(this._textureBuffer, (data) => {
                    data.destroy();
                });
                this._textureBuffer = _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__.Context.activeDevice.createTexture({
                    size: [imageBitmap.width, imageBitmap.height, 1],
                    format: "rgba8unorm",
                    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
                });
                _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__.Context.activeDevice.queue.copyExternalImageToTexture({ source: imageBitmap }, { texture: this._textureBuffer }, [imageBitmap.width, imageBitmap.height]);
                this.changed = true;
            });
            this._needsUpdate = false;
        }
    }
    destroy() {
        _ResourceManagers__WEBPACK_IMPORTED_MODULE_1__.DelayDestroyer.destroy(this._textureBuffer, (data) => {
            data.destroy();
        });
    }
    set texture(v) {
        if (v !== this._texture) {
            this._needsUpdate = true;
            this._texture = v;
        }
    }
    get texture() {
        return this._texture;
    }
    get type() {
        return _Defines__WEBPACK_IMPORTED_MODULE_0__.BindType.sampler;
    }
    get textureBuffer() {
        return this._textureBuffer;
    }
}


/***/ }),

/***/ "./src/core/binds/BindValue.ts":
/*!*************************************!*\
  !*** ./src/core/binds/BindValue.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindValue: () => (/* binding */ BindValue)
/* harmony export */ });
class BindValue {
    constructor(name) {
        this._needsUpdate = true;
        this._name = name;
    }
    destroy() { }
    update() { }
    get name() {
        return this._name;
    }
}


/***/ }),

/***/ "./src/geometries/BoxGeometry.ts":
/*!***************************************!*\
  !*** ./src/geometries/BoxGeometry.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxGeometry: () => (/* binding */ BoxGeometry)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/BufferAttribute */ "./src/core/BufferAttribute.ts");
/* harmony import */ var _core_BufferGeometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/BufferGeometry */ "./src/core/BufferGeometry.ts");
/* harmony import */ var _math_Vector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Vector3 */ "./src/math/Vector3.ts");




class BoxGeometry extends _core_BufferGeometry__WEBPACK_IMPORTED_MODULE_2__.BufferGeometry {
    constructor(width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
        super();
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.widthSegments = widthSegments;
        this.heightSegments = heightSegments;
        this.depthSegments = depthSegments;
        // segments
        widthSegments = Math.floor(widthSegments);
        heightSegments = Math.floor(heightSegments);
        depthSegments = Math.floor(depthSegments);
        // buffers
        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];
        // helper variables
        let numberOfVertices = 0;
        const buildPlane = (u, v, w, udir, vdir, width, height, depth, gridX, gridY) => {
            const segmentWidth = width / gridX;
            const segmentHeight = height / gridY;
            const widthHalf = width / 2;
            const heightHalf = height / 2;
            const depthHalf = depth / 2;
            const gridX1 = gridX + 1;
            const gridY1 = gridY + 1;
            let vertexCounter = 0;
            const vector = new _math_Vector3__WEBPACK_IMPORTED_MODULE_3__.Vector3();
            // generate vertices, normals and uvs
            for (let iy = 0; iy < gridY1; iy++) {
                const y = iy * segmentHeight - heightHalf;
                for (let ix = 0; ix < gridX1; ix++) {
                    const obj = vector;
                    const x = ix * segmentWidth - widthHalf;
                    // set values to correct vector component
                    obj[u] = x * udir;
                    obj[v] = y * vdir;
                    obj[w] = depthHalf;
                    // now apply vector to vertex buffer
                    vertices.push(vector.x, vector.y, vector.z);
                    // set values to correct vector component
                    obj[u] = 0;
                    obj[v] = 0;
                    obj[w] = depth > 0 ? 1 : -1;
                    // now apply vector to normal buffer
                    normals.push(vector.x, vector.y, vector.z);
                    // uvs
                    uvs.push(ix / gridX);
                    uvs.push(1 - (iy / gridY));
                    // counters
                    vertexCounter += 1;
                }
            }
            // indices
            // 1. you need three indices to draw a single face
            // 2. a single segment consists of two faces
            // 3. so we need to generate six (2*3) indices per segment
            for (let iy = 0; iy < gridY; iy++) {
                for (let ix = 0; ix < gridX; ix++) {
                    const a = numberOfVertices + ix + gridX1 * iy;
                    const b = numberOfVertices + ix + gridX1 * (iy + 1);
                    const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
                    const d = numberOfVertices + (ix + 1) + gridX1 * iy;
                    // faces
                    indices.push(a, b, d);
                    indices.push(b, c, d);
                }
            }
            // add a group to the geometry. this will ensure multi material support
            //this.addGroup( groupStart, groupCount, materialIndex );
            // calculate new start value for groups
            // update total number of vertices
            numberOfVertices += vertexCounter;
        };
        // build each side of the box geometry
        buildPlane('z', 'y', 'x', -1, -1, depth, height, width, depthSegments, heightSegments); // px
        buildPlane('z', 'y', 'x', 1, -1, depth, height, -width, depthSegments, heightSegments); // nx
        buildPlane('x', 'z', 'y', 1, 1, width, depth, height, widthSegments, depthSegments); // py
        buildPlane('x', 'z', 'y', 1, -1, width, depth, -height, widthSegments, depthSegments); // ny
        buildPlane('x', 'y', 'z', 1, -1, width, height, depth, widthSegments, heightSegments); // pz
        buildPlane('x', 'y', 'z', -1, -1, width, height, -depth, widthSegments, heightSegments); // nz
        // build geometry
        const indicesAttr = new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Uint32Array(indices), _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUIndexFormat.Uint32, 1);
        this.setIndex(indicesAttr);
        this.setAttribute('position', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(vertices), _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUVertexFormat.Float32x3, 3));
        this.setAttribute('normal', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(normals), _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUVertexFormat.Float32x3, 3));
        this.setAttribute('uv', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(uvs), _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUVertexFormat.Float32x2, 2));
    }
}


/***/ }),

/***/ "./src/geometries/PlaneGeometry.ts":
/*!*****************************************!*\
  !*** ./src/geometries/PlaneGeometry.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaneGeometry: () => (/* binding */ PlaneGeometry)
/* harmony export */ });
/* harmony import */ var _core_BufferGeometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/BufferGeometry */ "./src/core/BufferGeometry.ts");
/* harmony import */ var _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/BufferAttribute */ "./src/core/BufferAttribute.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");



class PlaneGeometry extends _core_BufferGeometry__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry {
    constructor(width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
        super();
        this.width = width;
        this.height = height;
        this.widthSegments = widthSegments;
        this.heightSegments = heightSegments;
        const width_half = width / 2;
        const height_half = height / 2;
        const gridX = Math.floor(widthSegments);
        const gridY = Math.floor(heightSegments);
        const gridX1 = gridX + 1;
        const gridY1 = gridY + 1;
        const segment_width = width / gridX;
        const segment_height = height / gridY;
        //
        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];
        for (let iy = 0; iy < gridY1; iy++) {
            const y = iy * segment_height - height_half;
            for (let ix = 0; ix < gridX1; ix++) {
                const x = ix * segment_width - width_half;
                vertices.push(x, -y, 0);
                normals.push(0, 0, 1);
                uvs.push(ix / gridX);
                uvs.push(1 - (iy / gridY));
            }
        }
        for (let iy = 0; iy < gridY; iy++) {
            for (let ix = 0; ix < gridX; ix++) {
                const a = ix + gridX1 * iy;
                const b = ix + gridX1 * (iy + 1);
                const c = (ix + 1) + gridX1 * (iy + 1);
                const d = (ix + 1) + gridX1 * iy;
                indices.push(a, b, d);
                indices.push(b, c, d);
            }
        }
        const indicesAttr = new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Uint32Array(indices), _Constants__WEBPACK_IMPORTED_MODULE_2__.GPUIndexFormat.Uint32, 1);
        this.setIndex(indicesAttr);
        this.setAttribute('position', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(vertices), _Constants__WEBPACK_IMPORTED_MODULE_2__.GPUVertexFormat.Float32x3, 3));
        this.setAttribute('normal', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(normals), _Constants__WEBPACK_IMPORTED_MODULE_2__.GPUVertexFormat.Float32x3, 3));
        this.setAttribute('uv', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(uvs), _Constants__WEBPACK_IMPORTED_MODULE_2__.GPUVertexFormat.Float32x2, 2));
    }
}



/***/ }),

/***/ "./src/geometries/SphereGeometry.ts":
/*!******************************************!*\
  !*** ./src/geometries/SphereGeometry.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SphereGeometry: () => (/* binding */ SphereGeometry)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/BufferAttribute */ "./src/core/BufferAttribute.ts");
/* harmony import */ var _core_BufferGeometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/BufferGeometry */ "./src/core/BufferGeometry.ts");
/* harmony import */ var _math_Vector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Vector3 */ "./src/math/Vector3.ts");




class SphereGeometry extends _core_BufferGeometry__WEBPACK_IMPORTED_MODULE_2__.BufferGeometry {
    constructor(radius = 1, widthSegments = 32, heightSegments = 16, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
        super();
        this.radius = radius,
            this.widthSegments = widthSegments,
            this.heightSegments = heightSegments,
            this.phiStart = phiStart,
            this.phiLength = phiLength,
            this.thetaStart = thetaStart,
            this.thetaLength = thetaLength;
        widthSegments = Math.max(3, Math.floor(widthSegments));
        heightSegments = Math.max(2, Math.floor(heightSegments));
        const thetaEnd = Math.min(thetaStart + thetaLength, Math.PI);
        let index = 0;
        const grid = [];
        const vertex = new _math_Vector3__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        const normal = new _math_Vector3__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        // buffers
        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];
        // generate vertices, normals and uvs
        for (let iy = 0; iy <= heightSegments; iy++) {
            const verticesRow = [];
            const v = iy / heightSegments;
            // special case for the poles
            let uOffset = 0;
            if (iy === 0 && thetaStart === 0) {
                uOffset = 0.5 / widthSegments;
            }
            else if (iy === heightSegments && thetaEnd === Math.PI) {
                uOffset = -0.5 / widthSegments;
            }
            for (let ix = 0; ix <= widthSegments; ix++) {
                const u = ix / widthSegments;
                // vertex
                vertex.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
                vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                vertices.push(vertex.x, vertex.y, vertex.z);
                // normal
                normal.copy(vertex).normalize();
                normals.push(normal.x, normal.y, normal.z);
                // uv
                uvs.push(u + uOffset, 1 - v);
                verticesRow.push(index++);
            }
            grid.push(verticesRow);
        }
        // indices
        for (let iy = 0; iy < heightSegments; iy++) {
            for (let ix = 0; ix < widthSegments; ix++) {
                const a = grid[iy][ix + 1];
                const b = grid[iy][ix];
                const c = grid[iy + 1][ix];
                const d = grid[iy + 1][ix + 1];
                if (iy !== 0 || thetaStart > 0)
                    indices.push(a, b, d);
                if (iy !== heightSegments - 1 || thetaEnd < Math.PI)
                    indices.push(b, c, d);
            }
        }
        // build geometry
        const indicesAttr = new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Uint32Array(indices), _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUIndexFormat.Uint32, 1);
        this.setIndex(indicesAttr);
        this.setAttribute('position', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(vertices), _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUVertexFormat.Float32x3, 3));
        this.setAttribute('normal', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(normals), _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUVertexFormat.Float32x3, 3));
        this.setAttribute('uv', new _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(uvs), _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUVertexFormat.Float32x2, 2));
    }
}


/***/ }),

/***/ "./src/lights/DirectionalLight.ts":
/*!****************************************!*\
  !*** ./src/lights/DirectionalLight.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectionalLight: () => (/* binding */ DirectionalLight)
/* harmony export */ });
/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Light */ "./src/lights/Light.ts");
/* harmony import */ var _core_Object3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Object3D */ "./src/core/Object3D.ts");
/* harmony import */ var _spectre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spectre */ "./src/spectre.ts");



class DirectionalLight extends _Light__WEBPACK_IMPORTED_MODULE_0__.Light {
    get type() {
        return "DirectionalLight";
    }
    static Is(object) {
        return object instanceof DirectionalLight;
    }
    constructor(color, intensity = 1) {
        super(color, intensity);
        this._direction = new _spectre__WEBPACK_IMPORTED_MODULE_2__.Vector3();
        this.updateMatrix();
        //this.shadow = new DirectionalLightShadow();
        this._direction.copy(_core_Object3D__WEBPACK_IMPORTED_MODULE_1__.Object3D.DEFAULT_UP);
    }
    get uniform() {
        return this._uniform;
    }
    set direction(v) {
        this._direction.copy(v);
    }
    get direction() {
        return this._direction;
    }
    dispose() {
        //this.shadow.dispose();
    }
    copy(source) {
        super.copy(source);
        this._direction.copy(source._direction);
        //this.shadow = source.shadow.clone();
        return this;
    }
}


/***/ }),

/***/ "./src/lights/Light.ts":
/*!*****************************!*\
  !*** ./src/lights/Light.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Light: () => (/* binding */ Light)
/* harmony export */ });
/* harmony import */ var _core_Object3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Object3D */ "./src/core/Object3D.ts");

class Light extends _core_Object3D__WEBPACK_IMPORTED_MODULE_0__.Object3D {
    get type() {
        return "Light";
    }
    static Is(object) {
        return object instanceof Light;
    }
    get isLight() {
        return true;
    }
    constructor(color, intensity = 1) {
        super();
        this._color = color;
        this._intensity = intensity;
    }
    update() {
    }
    get color() {
        return this._color;
    }
}


/***/ }),

/***/ "./src/loaders/FileLoader.ts":
/*!***********************************!*\
  !*** ./src/loaders/FileLoader.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileLoader: () => (/* binding */ FileLoader)
/* harmony export */ });
/* harmony import */ var _core_ResourceManagers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ResourceManagers */ "./src/core/ResourceManagers.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./src/loaders/Loader.ts");


const loading = {};
class HttpError extends Error {
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}
class FileLoader extends _Loader__WEBPACK_IMPORTED_MODULE_1__.Loader {
    constructor(manager = undefined) {
        super(manager);
    }
    load(url, onLoad, onProgress, onError) {
        if (url === undefined)
            url = '';
        if (this.path !== undefined)
            url = this.path + url;
        url = this.manager.resolveURL(url);
        const cached = _core_ResourceManagers__WEBPACK_IMPORTED_MODULE_0__.Cache.get(url);
        if (cached !== undefined) {
            this.manager.itemStart(url);
            setTimeout(() => {
                if (onLoad)
                    onLoad(cached);
                this.manager.itemEnd(url);
            }, 0);
            return cached;
        }
        // Check if request is duplicate
        if (loading[url] !== undefined) {
            loading[url].push({
                onLoad: onLoad,
                onProgress: onProgress,
                onError: onError
            });
            return;
        }
        // Initialise array for duplicate requests
        loading[url] = [];
        loading[url].push({
            onLoad: onLoad,
            onProgress: onProgress,
            onError: onError,
        });
        // create request
        const req = new Request(url, {
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? 'include' : 'same-origin',
            // An abort controller could be added within a future PR
        });
        // record states ( avoid data race )
        const mimeType = this.mimeType;
        const responseType = this.responseType;
        // start the fetch
        fetch(req)
            .then(response => {
            if (response.status === 200 || response.status === 0) {
                // Some browsers return HTTP Status 0 when using non-http protocol
                // e.g. 'file://' or 'data://'. Handle as success.
                if (response.status === 0) {
                    console.warn('THREE.FileLoader: HTTP Status 0 received.');
                }
                // Workaround: Checking if response.body === undefined for Alipay browser #23548
                if (typeof ReadableStream === 'undefined' || response.body === undefined || response.body.getReader === undefined) {
                    return response;
                }
                const callbacks = loading[url];
                const reader = response.body.getReader();
                // Nginx needs X-File-Size check
                // https://serverfault.com/questions/482875/why-does-nginx-remove-content-length-header-for-chunked-content
                const contentLength = response.headers.get('Content-Length') || response.headers.get('X-File-Size');
                const total = contentLength ? parseInt(contentLength) : 0;
                const lengthComputable = total !== 0;
                let loaded = 0;
                // periodically read data into the new stream tracking while download progress
                const stream = new ReadableStream({
                    start(controller) {
                        readData();
                        function readData() {
                            reader.read().then(({ done, value }) => {
                                if (done) {
                                    controller.close();
                                }
                                else {
                                    loaded += value.byteLength;
                                    const event = new ProgressEvent('progress', { lengthComputable, loaded, total });
                                    for (let i = 0, il = callbacks.length; i < il; i++) {
                                        const callback = callbacks[i];
                                        if (callback.onProgress)
                                            callback.onProgress(event);
                                    }
                                    controller.enqueue(value);
                                    readData();
                                }
                            });
                        }
                    }
                });
                return new Response(stream);
            }
            else {
                throw new HttpError(`fetch for "${response.url}" responded with ${response.status}: ${response.statusText}`, response);
            }
        })
            .then(response => {
            switch (responseType) {
                case 'arraybuffer':
                    return response.arrayBuffer();
                case 'blob':
                    return response.blob();
                case 'document':
                    return response.text()
                        .then(text => {
                        const parser = new DOMParser();
                        return parser.parseFromString(text, mimeType);
                    });
                case 'json':
                    return response.json();
                default:
                    if (mimeType === undefined) {
                        return response.text();
                    }
                    else {
                        // sniff encoding
                        const re = /charset="?([^;"\s]*)"?/i;
                        const exec = re.exec(mimeType);
                        const label = exec && exec[1] ? exec[1].toLowerCase() : undefined;
                        const decoder = new TextDecoder(label);
                        return response.arrayBuffer().then(ab => decoder.decode(ab));
                    }
            }
        })
            .then(data => {
            // Add to cache only on HTTP success, so that we do not cache
            // error response bodies as proper responses to requests.
            _core_ResourceManagers__WEBPACK_IMPORTED_MODULE_0__.Cache.add(url, data);
            const callbacks = loading[url];
            delete loading[url];
            for (let i = 0, il = callbacks.length; i < il; i++) {
                const callback = callbacks[i];
                if (callback.onLoad)
                    callback.onLoad(data);
            }
        })
            .catch(err => {
            // Abort errors and other errors are handled the same
            const callbacks = loading[url];
            if (callbacks === undefined) {
                // When onLoad was called and url was deleted in `loading`
                this.manager.itemError(url);
                throw err;
            }
            delete loading[url];
            for (let i = 0, il = callbacks.length; i < il; i++) {
                const callback = callbacks[i];
                if (callback.onError)
                    callback.onError(err);
            }
            this.manager.itemError(url);
        })
            .finally(() => {
            this.manager.itemEnd(url);
        });
        this.manager.itemStart(url);
    }
    setResponseType(value) {
        this.responseType = value;
        return this;
    }
    setMimeType(value) {
        this.mimeType = value;
        return this;
    }
}



/***/ }),

/***/ "./src/loaders/ImageLoader.ts":
/*!************************************!*\
  !*** ./src/loaders/ImageLoader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageLoader: () => (/* binding */ ImageLoader)
/* harmony export */ });
/* harmony import */ var _core_ResourceManagers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ResourceManagers */ "./src/core/ResourceManagers.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./src/loaders/Loader.ts");


class ImageLoader extends _Loader__WEBPACK_IMPORTED_MODULE_1__.Loader {
    constructor(manager = undefined) {
        super(manager);
    }
    load(url, onLoad, onProgress, onError) {
        if (this.path !== undefined)
            url = this.path + url;
        url = this.manager.resolveURL(url);
        const scope = this;
        const cached = _core_ResourceManagers__WEBPACK_IMPORTED_MODULE_0__.Cache.get(url);
        if (cached !== undefined) {
            scope.manager.itemStart(url);
            setTimeout(function () {
                if (onLoad)
                    onLoad(cached);
                scope.manager.itemEnd(url);
            }, 0);
            return cached;
        }
        const image = document.createElement("img");
        const onImageLoad = () => {
            removeEventListeners();
            _core_ResourceManagers__WEBPACK_IMPORTED_MODULE_0__.Cache.add(url, image);
            if (onLoad)
                onLoad(image);
            scope.manager.itemEnd(url);
        };
        function onImageError(event) {
            removeEventListeners();
            if (onError)
                onError(event);
            scope.manager.itemError(url);
            scope.manager.itemEnd(url);
        }
        function removeEventListeners() {
            image.removeEventListener('load', onImageLoad, false);
            image.removeEventListener('error', onImageError, false);
        }
        image.addEventListener('load', onImageLoad, false);
        image.addEventListener('error', onImageError, false);
        if (url.slice(0, 5) !== 'data:') {
            if (this.crossOrigin !== undefined)
                image.crossOrigin = this.crossOrigin;
        }
        scope.manager.itemStart(url);
        image.src = url;
        return image;
    }
}


/***/ }),

/***/ "./src/loaders/Loader.ts":
/*!*******************************!*\
  !*** ./src/loaders/Loader.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _LoadingManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingManager */ "./src/loaders/LoadingManager.ts");

class Loader {
    constructor(manager = undefined) {
        this.crossOrigin = 'anonymous';
        this.withCredentials = false;
        this.path = '';
        this.resourcePath = '';
        this.requestHeader = {};
        this.manager = (manager !== undefined) ? manager : _LoadingManager__WEBPACK_IMPORTED_MODULE_0__.DefaultLoadingManager;
    }
    loadAsync(url, onProgress) {
        const scope = this;
        return new Promise(function (resolve, reject) {
            scope.load(url, resolve, onProgress, reject);
        });
    }
    parse( /* data */) { }
    setCrossOrigin(crossOrigin) {
        this.crossOrigin = crossOrigin;
        return this;
    }
    setWithCredentials(value) {
        this.withCredentials = value;
        return this;
    }
    setPath(path) {
        this.path = path;
        return this;
    }
    setResourcePath(resourcePath) {
        this.resourcePath = resourcePath;
        return this;
    }
    setRequestHeader(requestHeader) {
        this.requestHeader = requestHeader;
        return this;
    }
}


/***/ }),

/***/ "./src/loaders/LoadingManager.ts":
/*!***************************************!*\
  !*** ./src/loaders/LoadingManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLoadingManager: () => (/* binding */ DefaultLoadingManager),
/* harmony export */   LoadingManager: () => (/* binding */ LoadingManager)
/* harmony export */ });
class LoadingManager {
    constructor(onLoad = undefined, onProgress = undefined, onError = undefined) {
        // Refer to #5689 for the reason why we don't set .onStart
        // in the constructor
        this.isLoading = false;
        this.itemsLoaded = 0;
        this.itemsTotal = 0;
        this.urlModifier = undefined;
        this.handlers = [];
        this.onStart = undefined;
        this.onLoad = onLoad;
        this.onProgress = onProgress;
        this.onError = onError;
    }
    itemStart(url) {
        this.itemsTotal++;
        if (this.isLoading === false) {
            if (this.onStart !== undefined) {
                this.onStart(url, this.itemsLoaded, this.itemsTotal);
            }
        }
        this.isLoading = true;
    }
    itemEnd(url) {
        this.itemsLoaded++;
        if (this.onProgress !== undefined) {
            this.onProgress(url, this.itemsLoaded, this.itemsTotal);
        }
        if (this.itemsLoaded === this.itemsTotal) {
            this.isLoading = false;
            if (this.onLoad !== undefined) {
                this.onLoad();
            }
        }
    }
    itemError(url) {
        if (this.onError !== undefined) {
            this.onError(url);
        }
    }
    resolveURL(url) {
        if (this.urlModifier) {
            return this.urlModifier(url);
        }
        return url;
    }
    setURLModifier(transform) {
        this.urlModifier = transform;
        return this;
    }
    addHandler(regex, loader) {
        this.handlers.push(regex, loader);
        return this;
    }
    removeHandler(regex) {
        const index = this.handlers.indexOf(regex);
        if (index !== -1) {
            this.handlers.splice(index, 2);
        }
        return this;
    }
    getHandler(file) {
        for (let i = 0, l = this.handlers.length; i < l; i += 2) {
            const regex = this.handlers[i];
            const loader = this.handlers[i + 1];
            if (regex.global)
                regex.lastIndex = 0; // see #17920
            if (regex.test(file)) {
                return loader;
            }
        }
        return null;
    }
}
const DefaultLoadingManager = /*@__PURE__*/ new LoadingManager();


/***/ }),

/***/ "./src/loaders/TextureLoader.ts":
/*!**************************************!*\
  !*** ./src/loaders/TextureLoader.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextureLoader: () => (/* binding */ TextureLoader)
/* harmony export */ });
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageLoader */ "./src/loaders/ImageLoader.ts");
/* harmony import */ var _textures_Texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../textures/Texture */ "./src/textures/Texture.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "./src/loaders/Loader.ts");



class TextureLoader extends _Loader__WEBPACK_IMPORTED_MODULE_2__.Loader {
    constructor(manager = undefined) {
        super(manager);
    }
    load(url, onLoad, onProgress, onError) {
        const texture = new _textures_Texture__WEBPACK_IMPORTED_MODULE_1__.Texture();
        const loader = new _ImageLoader__WEBPACK_IMPORTED_MODULE_0__.ImageLoader(this.manager);
        loader.setCrossOrigin(this.crossOrigin);
        loader.setPath(this.path);
        loader.load(url, function (image) {
            texture.image = image;
            texture.needsUpdate = true;
            if (onLoad !== undefined) {
                onLoad(texture);
            }
        }, onProgress, onError);
        return texture;
    }
}



/***/ }),

/***/ "./src/materials/Material.ts":
/*!***********************************!*\
  !*** ./src/materials/Material.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Material: () => (/* binding */ Material)
/* harmony export */ });
/* harmony import */ var _math_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Color */ "./src/math/Color.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/binds/BindBuffer */ "./src/core/binds/BindBuffer.ts");
/* harmony import */ var _core_binds_BindSampler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/binds/BindSampler */ "./src/core/binds/BindSampler.ts");
/* harmony import */ var _core_binds_BindTexture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/binds/BindTexture */ "./src/core/binds/BindTexture.ts");
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.ts");
/* harmony import */ var _core_Pipeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Pipeline */ "./src/core/Pipeline.ts");
/* harmony import */ var _core_Defines__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Defines */ "./src/core/Defines.ts");








class Material {
    constructor() {
        this._map = null;
        this._parameters = new Uint32Array(4);
        this._transparent = false;
        this._opacity = 1;
        this._uniforms = new Map();
        this._shaderOptions = {
            attributeValues: new Map(),
            bindValues: new Map(),
        };
        this.uuid = _math_MathUtils__WEBPACK_IMPORTED_MODULE_5__.MathUtils.generateUUID();
        this._pipeline = new _core_Pipeline__WEBPACK_IMPORTED_MODULE_6__.Pipleline(this);
        this._setAttributeValue("position", "vec3<f32>", _Constants__WEBPACK_IMPORTED_MODULE_1__.GPUVertexFormat.Float32x3, 4 * 3);
        this._uniforms.set("parameters", new _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_2__.BindBuffer("parameters", this._parameters));
        this._setBindValue("parameters", "vec4<u32>", _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.buffer, GPUShaderStage.FRAGMENT);
        this.color = new _math_Color__WEBPACK_IMPORTED_MODULE_0__.Color(1.0, 1.0, 1.0);
    }
    updateUniforms() {
        for (const uniform of this.uniforms.values()) {
            uniform.update();
            if (uniform.type === _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.texture) {
                const textureUniform = uniform;
                if (textureUniform.changed && !this.pipeline.needsCreateMatBindGroup) {
                    this.pipeline.needsCreateMatBindGroup = true;
                    textureUniform.changed = false;
                }
            }
        }
    }
    setLights(lights) { }
    getBindLayout() {
        const entriesLayout = [];
        for (const bindOption of this._shaderOptions.bindValues.values()) {
            if (bindOption.bindType === _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.buffer) {
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    buffer: {
                        type: _Constants__WEBPACK_IMPORTED_MODULE_1__.GPUBufferBindingType.Uniform
                    },
                });
            }
            else if (bindOption.bindType === _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.sampler) {
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    sampler: {
                        type: _Constants__WEBPACK_IMPORTED_MODULE_1__.GPUSamplerBindingType.Filtering,
                    },
                });
            }
            else if (bindOption.bindType === _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.texture) {
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    texture: {},
                });
            }
        }
        return entriesLayout;
    }
    getBindGroup() {
        const entriesGroup = new Array();
        for (const bindOption of this._shaderOptions.bindValues.values()) {
            if (bindOption.bindType === _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.buffer) {
                const bufferUnform = this.uniforms.get(bindOption.name);
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: {
                        buffer: bufferUnform.buffer,
                    },
                });
            }
            else if (bindOption.bindType === _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.sampler) {
                const samplerUnform = this.uniforms.get(bindOption.name);
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: samplerUnform.sampler,
                });
            }
            else if (bindOption.bindType === _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.texture) {
                const textureUnform = this.uniforms.get(bindOption.name);
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: textureUnform.textureBuffer.createView(),
                });
            }
        }
        return entriesGroup;
    }
    _setAttributeValue(name, itemType, format, itemSize) {
        const map = this.shaderOptions.attributeValues;
        map.set(name, {
            name: name,
            index: this._shaderOptions.bindValues.size,
            format: format,
            shaderItemType: itemType,
            itemSize: itemSize,
        });
        let index = 0;
        for (const value of map.values()) {
            value.index = index++;
        }
    }
    _setBindValue(name, itemType, bindType, visibility) {
        const map = this.shaderOptions.bindValues;
        map.set(name, {
            name: name,
            index: this._shaderOptions.bindValues.size,
            bindType: bindType,
            shaderItemType: itemType,
            visibility: visibility,
        });
        let index = 0;
        for (const value of map.values()) {
            value.index = index++;
        }
    }
    _deleteValue(map, name) {
        map.delete(name);
        let index = 0;
        for (const value of map.values()) {
            value.index = index++;
        }
    }
    get applyLight() {
        return false;
    }
    set color(v) {
        this._color = v;
        let colorBuffer;
        let itemType;
        if (this._transparent) {
            colorBuffer = new Float32Array(4);
            itemType = "vec4<f32>";
            colorBuffer.set(this._color.toArray());
            colorBuffer[3] = this._opacity;
        }
        else {
            colorBuffer = this._color.toArray();
            itemType = "vec3<f32>";
        }
        const colorUniform = this._uniforms.get("color");
        if (!colorUniform) {
            this._setBindValue("color", itemType, _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.buffer, GPUShaderStage.FRAGMENT);
            this._uniforms.set("color", new _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_2__.BindBuffer("color", colorBuffer));
        }
        else if (colorBuffer.length * colorBuffer.BYTES_PER_ELEMENT !== colorUniform.buffer.size) {
            this._shaderOptions.bindValues.get("color").shaderItemType = itemType;
            this._uniforms.set("color", new _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_2__.BindBuffer("color", colorBuffer));
        }
        else {
            colorUniform.data = colorBuffer;
        }
    }
    get color() {
        return this._color;
    }
    set map(v) {
        if (v === this._map)
            return;
        if (v === null && this._map !== null) {
            this._uniforms.get("colorSampler").destroy();
            this._uniforms.get("texture").destroy();
            this._uniforms.delete("colorSampler");
            this._uniforms.delete("texture");
            this._deleteValue(this._shaderOptions.attributeValues, "uv");
            this._deleteValue(this._shaderOptions.bindValues, "colorSampler");
            this._deleteValue(this._shaderOptions.bindValues, "texture");
            this.pipeline.needsCompile = true;
        }
        else if (v !== null && this._map === null) {
            this._setAttributeValue("uv", "vec2<f32>", _Constants__WEBPACK_IMPORTED_MODULE_1__.GPUVertexFormat.Float32x2, 4 * 2);
            this._setBindValue("colorSampler", "sampler", _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.sampler, GPUShaderStage.FRAGMENT);
            this._uniforms.set("colorSampler", new _core_binds_BindSampler__WEBPACK_IMPORTED_MODULE_3__.BindSampler("colorSampler"));
            this._setBindValue("texture", "texture_2d<f32>", _core_Defines__WEBPACK_IMPORTED_MODULE_7__.BindType.texture, GPUShaderStage.FRAGMENT);
            this._uniforms.set("texture", new _core_binds_BindTexture__WEBPACK_IMPORTED_MODULE_4__.BindTexture("texture", v));
            this.pipeline.needsCompile = true;
            this._uniforms.get("texture").texture = v;
        }
        this.pipeline.needsCreateMatBindGroup = true;
        this._map = v;
    }
    get map() {
        return this._map;
    }
    set transparent(v) {
        if (this._transparent === v)
            return;
        this.pipeline.needsCompile = true;
        this.pipeline.needsCreateMatBindGroup = true;
        this._transparent = v;
        this.color = this._color;
    }
    get transparent() {
        return this._transparent;
    }
    set opacity(v) {
        this._opacity = v;
        this.color = this._color;
    }
    get opacity() {
        return this._opacity;
    }
    get uniforms() {
        return this._uniforms;
    }
    get shaderOptions() {
        return this._shaderOptions;
    }
    get shader() {
        return this._shader;
    }
    get pipeline() {
        return this._pipeline;
    }
}


/***/ }),

/***/ "./src/materials/MeshBasicMaterial.ts":
/*!********************************************!*\
  !*** ./src/materials/MeshBasicMaterial.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeshBasicMaterial: () => (/* binding */ MeshBasicMaterial)
/* harmony export */ });
/* harmony import */ var _shaders_MeshBasicShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaders/MeshBasicShader */ "./src/shaders/MeshBasicShader.ts");
/* harmony import */ var _Material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Material */ "./src/materials/Material.ts");


class MeshBasicMaterial extends _Material__WEBPACK_IMPORTED_MODULE_1__.Material {
    constructor() {
        super();
        this._shader = new _shaders_MeshBasicShader__WEBPACK_IMPORTED_MODULE_0__.MeshBasicShader(this);
    }
}


/***/ }),

/***/ "./src/materials/MeshPhongMaterial.ts":
/*!********************************************!*\
  !*** ./src/materials/MeshPhongMaterial.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeshPhongMaterial: () => (/* binding */ MeshPhongMaterial)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/binds/BindBuffer */ "./src/core/binds/BindBuffer.ts");
/* harmony import */ var _core_Defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Defines */ "./src/core/Defines.ts");
/* harmony import */ var _lights_DirectionalLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lights/DirectionalLight */ "./src/lights/DirectionalLight.ts");
/* harmony import */ var _math_Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/Color */ "./src/math/Color.ts");
/* harmony import */ var _shaders_MeshPhongShader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/MeshPhongShader */ "./src/shaders/MeshPhongShader.ts");
/* harmony import */ var _Material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Material */ "./src/materials/Material.ts");







class MeshPhongMaterial extends _Material__WEBPACK_IMPORTED_MODULE_6__.Material {
    constructor() {
        super();
        this._specular = new _math_Color__WEBPACK_IMPORTED_MODULE_4__.Color(0x111111); //高光反射
        this._emissive = new _math_Color__WEBPACK_IMPORTED_MODULE_4__.Color(0x000000); //自发光
        this._shininess = 30;
        this._shader = new _shaders_MeshPhongShader__WEBPACK_IMPORTED_MODULE_5__.MeshPhongShader(this);
        this._setAttributeValue("normal", "vec3<f32>", _Constants__WEBPACK_IMPORTED_MODULE_0__.GPUVertexFormat.Float32x3, 4 * 3);
        this._uniforms.set("specular", new _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__.BindBuffer("specular", this._specular.toArray()));
        this._setBindValue("specular", "vec3<f32>", _core_Defines__WEBPACK_IMPORTED_MODULE_2__.BindType.buffer, GPUShaderStage.FRAGMENT);
        this._uniforms.set("emissive", new _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__.BindBuffer("emissive", this._emissive.toArray()));
        this._setBindValue("emissive", "vec3<f32>", _core_Defines__WEBPACK_IMPORTED_MODULE_2__.BindType.buffer, GPUShaderStage.FRAGMENT);
        this._uniforms.set("shininess", new _core_binds_BindBuffer__WEBPACK_IMPORTED_MODULE_1__.BindBuffer("shininess", new Float32Array([this._shininess])));
        this._setBindValue("shininess", "f32", _core_Defines__WEBPACK_IMPORTED_MODULE_2__.BindType.buffer, GPUShaderStage.FRAGMENT);
    }
    setLights(lights) {
        for (const light of lights) {
            if (_lights_DirectionalLight__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight.Is(light)) {
                const dirLight = light;
                dirLight.uniform;
            }
        }
    }
    get applyLight() {
        return false;
    }
    set specular(v) {
        this._specular.copy(v);
        this._uniforms.get("specular").data = v.toArray();
    }
    set emissive(v) {
        this._emissive.copy(v);
        this._uniforms.get("emissive").data = v.toArray();
    }
    set shininess(v) {
        this._shininess = v;
        this._uniforms.get("specular").data = new Float32Array([v]);
    }
}


/***/ }),

/***/ "./src/math/Color.ts":
/*!***************************!*\
  !*** ./src/math/Color.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color),
/* harmony export */   SRGBColorSpace: () => (/* binding */ SRGBColorSpace)
/* harmony export */ });
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils */ "./src/math/MathUtils.ts");
/* harmony import */ var _ColorManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorManagement */ "./src/math/ColorManagement.ts");


const SRGBColorSpace = "srgb";
const _colorKeywords = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32,
};
const _hslA = { h: 0, s: 0, l: 0 };
const _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * 6 * (2 / 3 - t);
    return p;
}
class Color {
    constructor(r = 0, g, b) {
        return this.set(r, g, b);
    }
    set(r, g, b) {
        if (g === undefined && b === undefined) {
            const value = r;
            if (typeof value === "number") {
                this.setHex(value);
            }
            else if (typeof value === "string") {
                this.setStyle(value);
            }
        }
        else if (typeof r === "number") {
            this.setRGB(r, g, b);
        }
        else {
            throw "Color parameter error!";
        }
        return this;
    }
    setScalar(scalar) {
        this.r = scalar;
        this.g = scalar;
        this.b = scalar;
        return this;
    }
    setHex(hex, colorSpace = SRGBColorSpace) {
        hex = Math.floor(hex);
        this.r = ((hex >> 16) & 255) / 255;
        this.g = ((hex >> 8) & 255) / 255;
        this.b = (hex & 255) / 255;
        _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.toWorkingColorSpace(this, colorSpace);
        return this;
    }
    setRGB(r, g, b, colorSpace = _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.workingColorSpace) {
        this.r = r;
        this.g = g;
        this.b = b;
        _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.toWorkingColorSpace(this, colorSpace);
        return this;
    }
    setHSL(h, s, l, colorSpace = _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.workingColorSpace) {
        // h,s,l ranges are in 0.0 - 1.0
        h = (0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.euclideanModulo)(h, 1);
        s = (0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.clamp)(s, 0, 1);
        l = (0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.clamp)(l, 0, 1);
        if (s === 0) {
            this.r = this.g = this.b = l;
        }
        else {
            const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
            const q = 2 * l - p;
            this.r = hue2rgb(q, p, h + 1 / 3);
            this.g = hue2rgb(q, p, h);
            this.b = hue2rgb(q, p, h - 1 / 3);
        }
        _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.toWorkingColorSpace(this, colorSpace);
        return this;
    }
    setStyle(style, colorSpace = SRGBColorSpace) {
        function handleAlpha(string) {
            if (string === undefined)
                return;
            if (parseFloat(string) < 1) {
                console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
            }
        }
        let m;
        if ((m = /^(\w+)\(([^\)]*)\)/.exec(style))) {
            // rgb / hsl
            let color;
            const name = m[1];
            const components = m[2];
            switch (name) {
                case "rgb":
                case "rgba":
                    if ((color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components))) {
                        // rgb(255,0,0) rgba(255,0,0,0.5)
                        handleAlpha(color[4]);
                        return this.setRGB(Math.min(255, parseInt(color[1], 10)) / 255, Math.min(255, parseInt(color[2], 10)) / 255, Math.min(255, parseInt(color[3], 10)) / 255, colorSpace);
                    }
                    if ((color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components))) {
                        // rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
                        handleAlpha(color[4]);
                        return this.setRGB(Math.min(100, parseInt(color[1], 10)) / 100, Math.min(100, parseInt(color[2], 10)) / 100, Math.min(100, parseInt(color[3], 10)) / 100, colorSpace);
                    }
                    break;
                case "hsl":
                case "hsla":
                    if ((color =
                        /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components))) {
                        // hsl(120,50%,50%) hsla(120,50%,50%,0.5)
                        handleAlpha(color[4]);
                        return this.setHSL(parseFloat(color[1]) / 360, parseFloat(color[2]) / 100, parseFloat(color[3]) / 100, colorSpace);
                    }
                    break;
                default:
                    console.warn("THREE.Color: Unknown color model " + style);
            }
        }
        else if ((m = /^\#([A-Fa-f\d]+)$/.exec(style))) {
            // hex color
            const hex = m[1];
            const size = hex.length;
            if (size === 3) {
                // #ff0
                return this.setRGB(parseInt(hex.charAt(0), 16) / 15, parseInt(hex.charAt(1), 16) / 15, parseInt(hex.charAt(2), 16) / 15, colorSpace);
            }
            else if (size === 6) {
                // #ff0000
                return this.setHex(parseInt(hex, 16), colorSpace);
            }
            else {
                console.warn("THREE.Color: Invalid hex color " + style);
            }
        }
        else if (style && style.length > 0) {
            return this.setColorName(style, colorSpace);
        }
        return this;
    }
    setColorName(style, colorSpace = SRGBColorSpace) {
        // color keywords
        const hex = _colorKeywords[style.toLowerCase()];
        if (hex !== undefined) {
            // red
            this.setHex(hex, colorSpace);
        }
        else {
            // unknown color
            console.warn("THREE.Color: Unknown color " + style);
        }
        return this;
    }
    clone() {
        return new Color(this.r, this.g, this.b);
    }
    copy(color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        return this;
    }
    copySRGBToLinear(color) {
        this.r = (0,_ColorManagement__WEBPACK_IMPORTED_MODULE_1__.SRGBToLinear)(color.r);
        this.g = (0,_ColorManagement__WEBPACK_IMPORTED_MODULE_1__.SRGBToLinear)(color.g);
        this.b = (0,_ColorManagement__WEBPACK_IMPORTED_MODULE_1__.SRGBToLinear)(color.b);
        return this;
    }
    copyLinearToSRGB(color) {
        this.r = (0,_ColorManagement__WEBPACK_IMPORTED_MODULE_1__.LinearToSRGB)(color.r);
        this.g = (0,_ColorManagement__WEBPACK_IMPORTED_MODULE_1__.LinearToSRGB)(color.g);
        this.b = (0,_ColorManagement__WEBPACK_IMPORTED_MODULE_1__.LinearToSRGB)(color.b);
        return this;
    }
    convertSRGBToLinear() {
        this.copySRGBToLinear(this);
        return this;
    }
    convertLinearToSRGB() {
        this.copyLinearToSRGB(this);
        return this;
    }
    getHex(colorSpace = SRGBColorSpace) {
        _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
        return (Math.round((0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.clamp)(_color.r * 255, 0, 255)) * 65536 +
            Math.round((0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.clamp)(_color.g * 255, 0, 255)) * 256 +
            Math.round((0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.clamp)(_color.b * 255, 0, 255)));
    }
    getHexString(colorSpace = SRGBColorSpace) {
        return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
    }
    getHSL(target, colorSpace = _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.workingColorSpace) {
        // h,s,l ranges are in 0.0 - 1.0
        _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
        const r = _color.r, g = _color.g, b = _color.b;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let hue, saturation;
        const lightness = (min + max) / 2.0;
        if (min === max) {
            hue = 0;
            saturation = 0;
        }
        else {
            const delta = max - min;
            saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
            switch (max) {
                case r:
                    hue = (g - b) / delta + (g < b ? 6 : 0);
                    break;
                case g:
                    hue = (b - r) / delta + 2;
                    break;
                case b:
                    hue = (r - g) / delta + 4;
                    break;
            }
            hue /= 6;
        }
        target.h = hue;
        target.s = saturation;
        target.l = lightness;
        return target;
    }
    getRGB(target, colorSpace = _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.workingColorSpace) {
        _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
        target.r = _color.r;
        target.g = _color.g;
        target.b = _color.b;
        return target;
    }
    getStyle(colorSpace = SRGBColorSpace) {
        _ColorManagement__WEBPACK_IMPORTED_MODULE_1__.ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
        const r = _color.r, g = _color.g, b = _color.b;
        if (colorSpace !== SRGBColorSpace) {
            // Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
            return `color(${colorSpace} ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)})`;
        }
        return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
    }
    offsetHSL(h, s, l) {
        this.getHSL(_hslA);
        _hslA.h += h;
        _hslA.s += s;
        _hslA.l += l;
        this.setHSL(_hslA.h, _hslA.s, _hslA.l);
        return this;
    }
    add(color) {
        this.r += color.r;
        this.g += color.g;
        this.b += color.b;
        return this;
    }
    addColors(color1, color2) {
        this.r = color1.r + color2.r;
        this.g = color1.g + color2.g;
        this.b = color1.b + color2.b;
        return this;
    }
    addScalar(s) {
        this.r += s;
        this.g += s;
        this.b += s;
        return this;
    }
    sub(color) {
        this.r = Math.max(0, this.r - color.r);
        this.g = Math.max(0, this.g - color.g);
        this.b = Math.max(0, this.b - color.b);
        return this;
    }
    multiply(color) {
        this.r *= color.r;
        this.g *= color.g;
        this.b *= color.b;
        return this;
    }
    multiplyScalar(s) {
        this.r *= s;
        this.g *= s;
        this.b *= s;
        return this;
    }
    lerp(color, alpha) {
        this.r += (color.r - this.r) * alpha;
        this.g += (color.g - this.g) * alpha;
        this.b += (color.b - this.b) * alpha;
        return this;
    }
    lerpColors(color1, color2, alpha) {
        this.r = color1.r + (color2.r - color1.r) * alpha;
        this.g = color1.g + (color2.g - color1.g) * alpha;
        this.b = color1.b + (color2.b - color1.b) * alpha;
        return this;
    }
    lerpHSL(color, alpha) {
        this.getHSL(_hslA);
        color.getHSL(_hslB);
        const h = (0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.lerp)(_hslA.h, _hslB.h, alpha);
        const s = (0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.lerp)(_hslA.s, _hslB.s, alpha);
        const l = (0,_MathUtils__WEBPACK_IMPORTED_MODULE_0__.lerp)(_hslA.l, _hslB.l, alpha);
        this.setHSL(h, s, l);
        return this;
    }
    setFromVector3(v) {
        this.r = v.x;
        this.g = v.y;
        this.b = v.z;
        return this;
    }
    applyMatrix3(m) {
        const r = this.r, g = this.g, b = this.b;
        const e = m.elements;
        this.r = e[0] * r + e[3] * g + e[6] * b;
        this.g = e[1] * r + e[4] * g + e[7] * b;
        this.b = e[2] * r + e[5] * g + e[8] * b;
        return this;
    }
    equals(c) {
        return c.r === this.r && c.g === this.g && c.b === this.b;
    }
    fromArray(array, offset = 0) {
        this.r = array[offset];
        this.g = array[offset + 1];
        this.b = array[offset + 2];
        return this;
    }
    toArray(array = new Float32Array(3), offset = 0) {
        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;
        return array;
    }
    // fromBufferAttribute( attribute, index ) {
    // 	this.r = attribute.getX( index );
    // 	this.g = attribute.getY( index );
    // 	this.b = attribute.getZ( index );
    // 	return this;
    // }
    toJSON() {
        return this.getHex();
    }
    *[Symbol.iterator]() {
        yield this.r;
        yield this.g;
        yield this.b;
    }
}
Color.NAMES = _colorKeywords;
const _color = /*@__PURE__*/ new Color();



/***/ }),

/***/ "./src/math/ColorManagement.ts":
/*!*************************************!*\
  !*** ./src/math/ColorManagement.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorManagement: () => (/* binding */ ColorManagement),
/* harmony export */   DisplayP3ColorSpace: () => (/* binding */ DisplayP3ColorSpace),
/* harmony export */   LinearSRGBColorSpace: () => (/* binding */ LinearSRGBColorSpace),
/* harmony export */   LinearToSRGB: () => (/* binding */ LinearToSRGB),
/* harmony export */   SRGBColorSpace: () => (/* binding */ SRGBColorSpace),
/* harmony export */   SRGBToLinear: () => (/* binding */ SRGBToLinear)
/* harmony export */ });
/* harmony import */ var _Matrix3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix3 */ "./src/math/Matrix3.ts");

const SRGBColorSpace = 'srgb';
const LinearSRGBColorSpace = 'srgb-linear';
const DisplayP3ColorSpace = 'display-p3';
function SRGBToLinear(c) {
    return (c < 0.04045) ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c) {
    return (c < 0.0031308) ? c * 12.92 : 1.055 * (Math.pow(c, 0.41666)) - 0.055;
}
/**
 * Matrices converting P3 <-> Rec. 709 primaries, without gamut mapping
 * or clipping. Based on W3C specifications for sRGB and Display P3,
 * and ICC specifications for the D50 connection space. Values in/out
 * are _linear_ sRGB and _linear_ Display P3.
 *
 * Note that both sRGB and Display P3 use the sRGB transfer functions.
 *
 * Reference:
 * - http://www.russellcottrell.com/photo/matrixCalculator.htm
 */
const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /*@__PURE__*/ new _Matrix3__WEBPACK_IMPORTED_MODULE_0__.Matrix3().fromArray([
    0.8224621, 0.0331941, 0.0170827,
    0.1775380, 0.9668058, 0.0723974,
    -0.0000001, 0.0000001, 0.9105199
]);
const LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /*@__PURE__*/ new _Matrix3__WEBPACK_IMPORTED_MODULE_0__.Matrix3().fromArray([
    1.2249401, -0.0420569, -0.0196376,
    -0.2249404, 1.0420571, -0.0786361,
    0.0000001, 0.0000000, 1.0982735
]);
function DisplayP3ToLinearSRGB(color) {
    // Display P3 uses the sRGB transfer functions
    return color.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB);
}
function LinearSRGBToDisplayP3(color) {
    // Display P3 uses the sRGB transfer functions
    return color.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB();
}
// Conversions from <source> to Linear-sRGB reference space.
const TO_LINEAR = {
    [LinearSRGBColorSpace]: (color) => color,
    [SRGBColorSpace]: (color) => color.convertSRGBToLinear(),
    [DisplayP3ColorSpace]: DisplayP3ToLinearSRGB,
};
// Conversions to <target> from Linear-sRGB reference space.
const FROM_LINEAR = {
    [LinearSRGBColorSpace]: (color) => color,
    [SRGBColorSpace]: (color) => color.convertLinearToSRGB(),
    [DisplayP3ColorSpace]: LinearSRGBToDisplayP3,
};
const ColorManagement = {
    enabled: true,
    get legacyMode() {
        console.warn('THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.');
        return !this.enabled;
    },
    set legacyMode(legacyMode) {
        console.warn('THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.');
        this.enabled = !legacyMode;
    },
    get workingColorSpace() {
        return LinearSRGBColorSpace;
    },
    set workingColorSpace(colorSpace) {
        console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
    },
    convert: function (color, sourceColorSpace, targetColorSpace) {
        if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
            return color;
        }
        const sourceToLinear = TO_LINEAR[sourceColorSpace];
        const targetFromLinear = FROM_LINEAR[targetColorSpace];
        if (sourceToLinear === undefined || targetFromLinear === undefined) {
            throw new Error(`Unsupported color space conversion, "${sourceColorSpace}" to "${targetColorSpace}".`);
        }
        return targetFromLinear(sourceToLinear(color));
    },
    fromWorkingColorSpace: function (color, targetColorSpace) {
        return this.convert(color, this.workingColorSpace, targetColorSpace);
    },
    toWorkingColorSpace: function (color, sourceColorSpace) {
        return this.convert(color, sourceColorSpace, this.workingColorSpace);
    },
};


/***/ }),

/***/ "./src/math/Euler.ts":
/*!***************************!*\
  !*** ./src/math/Euler.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Euler: () => (/* binding */ Euler)
/* harmony export */ });
/* harmony import */ var _Quaternion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quaternion */ "./src/math/Quaternion.ts");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix4 */ "./src/math/Matrix4.ts");
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MathUtils */ "./src/math/MathUtils.ts");



const _matrix = /*@__PURE__*/ new _Matrix4__WEBPACK_IMPORTED_MODULE_1__.Matrix4();
const _quaternion = /*@__PURE__*/ new _Quaternion__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
class Euler {
    set x(v) {
        this._x = v;
        this._onChangeCallback(this);
    }
    get x() {
        return this._x;
    }
    set y(v) {
        this._y = v;
        this._onChangeCallback(this);
    }
    get y() {
        return this._y;
    }
    set z(v) {
        this._z = v;
        this._onChangeCallback(this);
    }
    get z() {
        return this._z;
    }
    set order(v) {
        this._order = v;
        this._onChangeCallback(this);
    }
    get order() {
        return this._order;
    }
    constructor(x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._order = Euler.DEFAULT_ORDER;
        this._onChangeCallback = (e) => {
        };
        this._x = x;
        this._y = y;
        this._z = z;
        this.order = order;
    }
    set(x, y, z, order = this.order) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._order = order;
        this._onChangeCallback(this);
        return this;
    }
    clone() {
        return new Euler(this.x, this.y, this.z, this.order);
    }
    copy(euler) {
        this._x = euler.x;
        this._y = euler.y;
        this._z = euler.z;
        this._order = euler.order;
        this._onChangeCallback(this);
        return this;
    }
    setFromRotationMatrix(m, order = this.order, update = true) {
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        const te = m.elements;
        const m11 = te[0], m12 = te[4], m13 = te[8];
        const m21 = te[1], m22 = te[5], m23 = te[9];
        const m31 = te[2], m32 = te[6], m33 = te[10];
        switch (order) {
            case 'XYZ':
                this._y = Math.asin((0,_MathUtils__WEBPACK_IMPORTED_MODULE_2__.clamp)(m13, -1, 1));
                if (Math.abs(m13) < 0.9999999) {
                    this._x = Math.atan2(-m23, m33);
                    this._z = Math.atan2(-m12, m11);
                }
                else {
                    this._x = Math.atan2(m32, m22);
                    this._z = 0;
                }
                break;
            case 'YXZ':
                this._x = Math.asin(-(0,_MathUtils__WEBPACK_IMPORTED_MODULE_2__.clamp)(m23, -1, 1));
                if (Math.abs(m23) < 0.9999999) {
                    this._y = Math.atan2(m13, m33);
                    this._z = Math.atan2(m21, m22);
                }
                else {
                    this._y = Math.atan2(-m31, m11);
                    this._z = 0;
                }
                break;
            case 'ZXY':
                this._x = Math.asin((0,_MathUtils__WEBPACK_IMPORTED_MODULE_2__.clamp)(m32, -1, 1));
                if (Math.abs(m32) < 0.9999999) {
                    this._y = Math.atan2(-m31, m33);
                    this._z = Math.atan2(-m12, m22);
                }
                else {
                    this._y = 0;
                    this._z = Math.atan2(m21, m11);
                }
                break;
            case 'ZYX':
                this._y = Math.asin(-(0,_MathUtils__WEBPACK_IMPORTED_MODULE_2__.clamp)(m31, -1, 1));
                if (Math.abs(m31) < 0.9999999) {
                    this._x = Math.atan2(m32, m33);
                    this._z = Math.atan2(m21, m11);
                }
                else {
                    this._x = 0;
                    this._z = Math.atan2(-m12, m22);
                }
                break;
            case 'YZX':
                this._z = Math.asin((0,_MathUtils__WEBPACK_IMPORTED_MODULE_2__.clamp)(m21, -1, 1));
                if (Math.abs(m21) < 0.9999999) {
                    this._x = Math.atan2(-m23, m22);
                    this._y = Math.atan2(-m31, m11);
                }
                else {
                    this._x = 0;
                    this._y = Math.atan2(m13, m33);
                }
                break;
            case 'XZY':
                this._z = Math.asin(-(0,_MathUtils__WEBPACK_IMPORTED_MODULE_2__.clamp)(m12, -1, 1));
                if (Math.abs(m12) < 0.9999999) {
                    this._x = Math.atan2(m32, m22);
                    this._y = Math.atan2(m13, m11);
                }
                else {
                    this._x = Math.atan2(-m23, m33);
                    this._y = 0;
                }
                break;
            default:
                console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order);
        }
        this._order = order;
        if (update)
            this._onChangeCallback(this);
        return this;
    }
    setFromQuaternion(q, order, update = true) {
        _matrix.makeRotationFromQuaternion(q);
        return this.setFromRotationMatrix(_matrix, order, update);
    }
    setFromVector3(v, order = this.order) {
        return this.set(v.x, v.y, v.z, order);
    }
    reorder(newOrder) {
        // WARNING: this discards revolution information -bhouston
        _quaternion.setFromEuler(this);
        return this.setFromQuaternion(_quaternion, newOrder);
    }
    equals(euler) {
        return (euler.x === this.x) && (euler.y === this.y) && (euler.z === this.z) && (euler.order === this.order);
    }
    fromArray(array) {
        this._x = array[0];
        this._y = array[1];
        this._z = array[2];
        if (array[3] !== undefined)
            this._order = array[3];
        this._onChangeCallback(this);
        return this;
    }
    toArray(array = [], offset = 0) {
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        array[offset + 3] = this.order;
        return array;
    }
    onChange(callback) {
        this._onChangeCallback = callback;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
        yield this.order;
    }
}
Euler.DEFAULT_ORDER = 'XYZ';



/***/ }),

/***/ "./src/math/MathUtils.ts":
/*!*******************************!*\
  !*** ./src/math/MathUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEG2RAD: () => (/* binding */ DEG2RAD),
/* harmony export */   MathUtils: () => (/* binding */ MathUtils),
/* harmony export */   RAD2DEG: () => (/* binding */ RAD2DEG),
/* harmony export */   ceilPowerOfTwo: () => (/* binding */ ceilPowerOfTwo),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   damp: () => (/* binding */ damp),
/* harmony export */   degToRad: () => (/* binding */ degToRad),
/* harmony export */   denormalize: () => (/* binding */ denormalize),
/* harmony export */   euclideanModulo: () => (/* binding */ euclideanModulo),
/* harmony export */   floorPowerOfTwo: () => (/* binding */ floorPowerOfTwo),
/* harmony export */   generateUUID: () => (/* binding */ generateUUID),
/* harmony export */   inverseLerp: () => (/* binding */ inverseLerp),
/* harmony export */   isPowerOfTwo: () => (/* binding */ isPowerOfTwo),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   mapLinear: () => (/* binding */ mapLinear),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pingpong: () => (/* binding */ pingpong),
/* harmony export */   radToDeg: () => (/* binding */ radToDeg),
/* harmony export */   randFloat: () => (/* binding */ randFloat),
/* harmony export */   randFloatSpread: () => (/* binding */ randFloatSpread),
/* harmony export */   randInt: () => (/* binding */ randInt),
/* harmony export */   seededRandom: () => (/* binding */ seededRandom),
/* harmony export */   smootherstep: () => (/* binding */ smootherstep),
/* harmony export */   smoothstep: () => (/* binding */ smoothstep)
/* harmony export */ });
const _lut = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff'];
let _seed = 1234567;
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' +
        _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' +
        _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] +
        _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];
    // .toLowerCase() here flattens concatenated strings to save heap memory space.
    return uuid.toLowerCase();
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
// compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
function euclideanModulo(n, m) {
    return ((n % m) + m) % m;
}
// Linear mapping from range <a1, a2> to range <b1, b2>
function mapLinear(x, a1, a2, b1, b2) {
    return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
}
// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
function inverseLerp(x, y, value) {
    if (x !== y) {
        return (value - x) / (y - x);
    }
    else {
        return 0;
    }
}
// https://en.wikipedia.org/wiki/Linear_interpolation
function lerp(x, y, t) {
    return (1 - t) * x + t * y;
}
// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function damp(x, y, lambda, dt) {
    return lerp(x, y, 1 - Math.exp(-lambda * dt));
}
// https://www.desmos.com/calculator/vcsjnyz7x4
function pingpong(x, length = 1) {
    return length - Math.abs(euclideanModulo(x, length * 2) - length);
}
// http://en.wikipedia.org/wiki/Smoothstep
function smoothstep(x, min, max) {
    if (x <= min)
        return 0;
    if (x >= max)
        return 1;
    x = (x - min) / (max - min);
    return x * x * (3 - 2 * x);
}
function smootherstep(x, min, max) {
    if (x <= min)
        return 0;
    if (x >= max)
        return 1;
    x = (x - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10);
}
// Random integer from <low, high> interval
function randInt(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
}
// Random float from <low, high> interval
function randFloat(low, high) {
    return low + Math.random() * (high - low);
}
// Random float from <-range/2, range/2> interval
function randFloatSpread(range) {
    return range * (0.5 - Math.random());
}
// Deterministic pseudo-random float in the interval [ 0, 1 ]
function seededRandom(s) {
    if (s !== undefined)
        _seed = s;
    // Mulberry32 generator
    let t = _seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function degToRad(degrees) {
    return degrees * DEG2RAD;
}
function radToDeg(radians) {
    return radians * RAD2DEG;
}
function isPowerOfTwo(value) {
    return (value & (value - 1)) === 0 && value !== 0;
}
function ceilPowerOfTwo(value) {
    return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
}
function floorPowerOfTwo(value) {
    return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}
function denormalize(value, array) {
    switch (array.constructor) {
        case Float32Array:
            return value;
        case Uint32Array:
            return value / 4294967295.0;
        case Uint16Array:
            return value / 65535.0;
        case Uint8Array:
            return value / 255.0;
        case Int32Array:
            return Math.max(value / 2147483647.0, -1.0);
        case Int16Array:
            return Math.max(value / 32767.0, -1.0);
        case Int8Array:
            return Math.max(value / 127.0, -1.0);
        default:
            throw new Error('Invalid component type.');
    }
}
function normalize(value, array) {
    switch (array.constructor) {
        case Float32Array:
            return value;
        case Uint32Array:
            return Math.round(value * 4294967295.0);
        case Uint16Array:
            return Math.round(value * 65535.0);
        case Uint8Array:
            return Math.round(value * 255.0);
        case Int32Array:
            return Math.round(value * 2147483647.0);
        case Int16Array:
            return Math.round(value * 32767.0);
        case Int8Array:
            return Math.round(value * 127.0);
        default:
            throw new Error('Invalid component type.');
    }
}
const MathUtils = {
    DEG2RAD: DEG2RAD,
    RAD2DEG: RAD2DEG,
    generateUUID: generateUUID,
    clamp: clamp,
    euclideanModulo: euclideanModulo,
    mapLinear: mapLinear,
    inverseLerp: inverseLerp,
    lerp: lerp,
    damp: damp,
    pingpong: pingpong,
    smoothstep: smoothstep,
    smootherstep: smootherstep,
    randInt: randInt,
    randFloat: randFloat,
    randFloatSpread: randFloatSpread,
    seededRandom: seededRandom,
    degToRad: degToRad,
    radToDeg: radToDeg,
    isPowerOfTwo: isPowerOfTwo,
    ceilPowerOfTwo: ceilPowerOfTwo,
    floorPowerOfTwo: floorPowerOfTwo,
    normalize: normalize,
    denormalize: denormalize
};



/***/ }),

/***/ "./src/math/Matrix3.ts":
/*!*****************************!*\
  !*** ./src/math/Matrix3.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix3: () => (/* binding */ Matrix3)
/* harmony export */ });
class Matrix3 {
    constructor(n11 = 1, n12 = 0, n13 = 0, n21 = 0, n22 = 1, n23 = 0, n31 = 0, n32 = 0, n33 = 1) {
        this.elements = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
        if (n11 !== undefined) {
            this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
        }
    }
    set(n11 = 1, n12 = 0, n13 = 0, n21 = 0, n22 = 1, n23 = 0, n31 = 0, n32 = 0, n33 = 1) {
        const te = this.elements;
        te[0] = n11;
        te[1] = n21;
        te[2] = n31;
        te[3] = n12;
        te[4] = n22;
        te[5] = n32;
        te[6] = n13;
        te[7] = n23;
        te[8] = n33;
        return this;
    }
    identity() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
    }
    copy(m) {
        const te = this.elements;
        const me = m.elements;
        te[0] = me[0];
        te[1] = me[1];
        te[2] = me[2];
        te[3] = me[3];
        te[4] = me[4];
        te[5] = me[5];
        te[6] = me[6];
        te[7] = me[7];
        te[8] = me[8];
        return this;
    }
    extractBasis(xAxis, yAxis, zAxis) {
        xAxis.setFromMatrix3Column(this, 0);
        yAxis.setFromMatrix3Column(this, 1);
        zAxis.setFromMatrix3Column(this, 2);
        return this;
    }
    setFromMatrix4(m) {
        const me = m.elements;
        this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
        return this;
    }
    multiply(m) {
        return this.multiplyMatrices(this, m);
    }
    premultiply(m) {
        return this.multiplyMatrices(m, this);
    }
    multiplyMatrices(a, b) {
        const ae = a.elements;
        const be = b.elements;
        const te = this.elements;
        const a11 = ae[0], a12 = ae[3], a13 = ae[6];
        const a21 = ae[1], a22 = ae[4], a23 = ae[7];
        const a31 = ae[2], a32 = ae[5], a33 = ae[8];
        const b11 = be[0], b12 = be[3], b13 = be[6];
        const b21 = be[1], b22 = be[4], b23 = be[7];
        const b31 = be[2], b32 = be[5], b33 = be[8];
        te[0] = a11 * b11 + a12 * b21 + a13 * b31;
        te[3] = a11 * b12 + a12 * b22 + a13 * b32;
        te[6] = a11 * b13 + a12 * b23 + a13 * b33;
        te[1] = a21 * b11 + a22 * b21 + a23 * b31;
        te[4] = a21 * b12 + a22 * b22 + a23 * b32;
        te[7] = a21 * b13 + a22 * b23 + a23 * b33;
        te[2] = a31 * b11 + a32 * b21 + a33 * b31;
        te[5] = a31 * b12 + a32 * b22 + a33 * b32;
        te[8] = a31 * b13 + a32 * b23 + a33 * b33;
        return this;
    }
    multiplyScalar(s) {
        const te = this.elements;
        te[0] *= s;
        te[3] *= s;
        te[6] *= s;
        te[1] *= s;
        te[4] *= s;
        te[7] *= s;
        te[2] *= s;
        te[5] *= s;
        te[8] *= s;
        return this;
    }
    determinant() {
        const te = this.elements;
        const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
        return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
    }
    invert() {
        const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
        if (det === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const detInv = 1 / det;
        te[0] = t11 * detInv;
        te[1] = (n31 * n23 - n33 * n21) * detInv;
        te[2] = (n32 * n21 - n31 * n22) * detInv;
        te[3] = t12 * detInv;
        te[4] = (n33 * n11 - n31 * n13) * detInv;
        te[5] = (n31 * n12 - n32 * n11) * detInv;
        te[6] = t13 * detInv;
        te[7] = (n21 * n13 - n23 * n11) * detInv;
        te[8] = (n22 * n11 - n21 * n12) * detInv;
        return this;
    }
    transpose() {
        let tmp;
        const m = this.elements;
        tmp = m[1];
        m[1] = m[3];
        m[3] = tmp;
        tmp = m[2];
        m[2] = m[6];
        m[6] = tmp;
        tmp = m[5];
        m[5] = m[7];
        m[7] = tmp;
        return this;
    }
    getNormalMatrix(matrix4) {
        return this.setFromMatrix4(matrix4).invert().transpose();
    }
    transposeIntoArray(r) {
        const m = this.elements;
        r[0] = m[0];
        r[1] = m[3];
        r[2] = m[6];
        r[3] = m[1];
        r[4] = m[4];
        r[5] = m[7];
        r[6] = m[2];
        r[7] = m[5];
        r[8] = m[8];
        return this;
    }
    setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
        const c = Math.cos(rotation);
        const s = Math.sin(rotation);
        this.set(sx * c, sx * s, -sx * (c * cx + s * cy) + cx + tx, -sy * s, sy * c, -sy * (-s * cx + c * cy) + cy + ty, 0, 0, 1);
        return this;
    }
    //
    scale(sx, sy) {
        this.premultiply(_m3.makeScale(sx, sy));
        return this;
    }
    rotate(theta) {
        this.premultiply(_m3.makeRotation(-theta));
        return this;
    }
    translate(tx) {
        this.premultiply(_m3.makeTranslation(tx));
        return this;
    }
    // for 2D Transforms
    makeTranslation(x) {
        this.set(1, 0, x.x, 0, 1, x.y, 0, 0, 1);
        return this;
    }
    makeRotation(theta) {
        // counterclockwise
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        this.set(c, -s, 0, s, c, 0, 0, 0, 1);
        return this;
    }
    makeScale(x, y) {
        this.set(x, 0, 0, 0, y, 0, 0, 0, 1);
        return this;
    }
    //
    equals(matrix) {
        const te = this.elements;
        const me = matrix.elements;
        for (let i = 0; i < 9; i++) {
            if (te[i] !== me[i])
                return false;
        }
        return true;
    }
    fromArray(array, offset = 0) {
        for (let i = 0; i < 9; i++) {
            this.elements[i] = array[i + offset];
        }
        return this;
    }
    toArray(array = [], offset = 0) {
        const te = this.elements;
        array[offset] = te[0];
        array[offset + 1] = te[1];
        array[offset + 2] = te[2];
        array[offset + 3] = te[3];
        array[offset + 4] = te[4];
        array[offset + 5] = te[5];
        array[offset + 6] = te[6];
        array[offset + 7] = te[7];
        array[offset + 8] = te[8];
        return array;
    }
    clone() {
        return new Matrix3().fromArray(this.elements);
    }
}
const _m3 = /*@__PURE__*/ new Matrix3();



/***/ }),

/***/ "./src/math/Matrix4.ts":
/*!*****************************!*\
  !*** ./src/math/Matrix4.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix4: () => (/* binding */ Matrix4)
/* harmony export */ });
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3 */ "./src/math/Vector3.ts");

class Matrix4 {
    constructor(n11 = 1, n12 = 0, n13 = 0, n14 = 0, n21 = 0, n22 = 1, n23 = 0, n24 = 0, n31 = 0, n32 = 0, n33 = 1, n34 = 0, n41 = 0, n42 = 0, n43 = 0, n44 = 1) {
        this.elements = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        if (n11 !== undefined) {
            this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
        }
    }
    set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        const te = this.elements;
        te[0] = n11;
        te[4] = n12;
        te[8] = n13;
        te[12] = n14;
        te[1] = n21;
        te[5] = n22;
        te[9] = n23;
        te[13] = n24;
        te[2] = n31;
        te[6] = n32;
        te[10] = n33;
        te[14] = n34;
        te[3] = n41;
        te[7] = n42;
        te[11] = n43;
        te[15] = n44;
        return this;
    }
    identity() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    }
    clone() {
        return new Matrix4().fromArray(this.elements);
    }
    copy(m) {
        const te = this.elements;
        const me = m.elements;
        te[0] = me[0];
        te[1] = me[1];
        te[2] = me[2];
        te[3] = me[3];
        te[4] = me[4];
        te[5] = me[5];
        te[6] = me[6];
        te[7] = me[7];
        te[8] = me[8];
        te[9] = me[9];
        te[10] = me[10];
        te[11] = me[11];
        te[12] = me[12];
        te[13] = me[13];
        te[14] = me[14];
        te[15] = me[15];
        return this;
    }
    copyPosition(m) {
        const te = this.elements, me = m.elements;
        te[12] = me[12];
        te[13] = me[13];
        te[14] = me[14];
        return this;
    }
    setFromMatrix3(m) {
        const me = m.elements;
        this.set(me[0], me[3], me[6], 0, me[1], me[4], me[7], 0, me[2], me[5], me[8], 0, 0, 0, 0, 1);
        return this;
    }
    extractBasis(xAxis, yAxis, zAxis) {
        xAxis.setFromMatrixColumn(this, 0);
        yAxis.setFromMatrixColumn(this, 1);
        zAxis.setFromMatrixColumn(this, 2);
        return this;
    }
    makeBasis(xAxis, yAxis, zAxis) {
        this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
        return this;
    }
    extractRotation(m) {
        // this method does not support reflection matrices
        const te = this.elements;
        const me = m.elements;
        const scaleX = 1 / _v1.setFromMatrixColumn(m, 0).length();
        const scaleY = 1 / _v1.setFromMatrixColumn(m, 1).length();
        const scaleZ = 1 / _v1.setFromMatrixColumn(m, 2).length();
        te[0] = me[0] * scaleX;
        te[1] = me[1] * scaleX;
        te[2] = me[2] * scaleX;
        te[3] = 0;
        te[4] = me[4] * scaleY;
        te[5] = me[5] * scaleY;
        te[6] = me[6] * scaleY;
        te[7] = 0;
        te[8] = me[8] * scaleZ;
        te[9] = me[9] * scaleZ;
        te[10] = me[10] * scaleZ;
        te[11] = 0;
        te[12] = 0;
        te[13] = 0;
        te[14] = 0;
        te[15] = 1;
        return this;
    }
    makeRotationFromEuler(euler) {
        const te = this.elements;
        const x = euler.x, y = euler.y, z = euler.z;
        const a = Math.cos(x), b = Math.sin(x);
        const c = Math.cos(y), d = Math.sin(y);
        const e = Math.cos(z), f = Math.sin(z);
        if (euler.order === 'XYZ') {
            const ae = a * e, af = a * f, be = b * e, bf = b * f;
            te[0] = c * e;
            te[4] = -c * f;
            te[8] = d;
            te[1] = af + be * d;
            te[5] = ae - bf * d;
            te[9] = -b * c;
            te[2] = bf - ae * d;
            te[6] = be + af * d;
            te[10] = a * c;
        }
        else if (euler.order === 'YXZ') {
            const ce = c * e, cf = c * f, de = d * e, df = d * f;
            te[0] = ce + df * b;
            te[4] = de * b - cf;
            te[8] = a * d;
            te[1] = a * f;
            te[5] = a * e;
            te[9] = -b;
            te[2] = cf * b - de;
            te[6] = df + ce * b;
            te[10] = a * c;
        }
        else if (euler.order === 'ZXY') {
            const ce = c * e, cf = c * f, de = d * e, df = d * f;
            te[0] = ce - df * b;
            te[4] = -a * f;
            te[8] = de + cf * b;
            te[1] = cf + de * b;
            te[5] = a * e;
            te[9] = df - ce * b;
            te[2] = -a * d;
            te[6] = b;
            te[10] = a * c;
        }
        else if (euler.order === 'ZYX') {
            const ae = a * e, af = a * f, be = b * e, bf = b * f;
            te[0] = c * e;
            te[4] = be * d - af;
            te[8] = ae * d + bf;
            te[1] = c * f;
            te[5] = bf * d + ae;
            te[9] = af * d - be;
            te[2] = -d;
            te[6] = b * c;
            te[10] = a * c;
        }
        else if (euler.order === 'YZX') {
            const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
            te[0] = c * e;
            te[4] = bd - ac * f;
            te[8] = bc * f + ad;
            te[1] = f;
            te[5] = a * e;
            te[9] = -b * e;
            te[2] = -d * e;
            te[6] = ad * f + bc;
            te[10] = ac - bd * f;
        }
        else if (euler.order === 'XZY') {
            const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
            te[0] = c * e;
            te[4] = -f;
            te[8] = d * e;
            te[1] = ac * f + bd;
            te[5] = a * e;
            te[9] = ad * f - bc;
            te[2] = bc * f - ad;
            te[6] = b * e;
            te[10] = bd * f + ac;
        }
        // bottom row
        te[3] = 0;
        te[7] = 0;
        te[11] = 0;
        // last column
        te[12] = 0;
        te[13] = 0;
        te[14] = 0;
        te[15] = 1;
        return this;
    }
    makeRotationFromQuaternion(q) {
        return this.compose(_zero, q, _one);
    }
    lookAt(eye, target, up) {
        const te = this.elements;
        _z.subVectors(eye, target);
        if (_z.lengthSq() === 0) {
            // eye and target are in the same position
            _z.z = 1;
        }
        _z.normalize();
        _x.crossVectors(up, _z);
        if (_x.lengthSq() === 0) {
            // up and z are parallel
            if (Math.abs(up.z) === 1) {
                _z.x += 0.0001;
            }
            else {
                _z.z += 0.0001;
            }
            _z.normalize();
            _x.crossVectors(up, _z);
        }
        _x.normalize();
        _y.crossVectors(_z, _x);
        te[0] = _x.x;
        te[4] = _y.x;
        te[8] = _z.x;
        te[1] = _x.y;
        te[5] = _y.y;
        te[9] = _z.y;
        te[2] = _x.z;
        te[6] = _y.z;
        te[10] = _z.z;
        return this;
    }
    multiply(m) {
        return this.multiplyMatrices(this, m);
    }
    premultiply(m) {
        return this.multiplyMatrices(m, this);
    }
    multiplyMatrices(a, b) {
        const ae = a.elements;
        const be = b.elements;
        const te = this.elements;
        const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
        const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
        const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
        const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
        const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
        const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
        const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
        const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
        te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
        te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
        te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
        te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
        return this;
    }
    multiplyScalar(s) {
        const te = this.elements;
        te[0] *= s;
        te[4] *= s;
        te[8] *= s;
        te[12] *= s;
        te[1] *= s;
        te[5] *= s;
        te[9] *= s;
        te[13] *= s;
        te[2] *= s;
        te[6] *= s;
        te[10] *= s;
        te[14] *= s;
        te[3] *= s;
        te[7] *= s;
        te[11] *= s;
        te[15] *= s;
        return this;
    }
    determinant() {
        const te = this.elements;
        const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
        const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
        const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
        const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
        //TODO: make this more efficient
        //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
        return (n41 * (+n14 * n23 * n32
            - n13 * n24 * n32
            - n14 * n22 * n33
            + n12 * n24 * n33
            + n13 * n22 * n34
            - n12 * n23 * n34) +
            n42 * (+n11 * n23 * n34
                - n11 * n24 * n33
                + n14 * n21 * n33
                - n13 * n21 * n34
                + n13 * n24 * n31
                - n14 * n23 * n31) +
            n43 * (+n11 * n24 * n32
                - n11 * n22 * n34
                - n14 * n21 * n32
                + n12 * n21 * n34
                + n14 * n22 * n31
                - n12 * n24 * n31) +
            n44 * (-n13 * n22 * n31
                - n11 * n23 * n32
                + n11 * n22 * n33
                + n13 * n21 * n32
                - n12 * n21 * n33
                + n12 * n23 * n31));
    }
    transpose() {
        const te = this.elements;
        let tmp;
        tmp = te[1];
        te[1] = te[4];
        te[4] = tmp;
        tmp = te[2];
        te[2] = te[8];
        te[8] = tmp;
        tmp = te[6];
        te[6] = te[9];
        te[9] = tmp;
        tmp = te[3];
        te[3] = te[12];
        te[12] = tmp;
        tmp = te[7];
        te[7] = te[13];
        te[13] = tmp;
        tmp = te[11];
        te[11] = te[14];
        te[14] = tmp;
        return this;
    }
    setPosition(x) {
        const te = this.elements;
        te[12] = x.x;
        te[13] = x.y;
        te[14] = x.z;
        return this;
    }
    invert() {
        // based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
        const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n41 = te[3], n12 = te[4], n22 = te[5], n32 = te[6], n42 = te[7], n13 = te[8], n23 = te[9], n33 = te[10], n43 = te[11], n14 = te[12], n24 = te[13], n34 = te[14], n44 = te[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
        const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
        if (det === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const detInv = 1 / det;
        te[0] = t11 * detInv;
        te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
        te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
        te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
        te[4] = t12 * detInv;
        te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
        te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
        te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
        te[8] = t13 * detInv;
        te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
        te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
        te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
        te[12] = t14 * detInv;
        te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
        te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
        te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
        return this;
    }
    scale(v) {
        const te = this.elements;
        const x = v.x, y = v.y, z = v.z;
        te[0] *= x;
        te[4] *= y;
        te[8] *= z;
        te[1] *= x;
        te[5] *= y;
        te[9] *= z;
        te[2] *= x;
        te[6] *= y;
        te[10] *= z;
        te[3] *= x;
        te[7] *= y;
        te[11] *= z;
        return this;
    }
    getMaxScaleOnAxis() {
        const te = this.elements;
        const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
        const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
        const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
        return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
    }
    makeTranslation(x) {
        this.set(1, 0, 0, x.x, 0, 1, 0, x.y, 0, 0, 1, x.z, 0, 0, 0, 1);
        return this;
    }
    makeRotationX(theta) {
        const c = Math.cos(theta), s = Math.sin(theta);
        this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
        return this;
    }
    makeRotationY(theta) {
        const c = Math.cos(theta), s = Math.sin(theta);
        this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
        return this;
    }
    makeRotationZ(theta) {
        const c = Math.cos(theta), s = Math.sin(theta);
        this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    }
    makeRotationAxis(axis, angle) {
        // Based on http://www.gamedev.net/reference/articles/article1199.asp
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const t = 1 - c;
        const x = axis.x, y = axis.y, z = axis.z;
        const tx = t * x, ty = t * y;
        this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
        return this;
    }
    makeScale(x, y, z) {
        this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
        return this;
    }
    makeShear(xy, xz, yx, yz, zx, zy) {
        this.set(1, yx, zx, 0, xy, 1, zy, 0, xz, yz, 1, 0, 0, 0, 0, 1);
        return this;
    }
    compose(position, quaternion, scale) {
        const te = this.elements;
        const x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;
        const x2 = x + x, y2 = y + y, z2 = z + z;
        const xx = x * x2, xy = x * y2, xz = x * z2;
        const yy = y * y2, yz = y * z2, zz = z * z2;
        const wx = w * x2, wy = w * y2, wz = w * z2;
        const sx = scale.x, sy = scale.y, sz = scale.z;
        te[0] = (1 - (yy + zz)) * sx;
        te[1] = (xy + wz) * sx;
        te[2] = (xz - wy) * sx;
        te[3] = 0;
        te[4] = (xy - wz) * sy;
        te[5] = (1 - (xx + zz)) * sy;
        te[6] = (yz + wx) * sy;
        te[7] = 0;
        te[8] = (xz + wy) * sz;
        te[9] = (yz - wx) * sz;
        te[10] = (1 - (xx + yy)) * sz;
        te[11] = 0;
        te[12] = position.x;
        te[13] = position.y;
        te[14] = position.z;
        te[15] = 1;
        return this;
    }
    decompose(position, quaternion, scale) {
        const te = this.elements;
        let sx = _v1.set(te[0], te[1], te[2]).length();
        const sy = _v1.set(te[4], te[5], te[6]).length();
        const sz = _v1.set(te[8], te[9], te[10]).length();
        // if determine is negative, we need to invert one scale
        const det = this.determinant();
        if (det < 0)
            sx = -sx;
        position.x = te[12];
        position.y = te[13];
        position.z = te[14];
        // scale the rotation part
        _m1.copy(this);
        const invSX = 1 / sx;
        const invSY = 1 / sy;
        const invSZ = 1 / sz;
        _m1.elements[0] *= invSX;
        _m1.elements[1] *= invSX;
        _m1.elements[2] *= invSX;
        _m1.elements[4] *= invSY;
        _m1.elements[5] *= invSY;
        _m1.elements[6] *= invSY;
        _m1.elements[8] *= invSZ;
        _m1.elements[9] *= invSZ;
        _m1.elements[10] *= invSZ;
        quaternion.setFromRotationMatrix(_m1);
        scale.x = sx;
        scale.y = sy;
        scale.z = sz;
        return this;
    }
    makePerspective(left, right, top, bottom, near, far) {
        const te = this.elements;
        const x = 2 * near / (right - left);
        const y = 2 * near / (top - bottom);
        const a = (right + left) / (right - left);
        const b = (top + bottom) / (top - bottom);
        const c = -(far + near) / (far - near);
        const d = -2 * far * near / (far - near);
        te[0] = x;
        te[4] = 0;
        te[8] = a;
        te[12] = 0;
        te[1] = 0;
        te[5] = y;
        te[9] = b;
        te[13] = 0;
        te[2] = 0;
        te[6] = 0;
        te[10] = c;
        te[14] = d;
        te[3] = 0;
        te[7] = 0;
        te[11] = -1;
        te[15] = 0;
        return this;
    }
    makeOrthographic(left, right, top, bottom, near, far) {
        const te = this.elements;
        const w = 1.0 / (right - left);
        const h = 1.0 / (top - bottom);
        const p = 1.0 / (far - near);
        const x = (right + left) * w;
        const y = (top + bottom) * h;
        const z = (far + near) * p;
        te[0] = 2 * w;
        te[4] = 0;
        te[8] = 0;
        te[12] = -x;
        te[1] = 0;
        te[5] = 2 * h;
        te[9] = 0;
        te[13] = -y;
        te[2] = 0;
        te[6] = 0;
        te[10] = -2 * p;
        te[14] = -z;
        te[3] = 0;
        te[7] = 0;
        te[11] = 0;
        te[15] = 1;
        return this;
    }
    equals(matrix) {
        const te = this.elements;
        const me = matrix.elements;
        for (let i = 0; i < 16; i++) {
            if (te[i] !== me[i])
                return false;
        }
        return true;
    }
    fromArray(array, offset = 0) {
        for (let i = 0; i < 16; i++) {
            this.elements[i] = array[i + offset];
        }
        return this;
    }
    toArray(array = new Float32Array(16), offset = 0) {
        const te = this.elements;
        array[offset] = te[0];
        array[offset + 1] = te[1];
        array[offset + 2] = te[2];
        array[offset + 3] = te[3];
        array[offset + 4] = te[4];
        array[offset + 5] = te[5];
        array[offset + 6] = te[6];
        array[offset + 7] = te[7];
        array[offset + 8] = te[8];
        array[offset + 9] = te[9];
        array[offset + 10] = te[10];
        array[offset + 11] = te[11];
        array[offset + 12] = te[12];
        array[offset + 13] = te[13];
        array[offset + 14] = te[14];
        array[offset + 15] = te[15];
        return array;
    }
}
const _v1 = /*@__PURE__*/ new _Vector3__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _m1 = /*@__PURE__*/ new Matrix4();
const _zero = /*@__PURE__*/ new _Vector3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0);
const _one = /*@__PURE__*/ new _Vector3__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 1, 1);
const _x = /*@__PURE__*/ new _Vector3__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _y = /*@__PURE__*/ new _Vector3__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _z = /*@__PURE__*/ new _Vector3__WEBPACK_IMPORTED_MODULE_0__.Vector3();



/***/ }),

/***/ "./src/math/Quaternion.ts":
/*!********************************!*\
  !*** ./src/math/Quaternion.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quaternion: () => (/* binding */ Quaternion)
/* harmony export */ });
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils */ "./src/math/MathUtils.ts");

class Quaternion {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 0;
        this._onChangeCallback = (q) => {
        };
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
    }
    set x(v) {
        this._x = v;
        this._onChangeCallback(this);
    }
    get x() {
        return this._x;
    }
    set y(v) {
        this._y = v;
        this._onChangeCallback(this);
    }
    get y() {
        return this._y;
    }
    set z(v) {
        this._z = v;
        this._onChangeCallback(this);
    }
    get z() {
        return this._z;
    }
    set w(v) {
        this._w = v;
        this._onChangeCallback(this);
    }
    get w() {
        return this._w;
    }
    static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
        // fuzz-free, array-based Quaternion SLERP operation
        let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
        const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
        if (t === 0) {
            dst[dstOffset + 0] = x0;
            dst[dstOffset + 1] = y0;
            dst[dstOffset + 2] = z0;
            dst[dstOffset + 3] = w0;
            return;
        }
        if (t === 1) {
            dst[dstOffset + 0] = x1;
            dst[dstOffset + 1] = y1;
            dst[dstOffset + 2] = z1;
            dst[dstOffset + 3] = w1;
            return;
        }
        if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
            let s = 1 - t;
            const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = (cos >= 0 ? 1 : -1), sqrSin = 1 - cos * cos;
            // Skip the Slerp for tiny steps to avoid numeric problems:
            if (sqrSin > Number.EPSILON) {
                const sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
                s = Math.sin(s * len) / sin;
                t = Math.sin(t * len) / sin;
            }
            const tDir = t * dir;
            x0 = x0 * s + x1 * tDir;
            y0 = y0 * s + y1 * tDir;
            z0 = z0 * s + z1 * tDir;
            w0 = w0 * s + w1 * tDir;
            // Normalize in case we just did a lerp:
            if (s === 1 - t) {
                const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
                x0 *= f;
                y0 *= f;
                z0 *= f;
                w0 *= f;
            }
        }
        dst[dstOffset] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
    }
    static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
        const x0 = src0[srcOffset0];
        const y0 = src0[srcOffset0 + 1];
        const z0 = src0[srcOffset0 + 2];
        const w0 = src0[srcOffset0 + 3];
        const x1 = src1[srcOffset1];
        const y1 = src1[srcOffset1 + 1];
        const z1 = src1[srcOffset1 + 2];
        const w1 = src1[srcOffset1 + 3];
        dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
        dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
        dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
        dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
        return dst;
    }
    set(x, y, z, w) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
        this._onChangeCallback(this);
        return this;
    }
    clone() {
        return new Quaternion(this.x, this.y, this.z, this.w);
    }
    copy(quaternion) {
        this._x = quaternion.x;
        this._y = quaternion.y;
        this._z = quaternion.z;
        this._w = quaternion.w;
        this._onChangeCallback(this);
        return this;
    }
    setFromEuler(euler, update = true) {
        const x = euler.x, y = euler.y, z = euler.z, order = euler.order;
        // http://www.mathworks.com/matlabcentral/fileexchange/
        // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
        //	content/SpinCalc.m
        const cos = Math.cos;
        const sin = Math.sin;
        const c1 = cos(x / 2);
        const c2 = cos(y / 2);
        const c3 = cos(z / 2);
        const s1 = sin(x / 2);
        const s2 = sin(y / 2);
        const s3 = sin(z / 2);
        switch (order) {
            case 'XYZ':
                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;
                break;
            case 'YXZ':
                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;
                break;
            case 'ZXY':
                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;
                break;
            case 'ZYX':
                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;
                break;
            case 'YZX':
                this.x = s1 * c2 * c3 + c1 * s2 * s3;
                this.y = c1 * s2 * c3 + s1 * c2 * s3;
                this.z = c1 * c2 * s3 - s1 * s2 * c3;
                this.w = c1 * c2 * c3 - s1 * s2 * s3;
                break;
            case 'XZY':
                this.x = s1 * c2 * c3 - c1 * s2 * s3;
                this.y = c1 * s2 * c3 - s1 * c2 * s3;
                this.z = c1 * c2 * s3 + s1 * s2 * c3;
                this.w = c1 * c2 * c3 + s1 * s2 * s3;
                break;
            default:
                console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order);
        }
        if (update)
            this._onChangeCallback(this);
        return this;
    }
    setFromAxisAngle(axis, angle) {
        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
        // assumes axis is normalized
        const halfAngle = angle / 2, s = Math.sin(halfAngle);
        this._x = axis.x * s;
        this._y = axis.y * s;
        this._z = axis.z * s;
        this._w = Math.cos(halfAngle);
        this._onChangeCallback(this);
        return this;
    }
    setFromRotationMatrix(m) {
        // http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
        if (trace > 0) {
            const s = 0.5 / Math.sqrt(trace + 1.0);
            this._w = 0.25 / s;
            this._x = (m32 - m23) * s;
            this._y = (m13 - m31) * s;
            this._z = (m21 - m12) * s;
        }
        else if (m11 > m22 && m11 > m33) {
            const s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
            this._w = (m32 - m23) / s;
            this._x = 0.25 * s;
            this._y = (m12 + m21) / s;
            this._z = (m13 + m31) / s;
        }
        else if (m22 > m33) {
            const s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
            this._w = (m13 - m31) / s;
            this._x = (m12 + m21) / s;
            this._y = 0.25 * s;
            this._z = (m23 + m32) / s;
        }
        else {
            const s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
            this._w = (m21 - m12) / s;
            this._x = (m13 + m31) / s;
            this._y = (m23 + m32) / s;
            this._z = 0.25 * s;
        }
        this._onChangeCallback(this);
        return this;
    }
    setFromUnitVectors(vFrom, vTo) {
        // assumes direction vectors vFrom and vTo are normalized
        let r = vFrom.dot(vTo) + 1;
        if (r < Number.EPSILON) {
            // vFrom and vTo point in opposite directions
            r = 0;
            if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
                this._x = -vFrom.y;
                this._y = vFrom.x;
                this._z = 0;
                this._w = r;
            }
            else {
                this._x = 0;
                this._y = -vFrom.z;
                this._z = vFrom.y;
                this._w = r;
            }
        }
        else {
            // crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3
            this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
            this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
            this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
            this._w = r;
        }
        return this.normalize();
    }
    angleTo(q) {
        return 2 * Math.acos(Math.abs(_MathUtils__WEBPACK_IMPORTED_MODULE_0__.clamp(this.dot(q), -1, 1)));
    }
    rotateTowards(q, step) {
        const angle = this.angleTo(q);
        if (angle === 0)
            return this;
        const t = Math.min(1, step / angle);
        this.slerp(q, t);
        return this;
    }
    identity() {
        return this.set(0, 0, 0, 1);
    }
    invert() {
        // quaternion is assumed to have unit length
        return this.conjugate();
    }
    conjugate() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        this._onChangeCallback(this);
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    normalize() {
        let l = this.length();
        if (l === 0) {
            this._x = 0;
            this._y = 0;
            this._z = 0;
            this._w = 1;
        }
        else {
            l = 1 / l;
            this._x = this.x * l;
            this._y = this.y * l;
            this._z = this.z * l;
            this._w = this.w * l;
        }
        this._onChangeCallback(this);
        return this;
    }
    multiply(q) {
        return this.multiplyQuaternions(this, q);
    }
    premultiply(q) {
        return this.multiplyQuaternions(q, this);
    }
    multiplyQuaternions(a, b) {
        // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
        const qax = a.x, qay = a.y, qaz = a.z, qaw = a.w;
        const qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w;
        this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
        this._onChangeCallback(this);
        return this;
    }
    slerp(qb, t) {
        if (t === 0)
            return this;
        if (t === 1)
            return this.copy(qb);
        const x = this.x, y = this.y, z = this.z, w = this.w;
        // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/
        let cosHalfTheta = w * qb.w + x * qb.x + y * qb.y + z * qb.z;
        if (cosHalfTheta < 0) {
            this.w = -qb.w;
            this.x = -qb.x;
            this.y = -qb.y;
            this.z = -qb.z;
            cosHalfTheta = -cosHalfTheta;
        }
        else {
            this.copy(qb);
        }
        if (cosHalfTheta >= 1.0) {
            this.w = w;
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        }
        const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;
        if (sqrSinHalfTheta <= Number.EPSILON) {
            const s = 1 - t;
            this.w = s * w + t * this.w;
            this.x = s * x + t * this.x;
            this.y = s * y + t * this.y;
            this.z = s * z + t * this.z;
            this.normalize();
            return this;
        }
        const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
        const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
        const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
        this.w = (w * ratioA + this.w * ratioB);
        this.x = (x * ratioA + this.x * ratioB);
        this.y = (y * ratioA + this.y * ratioB);
        this.z = (z * ratioA + this.z * ratioB);
        this._onChangeCallback(this);
        return this;
    }
    slerpQuaternions(qa, qb, t) {
        return this.copy(qa).slerp(qb, t);
    }
    random() {
        // Derived from http://planning.cs.uiuc.edu/node198.html
        // Note, this source uses w, x, y, z ordering,
        // so we swap the order below.
        const u1 = Math.random();
        const sqrt1u1 = Math.sqrt(1 - u1);
        const sqrtu1 = Math.sqrt(u1);
        const u2 = 2 * Math.PI * Math.random();
        const u3 = 2 * Math.PI * Math.random();
        return this.set(sqrt1u1 * Math.cos(u2), sqrtu1 * Math.sin(u3), sqrtu1 * Math.cos(u3), sqrt1u1 * Math.sin(u2));
    }
    equals(quaternion) {
        return (quaternion.x === this.x) && (quaternion.y === this.y) && (quaternion.z === this.z) && (quaternion.w === this.w);
    }
    fromArray(array, offset = 0) {
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        this.w = array[offset + 3];
        this._onChangeCallback(this);
        return this;
    }
    toArray(array = [], offset = 0) {
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        array[offset + 3] = this.w;
        return array;
    }
    // fromBufferAttribute( attribute, index ) {
    // 	this.x = attribute.getX( index );
    // 	this.y = attribute.getY( index );
    // 	this.z = attribute.getZ( index );
    // 	this.w = attribute.getW( index );
    // 	return this;
    // }
    toJSON() {
        return this.toArray();
    }
    onChange(callback) {
        this._onChangeCallback = callback;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
        yield this.w;
    }
}



/***/ }),

/***/ "./src/math/Spherical.ts":
/*!*******************************!*\
  !*** ./src/math/Spherical.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spherical: () => (/* binding */ Spherical)
/* harmony export */ });
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils */ "./src/math/MathUtils.ts");
/**
 * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
 *
 * The polar angle (phi) is measured from the positive y-axis. The positive y-axis is up.
 * The azimuthal angle (theta) is measured from the positive z-axis.
 */

class Spherical {
    constructor(radius = 1, phi = 0, theta = 0) {
        this.radius = 1;
        this.phi = 0;
        this.theta = 0;
        this.radius = radius;
        this.phi = phi; // polar angle
        this.theta = theta; // azimuthal angle
        return this;
    }
    set(radius, phi, theta) {
        this.radius = radius;
        this.phi = phi;
        this.theta = theta;
        return this;
    }
    copy(other) {
        this.radius = other.radius;
        this.phi = other.phi;
        this.theta = other.theta;
        return this;
    }
    // restrict phi to be between EPS and PI-EPS
    makeSafe() {
        const EPS = 0.000001;
        this.phi = Math.max(EPS, Math.min(Math.PI - EPS, this.phi));
        return this;
    }
    setFromVector3(v) {
        return this.setFromCartesianCoords(v.x, v.y, v.z);
    }
    setFromCartesianCoords(x, y, z) {
        this.radius = Math.sqrt(x * x + y * y + z * z);
        if (this.radius === 0) {
            this.theta = 0;
            this.phi = 0;
        }
        else {
            this.theta = Math.atan2(x, z);
            this.phi = Math.acos(_MathUtils__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp(y / this.radius, -1, 1));
        }
        return this;
    }
    clone() {
        return new Spherical().copy(this);
    }
}


/***/ }),

/***/ "./src/math/Vector2.ts":
/*!*****************************!*\
  !*** ./src/math/Vector2.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector2: () => (/* binding */ Vector2)
/* harmony export */ });
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils */ "./src/math/MathUtils.ts");

class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    get width() {
        return this.x;
    }
    set width(value) {
        this.x = value;
    }
    get height() {
        return this.y;
    }
    set height(value) {
        this.y = value;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        return this;
    }
    setX(x) {
        this.x = x;
        return this;
    }
    setY(y) {
        this.y = y;
        return this;
    }
    setComponent(index, value) {
        switch (index) {
            case 0:
                this.x = value;
                break;
            case 1:
                this.y = value;
                break;
            default: throw new Error('index is out of range: ' + index);
        }
        return this;
    }
    getComponent(index) {
        switch (index) {
            case 0: return this.x;
            case 1: return this.y;
            default: throw new Error('index is out of range: ' + index);
        }
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    addScalar(s) {
        this.x += s;
        this.y += s;
        return this;
    }
    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this;
    }
    addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        return this;
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    subScalar(s) {
        this.x -= s;
        this.y -= s;
        return this;
    }
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;
    }
    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        return this;
    }
    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }
    applyMatrix3(m) {
        const x = this.x, y = this.y;
        const e = m.elements;
        this.x = e[0] * x + e[3] * y + e[6];
        this.y = e[1] * x + e[4] * y + e[7];
        return this;
    }
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        return this;
    }
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        return this;
    }
    clamp(min, max) {
        // assumes min < max, componentwise
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        return this;
    }
    clampScalar(minVal, maxVal) {
        this.x = Math.max(minVal, Math.min(maxVal, this.x));
        this.y = Math.max(minVal, Math.min(maxVal, this.y));
        return this;
    }
    clampLength(min, max) {
        const length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    roundToZero() {
        this.x = (this.x < 0) ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = (this.y < 0) ? Math.ceil(this.y) : Math.floor(this.y);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    angle() {
        // computes the angle in radians with respect to the positive x-axis
        const angle = Math.atan2(-this.y, -this.x) + Math.PI;
        return angle;
    }
    angleTo(v) {
        const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
        if (denominator === 0)
            return Math.PI / 2;
        const theta = this.dot(v) / denominator;
        // clamp, to handle numerical problems
        return Math.acos(_MathUtils__WEBPACK_IMPORTED_MODULE_0__.clamp(theta, -1, 1));
    }
    distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
        const dx = this.x - v.x, dy = this.y - v.y;
        return dx * dx + dy * dy;
    }
    manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }
    setLength(length) {
        return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        return this;
    }
    lerpVectors(v1, v2, alpha) {
        this.x = v1.x + (v2.x - v1.x) * alpha;
        this.y = v1.y + (v2.y - v1.y) * alpha;
        return this;
    }
    equals(v) {
        return ((v.x === this.x) && (v.y === this.y));
    }
    fromArray(array, offset = 0) {
        this.x = array[offset];
        this.y = array[offset + 1];
        return this;
    }
    toArray(array = [], offset = 0) {
        array[offset] = this.x;
        array[offset + 1] = this.y;
        return array;
    }
    // fromBufferAttribute( attribute, index ) {
    // 	this.x = attribute.getX( index );
    // 	this.y = attribute.getY( index );
    // 	return this;
    // }
    rotateAround(center, angle) {
        const c = Math.cos(angle), s = Math.sin(angle);
        const x = this.x - center.x;
        const y = this.y - center.y;
        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;
        return this;
    }
    random() {
        this.x = Math.random();
        this.y = Math.random();
        return this;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
    }
}



/***/ }),

/***/ "./src/math/Vector3.ts":
/*!*****************************!*\
  !*** ./src/math/Vector3.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector3: () => (/* binding */ Vector3)
/* harmony export */ });
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils */ "./src/math/MathUtils.ts");
/* harmony import */ var _Quaternion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quaternion */ "./src/math/Quaternion.ts");


class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    set(x, y, z) {
        if (z === undefined)
            z = this.z; // sprite.scale.set(x,y)
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        this.z = scalar;
        return this;
    }
    setX(x) {
        this.x = x;
        return this;
    }
    setY(y) {
        this.y = y;
        return this;
    }
    setZ(z) {
        this.z = z;
        return this;
    }
    setComponent(index, value) {
        switch (index) {
            case 0:
                this.x = value;
                break;
            case 1:
                this.y = value;
                break;
            case 2:
                this.z = value;
                break;
            default: throw new Error('index is out of range: ' + index);
        }
        return this;
    }
    getComponent(index) {
        switch (index) {
            case 0: return this.x;
            case 1: return this.y;
            case 2: return this.z;
            default: throw new Error('index is out of range: ' + index);
        }
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    addScalar(s) {
        this.x += s;
        this.y += s;
        this.z += s;
        return this;
    }
    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this;
    }
    addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        this.z += v.z * s;
        return this;
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    subScalar(s) {
        this.x -= s;
        this.y -= s;
        this.z -= s;
        return this;
    }
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this;
    }
    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    multiplyVectors(a, b) {
        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this;
    }
    applyEuler(euler) {
        return this.applyQuaternion(_quaternion.setFromEuler(euler));
    }
    applyAxisAngle(axis, angle) {
        return this.applyQuaternion(_quaternion.setFromAxisAngle(axis, angle));
    }
    applyMatrix3(m) {
        const x = this.x, y = this.y, z = this.z;
        const e = m.elements;
        this.x = e[0] * x + e[3] * y + e[6] * z;
        this.y = e[1] * x + e[4] * y + e[7] * z;
        this.z = e[2] * x + e[5] * y + e[8] * z;
        return this;
    }
    applyNormalMatrix(m) {
        return this.applyMatrix3(m).normalize();
    }
    applyMatrix4(m) {
        const x = this.x, y = this.y, z = this.z;
        const e = m.elements;
        const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
        this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
        this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
        this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
        return this;
    }
    applyQuaternion(q) {
        const x = this.x, y = this.y, z = this.z;
        const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
        // calculate quat * vector
        const ix = qw * x + qy * z - qz * y;
        const iy = qw * y + qz * x - qx * z;
        const iz = qw * z + qx * y - qy * x;
        const iw = -qx * x - qy * y - qz * z;
        // calculate result * inverse quat
        this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return this;
    }
    // project( camera ) {
    // 	return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );
    // }
    // unproject( camera ) {
    // 	return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );
    // }
    transformDirection(m) {
        // input: THREE.Matrix4 affine matrix
        // vector interpreted as a direction
        const x = this.x, y = this.y, z = this.z;
        const e = m.elements;
        this.x = e[0] * x + e[4] * y + e[8] * z;
        this.y = e[1] * x + e[5] * y + e[9] * z;
        this.z = e[2] * x + e[6] * y + e[10] * z;
        return this.normalize();
    }
    divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        return this;
    }
    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        this.z = Math.min(this.z, v.z);
        return this;
    }
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        this.z = Math.max(this.z, v.z);
        return this;
    }
    clamp(min, max) {
        // assumes min < max, componentwise
        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));
        this.z = Math.max(min.z, Math.min(max.z, this.z));
        return this;
    }
    clampScalar(minVal, maxVal) {
        this.x = Math.max(minVal, Math.min(maxVal, this.x));
        this.y = Math.max(minVal, Math.min(maxVal, this.y));
        this.z = Math.max(minVal, Math.min(maxVal, this.z));
        return this;
    }
    clampLength(min, max) {
        const length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    }
    roundToZero() {
        this.x = (this.x < 0) ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = (this.y < 0) ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = (this.z < 0) ? Math.ceil(this.z) : Math.floor(this.z);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    // TODO lengthSquared?
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(length) {
        return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        this.z += (v.z - this.z) * alpha;
        return this;
    }
    lerpVectors(v1, v2, alpha) {
        this.x = v1.x + (v2.x - v1.x) * alpha;
        this.y = v1.y + (v2.y - v1.y) * alpha;
        this.z = v1.z + (v2.z - v1.z) * alpha;
        return this;
    }
    cross(v) {
        return this.crossVectors(this, v);
    }
    crossVectors(a, b) {
        const ax = a.x, ay = a.y, az = a.z;
        const bx = b.x, by = b.y, bz = b.z;
        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;
        return this;
    }
    projectOnVector(v) {
        const denominator = v.lengthSq();
        if (denominator === 0)
            return this.set(0, 0, 0);
        const scalar = v.dot(this) / denominator;
        return this.copy(v).multiplyScalar(scalar);
    }
    projectOnPlane(planeNormal) {
        _vector.copy(this).projectOnVector(planeNormal);
        return this.sub(_vector);
    }
    reflect(normal) {
        // reflect incident vector off plane orthogonal to normal
        // normal is assumed to have unit length
        return this.sub(_vector.copy(normal).multiplyScalar(2 * this.dot(normal)));
    }
    angleTo(v) {
        const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
        if (denominator === 0)
            return Math.PI / 2;
        const theta = this.dot(v) / denominator;
        // clamp, to handle numerical problems
        return Math.acos(_MathUtils__WEBPACK_IMPORTED_MODULE_0__.clamp(theta, -1, 1));
    }
    distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
        const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
        return dx * dx + dy * dy + dz * dz;
    }
    manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    setFromSpherical(s) {
        return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
    }
    setFromSphericalCoords(radius, phi, theta) {
        const sinPhiRadius = Math.sin(phi) * radius;
        this.x = sinPhiRadius * Math.sin(theta);
        this.y = Math.cos(phi) * radius;
        this.z = sinPhiRadius * Math.cos(theta);
        return this;
    }
    // setFromCylindrical( c ) {
    // 	return this.setFromCylindricalCoords( c.radius, c.theta, c.y );
    // }
    setFromCylindricalCoords(radius, theta, y) {
        this.x = radius * Math.sin(theta);
        this.y = y;
        this.z = radius * Math.cos(theta);
        return this;
    }
    setFromMatrixPosition(m) {
        const e = m.elements;
        this.x = e[12];
        this.y = e[13];
        this.z = e[14];
        return this;
    }
    setFromMatrixScale(m) {
        const sx = this.setFromMatrixColumn(m, 0).length();
        const sy = this.setFromMatrixColumn(m, 1).length();
        const sz = this.setFromMatrixColumn(m, 2).length();
        this.x = sx;
        this.y = sy;
        this.z = sz;
        return this;
    }
    setFromMatrixColumn(m, index) {
        return this.fromArray(m.elements, index * 4);
    }
    setFromMatrix3Column(m, index) {
        return this.fromArray(m.elements, index * 3);
    }
    setFromEuler(e) {
        this.x = e.x;
        this.y = e.y;
        this.z = e.z;
        return this;
    }
    setFromColor(c) {
        this.x = c.r;
        this.y = c.g;
        this.z = c.b;
        return this;
    }
    equals(v) {
        return ((v.x === this.x) && (v.y === this.y) && (v.z === this.z));
    }
    fromArray(array, offset = 0) {
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        return this;
    }
    toArray(array = [], offset = 0) {
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        return array;
    }
    // fromBufferAttribute( attribute, index ) {
    // 	this.x = attribute.getX( index );
    // 	this.y = attribute.getY( index );
    // 	this.z = attribute.getZ( index );
    // 	return this;
    // }
    random() {
        this.x = Math.random();
        this.y = Math.random();
        this.z = Math.random();
        return this;
    }
    randomDirection() {
        // Derived from https://mathworld.wolfram.com/SpherePointPicking.html
        const u = (Math.random() - 0.5) * 2;
        const t = Math.random() * Math.PI * 2;
        const f = Math.sqrt(1 - u ** 2);
        this.x = f * Math.cos(t);
        this.y = f * Math.sin(t);
        this.z = u;
        return this;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
    }
}
const _vector = /*@__PURE__*/ new Vector3();
const _quaternion = /*@__PURE__*/ new _Quaternion__WEBPACK_IMPORTED_MODULE_1__.Quaternion();



/***/ }),

/***/ "./src/objects/Mesh.ts":
/*!*****************************!*\
  !*** ./src/objects/Mesh.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mesh: () => (/* binding */ Mesh)
/* harmony export */ });
/* harmony import */ var _core_RenderableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/RenderableObject */ "./src/core/RenderableObject.ts");

class Mesh extends _core_RenderableObject__WEBPACK_IMPORTED_MODULE_0__.RenderableObject {
    get type() {
        return "Mesh";
    }
    static Is(object) {
        return object instanceof Mesh;
    }
    constructor(geometry, material) {
        super(geometry, material);
    }
}


/***/ }),

/***/ "./src/renderers/WebGPURenderer.ts":
/*!*****************************************!*\
  !*** ./src/renderers/WebGPURenderer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebGPURenderer: () => (/* binding */ WebGPURenderer)
/* harmony export */ });
/* harmony import */ var _cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cameras/PerspectiveCamera */ "./src/cameras/PerspectiveCamera.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _core_ResourceManagers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/ResourceManagers */ "./src/core/ResourceManagers.ts");
/* harmony import */ var _math_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Color */ "./src/math/Color.ts");




class WebGPURenderer {
    //private _materialObjects = new Map<Material,Array<RenderableObject>>();
    constructor(parameters = {}) {
        this._presentationFormat = _Constants__WEBPACK_IMPORTED_MODULE_1__.GPUTextureFormat.BGRA8Unorm;
        this._alphaMode = "premultiplied";
        this._pixelRatio = window.devicePixelRatio || 1;
        this._sampleCount = 1;
        this._clearColor = new _math_Color__WEBPACK_IMPORTED_MODULE_3__.Color(1, 1, 1);
        this._sizeChanged = false;
        this._parameters = parameters;
        if (this._parameters.antialias === true) {
            this._sampleCount = parameters.sampleCount === undefined ? 4 : parameters.sampleCount;
        }
        else {
            this._sampleCount = 1;
        }
    }
    async init() {
        if (!this._parameters.canvas) {
            this._canvas = document.createElement("canvas");
            this._canvas.style.width = "100%";
            this._canvas.style.height = "100%";
        }
        else {
            this._canvas = this._parameters.canvas;
        }
        this._powerPreference = this._parameters.powerPreference
            ? this._parameters.powerPreference
            : "high-performance";
        this._adapter = await navigator.gpu.requestAdapter({
            powerPreference: this._powerPreference,
        });
        this._device = await this._adapter.requestDevice();
        this._context = this._canvas.getContext("webgpu");
        this._context.configure({
            device: this._device,
            format: this._presentationFormat,
            alphaMode: this._alphaMode,
        });
        this._initGlobalData();
        this._renderPassDescriptor = {
            colorAttachments: [
                {
                    view: null,
                    resolveTarget: undefined,
                    clearValue: { r: this._clearColor.r, g: this._clearColor.g, b: this._clearColor.b, a: 1.0 },
                    loadOp: "clear",
                    storeOp: "store",
                },
            ],
            depthStencilAttachment: {
                view: null,
                depthClearValue: 1.0,
                depthLoadOp: 'clear',
                depthStoreOp: 'store',
            },
        };
    }
    _initGlobalData() {
        _core_ResourceManagers__WEBPACK_IMPORTED_MODULE_2__.Context.activeDevice = this._device;
    }
    setSize(width, height) {
        this._size = {
            width: width,
            height: height,
        };
        this._canvas.width = width * this._pixelRatio;
        this._canvas.height = height * this._pixelRatio;
        this._setupColorBuffer();
        this._setupDepthBuffer();
        this._sizeChanged = true;
    }
    render(scene, camera) {
        if (!this._colorAttachmentView) {
            this.setSize(this._canvas.clientWidth, this._canvas.clientHeight);
        }
        if (this._sizeChanged) {
            if (_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera.Is(camera)) {
                const perspectiveCamera = camera;
                perspectiveCamera.aspect = this._canvas.width / this._canvas.height;
                perspectiveCamera.updateProjectionMatrix();
            }
            this._sizeChanged = false;
        }
        camera.update();
        const sceneUpdated = scene.update(camera);
        //this._materialObjects.clear();
        const commandEncoder = this.device.createCommandEncoder();
        const view = this.sampleCount > 1 ? this._colorAttachmentView : this._context.getCurrentTexture().createView();
        const resolveTarget = this.sampleCount > 1 ? this._context.getCurrentTexture().createView() : undefined;
        this._renderPassDescriptor.colorAttachments[0].view = view;
        this._renderPassDescriptor.colorAttachments[0].resolveTarget = resolveTarget;
        this._renderPassDescriptor.depthStencilAttachment.view = this._depthBuffer.createView();
        const materialObjects = scene.renderableObjs;
        const passEncoder = commandEncoder.beginRenderPass(this._renderPassDescriptor);
        for (const [material, objects] of materialObjects) {
            if (sceneUpdated) {
                material.pipeline.needsCompile = true;
            }
            this._renderSamePipeline(passEncoder, material, objects, camera, scene);
        }
        passEncoder.end();
        this.device.queue.submit([commandEncoder.finish()]);
    }
    _renderSamePipeline(passEncoder, material, objects, camera, scene) {
        material.pipeline.compilePipeline(this, scene);
        passEncoder.setPipeline(material.pipeline.pipeline);
        material.pipeline.createCommonBindGroups(scene);
        material.pipeline.bindCommonUniform(passEncoder);
        material.updateUniforms();
        for (let i = 0; i < objects.length; ++i) {
            material.pipeline.createObjectBindGroup(objects[i]);
            material.pipeline.bindObjectUnform(passEncoder, objects[i]);
            this._renderObject(passEncoder, objects[i]);
        }
    }
    _renderObject(passEncoder, object) {
        object.update();
        const geometry = object.geometry;
        geometry.update();
        geometry.setVertexBuffer(passEncoder, object.material.shaderOptions.attributeValues);
        if (geometry.indices) {
            passEncoder.setIndexBuffer(geometry.indices.buffer.buffer, _Constants__WEBPACK_IMPORTED_MODULE_1__.GPUIndexFormat.Uint32);
            passEncoder.drawIndexedIndirect(object.geometry.drawBuffer.buffer, 0);
        }
        else {
            passEncoder.drawIndirect(object.geometry.drawBuffer.buffer, 0);
        }
    }
    _setupColorBuffer() {
        const device = this._device;
        if (device) {
            if (this._colorBuffer)
                this._colorBuffer.destroy();
            this._colorBuffer = this._device.createTexture({
                size: {
                    width: Math.floor(this._size.width * this._pixelRatio),
                    height: Math.floor(this._size.height * this._pixelRatio),
                    depthOrArrayLayers: 1,
                },
                sampleCount: this._sampleCount,
                format: this._presentationFormat,
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
            this._colorAttachmentView = this._colorBuffer.createView();
        }
    }
    _setupDepthBuffer() {
        if (this._depthBuffer)
            this._depthBuffer.destroy();
        this._depthBuffer = this.device.createTexture({
            label: 'depthBuffer',
            size: {
                width: Math.floor(this._size.width * this._pixelRatio),
                height: Math.floor(this._size.height * this._pixelRatio),
                depthOrArrayLayers: 1,
            },
            sampleCount: this._sampleCount,
            format: _Constants__WEBPACK_IMPORTED_MODULE_1__.GPUTextureFormat.Depth24Plus,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC
        });
    }
    get domElement() {
        return this._canvas;
    }
    get device() {
        return this._device;
    }
    get presentationFormat() {
        return this._presentationFormat;
    }
    get sampleCount() {
        return this._sampleCount;
    }
}


/***/ }),

/***/ "./src/shaders/MeshBasicShader.ts":
/*!****************************************!*\
  !*** ./src/shaders/MeshBasicShader.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeshBasicShader: () => (/* binding */ MeshBasicShader)
/* harmony export */ });
/* harmony import */ var _Shader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shader */ "./src/shaders/Shader.ts");
/* harmony import */ var _ShaderBasic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShaderBasic */ "./src/shaders/ShaderBasic.ts");


class MeshBasicShader extends _Shader__WEBPACK_IMPORTED_MODULE_0__.Shader {
    constructor(material) {
        super(material);
    }
    _createVertexShader(scene) {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = { index: 1 };
        const uvItem = shaderOptions.attributeValues.get("uv");
        this._vertexShaderCode = `
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(0, scene.bindValues.get("projectionMatrix"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(0, scene.bindValues.get("matrixWorldInverse"))}

            @group(2) @binding(0) var<uniform> modelMatrix : mat4x4<f32>;
            
            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.itemVary_value(uvItem, indexObj)}
            }

            @vertex
            fn main(
            @location(0) position : vec3<f32>,
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.location_vert(uvItem)}
            ) -> VertexOutput {
                var output : VertexOutput;
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.transform_vert()}
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.uv_vert(uvItem)}
                return output;
            }
        
        `;
    }
    _createFragmentShader(scene) {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = { index: 1 };
        const uvItem = shaderOptions.attributeValues.get("uv");
        this._fragmentShaderCode = `
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("parameters"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("color"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("colorSampler"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("texture"))}
            


            @fragment
            fn main(
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.itemVary_value(uvItem, indexObj)}
            ) -> @location(0) vec4<f32> {
                var baseColor:vec4<f32>;
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.getColor_frag(shaderOptions.bindValues.get("texture"), shaderOptions.bindValues.get("color"))}
                return baseColor;
            }

        `;
    }
}


/***/ }),

/***/ "./src/shaders/MeshPhongShader.ts":
/*!****************************************!*\
  !*** ./src/shaders/MeshPhongShader.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeshPhongShader: () => (/* binding */ MeshPhongShader)
/* harmony export */ });
/* harmony import */ var _Shader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shader */ "./src/shaders/Shader.ts");
/* harmony import */ var _ShaderBasic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShaderBasic */ "./src/shaders/ShaderBasic.ts");


class MeshPhongShader extends _Shader__WEBPACK_IMPORTED_MODULE_0__.Shader {
    constructor(material) {
        super(material);
    }
    _createVertexShader(scene) {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = { index: 1 };
        const uvItem = shaderOptions.attributeValues.get("uv");
        const normalItem = shaderOptions.attributeValues.get("normal");
        this._vertexShaderCode = `
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(0, scene.bindValues.get("projectionMatrix"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(0, scene.bindValues.get("matrixWorldInverse"))}

            @group(2) @binding(0) var<uniform> modelMatrix : mat4x4<f32>;

            struct VertexOutput {
                @builtin(position) Position : vec4<f32>,
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.itemVary_value(uvItem, indexObj)}
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.itemVary_value(normalItem, indexObj)}
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.customVary_value("vViewPosition", "vec3<f32>", indexObj)}
            }

            @vertex
            fn main(
            @location(0) position : vec3<f32>,
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.location_vert(normalItem)}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.location_vert(uvItem)}
            ) -> VertexOutput {
                var output : VertexOutput;
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.transform_vert()}
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.uv_vert(uvItem)}
                output.vViewPosition = - mvPosition.xyz;
                output.normal = normal;
                return output;
            }
        
        `;
    }
    _createFragmentShader(scene) {
        const shaderOptions = this._material.shaderOptions;
        const indexObj = { index: 1 };
        const uvItem = shaderOptions.attributeValues.get("uv");
        const normalItem = shaderOptions.attributeValues.get("normal");
        this._fragmentShaderCode = `
            const RECIPROCAL_PI = 0.3183098861837907;
            struct IncidentLight {
                color:vec3<f32>,
                direction:vec3<f32>,
                visible:bool,
            };

            struct ReflectedLight {
                directDiffuse:vec3<f32>,
                directSpecular:vec3<f32>,
                indirectDiffuse:vec3<f32>,
                indirectSpecular:vec3<f32>,
            };

            struct GeometricContext {
                position:vec3<f32>,
                normal:vec3<f32>,
                viewDir:vec3<f32>,
            };

            struct BlinnPhongMaterial {

                diffuseColor:vec3<f32>,
                specularColor:vec3<f32>,
                specularShininess:f32,
                specularStrength:f32,
            
            };

            struct DirectionalLight {
                color:vec4<f32>,
                direction:vec4<f32>,
            };

            fn saturate( a:f32 )->f32 {
                return clamp( a, 0.0, 1.0 );
            } 

            fn BRDF_Lambert( diffuseColor:vec3<f32> )->vec3<f32> {

                return RECIPROCAL_PI * diffuseColor;
            
            }

            fn F_Schlick( f0:vec3<f32>, f90:f32, dotVH:f32 )->vec3<f32> {

                var fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
            
                return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
            
            } 

            fn G_BlinnPhong_Implicit()->f32 {

                return 0.25;
            
            }

            fn D_BlinnPhong( shininess:f32, dotNH:f32)->f32 {

                return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
            
            }

            fn BRDF_BlinnPhong( lightDir:vec3<f32>, viewDir:vec3<f32>, normal:vec3<f32>, specularColor:vec3<f32>, shininess:f32 )->vec3<f32> {

                var halfDir = normalize( lightDir + viewDir );
            
                var dotNH = saturate( dot( normal, halfDir ) );
                var dotVH = saturate( dot( viewDir, halfDir ) );
            
                var F = F_Schlick( specularColor, 1.0, dotVH );
            
                var G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );
            
                var D = D_BlinnPhong( shininess, dotNH );
            
                return F * ( G * D );
            
            }

            fn RE_Direct_BlinnPhong( 
                directLight:IncidentLight, 
                geometry:GeometricContext, 
                material:BlinnPhongMaterial, 
                reflectedLight: ptr<function,ReflectedLight>
                ) {

                var dotNL = saturate( dot( geometry.normal, directLight.direction ) );
                var irradiance = dotNL * directLight.color;

                (*reflectedLight).directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
            
                (*reflectedLight).directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
            }

            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(0, scene.bindValues.get("directionalLights"))}

            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("parameters"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("color"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("colorSampler"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("texture"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("specular"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("emissive"))}
            ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.bind_value(1, shaderOptions.bindValues.get("shininess"))}

            @fragment
            fn main(
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.itemVary_value(uvItem, indexObj)}
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.itemVary_value(normalItem, indexObj)}
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.customVary_value("vViewPosition", "vec3<f32>", indexObj)}
            ) -> @location(0) vec4<f32> {
                var baseColor:vec4<f32>;
                ${_ShaderBasic__WEBPACK_IMPORTED_MODULE_1__.getColor_frag(shaderOptions.bindValues.get("texture"), shaderOptions.bindValues.get("color"))}

                var diffuse = baseColor.xyz;
                // var emissive = vec3<f32>(0.0,0.0,0.0);
                // var specular = vec3<f32>(0.043,0.043,0.043);
                // var shininess = 30.;
                var opacity = 1.;
                var specularStrength = 1.;

                var diffuseColor = vec4<f32>( diffuse, opacity );
                var reflectedLight:ReflectedLight;
                reflectedLight.directDiffuse = vec3<f32>( 0.0 );
                reflectedLight.directSpecular = vec3<f32>( 0.0 );
                reflectedLight.indirectDiffuse = vec3<f32>( 0.0 );
                reflectedLight.indirectSpecular = vec3<f32>( 0.0 );

                var totalEmissiveRadiance = emissive;

                var material:BlinnPhongMaterial;
                material.diffuseColor = diffuse;
                material.specularColor = specular;
                material.specularShininess = shininess;
                material.specularStrength = specularStrength;

                var geometry:GeometricContext;

                geometry.position = - vViewPosition;
                geometry.normal = normal;
                //geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
                geometry.viewDir = normalize( vViewPosition );

                ${scene.directionalLights.size > 0 ? `
                    for(var i = 0u;i < ${scene.directionalLights.size}u;i++){
                        var directionalLight = directionalLights[i];
        
                        var directLight:IncidentLight;
                        directLight.color = directionalLight.color.xyz;
                        directLight.direction = directionalLight.direction.xyz;
                        //directLight.direction = vec3<f32>(0.,1.,0.);
                        directLight.visible = true;
        
                        RE_Direct_BlinnPhong( directLight, geometry, material, &reflectedLight );
                    }
                
                ` : ``}
                //var directionalLight:DirectionalLight;
                

                // directionalLight.direction = vec3<f32>(0.,1.,1.);
                // directionalLight.color = vec3<f32>(1.,1.,1.);

                // var directLight:IncidentLight;
                // directLight.color = directionalLight.color;
                // directLight.direction = directionalLight.direction;
                // directLight.visible = true;

                // //getDirectionalLightInfo( directionalLight, geometry, directLight );

                // RE_Direct_BlinnPhong( directLight, geometry, material, &reflectedLight );

                var outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

                var finalColor = vec4( outgoingLight, diffuseColor.a );

                return finalColor;
            }
        `;
    }
}


/***/ }),

/***/ "./src/shaders/Shader.ts":
/*!*******************************!*\
  !*** ./src/shaders/Shader.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shader: () => (/* binding */ Shader)
/* harmony export */ });
class Shader {
    constructor(material) {
        this._material = material;
    }
    recreate(scene) {
        this._createVertexShader(scene);
        this._createFragmentShader(scene);
    }
    get vertexShaderCode() {
        return this._vertexShaderCode;
    }
    get fragmentShaderCode() {
        return this._fragmentShaderCode;
    }
}


/***/ }),

/***/ "./src/shaders/ShaderBasic.ts":
/*!************************************!*\
  !*** ./src/shaders/ShaderBasic.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind_value: () => (/* binding */ bind_value),
/* harmony export */   customVary_value: () => (/* binding */ customVary_value),
/* harmony export */   getColor_frag: () => (/* binding */ getColor_frag),
/* harmony export */   itemVary_value: () => (/* binding */ itemVary_value),
/* harmony export */   location_transform_vert: () => (/* binding */ location_transform_vert),
/* harmony export */   location_vert: () => (/* binding */ location_vert),
/* harmony export */   transform_vert: () => (/* binding */ transform_vert),
/* harmony export */   uv_vert: () => (/* binding */ uv_vert)
/* harmony export */ });
/* harmony import */ var _core_Defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Defines */ "./src/core/Defines.ts");

function location_transform_vert() {
    return `
            @group(0) @binding(0) var<uniform> projectionMatrix : mat4x4<f32>;
            @group(0) @binding(1) var<uniform> viewMatrix : mat4x4<f32>;
                
            @group(2) @binding(0) var<uniform> modelMatrix : mat4x4<f32>;
            `;
}
function location_vert(item) {
    if (item)
        return `@location(${item.index}) ${item.name} : ${item.shaderItemType},`;
    return "";
}
function itemVary_value(item, index) {
    if (item) {
        return `@location(${index.index++}) ${item.name} : ${item.shaderItemType},`;
    }
    return "";
}
function customVary_value(name, itemType, indexObj) {
    return `@location(${indexObj.index++}) ${name} : ${itemType},`;
}
function transform_vert() {
    return `
            var mvPosition = matrixWorldInverse * modelMatrix * vec4<f32>(position, 1.0);
            output.Position = projectionMatrix * mvPosition;
            `;
}
function uv_vert(item) {
    if (item)
        return `output.uv = uv;`;
    return "";
}
function bind_value(groupIndex, item) {
    if (item)
        return `@group(${groupIndex}) @binding(${item.index}) var${item.bindType === _core_Defines__WEBPACK_IMPORTED_MODULE_0__.BindType.buffer ? "<uniform>" : ""} ${item.name} : ${item.shaderItemType};`;
    return "";
}
function getColor_frag(textureItem, colorItem) {
    if (textureItem)
        return `baseColor = textureSample(texture, colorSampler, uv);`;
    else {
        if (colorItem.shaderItemType === "vec3<f32>")
            return `baseColor = vec4(color,1.0);`;
        else
            return `baseColor = color;`;
    }
}


/***/ }),

/***/ "./src/spectre.ts":
/*!************************!*\
  !*** ./src/spectre.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxGeometry: () => (/* reexport safe */ _geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_5__.BoxGeometry),
/* harmony export */   BufferAttribute: () => (/* reexport safe */ _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_3__.BufferAttribute),
/* harmony export */   BufferGeometry: () => (/* reexport safe */ _core_BufferGeometry__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry),
/* harmony export */   Color: () => (/* reexport safe */ _math_Color__WEBPACK_IMPORTED_MODULE_10__.Color),
/* harmony export */   ConstantsValues: () => (/* reexport module object */ _utils_TMPValues__WEBPACK_IMPORTED_MODULE_27__),
/* harmony export */   DirectionalLight: () => (/* reexport safe */ _lights_DirectionalLight__WEBPACK_IMPORTED_MODULE_20__.DirectionalLight),
/* harmony export */   Environment: () => (/* reexport module object */ _core_Defines__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   Euler: () => (/* reexport safe */ _math_Euler__WEBPACK_IMPORTED_MODULE_11__.Euler),
/* harmony export */   FileLoader: () => (/* reexport safe */ _loaders_FileLoader__WEBPACK_IMPORTED_MODULE_24__.FileLoader),
/* harmony export */   GPUConstances: () => (/* reexport module object */ _Constants__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   ImageLoader: () => (/* reexport safe */ _loaders_ImageLoader__WEBPACK_IMPORTED_MODULE_25__.ImageLoader),
/* harmony export */   Matrix3: () => (/* reexport safe */ _math_Matrix3__WEBPACK_IMPORTED_MODULE_12__.Matrix3),
/* harmony export */   Matrix4: () => (/* reexport safe */ _math_Matrix4__WEBPACK_IMPORTED_MODULE_13__.Matrix4),
/* harmony export */   Mesh: () => (/* reexport safe */ _objects_Mesh__WEBPACK_IMPORTED_MODULE_19__.Mesh),
/* harmony export */   MeshBasicMaterial: () => (/* reexport safe */ _materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_8__.MeshBasicMaterial),
/* harmony export */   MeshPhongMaterial: () => (/* reexport safe */ _materials_MeshPhongMaterial__WEBPACK_IMPORTED_MODULE_9__.MeshPhongMaterial),
/* harmony export */   Object3D: () => (/* reexport safe */ _core_Object3D__WEBPACK_IMPORTED_MODULE_17__.Object3D),
/* harmony export */   OrbitControls: () => (/* reexport safe */ _controls_OrbitControls__WEBPACK_IMPORTED_MODULE_23__.OrbitControls),
/* harmony export */   OrthographicCamera: () => (/* reexport safe */ _cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_22__.OrthographicCamera),
/* harmony export */   PerspectiveCamera: () => (/* reexport safe */ _cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_21__.PerspectiveCamera),
/* harmony export */   PlaneGeometry: () => (/* reexport safe */ _geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_6__.PlaneGeometry),
/* harmony export */   Quaternion: () => (/* reexport safe */ _math_Quaternion__WEBPACK_IMPORTED_MODULE_14__.Quaternion),
/* harmony export */   Scene: () => (/* reexport safe */ _core_Scene__WEBPACK_IMPORTED_MODULE_18__.Scene),
/* harmony export */   SphereGeometry: () => (/* reexport safe */ _geometries_SphereGeometry__WEBPACK_IMPORTED_MODULE_7__.SphereGeometry),
/* harmony export */   TextureLoader: () => (/* reexport safe */ _loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_26__.TextureLoader),
/* harmony export */   Vector2: () => (/* reexport safe */ _math_Vector2__WEBPACK_IMPORTED_MODULE_15__.Vector2),
/* harmony export */   Vector3: () => (/* reexport safe */ _math_Vector3__WEBPACK_IMPORTED_MODULE_16__.Vector3),
/* harmony export */   WebGPURenderer: () => (/* reexport safe */ _renderers_WebGPURenderer__WEBPACK_IMPORTED_MODULE_2__.WebGPURenderer)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
/* harmony import */ var _core_Defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Defines */ "./src/core/Defines.ts");
/* harmony import */ var _renderers_WebGPURenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/WebGPURenderer */ "./src/renderers/WebGPURenderer.ts");
/* harmony import */ var _core_BufferAttribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/BufferAttribute */ "./src/core/BufferAttribute.ts");
/* harmony import */ var _core_BufferGeometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/BufferGeometry */ "./src/core/BufferGeometry.ts");
/* harmony import */ var _geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometries/BoxGeometry */ "./src/geometries/BoxGeometry.ts");
/* harmony import */ var _geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geometries/PlaneGeometry */ "./src/geometries/PlaneGeometry.ts");
/* harmony import */ var _geometries_SphereGeometry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geometries/SphereGeometry */ "./src/geometries/SphereGeometry.ts");
/* harmony import */ var _materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./materials/MeshBasicMaterial */ "./src/materials/MeshBasicMaterial.ts");
/* harmony import */ var _materials_MeshPhongMaterial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./materials/MeshPhongMaterial */ "./src/materials/MeshPhongMaterial.ts");
/* harmony import */ var _math_Color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math/Color */ "./src/math/Color.ts");
/* harmony import */ var _math_Euler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./math/Euler */ "./src/math/Euler.ts");
/* harmony import */ var _math_Matrix3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./math/Matrix3 */ "./src/math/Matrix3.ts");
/* harmony import */ var _math_Matrix4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./math/Matrix4 */ "./src/math/Matrix4.ts");
/* harmony import */ var _math_Quaternion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./math/Quaternion */ "./src/math/Quaternion.ts");
/* harmony import */ var _math_Vector2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./math/Vector2 */ "./src/math/Vector2.ts");
/* harmony import */ var _math_Vector3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./math/Vector3 */ "./src/math/Vector3.ts");
/* harmony import */ var _core_Object3D__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/Object3D */ "./src/core/Object3D.ts");
/* harmony import */ var _core_Scene__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/Scene */ "./src/core/Scene.ts");
/* harmony import */ var _objects_Mesh__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./objects/Mesh */ "./src/objects/Mesh.ts");
/* harmony import */ var _lights_DirectionalLight__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lights/DirectionalLight */ "./src/lights/DirectionalLight.ts");
/* harmony import */ var _cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cameras/PerspectiveCamera */ "./src/cameras/PerspectiveCamera.ts");
/* harmony import */ var _cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cameras/OrthographicCamera */ "./src/cameras/OrthographicCamera.ts");
/* harmony import */ var _controls_OrbitControls__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./controls/OrbitControls */ "./src/controls/OrbitControls.ts");
/* harmony import */ var _loaders_FileLoader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./loaders/FileLoader */ "./src/loaders/FileLoader.ts");
/* harmony import */ var _loaders_ImageLoader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./loaders/ImageLoader */ "./src/loaders/ImageLoader.ts");
/* harmony import */ var _loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./loaders/TextureLoader */ "./src/loaders/TextureLoader.ts");
/* harmony import */ var _utils_TMPValues__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/TMPValues */ "./src/utils/TMPValues.ts");






























/***/ }),

/***/ "./src/textures/Source.ts":
/*!********************************!*\
  !*** ./src/textures/Source.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Source: () => (/* binding */ Source)
/* harmony export */ });
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.ts");

class Source {
    constructor(data = null) {
        this.uuid = _math_MathUtils__WEBPACK_IMPORTED_MODULE_0__.generateUUID();
        this.version = 0;
        this.data = data;
        this.version = 0;
    }
    set needsUpdate(value) {
        if (value === true)
            this.version++;
    }
}


/***/ }),

/***/ "./src/textures/Texture.ts":
/*!*********************************!*\
  !*** ./src/textures/Texture.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NullTexture: () => (/* binding */ NullTexture),
/* harmony export */   Texture: () => (/* binding */ Texture)
/* harmony export */ });
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.ts");
/* harmony import */ var _math_Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2 */ "./src/math/Vector2.ts");
/* harmony import */ var _math_Matrix3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Matrix3 */ "./src/math/Matrix3.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Constants */ "./src/Constants.ts");
/* harmony import */ var _Source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Source */ "./src/textures/Source.ts");





const t_nullCanvas = document.createElement("canvas");
t_nullCanvas.width = 1;
t_nullCanvas.height = 1;
const t_ctx = t_nullCanvas.getContext("2d");
t_ctx.fillStyle = "#ffffff";
t_ctx.fillRect(0, 0, t_nullCanvas.width, t_nullCanvas.height);
const t_nullImage = document.createElement("img");
t_nullImage.width = 1;
t_nullImage.height = 1;
t_nullImage.src = t_nullCanvas.toDataURL();
class Texture {
    constructor(image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = _Constants__WEBPACK_IMPORTED_MODULE_3__.ClampToEdgeWrapping, wrapT = _Constants__WEBPACK_IMPORTED_MODULE_3__.ClampToEdgeWrapping, magFilter = _Constants__WEBPACK_IMPORTED_MODULE_3__.LinearFilter, minFilter = _Constants__WEBPACK_IMPORTED_MODULE_3__.LinearMipmapLinearFilter, format = _Constants__WEBPACK_IMPORTED_MODULE_3__.RGBAFormat, type = _Constants__WEBPACK_IMPORTED_MODULE_3__.UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = _Constants__WEBPACK_IMPORTED_MODULE_3__.NoColorSpace) {
        this.uuid = _math_MathUtils__WEBPACK_IMPORTED_MODULE_0__.generateUUID();
        this.name = '';
        this.mipmaps = [];
        this.channel = 0;
        this.offset = new _math_Vector2__WEBPACK_IMPORTED_MODULE_1__.Vector2(0, 0);
        this.repeat = new _math_Vector2__WEBPACK_IMPORTED_MODULE_1__.Vector2(1, 1);
        this.center = new _math_Vector2__WEBPACK_IMPORTED_MODULE_1__.Vector2(0, 0);
        this.rotation = 0;
        this.matrixAutoUpdate = true;
        this.matrix = new _math_Matrix3__WEBPACK_IMPORTED_MODULE_2__.Matrix3();
        this.generateMipmaps = true;
        this.premultiplyAlpha = false;
        this.flipY = true;
        this.unpackAlignment = 4; // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
        this.version = 0;
        this.isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
        this.needsPMREMUpdate = false; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)
        this.uuid = _math_MathUtils__WEBPACK_IMPORTED_MODULE_0__.generateUUID();
        this.name = '';
        this.source = new _Source__WEBPACK_IMPORTED_MODULE_4__.Source(image);
        this.mipmaps = [];
        this.mapping = mapping;
        this.channel = 0;
        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.magFilter = magFilter;
        this.minFilter = minFilter;
        this.anisotropy = anisotropy;
        this.format = format;
        this.type = type;
        this.colorSpace = colorSpace;
    }
    get image() {
        return this.source.data;
    }
    set image(value) {
        this.source.data = value;
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
        return new Texture().copy(this);
    }
    copy(source) {
        this.name = source.name;
        this.source = source.source;
        this.mipmaps = source.mipmaps.slice(0);
        this.mapping = source.mapping;
        this.channel = source.channel;
        this.wrapS = source.wrapS;
        this.wrapT = source.wrapT;
        this.magFilter = source.magFilter;
        this.minFilter = source.minFilter;
        this.anisotropy = source.anisotropy;
        this.format = source.format;
        this.type = source.type;
        this.offset.copy(source.offset);
        this.repeat.copy(source.repeat);
        this.center.copy(source.center);
        this.rotation = source.rotation;
        this.matrixAutoUpdate = source.matrixAutoUpdate;
        this.matrix.copy(source.matrix);
        this.generateMipmaps = source.generateMipmaps;
        this.premultiplyAlpha = source.premultiplyAlpha;
        this.flipY = source.flipY;
        this.unpackAlignment = source.unpackAlignment;
        this.colorSpace = source.colorSpace;
        this.needsUpdate = true;
        return this;
    }
    transformUv(uv) {
        if (this.mapping !== _Constants__WEBPACK_IMPORTED_MODULE_3__.UVMapping)
            return uv;
        uv.applyMatrix3(this.matrix);
        if (uv.x < 0 || uv.x > 1) {
            switch (this.wrapS) {
                case _Constants__WEBPACK_IMPORTED_MODULE_3__.RepeatWrapping:
                    uv.x = uv.x - Math.floor(uv.x);
                    break;
                case _Constants__WEBPACK_IMPORTED_MODULE_3__.ClampToEdgeWrapping:
                    uv.x = uv.x < 0 ? 0 : 1;
                    break;
                case _Constants__WEBPACK_IMPORTED_MODULE_3__.MirroredRepeatWrapping:
                    if (Math.abs(Math.floor(uv.x) % 2) === 1) {
                        uv.x = Math.ceil(uv.x) - uv.x;
                    }
                    else {
                        uv.x = uv.x - Math.floor(uv.x);
                    }
                    break;
            }
        }
        if (uv.y < 0 || uv.y > 1) {
            switch (this.wrapT) {
                case _Constants__WEBPACK_IMPORTED_MODULE_3__.RepeatWrapping:
                    uv.y = uv.y - Math.floor(uv.y);
                    break;
                case _Constants__WEBPACK_IMPORTED_MODULE_3__.ClampToEdgeWrapping:
                    uv.y = uv.y < 0 ? 0 : 1;
                    break;
                case _Constants__WEBPACK_IMPORTED_MODULE_3__.MirroredRepeatWrapping:
                    if (Math.abs(Math.floor(uv.y) % 2) === 1) {
                        uv.y = Math.ceil(uv.y) - uv.y;
                    }
                    else {
                        uv.y = uv.y - Math.floor(uv.y);
                    }
                    break;
            }
        }
        if (this.flipY) {
            uv.y = 1 - uv.y;
        }
        return uv;
    }
    set needsUpdate(value) {
        if (value === true) {
            this.version++;
            this.source.needsUpdate = true;
        }
    }
}
Texture.DEFAULT_IMAGE = t_nullImage;
Texture.DEFAULT_MAPPING = _Constants__WEBPACK_IMPORTED_MODULE_3__.UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;
const NullTexture = new Texture();


/***/ }),

/***/ "./src/utils/CommonUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/CommonUtils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonUtils: () => (/* binding */ CommonUtils)
/* harmony export */ });
const _cache = {};
class CommonUtils {
    static warnOnce(message) {
        if (message in _cache)
            return;
        _cache[message] = true;
        console.warn(message);
    }
    static isDefined(o) {
        return o !== undefined && o !== null;
    }
    static removeArrayItemByValue(array, value) {
        for (let i = 0; i < array.length; ++i) {
            if (array[i] === value) {
                array.splice(i, 1);
                break;
            }
        }
    }
}


/***/ }),

/***/ "./src/utils/TMPValues.ts":
/*!********************************!*\
  !*** ./src/utils/TMPValues.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentifyMatrix4: () => (/* binding */ IdentifyMatrix4),
/* harmony export */   Vector0: () => (/* binding */ Vector0)
/* harmony export */ });
/* harmony import */ var _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Matrix4 */ "./src/math/Matrix4.ts");
/* harmony import */ var _math_Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector3 */ "./src/math/Vector3.ts");


const IdentifyMatrix4 = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
const Vector0 = new _math_Vector3__WEBPACK_IMPORTED_MODULE_1__.Vector3();


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./src/spectre.ts");
/******/ var __webpack_exports__BoxGeometry = __webpack_exports__.BoxGeometry;
/******/ var __webpack_exports__BufferAttribute = __webpack_exports__.BufferAttribute;
/******/ var __webpack_exports__BufferGeometry = __webpack_exports__.BufferGeometry;
/******/ var __webpack_exports__Color = __webpack_exports__.Color;
/******/ var __webpack_exports__ConstantsValues = __webpack_exports__.ConstantsValues;
/******/ var __webpack_exports__DirectionalLight = __webpack_exports__.DirectionalLight;
/******/ var __webpack_exports__Environment = __webpack_exports__.Environment;
/******/ var __webpack_exports__Euler = __webpack_exports__.Euler;
/******/ var __webpack_exports__FileLoader = __webpack_exports__.FileLoader;
/******/ var __webpack_exports__GPUConstances = __webpack_exports__.GPUConstances;
/******/ var __webpack_exports__ImageLoader = __webpack_exports__.ImageLoader;
/******/ var __webpack_exports__Matrix3 = __webpack_exports__.Matrix3;
/******/ var __webpack_exports__Matrix4 = __webpack_exports__.Matrix4;
/******/ var __webpack_exports__Mesh = __webpack_exports__.Mesh;
/******/ var __webpack_exports__MeshBasicMaterial = __webpack_exports__.MeshBasicMaterial;
/******/ var __webpack_exports__MeshPhongMaterial = __webpack_exports__.MeshPhongMaterial;
/******/ var __webpack_exports__Object3D = __webpack_exports__.Object3D;
/******/ var __webpack_exports__OrbitControls = __webpack_exports__.OrbitControls;
/******/ var __webpack_exports__OrthographicCamera = __webpack_exports__.OrthographicCamera;
/******/ var __webpack_exports__PerspectiveCamera = __webpack_exports__.PerspectiveCamera;
/******/ var __webpack_exports__PlaneGeometry = __webpack_exports__.PlaneGeometry;
/******/ var __webpack_exports__Quaternion = __webpack_exports__.Quaternion;
/******/ var __webpack_exports__Scene = __webpack_exports__.Scene;
/******/ var __webpack_exports__SphereGeometry = __webpack_exports__.SphereGeometry;
/******/ var __webpack_exports__TextureLoader = __webpack_exports__.TextureLoader;
/******/ var __webpack_exports__Vector2 = __webpack_exports__.Vector2;
/******/ var __webpack_exports__Vector3 = __webpack_exports__.Vector3;
/******/ var __webpack_exports__WebGPURenderer = __webpack_exports__.WebGPURenderer;
/******/ export { __webpack_exports__BoxGeometry as BoxGeometry, __webpack_exports__BufferAttribute as BufferAttribute, __webpack_exports__BufferGeometry as BufferGeometry, __webpack_exports__Color as Color, __webpack_exports__ConstantsValues as ConstantsValues, __webpack_exports__DirectionalLight as DirectionalLight, __webpack_exports__Environment as Environment, __webpack_exports__Euler as Euler, __webpack_exports__FileLoader as FileLoader, __webpack_exports__GPUConstances as GPUConstances, __webpack_exports__ImageLoader as ImageLoader, __webpack_exports__Matrix3 as Matrix3, __webpack_exports__Matrix4 as Matrix4, __webpack_exports__Mesh as Mesh, __webpack_exports__MeshBasicMaterial as MeshBasicMaterial, __webpack_exports__MeshPhongMaterial as MeshPhongMaterial, __webpack_exports__Object3D as Object3D, __webpack_exports__OrbitControls as OrbitControls, __webpack_exports__OrthographicCamera as OrthographicCamera, __webpack_exports__PerspectiveCamera as PerspectiveCamera, __webpack_exports__PlaneGeometry as PlaneGeometry, __webpack_exports__Quaternion as Quaternion, __webpack_exports__Scene as Scene, __webpack_exports__SphereGeometry as SphereGeometry, __webpack_exports__TextureLoader as TextureLoader, __webpack_exports__Vector2 as Vector2, __webpack_exports__Vector3 as Vector3, __webpack_exports__WebGPURenderer as WebGPURenderer };
/******/ 

//# sourceMappingURL=spectre.js.map