import { Object3D } from "../core/Object3D";

const _cache: any = {};
export class CommonUtils {
    public static warnOnce(message: string) {
        if (message in _cache) return;

        _cache[message] = true;

        console.warn(message);
    }
}
