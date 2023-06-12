import { BindShaderItem, BindType, ShaderItem } from "../core/Defines";

export interface IndexObj {
    index: number;
}

export function location_vert(item: ShaderItem) {
    if (item) return `@location(${item.index}) ${item.name} : ${item.shaderItemType},`;
    return "";
}

export function itemVary_value(item: ShaderItem, index: IndexObj) {
    if (item) {
        return `@location(${index.index++}) ${item.name} : ${item.shaderItemType},`;
    }

    return "";
}

export function customVary_value(name: string, itemType: string, indexObj: IndexObj) {
    return `@location(${indexObj.index++}) ${name} : ${itemType},`;
}

export function transform_vert(flipY: boolean) {
    return `
            var mvPosition = matrixWorldInverse * modelMatrix * vec4<f32>(position, 1.0);
            output.Position = projectionMatrix * mvPosition;
            ${flipY ? "output.Position.y = output.Position.y * -1.f;" : ""}
            `;
}

export function uv_vert(item: ShaderItem, flipY: boolean) {
    if (item)
        return `
    output.uv = uv;
    ${flipY ? "output.uv.y = output.uv.y * -1.f;" : ""}
    `;
    return "";
}

export function bind_value(groupIndex: number, item: BindShaderItem) {
    if (item)
        return `@group(${groupIndex}) @binding(${item.index}) var${
            item.bindType === BindType.buffer ? "<uniform>" : ""
        } ${item.name} : ${item.shaderItemType};`;
    return "";
}

export function getColor_frag(textureItem: ShaderItem, samplerItem: ShaderItem, colorItem: ShaderItem) {
    if (textureItem) {
        return `baseColor = textureSample(${textureItem.name}, ${samplerItem.name}, uv);`;
    } else {
        if (colorItem.shaderItemType === "vec3<f32>") return `baseColor = vec4(${colorItem.name},1.0);`;
        else return `baseColor = ${colorItem.name};`;
    }
}

export function encoding_pars() {
    return `
            //return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );
            fn SRGBToLinear( value:vec4<f32> )->vec4<f32>  {
                return vec4<f32>( mix( pow( value.rgb * 0.9478672986 + 0.0521327014, vec3<f32>( 2.4 ) ) , value.rgb * 0.0773993808, vec3<f32>(  value.rgb <= vec3<f32>( 0.04045 ) ) ), value.a );
            }

            //return ( c < 0.0031308 ) ? c * 12.92 : 1.055 * ( Math.pow( c, 0.41666 ) ) - 0.055;
            fn LinearTosRGB( value:vec4<f32> )->vec4<f32>  {
                return vec4<f32>( mix( pow( value.rgb, vec3<f32>( 0.41666 ) ) * 1.055 - vec3<f32>( 0.055 ), value.rgb * 12.92, vec3<f32>( value.rgb <=  vec3<f32>( 0.0031308 ) ) ), value.a );
            }
            `;
}

export function input_encoding(color: string) {
    if (color) {
        return `${color} = SRGBToLinear(${color});`;
    }
}

export function end_encoding(color: string) {
    if (color) {
        return `${color} = LinearTosRGB(${color});`;
    }
}
