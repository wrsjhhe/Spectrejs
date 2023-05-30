import { UniformDataType } from "../Constants";
import { Environment } from "./Environment";
import { Uniform } from "./Uniform";

export class SamplerUniform extends Uniform{
    private _sampler : GPUSampler;

    constructor(name:string,binding:number,flags:GPUShaderStageFlags){
        super(name,binding,flags);

        this._sampler = Environment.activeDevice.createSampler({
            magFilter: 'linear',
            minFilter: 'linear',
        });
    }

    public override get type(){
        return UniformDataType.sampler;
    }

    public get sampler(){
        return this._sampler;
    }
}