import * as Spectre from "../dist/js/spectre.js";
let container;
let renderer;
let scene;
let mesh;
let camera;
async function init() {
    container = document.getElementById("container");
    renderer = new Spectre.WebGPURenderer({
        powerPreference: "high-performance",
        antialias: true,
    });
    await renderer.init();
    container.appendChild(renderer.domElement);

    scene = new Spectre.Scene();

    camera = new Spectre.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = -50;
    camera.lookAt(new Spectre.Vector3(0, 0, 0));

    const controls = new Spectre.OrbitControls(camera, renderer.domElement);
    const material = new Spectre.Material();
    material.color = new Spectre.Color(1, 0, 0);

    const loader = new Spectre.TextureLoader();
    loader.load(
        // resource URL
        "images/logo.png",

        // onLoad callback
        function (texture) {
            material.map = texture;
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        function (err) {
            console.error("An error happened.");
        }
    );

    const geometry = new Spectre.BoxGeometry(20, 20, 20);

    mesh = new Spectre.Mesh(geometry, material);
    mesh.rotateX(-Math.PI / 2);
    scene.add(mesh);
}

function frame() {
    renderer.render(scene, camera);
    render();
    mesh.rotateZ(0.01);
    mesh.matrixWorldNeedsUpdate = true;
}

function render() {
    requestAnimationFrame(() => {
        frame();
    });
}

function resize() {
    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", function () {
    resize();
});

init().then(() => {
    render();
});
