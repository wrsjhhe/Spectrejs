import { Texture } from "../../textures/Texture";
import { TextureMipmapGenerator } from "../../textures/TextureMipmapGenerator";
import { BindType } from "../Defines";
import { Context, DelayDestroyer } from "../ResourceManagers";
import { BindValue } from "./BindValue";

export class BindTexture extends BindValue {
    private _texture: Texture;
    private _gpuTexture: GPUTexture;
    private _gpuTexutureView: GPUTextureView;

    private _width: number;
    private _height: number;

    constructor(texture: Texture, mipmapSize = 0, copyImage = true) {
        super();

        this._texture = texture;
        this._gpuTexture = Context.activeDevice.createTexture({
            size: [this._texture.image.width, this._texture.image.height, 1],
            mipLevelCount: mipmapSize,
            format: texture.format,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
        });
        if (copyImage) {
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

    // texture update has problem
    // public override update() {
    //     if (this._needsUpdate) {
    //         createImageBitmap(this._texture.image).then((imageBitmap: ImageBitmap) => {
    //             if (imageBitmap.width !== this._width || imageBitmap.height !== this._height) {
    //                 console.warn("new image size must equal with texture,or you should create new texture!");
    //             }
    //             // DelayDestroyer.destroy(this._textureBuffer,(data)=>{
    //             //     data.destroy();
    //             // });

    //             // this._textureBuffer = Context.activeDevice.createTexture({
    //             //     size: [imageBitmap.width, imageBitmap.height, 1],
    //             //     format: "rgba8unorm",
    //             //     usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
    //             // });
    //             Context.activeDevice.queue.writeTexture(
    //                 { texture: this._gpuTexture },
    //                 new Uint8Array([0, 0, 0, 0]),
    //                 { bytesPerRow: 4 * 4 },
    //                 [1, 1]
    //             );
    //             Context.activeDevice.queue.copyExternalImageToTexture(
    //                 { source: imageBitmap },
    //                 { texture: this._gpuTexture },
    //                 [imageBitmap.width, imageBitmap.height]
    //             );
    //             //this._texutureView = this._textureBuffer.createView();
    //             // this.changed = true;
    //         });

    //         this._needsUpdate = false;
    //     }
    // }

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

    public get width() {
        return this._width;
    }
    public get height() {
        return this._height;
    }
}
