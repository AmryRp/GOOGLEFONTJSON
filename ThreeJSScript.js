/* 
 * 3D FLOATING TYPO
 * Made with ThreeJS - Enjoy!
 * https://threejs.org/
 *
 * Move the cursor to zoom in/out and float around the cubed space.
 * On mobile touch + drag screen to zoom in/out and float.
 *
 * Inspired by one of the ThreeJS examples in documentation.
 *
 * #014 - #100DaysOfCode
 * By ilithya | 2019
 */

const nearDist = 0.1;
const farDist = 9000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    nearDist,
    farDist);

camera.position.x = farDist * -2;
camera.position.z = 400;

//Obyek Light 
const light = new THREE.PointLight(0xffffff, 0.1);
light.position.set(10, -1200, 10000);
scene.add(light);
const amblight = new THREE.AmbientLight(0x404040, 5); // soft white light
scene.add(amblight);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#ff8B0f"); // Backgrond Color - Blue
renderer.setPixelRatio(window.devicePixelRatio); // For HiDPI devices to prevent bluring output canvas
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#canvaswrapper").appendChild(renderer.domElement);

//Obyek Createed
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('https://raw.githubusercontent.com/AmryRp/GOOGLEFONTJSON/main/Lamp.gltf', (gltf) => {
    const root = gltf.scene;
    scene.add(root);

    // compute the box that contains all the stuff
    // from root and below
    const box = new THREE.Box3().setFromObject(root);

    const boxSize = box.getSize(new THREE.Vector3()).length();
    const boxCenter = box.getCenter(new THREE.Vector3());

    // set the camera to frame the box
    frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

    // update the Trackball controls to handle the new size
    controls.maxDistance = boxSize * 10;
    controls.target.copy(boxCenter);
    controls.update();
});

// CREATE CUBES
const cubeSize = 120;
const geometry = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize); // BufferAttribute allows for more efficient passing of data to the GPU
const geometry2 = new THREE.SphereBufferGeometry(cubeSize, cubeSize, cubeSize);
const material = new THREE.MeshNormalMaterial(); // Maps the normal vectors to RGB colors
// const material = new THREE.MeshMatcapMaterial( {
//     color: 0xff5200,
//     matcap : "porcelainWhite"
// } );
var materials = [
    new THREE.MeshPhongMaterial({ color: 0xff8B0f, specular: 0xffffff, combine: THREE.MixOperation, reflectivity: 0.6 }),
    new THREE.MeshPhongMaterial({ color: 0xff3747, specular: 0xffffff, combine: THREE.MixOperation, reflectivity: 0.6 }),
    new THREE.MeshPhongMaterial({ color: 0xffd600, specular: 0xffffff, combine: THREE.MixOperation, reflectivity: 0.6 }),
    new THREE.MeshPhongMaterial({ color: 0xeae45f, specular: 0xffffff, combine: THREE.MixOperation, reflectivity: 0.6 }),
    new THREE.MeshPhongMaterial({ color: 0xddf5c2, specular: 0xffffff, combine: THREE.MixOperation, reflectivity: 0.6 })
]

