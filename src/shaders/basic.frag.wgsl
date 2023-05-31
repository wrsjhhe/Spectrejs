@group(1) @binding(0) var<uniform> parameters : vec4<u32>;
@group(1) @binding(1) var<uniform> color : vec3<f32>;
@group(1) @binding(2) var _sampler: sampler;
@group(1) @binding(3) var texture: texture_2d<f32>;

@fragment
fn main(
  @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {
  //return vec4(color,1.0);
  return textureSample(texture, _sampler, uv);
}
