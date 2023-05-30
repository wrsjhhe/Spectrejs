@group(0) @binding(0) var<uniform> projectionMatrix : mat4x4<f32>;
@group(0) @binding(1) var<uniform> viewMatrix : mat4x4<f32>;
@group(0) @binding(2) var<uniform> modelMatrix : mat4x4<f32>;

struct VertexOutput {
  @builtin(position) Position : vec4<f32>,
  @location(0) fragUV : vec2<f32>
}

@vertex
fn main(
  @location(0) position : vec3<f32>,
  @location(1) normal : vec3<f32>,
  @location(2) uv : vec2<f32>
) -> VertexOutput {
    var output : VertexOutput;
    output.Position = projectionMatrix * viewMatrix * modelMatrix * vec4<f32>(position, 1.0);
    output.fragUV = uv;
    return output;
}
