import { GPUIndexFormat, GPUVertexFormat } from "../Constants";
import { BufferAttribute } from "../core/BufferAttribute";
import { BufferGeometry } from "../core/BufferGeometry";
import { Vector3 } from "../math/Vector3";

export class SphereGeometry extends BufferGeometry {
    public radius: number;
    public widthSegments: number;
    public heightSegments: number;
    public phiStart: number;
    public phiLength: number;
    public thetaStart: number;
    public thetaLength: number;

    constructor(
        radius = 1,
        widthSegments = 32,
        heightSegments = 16,
        phiStart = 0,
        phiLength = Math.PI * 2,
        thetaStart = 0,
        thetaLength = Math.PI
    ) {
        super();

        (this.radius = radius),
            (this.widthSegments = widthSegments),
            (this.heightSegments = heightSegments),
            (this.phiStart = phiStart),
            (this.phiLength = phiLength),
            (this.thetaStart = thetaStart),
            (this.thetaLength = thetaLength);

        widthSegments = Math.max(3, Math.floor(widthSegments));
        heightSegments = Math.max(2, Math.floor(heightSegments));

        const thetaEnd = Math.min(thetaStart + thetaLength, Math.PI);

        let index = 0;
        const grid = [];

        const vertex = new Vector3();
        const normal = new Vector3();

        // buffers

        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];

        // generate vertices, normals and uvs

        for (let iy = 0; iy <= heightSegments; iy++) {
            const verticesRow = [];

            const v = iy / heightSegments;

            // special case for the poles

            let uOffset = 0;

            if (iy === 0 && thetaStart === 0) {
                uOffset = 0.5 / widthSegments;
            } else if (iy === heightSegments && thetaEnd === Math.PI) {
                uOffset = -0.5 / widthSegments;
            }

            for (let ix = 0; ix <= widthSegments; ix++) {
                const u = ix / widthSegments;

                // vertex

                vertex.x = -radius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);
                vertex.y = radius * Math.cos(thetaStart + v * thetaLength);
                vertex.z = radius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength);

                vertices.push(vertex.x, vertex.y, vertex.z);

                // normal

                normal.copy(vertex).normalize();
                normals.push(normal.x, normal.y, normal.z);

                // uv

                uvs.push(u + uOffset, 1 - v);

                verticesRow.push(index++);
            }

            grid.push(verticesRow);
        }

        // indices

        for (let iy = 0; iy < heightSegments; iy++) {
            for (let ix = 0; ix < widthSegments; ix++) {
                const a = grid[iy][ix + 1];
                const b = grid[iy][ix];
                const c = grid[iy + 1][ix];
                const d = grid[iy + 1][ix + 1];

                if (iy !== 0 || thetaStart > 0) indices.push(a, b, d);
                if (iy !== heightSegments - 1 || thetaEnd < Math.PI) indices.push(b, c, d);
            }
        }

        // build geometry
        const indicesAttr = new BufferAttribute(new Uint32Array(indices), GPUIndexFormat.Uint32, 1);
        this.setIndex(indicesAttr);
        this.setAttribute("position", new BufferAttribute(new Float32Array(vertices), GPUVertexFormat.Float32x3, 3));
        this.setAttribute("normal", new BufferAttribute(new Float32Array(normals), GPUVertexFormat.Float32x3, 3));
        this.setAttribute("uv", new BufferAttribute(new Float32Array(uvs), GPUVertexFormat.Float32x2, 2));
    }
}
