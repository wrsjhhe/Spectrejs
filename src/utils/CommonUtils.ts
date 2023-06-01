const _cache: any = {};
export class CommonUtils {
    public static warnOnce(message: string) {
        if (message in _cache) return;

        _cache[message] = true;

        console.warn(message);
    }

    public static isDefined(o:any){
        return o !== undefined && o !== null;
    }
}
