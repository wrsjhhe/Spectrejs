import { GPUTextureFormat } from "../Constants";

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

    public static get pixelRatio() {
        return window.devicePixelRatio;
    }

    private static _commandEncoder: GPUCommandEncoder;
    private static _commandEncoderUseCount = 0;
    public static beginCommandEncoder() {
        if (!Context._commandEncoder) {
            Context._commandEncoder = Context._activeDevice.createCommandEncoder();
        }
        ++Context._commandEncoderUseCount;
        return Context._commandEncoder;
    }

    public static finishCommand() {
        --Context._commandEncoderUseCount;
        if (Context._commandEncoderUseCount === 0) {
            Context._activeDevice.queue.submit([Context._commandEncoder.finish()]);
            Context._commandEncoder = null;
        }
    }
}
