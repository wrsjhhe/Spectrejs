import WebGPURenderer from "./core/WebGPURenderer";
import BufferAttribute from "./core/BufferAttribute";
import BufferGeometry from "./core/BufferGeometry";
import * as GPUConstances from './Constants'
import Material from "./materials/Material";
import Mesh from "./objects/Mesh";
import Scene from "./core/Scene";
import { Color } from "./math/Color";

const _devicePixelRatio = window.devicePixelRatio || 1;
const _sampleCount = 4;
class Example_Triangle {
    private container: HTMLDivElement;
    private renderer : WebGPURenderer;
    private scene : Scene;
    private mesh : Mesh;
    async init() {
        this.container = document.getElementById("container") as HTMLDivElement;
        this.renderer = new WebGPURenderer({
            powerPreference: "high-performance",
            antialias: true,
        });
        await this.renderer.init();
        this.container.appendChild(this.renderer.domElement);

        this.scene = new Scene();

        const vertex = new Float32Array([
            0, 0.5, 0,
            -0.5, -0.5, 0,
            0.5, -0.5, 0.0,
        ]);
        const indices = new Uint32Array([
            0,1,2
        ]);
        const geometry = new BufferGeometry();
        geometry.setAttribute('position',new BufferAttribute(vertex,GPUConstances.GPUVertexFormat.Float32x3));
        geometry.setIndices(new BufferAttribute(indices,GPUConstances.GPUVertexFormat.Uint32));
        const material = new Material();
        material.color = new Color(1,0,0);
        this.mesh = new Mesh(geometry,material);
        
        this.scene.add(this.mesh);
    }

    frame() {
        this.renderer.render(this.scene);
        this.render();
    }

    render() {
        requestAnimationFrame(() => {
            this.frame();
        });
    }

    resize(){
        this.renderer.setSize(this.container.clientWidth,this.container.clientHeight);
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
