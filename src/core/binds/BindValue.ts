import { BindType } from "../Defines";

export abstract class BindValue {
    private _name: string;

    protected _needsUpdate = true;

    constructor() {}

    public abstract get type(): BindType;

    public destroy() {}

    public update() {}

    public get name() {
        return this._name;
    }
}
