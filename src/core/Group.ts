import { Object3D } from "./Object3D";

class Group extends Object3D {
    public get type() {
        return "Group";
    }

    public static Is(object: Object3D) {
        return object instanceof Group;
    }

    constructor() {
        super();
    }
}

export { Group };
