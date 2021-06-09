//import * as THREE from 'three';
//import * as THREE from './ThreeUtils';
import { PerspectiveCamera, WebGLRenderer, Scene,TextureLoader,Color,AmbientLight,DirectionalLight } from 'three';

//import * as  TrackballControls from '.\node_modules\three\examples\js\controls\TrackballControls';
//
//import {WebGLRenderer, Scene, AmbientLight, DirectionalLight, PerspectiveCamera} from 'three';


//import TrackballControls from 'three-trackballcontrols';

//import * as TrackballControls from '.\node_modules\three\examples\js\controls\TrackballControls';
//import TrackballControls from './TrackballControls';


//import { TrackballControls } from '.\node_modules\three\examples\js\controls\TrackballControls'

const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({ alpha: true });
const scene = new Scene();

export function init() {
  const loader = new TextureLoader();
  loader.load('bg_image.jpg' , function(texture)
            {
              texture.app
              scene.background = texture;  
            });


  console.log('init canvas');
  
  // Setup renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('globeViz').appendChild(renderer.domElement);

  // Setup scene
  //scene.add(Globe);


  //var root_style = getComputedStyle(document.body)
  //var background_color = root_style.getPropertyValue('--clr-background');
  //background_color = 0x979797;//background_color.replace('#', '0x');
  //scene.background = new Color(background_color);
  //console.log(scene.background);
  scene.background = new Color(0x97979797);
  const ambientLight = new AmbientLight(0xf9f295);
  scene.add(ambientLight);
  const directionalLight = new DirectionalLight(0xf9f295, 0.8);
  scene.add(directionalLight);



  //const pointLight = new PointLight( 0xffffff, 1, 10000 );
  //pointLight
  //pointLight.position.set( 250, 40, 250 );
  //scene.add( pointLight );

  // Setup camera

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.position.z = 500;
  document.body.onscroll = moveCameraOnScrool;

  // Add camera controls
  /*const tbControls = new TrackballControls(camera, renderer.domElement);
  tbControls.minDistance = 101;
  tbControls.rotateSpeed = 5;
  tbControls.zoomSpeed = 0.8;
  tbControls.noPan = true;
  tbControls.noZoom = true;*/

  // Kick-off renderer
  (function animate() { // IIFE
    // Frame cycle
    //tbControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  })();
}


function moveCameraOnScrool() {
  const t = document.body.getBoundingClientRect().top;
  console.log('t: ', t);
  //camera.position.x = t * -0.1;
  camera.position.y = Math.max(t * 0.1, -190);
  camera.position.z = t * -0.1 + 500;
  camera.position.x = Math.min(t * -0.1, 190);

  //Globe.position.add(new Vector3(0,0,1));
  Globe.rotation.set(0, t * 0.003, 0);
}