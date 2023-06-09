import * as MathUtils from "../math/MathUtils";

export class Source {
    public uuid = MathUtils.generateUUID();
    public data: any;

    public version = 0;
    constructor(data: any = null) {
        this.data = data;

        this.version = 0;
    }

    set needsUpdate(value: boolean) {
        if (value === true) this.version++;
    }
}
