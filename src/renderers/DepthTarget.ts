import { DepthTexture } from "../textures/DepthTexture";
import { RenderPass } from "./RenderPass";

export class DepthTarget extends RenderPass {
    public depthTexture: DepthTexture;

    constructor(width: number, height: number) {
        super({ width, height });

        this._flipY = true;

        this.depthTexture;
    }

    public override setSize(width: number, height: number) {
        const res = super.setSize(width, height);
        if (res) {
            super._setupDepthBuffer();
        }
        return res;
    }
}
