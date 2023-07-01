let scene, camera, renderer, controls;
let particles, planet, saturn, mesh;
let width = window.innerWidth,
    height = window.innerHeight;

const colors = [0x8491c3, 0xF3F3F3, 0xfddea5];

init();
animate();

function init() {
    scene = new THREE.Scene();
    //Three.jsInit
    camera = new THREE.PerspectiveCamera(75,width/height,0.1, 1000);
    camera.lookAt(scene.position);
    camera.position.z = 500;

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x203744);
    renderer.shadowMap.enabled = true;

    //objectTesting
    const planetGeometry = new THREE.IcosahedronGeometry(200,2);
    const planetMaterial = new THREE.MeshPhongMaterial({
         //color:0x37BE95,
         //shadin: THREE.FlatShading
    });
    planet = new THREE.Mesh(planetGeometry, planetMaterial);
    //planet.castShadow = true;
    //planet.receiveShadow = true;
    scene.add(planet);

    //Light
    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    document.getElementById('world').appendChild(renderer.domElement);

}

//animation

function animate() {
    requestAnimationFrame(animate);
    render();    
}

function render() {
    planet.rotation.y += 0.03
    renderer.render(scene,camera);

}