@group(1) @binding(0) var<uniform> color : vec3<f32>;

@fragment
fn main() -> @location(0) vec4<f32> {
  return vec4(color,1.0);
}
