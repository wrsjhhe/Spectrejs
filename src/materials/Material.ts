import { BindValue } from "../core/binds/BindValue";
import { Color } from "../math/Color";
import { Texture } from "../textures/Texture";
import { GPUVertexFormat } from "../Constants";
import { BindBuffer } from "../core/binds/BindBuffer";
import { BindSampler } from "../core/binds/BindSampler";
import { BindTexture } from "../core/binds/BindTexture";
import { MathUtils } from "../math/MathUtils";
import { Pipleline } from "../core/Pipeline";
import {
    AttributeShaderItem,
    BindShaderItem,
    BindType,
    getLayoutEntity,
    ShaderItem,
} from "../core/Defines";
import { Shader } from "../shaders/Shader";

export abstract class Material {
    private _color: Color;
    private _map: Texture = null;
    private _parameters = new Uint32Array(4);
    private _pipeline: Pipleline;
    private _transparent = false;
    private _opacity = 1;

    protected _bindMap: Map<string, BindValue> = new Map();
    protected _shader: Shader;
    protected _shaderOptions = {
        attributeValues: new Map<string, AttributeShaderItem>(),
        bindValues: new Map<string, BindShaderItem>(),
    };

    public readonly uuid = MathUtils.generateUUID();

    constructor() {
        this._pipeline = new Pipleline(this);

        this._setAttributeItem(
            "position",
            "vec3<f32>",
            GPUVertexFormat.Float32x3,
            4 * 3
        );

        this._bindMap.set("parameters", new BindBuffer(this._parameters));
        this._setBindItem(
            "parameters",
            "vec4<u32>",
            BindType.buffer,
            GPUShaderStage.FRAGMENT
        );

        this.color = new Color(1.0, 1.0, 1.0);
    }

    public updateBinds() {
        for (const uniform of this._bindMap.values()) {
            uniform.update();
        }
    }

    public getBindLayout() {
        const entriesLayout: Array<GPUBindGroupLayoutEntry> = [];
        for (const bindOption of this._shaderOptions.bindValues.values()) {
            const entity = getLayoutEntity(bindOption);
            entriesLayout.push(entity);
        }

        return entriesLayout;
    }

    public getBindGroup() {
        const entriesGroup = new Array<GPUBindGroupEntry>();

        for (const bindOption of this._shaderOptions.bindValues.values()) {
            if (bindOption.bindType === BindType.buffer) {
                const bufferUnform = this._bindMap.get(
                    bindOption.name
                ) as BindBuffer;
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: {
                        buffer: bufferUnform.buffer,
                    },
                });
            } else if (bindOption.bindType === BindType.sampler) {
                const samplerUnform = this._bindMap.get(
                    bindOption.name
                ) as BindSampler;
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: samplerUnform.sampler,
                });
            } else if (bindOption.bindType === BindType.texture) {
                const textureUnform = this._bindMap.get(
                    bindOption.name
                ) as BindTexture;
                entriesGroup.push({
                    binding: bindOption.index,
                    resource: textureUnform.texutureView,
                });
            }
        }

        return entriesGroup;
    }

    protected _setAttributeItem(
        name: string,
        itemType: string,
        format: GPUVertexFormat,
        itemSize: number
    ) {
        const values = this.shaderOptions.attributeValues;
        values.set(name, {
            name: name,
            index: this._shaderOptions.bindValues.size,
            format: format,
            shaderItemType: itemType,
            itemSize: itemSize,
        });
        let index = 0;
        for (const value of values.values()) {
            value.index = index++;
        }
    }

    protected _setBindItem(
        name: string,
        itemType: string,
        bindType: BindType,
        visibility: GPUShaderStageFlags
    ) {
        const values = this.shaderOptions.bindValues;
        values.set(name, {
            name: name,
            index: this._shaderOptions.bindValues.size,
            bindType: bindType,
            shaderItemType: itemType,
            visibility: visibility,
        });
        let index = 0;
        for (const value of values.values()) {
            value.index = index++;
        }
    }

    protected _deleteValue(values: Map<string, ShaderItem>, name: string) {
        values.delete(name);
        let index = 0;
        for (const value of values.values()) {
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

        const colorUniform = this._bindMap.get("color") as BindBuffer;
        if (!colorUniform) {
            this._setBindItem(
                "color",
                itemType,
                BindType.buffer,
                GPUShaderStage.FRAGMENT
            );

            this._bindMap.set("color", new BindBuffer(colorBuffer));
        } else if (
            colorBuffer.length * colorBuffer.BYTES_PER_ELEMENT !==
            colorUniform.buffer.size
        ) {
            this._shaderOptions.bindValues.get("color").shaderItemType =
                itemType;

            this._bindMap.set("color", new BindBuffer(colorBuffer));
        } else {
            colorUniform.data = colorBuffer;
        }
    }

    public get color() {
        return this._color;
    }

    public set map(v: Texture | null) {
        if (v === this._map) return;

        // delete current map
        if (v === null && this._map !== null) {
            this._bindMap.delete("colorSampler");
            this._bindMap.delete("colorTexture");

            this._deleteValue(this._shaderOptions.attributeValues, "uv");
            this._deleteValue(this._shaderOptions.bindValues, "colorSampler");
            this._deleteValue(this._shaderOptions.bindValues, "colorTexture");

            this.pipeline.needsCompile = true;
        } else if (v !== null && this._map === null) {
            //don't have map before
            this._setAttributeItem(
                "uv",
                "vec2<f32>",
                GPUVertexFormat.Float32x2,
                4 * 2
            );

            this._setBindItem(
                "colorSampler",
                "sampler",
                BindType.sampler,
                GPUShaderStage.FRAGMENT
            );
            this._bindMap.set("colorSampler", new BindSampler());

            this._setBindItem(
                "colorTexture",
                "texture_2d<f32>",
                BindType.texture,
                GPUShaderStage.FRAGMENT
            );
            this._bindMap.set("colorTexture", v.bind);

            this.pipeline.needsCompile = true;

            (this._bindMap.get("colorTexture") as BindTexture).texture = v;
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
