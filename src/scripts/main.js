//import {initThreeJs} from './three/mainThreejs.js';
import Typed from 'typed.js';
//import Parallax from 'parallax-js'
//import Rellax from 'rellax'
var sections = document.querySelectorAll('main .section');

// TODO: remove in production

for(let i = 0; i < sections.length; i++) {
  sections[i].classList.remove('d-hidden');
} 
console.log('done remove d hidden');
var options = {
  strings: ['גם אתם רוצים נוככות ^100דיגיטאלית?',
            'גם אתם רוצים נוכחות דיגיטאלית!'],
  typeSpeed: 40,
  backSpeed: 80,
  backDelay: 1000,
  onComplete: (typedEl) => {
    document.getElementById('arrow').classList.add('active');
    for(let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('d-hidden');
    }
  },
};




var typed = new Typed('#title_1', options);

/*var parr_container= document.getElementById('parralex_container');
var parr_instance = new Parallax(parr_container);
console.log('parr_instance', parr_instance);*/




document.body.classList.remove('loading');
document.body.classList.add('done');

