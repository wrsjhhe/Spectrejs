import { DefaultLoadingManager, LoadingManager } from "./LoadingManager";

export abstract class Loader {
    public manager: LoadingManager;
    public crossOrigin = "anonymous";
    public withCredentials = false;
    public path = "";
    public resourcePath = "";
    public requestHeader = {};

    constructor(manager: LoadingManager = undefined) {
        this.manager = manager !== undefined ? manager : DefaultLoadingManager;
    }

    abstract load(url: string, onLoad: Function, onProgress: Function, onError: Function): void;

    loadAsync(url: string, onProgress: Function) {
        const scope = this;

        return new Promise(function (resolve, reject) {
            scope.load(url, resolve, onProgress, reject);
        });
    }

    parse(/* data */) {}

    setCrossOrigin(crossOrigin: string) {
        this.crossOrigin = crossOrigin;
        return this;
    }

    setWithCredentials(value: boolean) {
        this.withCredentials = value;
        return this;
    }

    setPath(path: string) {
        this.path = path;
        return this;
    }

    setResourcePath(resourcePath: string) {
        this.resourcePath = resourcePath;
        return this;
    }

    setRequestHeader(requestHeader: any) {
        this.requestHeader = requestHeader;
        return this;
    }
}
