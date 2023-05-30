@group(0) @binding(0) var<uniform> projectionMatrix : mat4x4<f32>;
@group(0) @binding(1) var<uniform> viewMatrix : mat4x4<f32>;
@group(0) @binding(2) var<uniform> modelMatrix : mat4x4<f32>;

@vertex
fn main(
  @location(0) position : vec3<f32>,
  @location(1) normals : vec3<f32>,
  @location(2) uvs : vec3<f32>
) -> @builtin(position) vec4<f32> {
    return projectionMatrix * viewMatrix * modelMatrix * vec4<f32>(position, 1.0);
}
