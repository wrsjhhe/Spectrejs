import { DepthShader } from "../shaders/DepthShader";
import { Material } from "./Material";

export class DepthMaterial extends Material {
    constructor() {
        super();

        this._shader = new DepthShader(this);
    }
}
