import * as threeImp from './three/mainThreejs.js';
import Typed from 'typed.js';

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



threeImp.init();
var typed = new Typed('#title_1', options);
document.body.classList.remove('loading');
document.body.classList.add('done');

