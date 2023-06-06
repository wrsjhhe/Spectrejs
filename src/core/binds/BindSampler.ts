import { BindType } from "../Defines";
import { Context } from "../ResourceManagers";
import { BindValue } from "./BindValue";

export class BindSampler extends BindValue{
    private _sampler : GPUSampler;

    constructor(name:string){
        super(name);

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