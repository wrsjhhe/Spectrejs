@group(0) @binding(0) var<uniform> transform : mat4x4<f32>;

@vertex
fn main(
  @location(0) position : vec3<f32>
) -> @builtin(position) vec4<f32> {
    var pos = transform * vec4<f32>(position, 1.0);
    return pos;
}
