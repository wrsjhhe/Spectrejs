import { BufferGeometry } from "../core/BufferGeometry";
import { BufferAttribute } from "../core/BufferAttribute";
import { GPUIndexFormat } from "../Constants";
import { TrianglesDrawMode } from "../Constants";
import { TriangleFanDrawMode } from "../Constants";
import { TriangleStripDrawMode } from "../Constants";

export class BufferGeometryUtils {
    public static toTrianglesDrawMode(geometry: BufferGeometry, drawMode: number) {
        if (drawMode === TrianglesDrawMode) {
            console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
            return geometry;
        }

        if (drawMode === TriangleFanDrawMode || drawMode === TriangleStripDrawMode) {
            let index = geometry.indices;

            // generate index if not present

            if (index === null) {
                const indices = [];

                const position = geometry.getAttribute("position");

                if (position !== undefined) {
                    for (let i = 0; i < position.count; i++) {
                        indices.push(i);
                    }

                    const indexAttr = new BufferAttribute(new Uint32Array(indices), GPUIndexFormat.Uint32, 1);
                    geometry.setIndex(indexAttr);
                    index = geometry.indices;
                } else {
                    console.error(
                        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                    );
                    return geometry;
                }
            }

            //

            const numberOfTriangles = index.count - 2;
            const newIndices = [];

            if (drawMode === TriangleFanDrawMode) {
                // gl.TRIANGLE_FAN

                for (let i = 1; i <= numberOfTriangles; i++) {
                    newIndices.push(index.getX(0));
                    newIndices.push(index.getX(i));
                    newIndices.push(index.getX(i + 1));
                }
            } else {
                // gl.TRIANGLE_STRIP

                for (let i = 0; i < numberOfTriangles; i++) {
                    if (i % 2 === 0) {
                        newIndices.push(index.getX(i));
                        newIndices.push(index.getX(i + 1));
                        newIndices.push(index.getX(i + 2));
                    } else {
                        newIndices.push(index.getX(i + 2));
                        newIndices.push(index.getX(i + 1));
                        newIndices.push(index.getX(i));
                    }
                }
            }

            if (newIndices.length / 3 !== numberOfTriangles) {
                console.error(
                    "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
                );
            }

            // build final geometry

            const newGeometry = geometry.clone();
            const indicesAttr = new BufferAttribute(new Uint32Array(newIndices), GPUIndexFormat.Uint32, 1);
            newGeometry.setIndex(indicesAttr);
            //newGeometry.clearGroups();

            return newGeometry;
        } else {
            console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
            return geometry;
        }
    }
}
