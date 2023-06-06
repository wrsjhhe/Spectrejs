import { GPUBufferBindingType, GPUSamplerBindingType } from "../Constants";
import { DirectionalLight } from "../lights/DirectionalLight";
import { Light } from "../lights/Light";
import { BindShaderItem, BindType } from "./Defines";


export class GlobalBindValueHelper{
    private _bindValues = new Map<string, BindShaderItem>();

    private _entries = new Array<GPUBindGroupLayoutEntry>();

    private _directionLights = new Map<string,DirectionalLight>();

    private _needRecreate = true;

    constructor(){
        
    }

    public addLights(lights: IterableIterator<Light>){
        const dirLigths = new Array<DirectionalLight>();
        for(const light of lights){
            if(DirectionalLight.Is(light)){
                dirLigths.push(light as DirectionalLight);
            }
        }

        for(const currentDirLight of this._directionLights.keys()){
            for(let i = 0;i < dirLigths.length;++i){
                if(currentDirLight === dirLigths[i].uuid){
                    dirLigths.splice(i,1);
                    break;
                }
            }
        }

        if(dirLigths.length !== this._directionLights.size){
            for(const dirLight of dirLigths){

            }
        }else{

        }

        
    }


    public resetLayout(){
        if(!this._needRecreate)
            return;
        this._bindValues.clear();

        for (const bindOption of this._bindValues.values()) {
            if (bindOption.bindType === BindType.buffer) {
                this._entries.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    buffer: {
                        type: GPUBufferBindingType.Uniform
                    },
                });
            } else if (bindOption.bindType === BindType.sampler) {
                this._entries.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    sampler: {
                        type: GPUSamplerBindingType.Filtering,
                    },
                });
            } else if (bindOption.bindType === BindType.texture) {
                this._entries.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    texture: {},
                });
            }
        }
    }
    

}