import { WebGPURenderer } from "./renderers/WebGPURenderer";
import { BufferAttribute } from "./core/BufferAttribute";
import { BufferGeometry } from "./core/BufferGeometry";
import * as GPUConstances from "./Constants";
import { Material } from "./materials/Material";
import { Mesh } from "./objects/Mesh";
import { Scene } from "./core/Scene";
import { Color } from "./math/Color";
import { PerspectiveCamera } from "./cameras/PerspectiveCamera";
import { BoxGeometry } from "./cameras/geometries/BoxGeometry";
import { Vector3 } from "./math/Vector3";

class Example_Triangle {
    private container: HTMLDivElement;
    private renderer: WebGPURenderer;
    private scene: Scene;
    private mesh: Mesh;
    private camera: PerspectiveCamera;
    async init() {
        this.container = document.getElementById("container") as HTMLDivElement;
        this.renderer = new WebGPURenderer({
            powerPreference: "high-performance",
            antialias: true,
        });
        await this.renderer.init();
        this.container.appendChild(this.renderer.domElement);

        this.scene = new Scene();

        // const vertex = new Float32Array([-0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0]);
        // const indices = new Uint32Array([0, 1, 2, 0, 2, 3]);

        // const geometry = new BufferGeometry();
        // geometry.setAttribute("position", new BufferAttribute(vertex, GPUConstances.GPUVertexFormat.Float32x3,3));
        // geometry.setIndex(new BufferAttribute(indices, GPUConstances.GPUVertexFormat.Uint32,1));
        const geometry = new BoxGeometry(200,200,200);
        
        const material = new Material();
        material.color = new Color(1, 0, 0);
        this.mesh = new Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = -1000;
        this.camera.position.y = -200;
        this.camera.position.x = -2;
        this.camera.lookAt(new Vector3(0,0,0));
    }

    frame() {
        this.renderer.render(this.scene, this.camera);
        this.render();
        this.mesh.rotateZ(0.01);
        this.mesh.matrixWorldNeedsUpdate = true;
        this.mesh.updateMatrixWorld();
    }

    render() {
        requestAnimationFrame(() => {
            this.frame();
        });
    }

    resize() {
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
}

const sample = new Example_Triangle();
sample.init().then(() => {
    sample.render();
});
window.addEventListener("resize", function () {
    sample.resize();
});
const window1 = window as any;
window1.sample = sample;
