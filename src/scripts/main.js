import * as threeImp from './three/mainThreejs.js';
import Typed from 'typed.js';
var options = {
  strings: ['גם אתם רוצים נוככות ^100דיגיטאלית?',
            'גם אתם רוצים נוכחות דיגיטאלית!'],
  typeSpeed: 40,
  backSpeed: 80,
  backDelay: 1000,
};

var typed = new Typed('#title_1', options);
threeImp.init();