const object = null;
const group = new THREE.Group();
for (let i = 0; i < 35; i++) {

    const mesh = new THREE.Mesh(geometry2, materials[3]);
    const dist = farDist / 3;
    const distDouble = dist * 2;
    const tau = 2 * Math.PI; // One turn

    mesh.position.x = Math.random() * distDouble - dist;
    mesh.position.y = Math.random() * distDouble - dist;
    mesh.position.z = Math.random() * distDouble - dist;
    mesh.rotation.x = Math.random() * tau;
    mesh.rotation.y = Math.random() * tau;
    mesh.rotation.z = Math.random() * tau;

    // Manually control when 3D transformations recalculation occurs for better performance
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();

    group.add(mesh);
}
for (let i = 0; i < 35; i++) {

    const mesh = new THREE.Mesh(geometry2, materials[0]);
    const dist = farDist / 3;
    const distDouble = dist * 2;
    const tau = 2 * Math.PI; // One turn

    mesh.position.x = Math.random() * distDouble - dist;
    mesh.position.y = Math.random() * distDouble - dist;
    mesh.position.z = Math.random() * distDouble - dist;
    mesh.rotation.x = Math.random() * tau;
    mesh.rotation.y = Math.random() * tau;
    mesh.rotation.z = Math.random() * tau;

    // Manually control when 3D transformations recalculation occurs for better performance
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();

    group.add(mesh);
}
for (let i = 0; i < 52; i++) {
    const mesh = new THREE.Mesh(geometry, materials[1]);
    const dist = farDist / 3;
    const distDouble = dist * 2;
    const tau = 2 * Math.PI; // One turn

    mesh.position.x = Math.random() * distDouble - dist;
    mesh.position.y = Math.random() * distDouble - dist;
    mesh.position.z = Math.random() * distDouble - dist;
    mesh.rotation.x = Math.random() * tau;
    mesh.rotation.y = Math.random() * tau;
    mesh.rotation.z = Math.random() * tau;

    // Manually control when 3D transformations recalculation occurs for better performance
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();

    group.add(mesh);
}
for (let i = 0; i < 52; i++) {
    const mesh = new THREE.Mesh(geometry, materials[2]);
    const dist = farDist / 3;
    const distDouble = dist * 2;
    const tau = 2 * Math.PI; // One turn

    mesh.position.x = Math.random() * distDouble - dist;
    mesh.position.y = Math.random() * distDouble - dist;
    mesh.position.z = Math.random() * distDouble - dist;
    mesh.rotation.x = Math.random() * tau;
    mesh.rotation.y = Math.random() * tau;
    mesh.rotation.z = Math.random() * tau;

    // Manually control when 3D transformations recalculation occurs for better performance
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();

    group.add(mesh);
}
for (let i = 0; i < 88; i++) {
    const mesh = new THREE.Mesh(geometry, materials[3]);
    const dist = farDist / 3;
    const distDouble = dist * 2;
    const tau = 2 * Math.PI; // One turn

    mesh.position.x = Math.random() * distDouble - dist;
    mesh.position.y = Math.random() * distDouble - dist;
    mesh.position.z = Math.random() * distDouble - dist;
    mesh.rotation.x = Math.random() * tau;
    mesh.rotation.y = Math.random() * tau;
    mesh.rotation.z = Math.random() * tau;

    // Manually control when 3D transformations recalculation occurs for better performance
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();

    group.add(mesh);
}
for (let i = 0; i < 24; i++) {
    const mesh = new THREE.Mesh(geometry, materials[4]);
    const dist = farDist / 3;
    const distDouble = dist * 2;
    const tau = 2 * Math.PI; // One turn

    mesh.position.x = Math.random() * distDouble - dist;
    mesh.position.y = Math.random() * distDouble - dist;
    mesh.position.z = Math.random() * distDouble - dist;
    mesh.rotation.x = Math.random() * tau;
    mesh.rotation.y = Math.random() * tau;
    mesh.rotation.z = Math.random() * tau;

    // Manually control when 3D transformations recalculation occurs for better performance
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();

    group.add(mesh);
}
scene.add(group);

// CREATE TYPOGRAPHY
const loader = new THREE.FontLoader();
const textMesh = new THREE.Mesh();
const createTypo = font => {
    const word = "AmryRp Creative ";
    const typoProperties = {
        font: font,
        size: cubeSize,
        height: cubeSize / 2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 6,
        bevelOffset: 1,
        bevelSegments: 8
    };

    const text = new THREE.TextGeometry(word, typoProperties);
    textMesh.geometry = text;
    textMesh.material = materials[0];
    textMesh.position.x = cubeSize * -2;
    textMesh.position.z = cubeSize * -1;
    scene.add(textMesh);
};
loader.load(
    "https://raw.githubusercontent.com/AmryRp/GOOGLEFONTJSON/main/Lato_Bold.json",
    createTypo);


// CREATE PART OF THE MOUSE/TOUCH OVER EFFECT
let mouseX = 0;
let mouseY = 0;
const mouseFX = {
    windowHalfX: window.innerWidth / 2,
    windowHalfY: window.innerHeight / 2,
    coordinates: function(coordX, coordY) {
        mouseX = (coordX - mouseFX.windowHalfX) * 10;
        mouseY = (coordY - mouseFX.windowHalfY) * 10;
    },
    onMouseMove: function(e) {
        mouseFX.coordinates(e.clientX, e.clientY);
    },
    onTouchMove: function(e) {
        mouseFX.coordinates(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }
};

document.addEventListener("mousemove", mouseFX.onMouseMove, false);
document.addEventListener("touchmove", mouseFX.onTouchMove, false);

// RENDER 3D GRAPHIC
const render = () => {
    requestAnimationFrame(render);

    // Camera animation
    // Works with onMouseMove and onTouchMove functions
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (mouseY * -1 - camera.position.y) * 0.05;
    camera.lookAt(scene.position); // Rotates the object to face a point in world space

    const t = Date.now() * 0.001;
    const rx = Math.sin(t * 0.7) * 0.5;
    const ry = Math.sin(t * 0.3) * 0.5;
    const rz = Math.sin(t * 0.2) * 0.5;
    group.rotation.x = rx;
    group.rotation.y = ry;
    group.rotation.z = rz;
    textMesh.rotation.x = rx;
    textMesh.rotation.y = ry;
    textMesh.rotation.z = rx; // Happy accident :) 

    renderer.render(scene, camera);
};
render();

// RESIZE CANVAS
// This is buggy in some iOS...
// const resizeCanvas = () => {
//  camera.aspect = window.innerWidth / window.innerHeight;
//  camera.updateProjectionMatrix();
//  renderer.setSize(window.innerWidth, window.innerHeight);
// };
// window.addEventListener("resize", resizeCanvas, false);