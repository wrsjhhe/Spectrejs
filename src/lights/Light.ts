import { Object3D } from "../core/Object3D";
import { Color } from "../math/Color";
import { Matrix4 } from "../math/Matrix4";

export class Light extends Object3D {
    public get type() {
        return "Light";
    }

    public static Is(object: Object3D) {
        return object instanceof Light;
    }

    public get isLight() {
        return true;
    }

    private _color: Color;
    private _intensity: number;

    constructor(color: Color, intensity = 1) {
        super();

        this._color = color;
        this._intensity = intensity;
    }

    public update(viewMatrix: Matrix4) {}

    public get color() {
        return this._color;
    }
}
