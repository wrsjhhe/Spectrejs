class Cache {
    public static enabled: boolean = false;

    public static files: Map<string, any> = new Map();

    public static add(key: string, file: any) {
        if (this.enabled === false) return;

        // console.log( 'THREE.Cache', 'Adding key:', key );

        this.files.set(key, file);
    }

    public static get(key: string) {
        if (this.enabled === false) return;

        // console.log( 'THREE.Cache', 'Checking key:', key );

        return this.files.get(key);
    }

    public static remove(key: string) {
        this.files.delete(key);
    }

    public static clear() {
        this.files.clear();
    }
}

export { Cache };
