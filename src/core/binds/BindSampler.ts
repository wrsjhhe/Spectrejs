import {
    GPUAddressMode,
    GPUFilterMode,
    GPUMipmapFilterMode,
} from "../../Constants";
import { BindType } from "../Defines";
import { Context } from "../ResourceManagers";
import { BindValue } from "./BindValue";

export class BindSampler extends BindValue {
    private _sampler: GPUSampler;

    constructor() {
        super();

        this._sampler = Context.activeDevice.createSampler({
            addressModeU: GPUAddressMode.ClampToEdge,
            addressModeV: GPUAddressMode.ClampToEdge,
            addressModeW: GPUAddressMode.ClampToEdge,
            magFilter: GPUFilterMode.Linear,
            minFilter: GPUFilterMode.Linear,
            mipmapFilter: GPUMipmapFilterMode.Linear,
            maxAnisotropy: 1,
        });
    }

    public override get type() {
        return BindType.sampler;
    }

    public get sampler() {
        return this._sampler;
    }
}
