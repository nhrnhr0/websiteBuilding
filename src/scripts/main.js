import ThreeGlobe from 'three-globe';
import * as THREE from 'three';
//import * as  TrackballControls from '.\node_modules\three\examples\js\controls\TrackballControls';
//
//import {WebGLRenderer, Scene, AmbientLight, DirectionalLight, PerspectiveCamera} from 'three';


//import TrackballControls from 'three-trackballcontrols';

//import * as TrackballControls from '.\node_modules\three\examples\js\controls\TrackballControls';
import TrackballControls from './TrackballControls';


//import { TrackballControls } from '.\node_modules\three\examples\js\controls\TrackballControls'


const N = 20;
console.log('we start');
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['rgb(249, 242, 149)', 'rgb(224, 170, 62)', 'rgb(249, 242, 149)', 'rgb(224, 170, 62)'][Math.round(Math.random() * 3)]
    }));

    const Globe = new ThreeGlobe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(1000);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globeViz').appendChild(renderer.domElement);

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(Globe);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    scene.add(directionalLight);

    // Setup camera
    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 500;

    // Add camera controls
    const tbControls = new TrackballControls(camera, renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 5;
    //tbControls.zoomSpeed = 0.8;
    // Kick-off renderer
    (function animate() { // IIFE
      // Frame cycle
      tbControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    })();
    console.log('we end');