// Simple Three.js scene to simulate a rotating 'prosthetic' placeholder
const canvas = document.getElementById('three-canvas');
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000,0);

const fov = 45;
const aspect = canvas.clientWidth / canvas.clientHeight;
const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
camera.position.set(0, 1.2, 3);

const ambient = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambient);
const dir = new THREE.DirectionalLight(0xffffff, 0.6);
dir.position.set(5, 10, 7);
scene.add(dir);

// Create a simple grouped 'prosthetic' made of boxes and cylinders
const group = new THREE.Group();

const materialWhite = new THREE.MeshStandardMaterial({color:0xf8fbff, metalness:0.2, roughness:0.4});
const materialBlue = new THREE.MeshStandardMaterial({color:0x0b63ff, metalness:0.4, roughness:0.3});

// Forearm (cylinder)
const forearmGeo = new THREE.CylinderGeometry(0.18,0.2,1.1,32);
const forearm = new THREE.Mesh(forearmGeo, materialWhite);
forearm.rotation.z = Math.PI/2;
forearm.position.set(0,0,0);

// Elbow joint (torus)
const elbowGeo = new THREE.TorusGeometry(0.22, 0.06, 16, 100);
const elbow = new THREE.Mesh(elbowGeo, materialBlue);
elbow.rotation.y = Math.PI/2;
elbow.position.set(-0.6, 0, 0);

// Hand (box)
const handGeo = new THREE.BoxGeometry(0.28,0.12,0.5);
const hand = new THREE.Mesh(handGeo, materialWhite);
hand.position.set(-1.05, 0, 0);

// A couple of finger-ish boxes
for(let i=0;i<3;i++){
  const f = new THREE.BoxGeometry(0.06,0.06,0.2);
  const finger = new THREE.Mesh(f, materialBlue);
  finger.position.set(-1.25, 0, -0.1 + i*0.1 - 0.1);
  group.add(finger);
}

group.add(forearm, elbow, hand);
scene.add(group);

// Ground reflection plane subtle
const planeGeo = new THREE.PlaneGeometry(6,6);
const planeMat = new THREE.MeshStandardMaterial({color:0xf3fbff, metalness:0, roughness:1, opacity:0.6, transparent:true});
const plane = new THREE.Mesh(planeGeo, planeMat);
plane.rotation.x = -Math.PI/2;
plane.position.y = -0.9;
scene.add(plane);

// Resize handling
function resizeRendererToDisplaySize(renderer){
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if(needResize){
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function animate(t){
  t *= 0.001;
  if(resizeRendererToDisplaySize(renderer)){
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  group.rotation.y = t * 0.5;
  group.rotation.z = Math.sin(t*0.5)*0.08;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// Make sure canvas fills its container
function fitCanvas(){
  const holder = document.getElementById('canvas-holder');
  const c = document.getElementById('three-canvas');
  c.style.width = '100%';
  c.style.height = '100%';
}
fitCanvas();
window.addEventListener('resize', fitCanvas);