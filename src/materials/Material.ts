import { BindValue } from "../core/binds/BindValue";
import { Color } from "../math/Color";
import { Texture } from "../textures/Texture";
import { GPUBufferBindingType, GPUSamplerBindingType, GPUVertexFormat } from "../Constants";
import { BindBuffer } from "../core/binds/BindBuffer";
import { BindSampler } from "../core/binds/BindSampler";
import { BindTexture } from "../core/binds/BindTexture";
import { MathUtils } from "../math/MathUtils";
import { Pipleline } from "../core/Pipeline";
import { AttributeShaderItem, BindShaderItem, BindType, ShaderItem } from "../core/Defines";
import { Shader } from "../shaders/Shader";
import { Light } from "../lights/Light";

export abstract class Material {
    private _color: Color;
    private _map: Texture = null;
    private _parameters = new Uint32Array(4);
    private _pipeline: Pipleline;
    private _transparent = false;
    private _opacity = 1;

    protected _uniforms: Map<string, BindValue> = new Map();
    protected _shader: Shader;
    protected _shaderOptions = {
        attributeValues: new Map<string, AttributeShaderItem>(),
        bindValues: new Map<string, BindShaderItem>(),
    };

    public readonly uuid = MathUtils.generateUUID();

    constructor() {

        this._pipeline = new Pipleline(this);

        this._setAttributeValue("position", "vec3<f32>", GPUVertexFormat.Float32x3, 4 * 3);

        this._uniforms.set("parameters", new BindBuffer("parameters", this._parameters));
        this._setBindValue("parameters", "vec4<u32>", BindType.buffer, GPUShaderStage.FRAGMENT);

        this.color = new Color(1.0, 1.0, 1.0);
    }

    public updateUniforms() {
        for (const uniform of this.uniforms.values()) {
            uniform.update();
            if (uniform.type === BindType.texture) {
                const textureUniform = uniform as BindTexture;
                if (textureUniform.changed && !this.pipeline.needsCreateMatBindGroup) {
                    this.pipeline.needsCreateMatBindGroup = true;
                    textureUniform.changed = false;
                }
            }
        }
    }

