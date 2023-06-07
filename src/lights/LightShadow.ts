import { Matrix4 } from "../math/Matrix4";
import { Vector2 } from "../math/Vector2";
import { Vector4 } from "../math/Vector4";
import { Frustum } from "../math/Frustum";
import { Camera } from "../cameras/Camera";

export class LightShadow {
    public camera: Camera;
    public bias = 0;
    public normalBias = 0;
    public radius = 0;
    public blurSamples = 0;

    mapSize = new Vector2(512, 512);
    matrix = new Matrix4();

    autoUpdate = true;
    needsUpdate = false;

    _frustum = new Frustum();
    _frameExtents = new Vector2(1, 1);

    _viewportCount = 1;

    _viewports = [new Vector4(0, 0, 1, 1)];

    constructor(camera?:Camera) {
        this.camera = camera;
        // this.map = null;
        // this.mapPass = null;
    }

    getViewportCount() {
        return this._viewportCount;
    }

    getFrustum() {
        return this._frustum;
    }

    getViewport(viewportIndex:number) {
        return this._viewports[viewportIndex];
    }

    getFrameExtents() {
        return this._frameExtents;
    }

    dispose() {
        // if (this.map) {
        //     this.map.dispose();
        // }

        // if (this.mapPass) {
        //     this.mapPass.dispose();
        // }
    }

    copy(source:LightShadow) {
        this.camera = source.camera.clone();

        this.bias = source.bias;
        this.radius = source.radius;

        this.mapSize.copy(source.mapSize);

        return this;
    }

    clone() {
        return new LightShadow().copy(this);
    }
}