import { BufferGeometry } from "./BufferGeometry";
import { Material } from "../materials/Material";
import { Object3D } from "./Object3D";
import { BindBuffer } from "./binds/BindBuffer";
import { IdentifyMatrix4 } from "../utils/TMPValues";

const u_modelTranform = "matrixWorld";
export class RenderableObject extends Object3D {
    public get type() {
        return "RenderableObject";
    }

    public static Is(object: Object3D) {
        return object instanceof RenderableObject;
    }

    protected _geometry: BufferGeometry;
    protected _material: Material;

    private _pipeline: GPURenderPipeline;
    private _uniforms: Map<string, BindBuffer> = new Map();

    constructor(geometry: BufferGeometry, material: Material) {
        super();
        this._geometry = geometry;
        this._material = material;

        this._initInitialUniform();
    }

    public update() {

        this.updateMatrixWorld();

        this._updateUniformValue();
    }


    public override updateMatrixWorld() {
        const needsUpdate = this.matrixWorldNeedsUpdate;
        super.updateMatrixWorld();

        if (needsUpdate) {
            this._uniforms.get(u_modelTranform).data = this.matrixWorld.toArray();
        }
    }

    private _initInitialUniform() {

        const tranformUniform = new BindBuffer(u_modelTranform, IdentifyMatrix4.toArray());
        this._uniforms.set(u_modelTranform, tranformUniform);
    }

    private _updateUniformValue() {
        for (const uniform of this._uniforms.values()) {
            uniform.update();
        }
    }

    public get pipeline() {
        return this._pipeline;
    }

    get geometry() {
        return this._geometry;
    }

    get material() {
        return this._material;
    }

    get uniforms(){
        return this._uniforms;
    }

}
