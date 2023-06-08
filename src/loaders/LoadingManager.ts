export class LoadingManager {
    private isLoading = false;
    private itemsLoaded = 0;
    private itemsTotal = 0;
    private urlModifier: Function = undefined;
    private handlers: Array<RegExp> = [];

    public onStart: Function;
    public onLoad: Function;
    public onProgress: Function;
    public onError: Function;

    constructor(
        onLoad: Function = undefined,
        onProgress: Function = undefined,
        onError: Function = undefined
    ) {
        // Refer to #5689 for the reason why we don't set .onStart
        // in the constructor

        this.onStart = undefined;
        this.onLoad = onLoad;
        this.onProgress = onProgress;
        this.onError = onError;
    }

    itemStart(url: string) {
        this.itemsTotal++;

        if (this.isLoading === false) {
            if (this.onStart !== undefined) {
                this.onStart(url, this.itemsLoaded, this.itemsTotal);
            }
        }

        this.isLoading = true;
    }

    itemEnd(url: string) {
        this.itemsLoaded++;

        if (this.onProgress !== undefined) {
            this.onProgress(url, this.itemsLoaded, this.itemsTotal);
        }

        if (this.itemsLoaded === this.itemsTotal) {
            this.isLoading = false;

            if (this.onLoad !== undefined) {
                this.onLoad();
            }
        }
    }

    itemError(url: string) {
        if (this.onError !== undefined) {
            this.onError(url);
        }
    }

    resolveURL(url: string) {
        if (this.urlModifier) {
            return this.urlModifier(url);
        }

        return url;
    }

    setURLModifier(transform: Function) {
        this.urlModifier = transform;

        return this;
    }

    addHandler(regex: RegExp, loader: any) {
        this.handlers.push(regex, loader);

        return this;
    }

    removeHandler(regex: RegExp) {
        const index = this.handlers.indexOf(regex);

        if (index !== -1) {
            this.handlers.splice(index, 2);
        }

        return this;
    }

    getHandler(file: string) {
        for (let i = 0, l = this.handlers.length; i < l; i += 2) {
            const regex = this.handlers[i];
            const loader = this.handlers[i + 1];

            if (regex.global) regex.lastIndex = 0; // see #17920

            if (regex.test(file)) {
                return loader;
            }
        }

        return null;
    }
}

export const DefaultLoadingManager = /*@__PURE__*/ new LoadingManager();
