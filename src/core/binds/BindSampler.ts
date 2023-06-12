import { Texture } from "../../textures/Texture";
import { BindType } from "../Defines";
import { Context } from "../ResourceManagers";
import { BindValue } from "./BindValue";

export class BindSampler extends BindValue {
    private _sampler: GPUSampler;

    constructor(texture: Texture) {
        super();

        this._sampler = Context.activeDevice.createSampler({
            addressModeU: texture.wrapU,
            addressModeV: texture.wrapV,
            addressModeW: texture.wrapW,
            magFilter: texture.magFilter,
            minFilter: texture.minFilter,
            mipmapFilter: texture.mipmapFilter,
            maxAnisotropy: texture.anisotropy,
        });
        this._needsUpdate = false;
    }

    public override get type() {
        return BindType.sampler;
    }

    public get sampler() {
        return this._sampler;
    }
}