    public getBindLayout() {
        const entriesLayout: Array<GPUBindGroupLayoutEntry> = [];
        for (const bindOption of this._shaderOptions.bindValues.values()) {
            if (bindOption.bindType === BindType.buffer) {
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    buffer: {
                        type: GPUBufferBindingType.Uniform
                    },
                });
            } else if (bindOption.bindType === BindType.sampler) {
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    sampler: {
                        type: GPUSamplerBindingType.Filtering,
                    },
                });
            } else if (bindOption.bindType === BindType.texture) {
                entriesLayout.push({
                    binding: bindOption.index,
                    visibility: bindOption.visibility,
                    texture: {},
                });
            }
        }

        return entriesLayout;
    }

    public getBindGroup() {
        const entriesGroup = new Array<GPUBindGroupEntry>();

        for (const bindOption of this._shaderOptions.bindValues.values()) {
            if (bindOption.bindType === BindType.buffer) {
                const bufferUnform = this.uniforms.get(bindOption.name) as BindBuffer;
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: {
                        buffer: bufferUnform.buffer,
                    },
                });
            } else if (bindOption.bindType === BindType.sampler) {
                const samplerUnform = this.uniforms.get(bindOption.name) as BindSampler;
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: samplerUnform.sampler,
                });
            } else if (bindOption.bindType === BindType.texture) {
                const textureUnform = this.uniforms.get(bindOption.name) as BindTexture;
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: textureUnform.texutureView,
                });
            }
        }

        return entriesGroup;
    }

    protected _setAttributeValue(name: string, itemType: string, format: GPUVertexFormat, itemSize: number) {
        const map = this.shaderOptions.attributeValues;
        map.set(name, {
            name: name,
            index: this._shaderOptions.bindValues.size,
            format: format,
            shaderItemType: itemType,
            itemSize: itemSize,
        });
        let index = 0;
        for (const value of map.values()) {
            value.index = index++;
        }
    }

    protected _setBindValue(name: string, itemType: string, bindType: BindType, visibility: GPUShaderStageFlags) {
        const map = this.shaderOptions.bindValues;
        map.set(name, {
            name: name,
            index: this._shaderOptions.bindValues.size,
            bindType: bindType,
            shaderItemType: itemType,
            visibility: visibility,
        });
        let index = 0;
        for (const value of map.values()) {
            value.index = index++;
        }
    }

    protected _deleteValue(map: Map<string, ShaderItem>, name: string) {
        map.delete(name);
        let index = 0;
        for (const value of map.values()) {
            value.index = index++;
        }
    }

    public get applyLight() {
        return false;
    }

    public set color(v: Color) {
        this._color = v;

        let colorBuffer;
        let itemType;
        if (this._transparent) {
            colorBuffer = new Float32Array(4);
            itemType = "vec4<f32>";
            colorBuffer.set(this._color.toArray());
            colorBuffer[3] = this._opacity;
        } else {
            colorBuffer = this._color.toArray();
            itemType = "vec3<f32>";
        }

        const colorUniform = this._uniforms.get("color") as BindBuffer;
        if (!colorUniform) {
            this._setBindValue("color", itemType, BindType.buffer, GPUShaderStage.FRAGMENT);

            this._uniforms.set("color", new BindBuffer("color", colorBuffer));
        } else if (colorBuffer.length * colorBuffer.BYTES_PER_ELEMENT !== colorUniform.buffer.size) {
            this._shaderOptions.bindValues.get("color").shaderItemType = itemType;

            this._uniforms.set("color", new BindBuffer("color", colorBuffer));
        } else {
            colorUniform.data = colorBuffer;
        }
    }

    public get color() {
        return this._color;
    }

    public set map(v: Texture | null) {
        if (v === this._map) return;

        if (v === null && this._map !== null) {
            this._uniforms.get("colorSampler").destroy();
            this._uniforms.get("texture").destroy();
            this._uniforms.delete("colorSampler");
            this._uniforms.delete("texture");

            this._deleteValue(this._shaderOptions.attributeValues, "uv");
            this._deleteValue(this._shaderOptions.bindValues, "colorSampler");
            this._deleteValue(this._shaderOptions.bindValues, "texture");

            this.pipeline.needsCompile = true;
        } else if (v !== null && this._map === null) {
            this._setAttributeValue("uv", "vec2<f32>", GPUVertexFormat.Float32x2, 4 * 2);

            this._setBindValue("colorSampler", "sampler", BindType.sampler, GPUShaderStage.FRAGMENT);
            this._uniforms.set("colorSampler", new BindSampler("colorSampler"));

            this._setBindValue("texture", "texture_2d<f32>", BindType.texture, GPUShaderStage.FRAGMENT);
            this._uniforms.set("texture", new BindTexture("texture", v));

            this.pipeline.needsCompile = true;

            (this._uniforms.get("texture") as BindTexture).texture = v;
        }

        this.pipeline.needsCreateMatBindGroup = true;
        this._map = v;
    }

    public get map() {
        return this._map;
    }

    public set transparent(v: boolean) {
        if (this._transparent === v) return;

        this.pipeline.needsCompile = true;
        this.pipeline.needsCreateMatBindGroup = true;
        this._transparent = v;
        this.color = this._color;
    }

    public get transparent() {
        return this._transparent;
    }

    public set opacity(v: number) {
        this._opacity = v;
        this.color = this._color;
    }

    public get opacity() {
        return this._opacity;
    }

    public get uniforms() {
        return this._uniforms;
    }

    public get shaderOptions() {
        return this._shaderOptions;
    }

    public get shader() {
        return this._shader;
    }

    public get pipeline() {
        return this._pipeline;
    }
}
