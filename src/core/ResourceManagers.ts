import { GPUTextureFormat } from "../Constants";

export class Cache {
    public static enabled = false;

    static caches: any = {};

    public static add(key: string, obj: any) {
        if (this.enabled === false) return;

        // console.log( 'THREE.Cache', 'Adding key:', key );

        this.caches[key] = obj;
    }

    public static get(key: string) {
        if (this.enabled === false) return;

        // console.log( 'THREE.Cache', 'Checking key:', key );

        return this.caches[key];
    }

    public static remove(key: string) {
        delete this.caches[key];
    }

    public static clear() {
        this.caches = {};
    }
}

export class Context {
    private static _activeDevice: GPUDevice;
    public static get activeDevice(): GPUDevice {
        return Context._activeDevice;
    }
    public static set activeDevice(v: GPUDevice) {
        Context._activeDevice = v;
    }

    private static _textureFormat: GPUTextureFormat = GPUTextureFormat.BGRA8Unorm;
    public static get textureFormat() {
        return Context._textureFormat;
    }
    public static set textureFormat(v: GPUTextureFormat) {
        Context._textureFormat = v;
    }

    private static _commandEncoder: GPUCommandEncoder;
    public static get commandEncoder() {
        if (!Context._commandEncoder) {
            Context._commandEncoder = Context._activeDevice.createCommandEncoder();
        }

        return Context._commandEncoder;
    }
}

export class DelayDestroyer {
    public static delayTime = 5000;

    public static destroy(garbage: any, destroyFunc: (g: any) => void, time = DelayDestroyer.delayTime) {
        setTimeout(() => {
            destroyFunc(garbage);
        }, time);
    }
}
