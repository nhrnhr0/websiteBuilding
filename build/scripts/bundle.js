"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}for(var n,o=e((function(t,e){
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
var n;n=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(1),r=n(3),i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s.initializer.load(this,n,e),this.begin()}return o(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),s=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=r.htmlParser.typeHtmlChars(t,e,n);var o=0,i=t.substr(e);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var a=1;a+=(i=/\d+/.exec(i)[0]).length,o=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==t.substr(e+s).charAt(0)&&(s++,!(e+s>t.length)););var l=t.substring(0,e),u=t.substring(l.length+1,e+s),p=t.substring(e+s+1);t=l+u+p,s--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,s),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),o)}),o):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var o=t.substr(0,e);this.replaceText(o),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=r.htmlParser.backSpaceHtmlChars(t,e,n);var o=t.substr(0,e);if(n.replaceText(o),n.smartBackspace){var s=n.strings[n.arrayPos+1];s&&o===s.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),o)}else this.setPauseStatus(t,e,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=i,t.exports=e.default},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(2),a=(o=i)&&o.__esModule?o:{default:o},l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=s({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var i=0;i<r;i+=1){var l=o[i];t.strings.push(l.innerHTML.trim())}}for(var i in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[i]=i;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var o="";t.showCursor&&(o+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(o+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=o,document.body.appendChild(n))}}}]),t}();e.default=l;var u=new l;e.initializer=u},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var o=t.substr(e).charAt(0);if("<"===o||"&"===o){var s="";for(s="<"===o?">":";";t.substr(e+1).charAt(0)!==s&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var o=t.substr(e).charAt(0);if(">"===o||";"===o){var s="";for(s=">"===o?"<":"&";t.substr(e-1).charAt(0)!==s&&!(--e<0););e--}return e}}]),t}();e.default=o;var s=new o;e.htmlParser=s}])},t.exports=n()})),s=(n=o)&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,r=e((function(e){var n,o;n="undefined"!=typeof window?window:t,o=function(){var t=function(e,n){var o=Object.create(t.prototype),s=0,r=0,i=0,a=0,l=[],u=!0,p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},c=null,d=!1;try{var h=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h)}catch(t){}var f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,m=window.transformProp||function(){var t=document.createElement("div");if(null===t.style.transform){var e=["Webkit","Moz","ms"];for(var n in e)if(void 0!==t.style[e[n]+"Transform"])return e[n]+"Transform"}return"transform"}();o.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},n&&Object.keys(n).forEach((function(t){o.options[t]=n[t]})),n&&n.breakpoints&&function(){if(3===o.options.breakpoints.length&&Array.isArray(o.options.breakpoints)){var t,e=!0,n=!0;if(o.options.breakpoints.forEach((function(o){"number"!=typeof o&&(n=!1),null!==t&&o<t&&(e=!1),t=o})),e&&n)return}o.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),e||(e=".rellax");var y="string"==typeof e?document.querySelectorAll(e):[e];if(y.length>0){if(o.elems=y,o.options.wrapper&&!o.options.wrapper.nodeType){var v=document.querySelector(o.options.wrapper);if(!v)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");o.options.wrapper=v}var g,b=function(){for(var t=0;t<l.length;t++)o.elems[t].style.cssText=l[t].style;var e,n;l=[],r=window.innerHeight,a=window.innerWidth,e=a,n=o.options.breakpoints,g=e<n[0]?"xs":e>=n[0]&&e<n[1]?"sm":e>=n[1]&&e<n[2]?"md":"lg",x(),function(){for(var t=0;t<o.elems.length;t++){var e=w(o.elems[t]);l.push(e)}}(),S(),u&&(window.addEventListener("resize",b),u=!1,T())},w=function(t){var e,n=t.getAttribute("data-rellax-percentage"),s=t.getAttribute("data-rellax-speed"),i=t.getAttribute("data-rellax-xs-speed"),l=t.getAttribute("data-rellax-mobile-speed"),u=t.getAttribute("data-rellax-tablet-speed"),p=t.getAttribute("data-rellax-desktop-speed"),c=t.getAttribute("data-rellax-vertical-speed"),d=t.getAttribute("data-rellax-horizontal-speed"),h=t.getAttribute("data-rellax-vertical-scroll-axis"),f=t.getAttribute("data-rellax-horizontal-scroll-axis"),m=t.getAttribute("data-rellax-zindex")||0,y=t.getAttribute("data-rellax-min"),v=t.getAttribute("data-rellax-max"),b=t.getAttribute("data-rellax-min-x"),w=t.getAttribute("data-rellax-max-x"),x=t.getAttribute("data-rellax-min-y"),C=t.getAttribute("data-rellax-max-y"),T=!0;i||l||u||p?e={xs:i,sm:l,md:u,lg:p}:T=!1;var S=o.options.wrapper?o.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;o.options.relativeToWrapper&&(S=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-o.options.wrapper.offsetTop);var A=o.options.vertical&&(n||o.options.center)?S:0,P=o.options.horizontal&&(n||o.options.center)?o.options.wrapper?o.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,E=A+t.getBoundingClientRect().top,O=t.clientHeight||t.offsetHeight||t.scrollHeight,L=P+t.getBoundingClientRect().left,z=t.clientWidth||t.offsetWidth||t.scrollWidth,B=n||(A-E+r)/(O+r),N=n||(P-L+a)/(z+a);o.options.center&&(N=.5,B=.5);var j=T&&null!==e[g]?Number(e[g]):s||o.options.speed,M=c||o.options.verticalSpeed,q=d||o.options.horizontalSpeed,I=h||o.options.verticalScrollAxis,D=f||o.options.horizontalScrollAxis,Y=k(N,B,j,M,q),F=t.style.cssText,H="",R=/transform\s*:/i.exec(F);if(R){var _=R.index,X=F.slice(_),W=X.indexOf(";");H=W?" "+X.slice(11,W).replace(/\s/g,""):" "+X.slice(11).replace(/\s/g,"")}return{baseX:Y.x,baseY:Y.y,top:E,left:L,height:O,width:z,speed:j,verticalSpeed:M,horizontalSpeed:q,verticalScrollAxis:I,horizontalScrollAxis:D,style:F,transform:H,zindex:m,min:y,max:v,minX:b,maxX:w,minY:x,maxY:C}},x=function(){var t=s,e=i;if(s=o.options.wrapper?o.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,i=o.options.wrapper?o.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,o.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;s=n-o.options.wrapper.offsetTop}return!(t==s||!o.options.vertical)||!(e==i||!o.options.horizontal)},k=function(t,e,n,s,r){var i={},a=(r||n)*(100*(1-t)),l=(s||n)*(100*(1-e));return i.x=o.options.round?Math.round(a):Math.round(100*a)/100,i.y=o.options.round?Math.round(l):Math.round(100*l)/100,i},C=function(){window.removeEventListener("resize",C),window.removeEventListener("orientationchange",C),(o.options.wrapper?o.options.wrapper:window).removeEventListener("scroll",C),(o.options.wrapper?o.options.wrapper:document).removeEventListener("touchmove",C),c=p(T)},T=function(){x()&&!1===u?(S(),c=p(T)):(c=null,window.addEventListener("resize",C),window.addEventListener("orientationchange",C),(o.options.wrapper?o.options.wrapper:window).addEventListener("scroll",C,!!d&&{passive:!0}),(o.options.wrapper?o.options.wrapper:document).addEventListener("touchmove",C,!!d&&{passive:!0}))},S=function(){for(var t,e=0;e<o.elems.length;e++){var n=l[e].verticalScrollAxis.toLowerCase(),u=l[e].horizontalScrollAxis.toLowerCase(),p=-1!=n.indexOf("x")?s:0,c=-1!=n.indexOf("y")?s:0,d=-1!=u.indexOf("x")?i:0,h=(c+(-1!=u.indexOf("y")?i:0)-l[e].top+r)/(l[e].height+r),f=(p+d-l[e].left+a)/(l[e].width+a),y=(t=k(f,h,l[e].speed,l[e].verticalSpeed,l[e].horizontalSpeed)).y-l[e].baseY,v=t.x-l[e].baseX;null!==l[e].min&&(o.options.vertical&&!o.options.horizontal&&(y=y<=l[e].min?l[e].min:y),o.options.horizontal&&!o.options.vertical&&(v=v<=l[e].min?l[e].min:v)),null!=l[e].minY&&(y=y<=l[e].minY?l[e].minY:y),null!=l[e].minX&&(v=v<=l[e].minX?l[e].minX:v),null!==l[e].max&&(o.options.vertical&&!o.options.horizontal&&(y=y>=l[e].max?l[e].max:y),o.options.horizontal&&!o.options.vertical&&(v=v>=l[e].max?l[e].max:v)),null!=l[e].maxY&&(y=y>=l[e].maxY?l[e].maxY:y),null!=l[e].maxX&&(v=v>=l[e].maxX?l[e].maxX:v);var g=l[e].zindex,b="translate3d("+(o.options.horizontal?v:"0")+"px,"+(o.options.vertical?y:"0")+"px,"+g+"px) "+l[e].transform;o.elems[e].style[m]=b}o.options.callback(t)};return o.destroy=function(){for(var t=0;t<o.elems.length;t++)o.elems[t].style.cssText=l[t].style;u||(window.removeEventListener("resize",b),u=!0),f(c),c=null},b(),o.refresh=b,o}console.warn("Rellax: The elements you're trying to select don't exist.")};return t},e.exports?e.exports=o():n.Rellax=o()})),i=document.querySelectorAll("main .section"),a=0;a<i.length;a++)i[a].classList.remove("d-hidden");console.log("sections are viseble"),new s("#title_1",{strings:["גם אתם רוצים נוככות ^100דיגיטאלית?","גם אתם רוצים נוכחות דיגיטאלית!"],typeSpeed:40,backSpeed:80,backDelay:1e3,onComplete:function(t){for(var e=0;e<i.length;e++)i[e].classList.remove("d-hidden")}}),new r(".rellax"),document.body.classList.remove("loading"),document.body.classList.add("done");
