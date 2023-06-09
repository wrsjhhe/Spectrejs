import { Quaternion } from "./Quaternion";
import { Matrix4 } from "./Matrix4";
import { clamp } from "./MathUtils";
import { Vector3 } from "./Vector3";

const _matrix = /*@__PURE__*/ new Matrix4();
const _quaternion = /*@__PURE__*/ new Quaternion();

class Euler {
    private static DEFAULT_ORDER = "XYZ";

    private _x = 0;
    private _y = 0;
    private _z = 0;
    private _order = Euler.DEFAULT_ORDER;

    private _onChangeCallback = (e: Euler) => {};

    public set x(v: number) {
        this._x = v;
        this._onChangeCallback(this);
    }
    public get x() {
        return this._x;
    }
    public set y(v: number) {
        this._y = v;
        this._onChangeCallback(this);
    }
    public get y() {
        return this._y;
    }
    public set z(v: number) {
        this._z = v;
        this._onChangeCallback(this);
    }
    public get z() {
        return this._z;
    }
    public set order(v: string) {
        this._order = v;
        this._onChangeCallback(this);
    }
    public get order() {
        return this._order;
    }

    constructor(x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER) {
        this._x = x;
        this._y = y;
        this._z = z;
        this.order = order;
    }

    set(x: number, y: number, z: number, order = this.order) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._order = order;

        this._onChangeCallback(this);

        return this;
    }

    clone() {
        return new Euler(this.x, this.y, this.z, this.order);
    }

    copy(euler: Euler) {
        this._x = euler.x;
        this._y = euler.y;
        this._z = euler.z;
        this._order = euler.order;

        this._onChangeCallback(this);

        return this;
    }

    setFromRotationMatrix(m: Matrix4, order = this.order, update = true) {
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

        const te = m.elements;
        const m11 = te[0],
            m12 = te[4],
            m13 = te[8];
        const m21 = te[1],
            m22 = te[5],
            m23 = te[9];
        const m31 = te[2],
            m32 = te[6],
            m33 = te[10];

        switch (order) {
            case "XYZ":
                this._y = Math.asin(clamp(m13, -1, 1));

                if (Math.abs(m13) < 0.9999999) {
                    this._x = Math.atan2(-m23, m33);
                    this._z = Math.atan2(-m12, m11);
                } else {
                    this._x = Math.atan2(m32, m22);
                    this._z = 0;
                }

                break;

            case "YXZ":
                this._x = Math.asin(-clamp(m23, -1, 1));

                if (Math.abs(m23) < 0.9999999) {
                    this._y = Math.atan2(m13, m33);
                    this._z = Math.atan2(m21, m22);
                } else {
                    this._y = Math.atan2(-m31, m11);
                    this._z = 0;
                }

                break;

            case "ZXY":
                this._x = Math.asin(clamp(m32, -1, 1));

                if (Math.abs(m32) < 0.9999999) {
                    this._y = Math.atan2(-m31, m33);
                    this._z = Math.atan2(-m12, m22);
                } else {
                    this._y = 0;
                    this._z = Math.atan2(m21, m11);
                }

                break;

            case "ZYX":
                this._y = Math.asin(-clamp(m31, -1, 1));

                if (Math.abs(m31) < 0.9999999) {
                    this._x = Math.atan2(m32, m33);
                    this._z = Math.atan2(m21, m11);
                } else {
                    this._x = 0;
                    this._z = Math.atan2(-m12, m22);
                }

                break;

            case "YZX":
                this._z = Math.asin(clamp(m21, -1, 1));

                if (Math.abs(m21) < 0.9999999) {
                    this._x = Math.atan2(-m23, m22);
                    this._y = Math.atan2(-m31, m11);
                } else {
                    this._x = 0;
                    this._y = Math.atan2(m13, m33);
                }

                break;

            case "XZY":
                this._z = Math.asin(-clamp(m12, -1, 1));

                if (Math.abs(m12) < 0.9999999) {
                    this._x = Math.atan2(m32, m22);
                    this._y = Math.atan2(m13, m11);
                } else {
                    this._x = Math.atan2(-m23, m33);
                    this._y = 0;
                }

                break;

            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
        }

        this._order = order;

        if (update) this._onChangeCallback(this);

        return this;
    }

    setFromQuaternion(q: Quaternion, order: string, update = true) {
        _matrix.makeRotationFromQuaternion(q);

        return this.setFromRotationMatrix(_matrix, order, update);
    }

    setFromVector3(v: Vector3, order = this.order) {
        return this.set(v.x, v.y, v.z, order);
    }

    reorder(newOrder: string) {
        // WARNING: this discards revolution information -bhouston

        _quaternion.setFromEuler(this);

        return this.setFromQuaternion(_quaternion, newOrder);
    }

    equals(euler: Euler) {
        return euler.x === this.x && euler.y === this.y && euler.z === this.z && euler.order === this.order;
    }

    fromArray(array: Array<any>) {
        this._x = array[0];
        this._y = array[1];
        this._z = array[2];
        if (array[3] !== undefined) this._order = array[3];

        this._onChangeCallback(this);

        return this;
    }

    toArray(array: Array<number | string> = [], offset = 0) {
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        array[offset + 3] = this.order;

        return array;
    }

    public onChange(callback: (q: Euler) => void) {
        this._onChangeCallback = callback;
    }

    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
        yield this.order;
    }
}

export { Euler };
