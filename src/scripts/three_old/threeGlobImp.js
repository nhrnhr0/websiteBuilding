//import 'three-globe';
/*import * as THREE from 'three';
import ThreeGlobe from 'three-globe';*/

//import '../../../node_modules/three-globe/dist/three-globe.module'
//import '../../../node_modules/three/build/three.module'
const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: ['rgb(249, 242, 149)', 'rgb(224, 170, 62)', 'rgb(249, 242, 149)', 'rgb(224, 170, 62)'][Math.round(Math.random() * 3)]
  }));



  //Globe.globeImageUrl('https://image.shutterstock.com/image-vector/gold-world-map-vector-600w-1294298026.jpg')
const Globe = new ThreeGlobe();
Globe.globeImageUrl('globe_texture.jpg')
.arcsData(arcsData)
.arcColor('color')
.arcDashLength(0.4)
.arcDashGap(4)
.arcDashInitialGap(() => Math.random() * 5)
.arcDashAnimateTime(1000);


export {Globe};