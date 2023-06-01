import { BindType } from "../../Constants";
import { Texture } from "../../textures/Texture";
import { Context } from "../Environment";
import { DelayDestroyer } from "../ResourceManagers";
import { BindValue } from "./BindValue";

export class TextureUniform extends BindValue {
    private _texture: Texture;
    private _textureBuffer: GPUTexture;

    public changed = false;

    constructor(name: string, texture: Texture, flags: GPUShaderStageFlags) {
        super(name, flags);

        this._texture = texture;
        createImageBitmap(this._texture.image).then((imageBitmap: ImageBitmap) => {
            this._textureBuffer = Context.activeDevice.createTexture({
                size: [imageBitmap.width, imageBitmap.height, 1],
                format: "rgba8unorm",
                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });

            Context.activeDevice.queue.copyExternalImageToTexture(
                { source: imageBitmap },
                { texture: this._textureBuffer },
                [imageBitmap.width, imageBitmap.height]
            );
        });
        this._needsUpdate = false;
    }

    public override update() {
        if (this._needsUpdate) {
            createImageBitmap(this._texture.image).then((imageBitmap: ImageBitmap) => {
                DelayDestroyer.destroy(this._textureBuffer,(data)=>{
                    data.destroy();
                });
                this._textureBuffer = Context.activeDevice.createTexture({
                    size: [imageBitmap.width, imageBitmap.height, 1],
                    format: "rgba8unorm",
                    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
                });
    
                Context.activeDevice.queue.copyExternalImageToTexture(
                    { source: imageBitmap },
                    { texture: this._textureBuffer },
                    [imageBitmap.width, imageBitmap.height]
                );
                this.changed = true;
            });

            this._needsUpdate = false;
        }
    }

    public override destroy(): void {
        DelayDestroyer.destroy(this._textureBuffer,(data)=>{
            data.destroy();
        });
    }

    public set texture(v: Texture) {
        if (v !== this._texture) {
            this._needsUpdate = true;
            this._texture = v;
        }
    }

    public override get type() {
        return BindType.sampler;
    }

    public get texture() {
        return this._texture;
    }

    public get textureBuffer() {
        return this._textureBuffer;
    }
}
