import { Box3 } from "../math/Box3";
import { MathUtils } from "../math/MathUtils";
import { Sphere } from "../math/Sphere";
import { Vector3 } from "../math/Vector3";
import { BufferAttribute } from "./BufferAttribute";
import { AttributeShaderItem } from "./Defines";
import { GPUBufferWrapper } from "./GPUBufferWrapper";

const _box = /*@__PURE__*/ new Box3();
const _vector = /*@__PURE__*/ new Vector3();

export class BufferGeometry {
    private _attributes: Map<string, BufferAttribute> = new Map();
    private _indices: BufferAttribute = null;
    private _drawBuffer: GPUBufferWrapper = null;
    private _boundingBox: Box3;
    private _boundingSphere: Sphere;
    public readonly uuid = MathUtils.generateUUID();

    constructor() {}

    public update() {
        this.updateDrawBuffer();
        for (const attribute of this._attributes.values()) {
            attribute.update();
        }

        this._indices && this._indices.update();
    }

    public createVetexBufferLayouts() {
        const bufferLayouts: Array<GPUVertexBufferLayout> = [];
        let index = 0;
        for (const attr of this.attributes.values()) {
            const buffer = {
                // 顶点长度，以字节为单位
                arrayStride: attr.byteLength * attr.itemSize,
                attributes: [
                    {
                        // 变量索引
                        shaderLocation: index,
                        // 偏移
                        offset: 0,
                        // 参数格式
                        format: attr.format as GPUVertexFormat,
                    },
                ],
            };
            ++index;
            bufferLayouts.push(buffer);
        }
        return bufferLayouts;
    }

    public setVertexBuffer(passEncoder: GPURenderPassEncoder, locationValues: Map<string, AttributeShaderItem>) {
        for (const value of locationValues.values()) {
            const attr = this._attributes.get(value.name);
            if (attr) passEncoder.setVertexBuffer(value.index, attr.buffer.buffer);
        }
    }

    public setIndex(attribute: BufferAttribute): BufferGeometry {
        if (attribute.count !== this._indices?.count && this._drawBuffer) {
            this._drawBuffer.destroy();
            this._drawBuffer = null;
        }

        this._indices = attribute;
        attribute.Usage = GPUBufferUsage.INDEX;
        return this;
    }

    public setAttribute(name: string, attribute: BufferAttribute): BufferGeometry {
        this._attributes.set(name, attribute);
        return this;
    }

    public getAttribute(name: string): BufferAttribute {
        return this._attributes.get(name);
    }

    public updateDrawBuffer() {
        if (!this._drawBuffer) {
            const k = this.indices ? 5 : 4;
            const parameters = new Uint32Array(k);
            if (this.indices) {
                parameters[0] = this.indices.count; // The indexCount value
                parameters[1] = 1; // The instanceCount value
                parameters[2] = 0; // The firstIndex value
                parameters[3] = 0; // The baseVertex value
                parameters[4] = 0; // The firstInstance value
            } else {
                parameters[0] = this.getAttribute("position").count; // The vertexCount value
                parameters[1] = 1; // The instanceCount value
                parameters[2] = 0; // The firstVertex value
                parameters[3] = 0; // The firstInstance value
            }
            this._drawBuffer = new GPUBufferWrapper(GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT, parameters);
        }
    }

    public computeBoundingSphere() {
        if (this.boundingSphere === null) {
            this._boundingSphere = new Sphere();
        }

        const position = this.attributes.get("position");

        if (position) {
            console.error(
                'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
                this
            );

            this.boundingSphere.set(new Vector3(), Infinity);

            return;
        }

        if (position) {
            // first, find the center of the bounding sphere

            const center = this.boundingSphere.center;

            _box.setFromBufferAttribute(position);

            _box.getCenter(center);

            // second, try to find a boundingSphere with a radius smaller than the
            // boundingSphere of the boundingBox: sqrt(3) smaller in the best case

            let maxRadiusSq = 0;

            for (let i = 0, il = position.count; i < il; i++) {
                _vector.fromBufferAttribute(position, i);

                maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector));
            }

            this.boundingSphere.radius = Math.sqrt(maxRadiusSq);

            if (isNaN(this.boundingSphere.radius)) {
                console.error(
                    'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                    this
                );
            }
        }
    }

    public computeBoundingBox() {
        if (this._boundingBox === null) {
            this._boundingBox = new Box3();
        }

        const position = this.attributes.get("position");

        if (position) {
            console.error(
                'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
                this
            );

            this._boundingBox.set(
                new Vector3(-Infinity, -Infinity, -Infinity),
                new Vector3(+Infinity, +Infinity, +Infinity)
            );

            return;
        }

        if (position !== undefined) {
            this._boundingBox.setFromBufferAttribute(position);
        } else {
            this._boundingBox.makeEmpty();
        }

        if (isNaN(this._boundingBox.min.x) || isNaN(this._boundingBox.min.y) || isNaN(this._boundingBox.min.z)) {
            console.error(
                'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
                this
            );
        }
    }

    public get attributes() {
        return this._attributes;
    }

    public get indices(): BufferAttribute {
        return this._indices;
    }

    get drawBuffer(): GPUBufferWrapper {
        return this._drawBuffer;
    }

    get boundingBox() {
        if (this._boundingBox) {
            this.computeBoundingBox();
        }
        return this._boundingBox;
    }

    get boundingSphere() {
        if (this._boundingSphere) {
            this.computeBoundingSphere();
        }
        return this._boundingSphere;
    }
}
