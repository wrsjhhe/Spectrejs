import { MeshBasicShader } from "../shaders/MeshBasicShader";
import { Material } from "./Material";

export class MeshBasicMaterial extends Material {
    constructor() {
        super();

        this._shader = new MeshBasicShader(this);
    }

    clone() {
        return new MeshBasicMaterial().copy(this);
    }
}
