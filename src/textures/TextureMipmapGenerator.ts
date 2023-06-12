import { GPUSamplerBindingType, GPUTextureFormat } from "../Constants";
import { Context } from "../core/Context";
import { Texture } from "./Texture";

export class TextureMipmapGenerator {
    private static mipmapShader = `
    var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));
      struct VertexOutput {
        @builtin(position) position : vec4<f32>;
        @location(0) texCoord : vec2<f32>;
      };
      @vertex
      fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
        var output : VertexOutput;
        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
        return output;
      }
      @binding(0) @group(0) var imgSampler : sampler;
      @binding(1) @group(0) var img : texture_2d<f32>;
      @fragment
      fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
        var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
        return outColor ;
      }`;
    private static pipelineCache: { [key: string]: GPURenderPipeline } = {};
    private static pipeline: any;

    public static getMipmapPipeline(texture: Texture) {
        const format = texture.format;
        const device = Context.activeDevice;
        let pipeline: GPURenderPipeline = TextureMipmapGenerator.pipelineCache[format];
        let mipmapShaderModule: GPUShaderModule;
        if (!pipeline) {
            mipmapShaderModule = device.createShaderModule({
                code: TextureMipmapGenerator.mipmapShader,
            });

            const textureLayout = device.createBindGroupLayout({
                entries: [
                    {
                        binding: 0,
                        //TODO : After adding a shadow reflection, it is necessary to know that the vertex is used | the segment is used
                        visibility: GPUShaderStage.FRAGMENT,
                        // use GPUSamplerBindingLayout = { type:`filtering`} error
                        sampler: {
                            type: GPUSamplerBindingType.Filtering,
                        },
                    },
                    {
                        binding: 1,
                        //TODO : After adding a shadow reflection, it is necessary to know that the vertex is used | the segment is used
                        visibility: GPUShaderStage.FRAGMENT,
                        // use GPUTextureBindingLayout = { sampleType:`float`} error
                        texture: {},
                    },
                ],
            });

            const layouts = device.createPipelineLayout({
                bindGroupLayouts: [textureLayout],
            });

            pipeline = device.createRenderPipeline({
                layout: layouts,
                vertex: {
                    module: mipmapShaderModule,
                    entryPoint: "vertexMain",
                },
                fragment: {
                    module: mipmapShaderModule,
                    entryPoint: "fragmentMain",
                    targets: [{ format: Context.textureFormat }],
                },
            });
            TextureMipmapGenerator.pipelineCache[format] = pipeline;
        }
        return pipeline;
    }

    // TextureDescriptor should be the descriptor that the texture was created with.
    // This version only works for basic 2D textures.
    public static webGPUGenerateMipmap(texture: Texture) {
        const device = Context.activeDevice;
        //const textureDescriptor = texture.textureDescriptor;

        if (!TextureMipmapGenerator.pipeline) {
            // Create a simple shader that renders a fullscreen textured quad.
            const mipmapShaderModule = device.createShaderModule({
                code: `
        var<private> pos : array<vec2<f32>, 4> = array<vec2<f32>, 4>(
          vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0),
          vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0));

        struct VertexOutput {
          @builtin(position) position : vec4<f32>,
          @location(0) texCoord : vec2<f32>
        };

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
          var output : VertexOutput;
          output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
          output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
          return output;
        }

        @binding(0) @group(0) var imgSampler : sampler;
        @binding(1) @group(0) var img : texture_2d<f32>;

        @fragment
        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
          var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
          return outColor;
        }
      `,
            });

            TextureMipmapGenerator.pipeline = device.createRenderPipeline({
                layout: `auto`,
                vertex: {
                    module: mipmapShaderModule,
                    entryPoint: "vertexMain",
                },
                fragment: {
                    module: mipmapShaderModule,
                    entryPoint: "fragmentMain",
                    targets: [
                        {
                            format: texture.format, // Make sure to use the same format as the texture
                        },
                    ],
                },
                primitive: {
                    topology: "triangle-strip",
                    stripIndexFormat: "uint32",
                },
            });
        }

        // We'll ALWAYS be rendering minified here, so that's the only filter mode we need to set.
        let sampler: GPUSampler;
        if (texture.format == GPUTextureFormat.RGBA16Float) {
            sampler = device.createSampler({
                minFilter: `nearest`,
                magFilter: `linear`,
            });
        } else {
            sampler = device.createSampler({
                minFilter: `linear`,
                magFilter: `linear`,
            });
        }

        let srcView = texture.bind.gpuTexture.createView({
            baseMipLevel: 0,
            mipLevelCount: 1,
        });

        // Loop through each mip level and renders the previous level's contents into it.
        const commandEncoder = device.createCommandEncoder();
        for (let i = 1; i < texture.mipmapSize; ++i) {
            const dstView = texture.bind.gpuTexture.createView({
                baseMipLevel: i, // Make sure we're getting the right mip level...
                mipLevelCount: 1, // And only selecting one mip level
            });

            const passEncoder = commandEncoder.beginRenderPass({
                colorAttachments: [
                    {
                        view: dstView, // Render pass uses the next mip level as it's render attachment.
                        clearValue: [0, 0, 0, 0],
                        loadOp: `clear`,
                        storeOp: "store",
                    },
                ],
            });

            // Need a separate bind group for each level to ensurev
            // we're only sampling from the previous level.
            const bindGroup = device.createBindGroup({
                layout: TextureMipmapGenerator.pipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: sampler,
                    },
                    {
                        binding: 1,
                        resource: srcView,
                    },
                ],
            });

            // Render
            passEncoder.setPipeline(TextureMipmapGenerator.pipeline);
            passEncoder.setBindGroup(0, bindGroup);
            passEncoder.draw(4);
            passEncoder.end();

            // The source texture view for the next iteration of the loop is the
            // destination view for this one.
            srcView = dstView;
        }
        device.queue.submit([commandEncoder.finish()]);
    }
}
