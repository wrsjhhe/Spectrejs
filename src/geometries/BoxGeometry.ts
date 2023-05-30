import { GPUVertexFormat } from "../Constants";
import { BufferAttribute } from "../core/BufferAttribute";
import { BufferGeometry } from "../core/BufferGeometry";
import { Vector3 } from "../math/Vector3";


export class BoxGeometry extends BufferGeometry {

    public width: number;
    public height: number;
    public depth: number;
    public widthSegments: number;
    public heightSegments: number;
    public depthSegments: number;

	constructor( width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1 ) {

		super();

        this.width = width;
        this.height = height;
        this.depth = depth;
        this.widthSegments = widthSegments;
        this.heightSegments = heightSegments;
        this.depthSegments = depthSegments;

		// segments

		widthSegments = Math.floor( widthSegments );
		heightSegments = Math.floor( heightSegments );
		depthSegments = Math.floor( depthSegments );

		// buffers

		const indices:Array<number> = [];
		const vertices:Array<number>  = [];
		const normals:Array<number>  = [];
		const uvs:Array<number>  = [];

		// helper variables

		let numberOfVertices = 0;
		let groupStart = 0;

		const buildPlane = ( u:string, v:string, w:string, 
            udir:number, vdir:number, 
            width:number, height:number, depth:number, 
            gridX:number, gridY:number, materialIndex:number ) => {

			const segmentWidth = width / gridX;
			const segmentHeight = height / gridY;

			const widthHalf = width / 2;
			const heightHalf = height / 2;
			const depthHalf = depth / 2;

			const gridX1 = gridX + 1;
			const gridY1 = gridY + 1;

			let vertexCounter = 0;
			let groupCount = 0;

			const vector = new Vector3();

			// generate vertices, normals and uvs

			for ( let iy = 0; iy < gridY1; iy ++ ) {

				const y = iy * segmentHeight - heightHalf;

				for ( let ix = 0; ix < gridX1; ix ++ ) {
                    const obj = vector as any;
					const x = ix * segmentWidth - widthHalf;

					// set values to correct vector component

                    obj[ u ] = x * udir;
					obj[ v ] = y * vdir;
					obj[ w ] = depthHalf;

					// now apply vector to vertex buffer

					vertices.push( vector.x, vector.y, vector.z );

					// set values to correct vector component

                    obj[ u ] = 0;
					obj[ v ] = 0;
					obj[ w ] = depth > 0 ? 1 : - 1;

					// now apply vector to normal buffer

					normals.push( vector.x, vector.y, vector.z );

					// uvs

					uvs.push( ix / gridX );
					uvs.push( 1 - ( iy / gridY ) );

					// counters

					vertexCounter += 1;

				}

			}

			// indices

			// 1. you need three indices to draw a single face
			// 2. a single segment consists of two faces
			// 3. so we need to generate six (2*3) indices per segment

			for ( let iy = 0; iy < gridY; iy ++ ) {

				for ( let ix = 0; ix < gridX; ix ++ ) {

					const a = numberOfVertices + ix + gridX1 * iy;
					const b = numberOfVertices + ix + gridX1 * ( iy + 1 );
					const c = numberOfVertices + ( ix + 1 ) + gridX1 * ( iy + 1 );
					const d = numberOfVertices + ( ix + 1 ) + gridX1 * iy;

					// faces

					indices.push( a, b, d );
					indices.push( b, c, d );

					// increase counter

					groupCount += 6;

				}

			}

			// add a group to the geometry. this will ensure multi material support

			//this.addGroup( groupStart, groupCount, materialIndex );

			// calculate new start value for groups

			groupStart += groupCount;

			// update total number of vertices

			numberOfVertices += vertexCounter;

		}
		// build each side of the box geometry

		buildPlane( 'z', 'y', 'x', - 1, - 1, depth, height, width, depthSegments, heightSegments, 0 ); // px
		buildPlane( 'z', 'y', 'x', 1, - 1, depth, height, - width, depthSegments, heightSegments, 1 ); // nx
		buildPlane( 'x', 'z', 'y', 1, 1, width, depth, height, widthSegments, depthSegments, 2 ); // py
		buildPlane( 'x', 'z', 'y', 1, - 1, width, depth, - height, widthSegments, depthSegments, 3 ); // ny
		buildPlane( 'x', 'y', 'z', 1, - 1, width, height, depth, widthSegments, heightSegments, 4 ); // pz
		buildPlane( 'x', 'y', 'z', - 1, - 1, width, height, - depth, widthSegments, heightSegments, 5 ); // nz

        // build geometry
        const indicesAttr = new BufferAttribute(new Uint32Array(indices),GPUVertexFormat.Uint32,1);
        this.setIndex( indicesAttr );
        this.setAttribute( 'position', new BufferAttribute( new Float32Array(vertices),GPUVertexFormat.Float32x3, 3 ) );
        this.setAttribute( 'normal', new BufferAttribute( new Float32Array(normals),GPUVertexFormat.Float32x3, 3 ) );
        this.setAttribute( 'uv', new BufferAttribute( new Float32Array(uvs),GPUVertexFormat.Float32x2, 2 ) );
        
	}
}
