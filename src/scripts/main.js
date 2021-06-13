//import {initThreeJs} from './three/mainThreejs.js';
import Typed from 'typed.js';
//import Parallax from 'parallax-js'
import Rellax from 'rellax'
var sections = document.querySelectorAll('main .section');
for(let i = 0; i < sections.length; i++) {
  sections[i].classList.remove('d-hidden');

} // TODO: remove in production
console.log('sections are viseble');
var options = {
  strings: ['גם אתם רוצים נוככות ^100דיגיטאלית?',
            'גם אתם רוצים נוכחות דיגיטאלית!'],
  typeSpeed: 40,
  backSpeed: 80,
  backDelay: 1000,
  onComplete: (typedEl) => {
    for(let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('d-hidden');
    }
  },
};




var typed = new Typed('#title_1', options);

/*var parr_container= document.getElementById('parralex_container');
var parr_instance = new Parallax(parr_container);
console.log('parr_instance', parr_instance);*/
var rellax = new Rellax('.rellax');




document.body.classList.remove('loading');
document.body.classList.add('done');

