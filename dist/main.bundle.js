(()=>{"use strict";var e={206:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(537),r=n.n(o),a=n(645),i=n.n(a),s=n(667),c=n.n(s),l=new URL(n(327),n.b),u=i()(r()),p=c()(l);u.push([e.id,'@font-face {\n  font-family: "Pixel7";\n  src: url('+p+') format("woff2");\n}\n\nbody {\n  background-color: #333;\n}\n\nh1 {\n  font-family: "Pixel7";\n}\n',"",{version:3,sources:["webpack://./src/assets/styles/style.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,4DAA0D;AAC5D;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB",sourcesContent:['@font-face {\n  font-family: "Pixel7";\n  src: url("../fonts/Pixel Font-7 V2.woff2") format("woff2");\n}\n\nbody {\n  background-color: #333;\n}\n\nh1 {\n  font-family: "Pixel7";\n}\n'],sourceRoot:""}]);const d=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */"),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},327:(e,t,n)=>{e.exports=n.p+"images/65f325bdec30f6ad1d32.woff2"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),u=n.n(l),p=n(589),d=n.n(p),f=n(206),h={};h.styleTagTransform=d(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=(e,t)=>{const n=new Set;return e-1>=0&&n.add([e-1,t]),t-1>=0&&n.add([e,t-1]),e+1<10&&n.add([e+1,t]),t+1<10&&n.add([e,t+1]),n},g=e=>{const t=e.split(",");return[parseInt(t[0],10),parseInt(t[1],10)]};const m=e=>new Promise((t=>setTimeout(t,e))),y=document.createDocumentFragment(),w=new class{constructor(e,t,n,o,r,a){const i=document.createElement("canvas");i.textContent="Your browser does not seem to support HTML5 canvas.",i.setAttribute("id",r),i.width=e,i.height=t,this.scaleW=n,this.scaleH=o,a.appendChild(i),this.ctx=i.getContext("2d"),CanvasRenderingContext2D.prototype.pFillRect=function(e,t,r,a){return this.fillRect(n*e,o*t,n*r,o*a)},CanvasRenderingContext2D.prototype.pClearRect=function(e,t,r,a){return this.clearRect(n*e,o*t,n*r,o*a)},CanvasRenderingContext2D.prototype.pMoveTo=function(e,t){return this.moveTo(n*e,o*t)},CanvasRenderingContext2D.prototype.pLineTo=function(e,t){return this.lineTo(n*e,o*t)},CanvasRenderingContext2D.prototype.drawLine=function(e,t,n,o,r,a){this.lineWidth=a||1,this.strokeStyle=r||"black",this.beginPath(),this.pMoveTo(e,t),this.pLineTo(n,o),this.stroke(),this.closePath()},CanvasRenderingContext2D.prototype.pGetImageData=function(e,t,r,a){return this.getImageData(n*e,o*t,n*r,o*a)},CanvasRenderingContext2D.prototype.pPutImageData=function(e,t,r){return this.putImageData(e,n*t,o*r)},CanvasRenderingContext2D.prototype.pTranslate=function(e,t){return this.translate(n*e,o*t)},CanvasRenderingContext2D.prototype.isFree=function(r,a){if(r<0||e/n<=r||t/o<=a)return console.log("isFree, Border"),!1;const i=this.getImageData(n*r,o*a,1,1).data.reduce(((e,t)=>e+t),0);return console.log("isFree, Not Border: ",{x:r,y:a,free:!i}),!i}}}(500,500,50,50,"background",y);document.body.appendChild(y);const b=w.ctx;((e,t,n)=>{e.lineWidth=1,e.strokeStyle="yellow";for(let t=1;t<10;t+=1)e.beginPath(),e.pMoveTo(0,t),e.pLineTo(10,t),e.stroke(),e.closePath();for(let t=1;t<10;t+=1)e.beginPath(),e.pMoveTo(t,0),e.pLineTo(t,10),e.stroke(),e.closePath()})(b);const C=new class{constructor(){this.content=new Set}add(e){this.content.add(e)}pick(){const[e]=this.content;return this.content.delete(e),e}},x=new Set;C.add("0,0");let A="0,0";var T,R,L,S;T=void 0,R=void 0,S=function*(){for(;x.size<100;){x.add(A);const[e,t]=g(A),n=new Map;let o=0;for(let r of v(e,t))x.has(`${r[0]},${r[1]}`)||(n.set(o,r),o++);if(b.fillStyle="pink",b.pFillRect(e+.1,t+.1,.8,.8),0!==o){C.add(A);const[r,a]=n.get(Math.floor(Math.random()*o));r>e?b.drawLine(e+1,t,e+1,t+1):r<e?b.drawLine(e,t,e,t+1):a>t?b.drawLine(e,t+1,e+1,t+1):b.drawLine(e,t,e+1,t),A=`${r},${a}`}else A=C.pick();yield m(50),b.fillStyle="#333",b.pFillRect(e+.1,t+.1,.8,.8)}console.log("Finish")},new((L=void 0)||(L=Promise))((function(e,t){function n(e){try{r(S.next(e))}catch(e){t(e)}}function o(e){try{r(S.throw(e))}catch(e){t(e)}}function r(t){var r;t.done?e(t.value):(r=t.value,r instanceof L?r:new L((function(e){e(r)}))).then(n,o)}r((S=S.apply(T,R||[])).next())})),b.drawLine(0,0,0,10,"yellow"),b.drawLine(0,0,10,0,"yellow"),b.drawLine(0,10,10,10,"yellow"),b.drawLine(10,0,10,10,"yellow"),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{console.log("SW registered: ",e)})).catch((e=>{console.log("SW registration failed: ",e)}))}))})()})();
//# sourceMappingURL=main.bundle.js.map