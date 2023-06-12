import { GPUTextureFormat } from "../Constants";
import { Material } from "../materials/Material";
import { RenderPass } from "../renderers/RenderPass";
import { Pipleline } from "./Pipeline";
import { Scene } from "./Scene";

export class Cache {
    public static enabled = false;

    static caches: any = {};

    public static add(key: string, obj: any) {
        if (this.enabled === false) return;

        // console.log( 'THREE.Cache', 'Adding key:', key );

        this.caches[key] = obj;
    }

    public static get(key: string) {
        if (this.enabled === false) return;

        // console.log( 'THREE.Cache', 'Checking key:', key );

        return this.caches[key];
    }

    public static remove(key: string) {
        delete this.caches[key];
    }

    public static clear() {
        this.caches = {};
    }
}

export class DelayDestroyer {
    public static delayTime = 5000;

    public static destroy(garbage: any, destroyFunc: (g: any) => void, time = DelayDestroyer.delayTime) {
        setTimeout(() => {
            destroyFunc(garbage);
        }, time);
    }
}

export class PipelineCache {
    private static _pipelineMap = new Map<RenderPass, Map<Material, Pipleline>>();

    public static get(pass: RenderPass, material: Material, scene: Scene, needsCompile: boolean) {
        const pipelines = PipelineCache._pipelineMap.get(pass);
        if (!pipelines) {
            PipelineCache._pipelineMap.set(pass, new Map<Material, Pipleline>());
        }

        let pipeline = PipelineCache._pipelineMap.get(pass).get(material);
        if (!pipeline) {
            pipeline = new Pipleline(pass, material);
            PipelineCache._pipelineMap.get(pass).set(material, pipeline);

            pipeline.compilePipeline(scene);
        } else {
            if (material.needsUpdate || needsCompile) {
                pipeline.compilePipeline(scene);
                material.needsUpdate = false;
            }
        }

        return pipeline;
    }
}
