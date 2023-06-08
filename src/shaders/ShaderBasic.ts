import { BindShaderItem, BindType, ShaderItem } from "../core/Defines";

export interface IndexObj {
    index: number;
}

export function location_vert(item: ShaderItem) {
    if (item)
        return `@location(${item.index}) ${item.name} : ${item.shaderItemType},`;
    return "";
}

export function itemVary_value(item: ShaderItem, index: IndexObj) {
    if (item) {
        return `@location(${index.index++}) ${item.name} : ${
            item.shaderItemType
        },`;
    }

    return "";
}

export function customVary_value(
    name: string,
    itemType: string,
    indexObj: IndexObj
) {
    return `@location(${indexObj.index++}) ${name} : ${itemType},`;
}

export function transform_vert() {
    return `
            var mvPosition = matrixWorldInverse * modelMatrix * vec4<f32>(position, 1.0);
            output.Position = projectionMatrix * mvPosition;
            `;
}

export function uv_vert(item: ShaderItem) {
    if (item) return `output.uv = uv;`;
    return "";
}

export function bind_value(groupIndex: number, item: BindShaderItem) {
    if (item)
        return `@group(${groupIndex}) @binding(${item.index}) var${
            item.bindType === BindType.buffer ? "<uniform>" : ""
        } ${item.name} : ${item.shaderItemType};`;
    return "";
}

export function getColor_frag(
    textureItem: ShaderItem,
    samplerItem: ShaderItem,
    colorItem: ShaderItem
) {
    if (textureItem)
        return `baseColor = textureSample(${textureItem.name}, ${samplerItem.name}, uv);`;
    else {
        if (colorItem.shaderItemType === "vec3<f32>")
            return `baseColor = vec4(${colorItem.name},1.0);`;
        else return `baseColor = ${colorItem.name};`;
    }
}
