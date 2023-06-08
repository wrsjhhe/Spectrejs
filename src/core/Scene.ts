import { Camera } from "../cameras/Camera";
import { DirectionalLight } from "../lights/DirectionalLight";
import { Material } from "../materials/Material";
import { CommonUtils } from "../utils/CommonUtils";
import { BindShaderItem, BindType, getLayoutEntity } from "./Defines";
import { Object3D } from "./Object3D";
import { RenderableObject } from "./RenderableObject";
import { BindBuffer } from "./binds/BindBuffer";

const t_cameraBindValue = [
    {
        name: "projectionMatrix",
        index: 0,
        shaderItemType: "mat4x4<f32>",
        bindType: BindType.buffer,
        visibility: GPUShaderStage.VERTEX,
    },
    {
        name: "matrixWorldInverse",
        index: 1,
        shaderItemType: "mat4x4<f32>",
        bindType: BindType.buffer,
        visibility: GPUShaderStage.VERTEX,
    },
];

export class Scene extends Object3D {
    public get type() {
        return "Scene";
    }

    public static Is(object: Object3D) {
        return object instanceof Scene;
    }

    public get isScene() {
        return true;
    }

    private _renderableObjects = new Map<Material, Array<RenderableObject>>();

    private _directionalLights = new Map<string, DirectionalLight>();
    private _directionalLightBuffer: BindBuffer;
    private _bindValues = new Map<string, BindShaderItem>();
    private _entriesLayout = new Array<GPUBindGroupLayoutEntry>();
    private _entriesGroup = new Array<GPUBindGroupEntry>();
    private _lastSetCamera : Camera = null;
    public needsRecreateBind = true;

    constructor() {
        super();
    }

    public update(camrea:Camera):boolean{
        this._lastSetCamera = camrea;

        if(this.needsRecreateBind){
            this._createLayout();
            this._createBindGroup();
            this.needsRecreateBind = false;
            return true;
        }else{
            this._updateLightsUniform();
        }
        return false;
    }

    public getBindLayout() {
        
        return this._entriesLayout;
    }

    public getBindGroup() {
        return this._entriesGroup;
    }

    public handleAdded(object: Object3D) {
        object.traverse((child) => {
            if (RenderableObject.Is(child)) {
                this._addRenderableObject(child as RenderableObject);
            } else if (DirectionalLight.Is(child)) {
                this._addDirectionalLight(child as DirectionalLight);
            }
        });
    }

    public handleRemoved(object: Object3D) {
        object.traverse((child) => {
            if (RenderableObject.Is(child)) {
                this._removeRenderableObject(child as RenderableObject);
            } else if (DirectionalLight.Is(child)) {
                this._removeDirectionalLight(child as DirectionalLight);
            }
        });
    }

    private _createBindGroup(){
        this._entriesGroup.length = 0;
        this._entriesGroup.push({
            binding: 0,
            resource: {
                buffer: this._lastSetCamera.uniforms.get("projectionMatrix").buffer,
            },
        });
        this._entriesGroup.push({
            binding: 1,
            resource: {
                buffer: this._lastSetCamera.uniforms.get("matrixWorldInverse").buffer,
            },
        });

        if(this._directionalLights.size > 0){
            this._entriesGroup.push({
                binding: 2,
                resource: {
                    buffer: this._directionalLightBuffer.buffer,
                },
            });
        }
    }

    private _updateLightsUniform(){
        const dirLightsBuffer = new Float32Array(8*this._directionalLights.size);
        let offset = 0;
        let needsUpdate = false;
        for(const dirLight of this._directionalLights.values()){  
            if(dirLight.needsUpdate){
                needsUpdate = true;
                dirLight.update();
            }
            
            dirLightsBuffer.set(dirLight.color.toArray(),offset);
            offset+=4;

            const normal = dirLight.direction;
            dirLightsBuffer.set(normal.toArray(),offset);
            offset+=4;
        }

        if(needsUpdate){
            this._directionalLightBuffer.data = dirLightsBuffer;
            this._directionalLightBuffer.update();
        }
    }


    private _createLayout(){
        this._bindValues.clear();
        this._entriesLayout.length = 0;
        for(const cameraBind of t_cameraBindValue){
            this._bindValues.set(cameraBind.name,cameraBind);
        }

        if(this._directionalLights.size > 0){
            this._bindValues.set("directionalLights",{
                name: "directionalLights",
                index: this._bindValues.size,
                shaderItemType: `array<DirectionalLight,${this._directionalLights.size}>`,
                bindType: BindType.buffer,
                visibility: GPUShaderStage.FRAGMENT,
            });
            if( this._directionalLightBuffer )
                this._directionalLightBuffer.destroy();
            
            const arrayBuffer = new Float32Array(8*this._directionalLights.size);
            let offset = 0;
            for(const dirLight of this._directionalLights.values()){     
                arrayBuffer.set(dirLight.color.toArray(),offset);
                offset+=4;

                const normal = dirLight.direction;
                arrayBuffer.set(normal.toArray(),offset);
                offset+=4;
            }
            this._directionalLightBuffer = new BindBuffer(arrayBuffer);
        }

        for (const bindOption of this._bindValues.values()) {
            const entity = getLayoutEntity(bindOption);
            this._entriesLayout.push(entity);
        }
    }

    private _addRenderableObject(renderableObj: RenderableObject) {
        const material = renderableObj.material;
        const objs = this._renderableObjects.get(material);
        if (objs) {
            objs.push(renderableObj);
        } else {
            this._renderableObjects.set(material, []);
            this._renderableObjects.get(material).push(renderableObj);
        }
    }

    private _removeRenderableObject(renderableObj: RenderableObject) {
        const material = renderableObj.material;
        const arr = this._renderableObjects.get(material);
        if (arr) {
            CommonUtils.removeArrayItemByValue(arr, renderableObj);
        }
    }

    private _addDirectionalLight(light: DirectionalLight) {
        this._directionalLights.set(light.uuid, light);
        this.needsRecreateBind = true;
    }

    private _removeDirectionalLight(light: DirectionalLight) {
        this._directionalLights.delete(light.uuid);
        this.needsRecreateBind = true;
    }

    public get renderableObjs() {
        return this._renderableObjects;
    }
    public get directionalLights() {
        return this._directionalLights;
    }

    public get bindValues(){
        return this._bindValues;
    }
}
