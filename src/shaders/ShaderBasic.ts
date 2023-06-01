import { ShaderItem } from "../materials/Material";

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
} ;

export function location_uv_vert(item:ShaderItem){
    if(item)
        return `@location(${item.index}) uv : vec2<f32>,`;
    return "";
} 

export function out_uv_vert(item:ShaderItem){
    if(item)
        return `@location(${item.index}) uv : vec2<f32>,`;
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

export function in_uv_frag(item:ShaderItem){
    if(item)
        return `@location(${item.index}) uv : vec2<f32>,`;
    return "";
} 

export function bind_color_frag (item:ShaderItem){
    if(item)
        return `@group(1) @binding(${item.index}) var<uniform> color : vec3<f32>;`;
    return "";
}

export function bind_colorSampler_frag (item:ShaderItem){
    if(item)
        return `@group(1) @binding(${item.index}) var colorSampler: sampler;`;
    return "";
}

export function bind_texture_frag (item:ShaderItem){
    if(item)
        return `@group(1) @binding(${item.index}) var texture: texture_2d<f32>;`;
    return "";
}

export function textureSampler_frag (item:ShaderItem){
    if(item)
        return `return textureSample(texture, colorSampler, uv);`;
    return "";
}

export function color_frag (item:ShaderItem){
    if(!item)
        return `return vec4(color,1.0);`;
    return "";
} 