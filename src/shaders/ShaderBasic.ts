import { ShaderItem } from "../core/Environment";

export interface IndexObj {
    index:number
}

export function location_transform_vert(){
    return `
            @group(0) @binding(0) var<uniform> projectionMatrix : mat4x4<f32>;
            @group(0) @binding(1) var<uniform> viewMatrix : mat4x4<f32>;
                
            @group(2) @binding(0) var<uniform> modelMatrix : mat4x4<f32>;
            `;
}

export function location_normal_vert(item:ShaderItem){
    if(item)
        return `@location(${item.index}) normal : vec3<f32>,`
    return "";
} 

export function location_uv_vert(item:ShaderItem){
    if(item)
        return `@location(${item.index}) uv : vec2<f32>,`;
    return "";
} 

export function varyValue(item:ShaderItem | string,index:IndexObj){
    if(item){
        if(typeof item === "string"){
            return `@location(${index.index++}) ${item} : vec2<f32>,`;
        }else{
            return `@location(${index.index++}) ${item.name} : vec2<f32>,`;
        }
    }
        
    return "";
}

export function transform_vert(){
    return `
            var mvPosition = viewMatrix * modelMatrix * vec4<f32>(position, 1.0);
            output.Position = projectionMatrix * mvPosition;
            `;
}

export function uv_vert(item:ShaderItem){
    if(item)
        return `output.uv = uv;`;
    return "";
}

export function bind_buffer_frag (item:ShaderItem){
    if(item)
        return `@group(1) @binding(${item.index}) var<uniform> ${item.name} : ${item.itemType};`;
    return "";
}

export function bind_texture_frag (item:ShaderItem){
    if(item)
        return `@group(1) @binding(${item.index}) var ${item.name} : ${item.itemType};`;
    return "";
}

export function bind_sampler_frag (item:ShaderItem){
    if(item)
        return `@group(1) @binding(${item.index}) var ${item.name} : ${item.itemType};`;
    return "";
}

export function getColo_frag(textureItem:ShaderItem,colorItem:ShaderItem){
    if(textureItem)
        return `return textureSample(texture, colorSampler, uv);`;
    else{
        if(colorItem.itemType === "vec3<f32>")
            return `return vec4(color,1.0);`;
        else
            return `return color;`;
    }
}