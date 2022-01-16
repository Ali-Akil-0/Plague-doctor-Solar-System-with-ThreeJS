import './App.css';
import * as THREE from 'three';
import space from './space.jpg';
import doctor from './doctor.jpg';
import moon from './2k_moon.jpg';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import earth from './2k_earth_daymap.jpg';
import sun from './2k_sun.jpg' ; 
import mercury from './2k_mercury.jpg';
import venus from './2k_venus_surface.jpg';
import mars from './2k_mars.jpg';
import jupiter from './2k_jupiter.jpg';
import saturn from './2k_saturn.jpg';
import saturnRing from './2k_saturn_ring_alpha.png';
import uranus from './2k_uranus.jpg';
import neptune from './2k_neptune.jpg';
import { TextureLoader } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGLRenderer({
   canvas: document.querySelector('#bg'),
});
const docTexture = new THREE.TextureLoader().load(doctor);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
// camera
camera.position.setZ(30);
// shape
const geometry = new THREE.RingGeometry( 10, 5, 32 );
const material = new THREE.MeshStandardMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
//lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(2,2,20);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add( pointLight, ambientLight );
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
const controls = new OrbitControls( camera, renderer.domElement );
// scene.add(lightHelper,gridHelper);

// for the start
function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({color:0xffffffff});
  const star = new THREE.Mesh( geometry,material);
  const[x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star);
}
Array(200).fill().forEach(addStar)
const spaceTexture = new THREE.TextureLoader().load(space);
scene.background = spaceTexture;
// doctor
const doc = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshStandardMaterial({map:docTexture})
)
scene.add(doc);

// Making Earth
const EarthTexture = new THREE.TextureLoader().load(earth);
const Earth = new THREE.Mesh(
  new THREE.SphereGeometry(6,35,35),
  new THREE.MeshStandardMaterial({map:EarthTexture}),
)
mesh.add(Earth);
//scrolling earth
Earth.position.z=25;
Earth.position.setX(-20);
// making saturn
const SaturnTexture = new THREE.TextureLoader().load(saturn);
const Saturn = new THREE.Mesh(
  new THREE.SphereGeometry(6,35,35),
  new THREE.MeshStandardMaterial({map:SaturnTexture}),
)
mesh.add(Saturn);
//scrolling earth
Saturn.position.z=80;
Saturn.position.setX(-20);
// saturn ring
const SaturnRingTexture = new THREE.TextureLoader().load(saturnRing);
const SaturnRing = new THREE.Mesh(
  new THREE.RingGeometry(10,20,32),
  new THREE.MeshStandardMaterial({map:SaturnRingTexture , side : THREE.DoubleSide}),
)
Saturn.add(SaturnRing);
//scrolling earth
Saturn.position.z=81;
// making venus
const VenusTexture = new THREE.TextureLoader().load(venus);
const Venus = new THREE.Mesh(
  new THREE.SphereGeometry(4,35,35),
  new THREE.MeshStandardMaterial({map:VenusTexture}),
)
mesh.add(Venus);
//scrolling venus
Venus.position.z=15;
Venus.position.setX(10);
// uranus
const UranusTexture = new THREE.TextureLoader().load(uranus);
const Uranus = new THREE.Mesh(
  new THREE.SphereGeometry(4,35,35),
  new THREE.MeshStandardMaterial({map:UranusTexture}),
)
mesh.add(Uranus);
//scrolling venus
Uranus.position.z=110;
Uranus.position.setX(-50);
// neptune
const NeptuneTexture = new THREE.TextureLoader().load(neptune);
const Neptune = new THREE.Mesh(
  new THREE.SphereGeometry(4,35,35),
  new THREE.MeshStandardMaterial({map:NeptuneTexture}),
)
mesh.add(Neptune);
//scrolling venus
Neptune.position.z=130;
Neptune.position.setX(-20);
// jupiter
const JupiterTexture = new THREE.TextureLoader().load(jupiter);
const Jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(6,35,35),
  new THREE.MeshStandardMaterial({map:JupiterTexture}),
)
mesh.add(Jupiter);
//scrolling venus
Jupiter.position.z=50;
Jupiter.position.setX(-10);
// mars 
const MarsTexture = new THREE.TextureLoader().load(mars);
const Mars = new THREE.Mesh(
  new THREE.SphereGeometry(4,35,35),
  new THREE.MeshStandardMaterial({map:MarsTexture}),
)
mesh.add(Mars);
Mars.position.z=40;
//scrolling earth
Venus.position.z=15;
Venus.position.setX(-10);
// making the moon
const MoonTexture = new THREE.TextureLoader().load(moon);
const Moon = new THREE.Mesh(
  new THREE.SphereGeometry(2,32,32),
  new THREE.MeshStandardMaterial({map:MoonTexture}),
)
Earth.add(Moon);
// p1
// making planet 1 
const Mercury = new THREE.TextureLoader().load(mercury);
const Merc = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({map:Mercury}),
)
Moon.add(Merc);
Merc.position.x = 28 ;
//scrolling
Moon.position.z=30;
Moon.position.setX(-10);


// animating
function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x+=0.01 ; 
  mesh.rotation.y+=0.005;
  mesh.rotation.y+=0.005;
  Earth.rotation.x+=0.01 ; 
  Earth.rotation.y+=0.005;
  Jupiter.rotation.x+=0.01 ; 
  Jupiter.rotation.y+=0.005;
  Saturn.rotation.x+=0.03 ; 
  Saturn.rotation.y+=0.05;
  Neptune.rotation.x+=0.03 ; 
  Neptune.rotation.y+=0.05;
  Moon.rotation.y+=0.01 ; 
  SaturnRing.rotation.x+=0.02 ; 
  SaturnRing.rotation.y+=0.02 ; 
  controls.update();
renderer.render(scene,camera);
}
//scroll
function moveCamera(){
const t =document.body.getBoundingClientRect().top;
Moon.rotation.x+=0.5 ; 
Moon.rotation.y+=0.75 ; 
Moon.rotation.z+=0.5 ; 
doc.position.y+=0.1 ; 
doc.position.z+=0.1 ; 
camera.position.z = t * -0.1 ; 
camera.position.x = t * -0.002 ; 
camera.rotation.y+= t * -0.002 ;
}
document.body.onscroll = moveCamera ; 
//
animate();

function App() {
  return (
    <div className="test">
      <canvas id="#bg"></canvas>
    </div>
  );
}

export default App;
