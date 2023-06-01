import { UniformDataType } from "../../Constants";
import { Texture } from "../../textures/Texture";
import { Environment } from "../Environment";
import { GPUGarbageDestroyer } from "../ResourceManagers";
import { Uniform } from "./Uniform";

export class TextureUniform extends Uniform {
    private _texture: Texture;
    private _textureBuffer: GPUTexture;

    public changed = false;

    constructor(name: string, binding: number, texture: Texture, flags: GPUShaderStageFlags) {
        super(name, binding, flags);

        this._texture = texture;
        createImageBitmap(this._texture.image).then((imageBitmap: ImageBitmap) => {
            this._textureBuffer = Environment.activeDevice.createTexture({
                size: [imageBitmap.width, imageBitmap.height, 1],
                format: "rgba8unorm",
                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });

            Environment.activeDevice.queue.copyExternalImageToTexture(
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
                GPUGarbageDestroyer.destroy(this._textureBuffer,(data)=>{
                    data.destroy();
                });
                this._textureBuffer = Environment.activeDevice.createTexture({
                    size: [imageBitmap.width, imageBitmap.height, 1],
                    format: "rgba8unorm",
                    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
                });
    
                Environment.activeDevice.queue.copyExternalImageToTexture(
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
        this._textureBuffer.destroy();
    }

    public set texture(v: Texture) {
        if (v !== this._texture) {
            this._needsUpdate = true;
            this._texture = v;
        }
    }

    public override get type() {
        return UniformDataType.texture;
    }

    public get texture() {
        return this._texture;
    }

    public get textureBuffer() {
        return this._textureBuffer;
    }
}
