import { Texture } from "../../textures/Texture";
import { TextureMipmapGenerator } from "../../textures/TextureMipmapGenerator";
import { Context } from "../Context";
import { BindType } from "../Defines";
import { DelayDestroyer } from "../ResourceManagers";
import { BindValue } from "./BindValue";

export class BindTexture extends BindValue {
    private _texture: Texture;
    private _gpuTexture: GPUTexture;
    private _gpuTexutureView: GPUTextureView;

    private _width: number;
    private _height: number;

    constructor(texture: Texture, usage: number, mipmapSize = 0) {
        super();

        this._texture = texture;
        this._gpuTexture = Context.activeDevice.createTexture({
            size: [this._texture.image.width, this._texture.image.height, 1],
            mipLevelCount: mipmapSize,
            format: texture.format,
            usage,
        });
        if (!texture.isRenderTargetTexture) {
            createImageBitmap(this._texture.image).then((imageBitmap: ImageBitmap) => {
                this._width = imageBitmap.width;
                this._height = imageBitmap.height;

                Context.activeDevice.queue.copyExternalImageToTexture(
                    { source: imageBitmap },
                    { texture: this._gpuTexture },
                    [this._width, this._height]
                );
                if (mipmapSize > 1) {
                    TextureMipmapGenerator.webGPUGenerateMipmap(texture);
                }
            });
        }

        this._needsUpdate = false;
    }

    public override destroy(): void {
        DelayDestroyer.destroy(this._gpuTexture, (data) => {
            data.destroy();
        });
    }

    public set texture(v: Texture) {
        if (v !== this._texture) {
            this._needsUpdate = true;
            this._texture = v;
        }
    }

    public get texture() {
        return this._texture;
    }

    public override get type() {
        return BindType.texture;
    }

    public get gpuTexutureView() {
        if (!this._gpuTexutureView) this._gpuTexutureView = this._gpuTexture.createView();
        return this._gpuTexutureView;
    }

    public get gpuTexture() {
        return this._gpuTexture;
    }
}
