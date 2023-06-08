import { OrthographicCamera } from "../cameras/OrthographicCamera";
import { Matrix4 } from "../math/Matrix4";
import { Vector3 } from "../math/Vector3";
import { DirectionalLight } from "./DirectionalLight";
import { LightShadow } from "./LightShadow";

const _projScreenMatrix = /*@__PURE__*/ new Matrix4();
const _lightPositionWorld = /*@__PURE__*/ new Vector3();
const _lookTarget = /*@__PURE__*/ new Vector3();

export class DirectionalLightShadow extends LightShadow {
    constructor() {
        super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
    }

    updateMatrices(light: DirectionalLight) {
        const shadowCamera = this.camera;
        const shadowMatrix = this.matrix;

        _lightPositionWorld.setFromMatrixPosition(light.matrixWorld);
        shadowCamera.position.copy(_lightPositionWorld);

        _lookTarget.setFromMatrixPosition(light.target.matrixWorld);
        shadowCamera.lookAt(_lookTarget);
        shadowCamera.updateMatrixWorld();

        _projScreenMatrix.multiplyMatrices(shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse);
        this._frustum.setFromProjectionMatrix(_projScreenMatrix);

        shadowMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);

        shadowMatrix.multiply(_projScreenMatrix);
    }
}
