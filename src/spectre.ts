import { Context } from "./core/Context";

export * as GPUConstances from "./Constants";

export * as Environment from "./core/Defines";

export { Renderer } from "./renderers/Renderer";
export { RenderTarget } from "./renderers/RenderTarget";

export { BufferAttribute } from "./core/BufferAttribute";
export { BufferGeometry } from "./core/BufferGeometry";

export { BoxGeometry } from "./geometries/BoxGeometry";
export { PlaneGeometry } from "./geometries/PlaneGeometry";
export { SphereGeometry } from "./geometries/SphereGeometry";

export { MeshBasicMaterial } from "./materials/MeshBasicMaterial";
export { MeshPhongMaterial } from "./materials/MeshPhongMaterial";
export { MeshPhysicalMaterial } from "./materials/MeshPhysicalMaterial";

export { Color } from "./math/Color";
export { Euler } from "./math/Euler";
export { Matrix3 } from "./math/Matrix3";
export { Matrix4 } from "./math/Matrix4";
export { Quaternion } from "./math/Quaternion";
export { Vector2 } from "./math/Vector2";
export { Vector3 } from "./math/Vector3";

export { Object3D } from "./core/Object3D";
export { Scene } from "./core/Scene";
export { Group } from "./core/Group";

export { Mesh } from "./objects/Mesh";

export { DirectionalLight } from "./lights/DirectionalLight";

export { PerspectiveCamera } from "./cameras/PerspectiveCamera";
export { OrthographicCamera } from "./cameras/OrthographicCamera";

export { OrbitControls } from "./controls/OrbitControls";

export { FileLoader } from "./loaders/FileLoader";
export { ImageLoader } from "./loaders/ImageLoader";
export { TextureLoader } from "./loaders/ImageTextureLoader";
export { GLTFLoader } from "./loaders/GLTFLoader";

export * as ConstantsValues from "./utils/TempValues";

export async function Init(parameters: any = {}) {
    const powerPreference = parameters.powerPreference ? parameters.powerPreference : "high-performance";
    const adapter = await navigator.gpu.requestAdapter({
        powerPreference,
    });

    Context.activeDevice = await adapter.requestDevice();
}
