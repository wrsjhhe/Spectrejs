import { DepthTexture } from "../textures/DepthTexture";
import { RenderPass } from "./RenderPass";

export class DepthTarget extends RenderPass {
    public depthTexture: DepthTexture;

    constructor(width: number, height: number) {
        super({ width, height });

        this._flipY = true;

        this.depthTexture = new DepthTexture({ width, height });
    }

    public override setSize(width: number, height: number) {
        const res = super.setSize(width, height);
        if (res) {
            super._setupDepthBuffer();
        }
        return res;
    }

    public getDescriptor() {
        const descriptor = {
            depthStencilAttachment: {
                depthClearValue: 1.0,
                depthLoadOp: "clear",
                depthStoreOp: "store",
            } as GPURenderPassDepthStencilAttachment,
        };

        descriptor.depthStencilAttachment.view = this.depthTexture.bind.gpuTexutureView;

        return descriptor;
    }
}
