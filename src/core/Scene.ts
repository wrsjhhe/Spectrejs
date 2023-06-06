import { DirectionalLight } from "../lights/DirectionalLight";
import { Material } from "../materials/Material";
import { CommonUtils } from "../utils/CommonUtils";
import { BindType } from "./Defines";
import { Object3D } from "./Object3D";
import { RenderableObject } from "./RenderableObject";

const t_cameraBindValue = [
    {
        name:"projectionMatrix",
        index : 0,
        shaderItemType:"mat4x4<f32>",
        bindType : BindType.buffer,
        visibility: GPUShaderStage.VERTEX
    },
    {
        name:"matrixWorldInverse",
        index : 1,
        shaderItemType:"mat4x4<f32>",
        bindType : BindType.buffer,
        visibility: GPUShaderStage.VERTEX
    }
];

export class Scene extends Object3D {

    public get type(){
		return "Scene";
    }

	public static Is(object:Object3D){
		return object instanceof Scene;
	}

    public get isScene() {
        return true;
    }

    protected _renderableObjects = new Map<Material, Array<RenderableObject>>();
    
    private _directionLights = new Map<string,DirectionalLight>();

    public directionLightChanged = false;

    constructor() {
        super();
    }

    public handleAdded(object: Object3D) {
        object.traverse((child) => {
            if (RenderableObject.Is(child)) {
                this._addRenderableObject(child as RenderableObject);
            } else if (DirectionalLight.Is(child)) {
                this._addDirectionLight(child as DirectionalLight);
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

    private _addDirectionLight(light: DirectionalLight) {
        this._directionLights.set(light.uuid, light);
        this.directionLightChanged = true;
    }

    private _removeDirectionalLight(light: DirectionalLight) {
        this._directionLights.delete(light.uuid);
        this.directionLightChanged = true;
    }

    public get renderableObjs() {
        return this._renderableObjects;
    }
    public get directionLights() {
        return this._directionLights;
    }
}
