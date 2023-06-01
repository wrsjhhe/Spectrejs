import { BindType } from "../../Constants";
import { Context } from "../Environment";
import { BindValue } from "./BindValue";

export class SamplerUniform extends BindValue{
    private _sampler : GPUSampler;

    constructor(name:string,flags:GPUShaderStageFlags){
        super(name,flags);

        this._sampler = Context.activeDevice.createSampler({
            magFilter: 'linear',
            minFilter: 'linear',
        });
    }

    public override get type(){
        return BindType.sampler;
    }

    public get sampler(){
        return this._sampler;
    }
}