import { Cache } from "./Cache";
import { Loader } from "./Loader";
import { LoadingManager } from "./LoadingManager";

class ImageBitmapLoader extends Loader {
    public isImageBitmapLoader: boolean = true;
    public options: any = { premultiplyAlpha: "none" };
    constructor(manager: LoadingManager) {
        super(manager);
        if (typeof createImageBitmap === "undefined") {
            console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
        }

        if (typeof fetch === "undefined") {
            console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
        }
    }

    setOptions(options: any) {
        this.options = options;

        return this;
    }

    load(url: string, onLoad: Function, onProgress: Function, onError: Function) {
        if (url === undefined) url = "";

        if (this.path !== undefined) url = this.path + url;

        url = this.manager.resolveURL(url);

        const scope = this;

        const cached = Cache.get(url);

        if (cached !== undefined) {
            scope.manager.itemStart(url);

            setTimeout(function () {
                if (onLoad) onLoad(cached);

                scope.manager.itemEnd(url);
            }, 0);

            return cached;
        }
        let fetchOptions: any = {};
        fetchOptions.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include";
        fetchOptions.headers = this.requestHeader;

        fetch(url, fetchOptions)
            .then(function (res) {
                return res.blob();
            })
            .then(function (blob) {
                return createImageBitmap(blob, Object.assign(scope.options, { colorSpaceConversion: "none" }));
            })
            .then(function (imageBitmap) {
                Cache.add(url, imageBitmap);

                if (onLoad) onLoad(imageBitmap);

                scope.manager.itemEnd(url);
            })
            .catch(function (e) {
                if (onError) onError(e);

                scope.manager.itemError(url);
                scope.manager.itemEnd(url);
            });

        scope.manager.itemStart(url);
    }
}

export { ImageBitmapLoader };
