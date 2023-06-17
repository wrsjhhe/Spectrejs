import { BufferGeometry } from "./BufferGeometry";
import { Material } from "../materials/Material";
import { Object3D } from "./Object3D";
import { BindBuffer } from "./binds/BindBuffer";
import { IdentifyMatrix4 } from "../utils/TempValues";
import { Box3 } from "../math/Box3";
import { Sphere } from "../math/Sphere";
import { Camera } from "../cameras/Camera";

const u_modelTranform = "matrixWorld";
const u_normaTransform = "normalMatrix";
export class RenderableObject extends Object3D {
    public get type() {
        return "RenderableObject";
    }

    public static Is(object: Object3D) {
        return object instanceof RenderableObject;
    }

    public get isRenderableObject() {
        return true;
    }

    protected _geometry: BufferGeometry;
    protected _material: Material;

    private _pipeline: GPURenderPipeline;
    private _uniforms: Map<string, BindBuffer> = new Map();

    private _boundingBox: Box3;
    private _boundingSphere: Sphere;

    private _needsUpdateNormalMatrix: Boolean;

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

    public updateNormalMatrix(camera: Camera) {
        this.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, this.matrixWorld);
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
        this._uniforms.get(u_normaTransform).data = this.normalMatrix.toArray();
    }

    public override updateMatrixWorld() {
        const needsUpdate = this.matrixWorldNeedsUpdate;
        super.updateMatrixWorld();

        if (needsUpdate) {
            this._uniforms.get(u_modelTranform).data = this.matrixWorld.toArray();
        }
    }

    private _initInitialUniform() {
        const tranformUniform = new BindBuffer(IdentifyMatrix4.toArray());
        this._uniforms.set(u_modelTranform, tranformUniform);
        const normalTransformUniform = new BindBuffer(IdentifyMatrix4.toArray());
        this._uniforms.set(u_normaTransform, normalTransformUniform);
    }

    private _updateUniformValue() {
        for (const uniform of this._uniforms.values()) {
            uniform.update();
        }
    }

    public computeBoundingSphere() {
        this._boundingSphere.copy(this.geometry.boundingSphere);
        this._boundingSphere.applyMatrix4(this.matrixWorld);
    }

    public computeBoundingBox() {
        this._boundingBox.copy(this.geometry.boundingBox);
        this._boundingBox.applyMatrix4(this.matrixWorld);
    }

    public get pipeline() {
        return this._pipeline;
    }

    get geometry() {
        return this._geometry;
    }

    set geometry(value: BufferGeometry) {
        this._geometry = value;
    }

    get material() {
        return this._material;
    }

    set material(value: Material) {
        this._material = value;
    }

    get uniforms() {
        return this._uniforms;
    }

    get boundingBox() {
        return this._boundingBox;
    }

    get boundingSphere() {
        return this._boundingSphere;
    }
}
