import { ImageLoader } from "./ImageLoader";
import { Loader } from "./Loader";
import { LoadingManager } from "./LoadingManager";
import { ImageTexture } from "../textures/ImageTexture";

class ImageTextureLoader extends Loader {
    public image: HTMLImageElement;

    constructor(manager: LoadingManager = undefined) {
        super(manager);
    }

    load(url: string, onLoad: Function, onProgress: Function, onError: Function) {
        const loader = new ImageLoader(this.manager);
        loader.setCrossOrigin(this.crossOrigin);
        loader.setPath(this.path);

        loader.load(
            url,
            function (image: HTMLImageElement) {
                const texture = new ImageTexture(image);

                texture.needsUpdate = true;

                if (onLoad !== undefined) {
                    onLoad(texture);
                }
            },
            onProgress,
            onError
        );
    }
}

export { ImageTextureLoader as TextureLoader };
