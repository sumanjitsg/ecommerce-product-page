(()=>{"use strict";var e={370:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},361:(e,t,o)=>{e.exports=o.p+"736eae1ff09acfe04c50.png"},289:(e,t,o)=>{e.exports=o.p+"c390448669f3a8a4c4b2.svg"},812:(e,t,o)=>{e.exports=o.p+"c6107d03f1edcf73523e.svg"},3:(e,t,o)=>{e.exports=o.p+"f5073aa8273785ecf6b7.svg"},165:(e,t,o)=>{e.exports=o.p+"b297868c5f938612f4f0.svg"},65:(e,t,o)=>{e.exports=o.p+"faae000862fa4e4f34e8.png"},321:(e,t,o)=>{e.exports=o.p+"520cc50bd13955f55cb2.jpg"},762:(e,t,o)=>{e.exports=o.p+"4fe9c1e86cf9bf600f0c.svg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.m=e,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o.b=document.baseURI||self.location.href,(()=>{var e=o(370),t=o.n(e),n=new URL(o(361),o.b),r=new URL(o(812),o.b),s=new URL(o(762),o.b),a=new URL(o(65),o.b),c=new URL(o(289),o.b),l=new URL(o(321),o.b),d=new URL(o(3),o.b),p=new URL(o(165),o.b);t()(n),t()(r),t()(s),t()(a),t()(c),t()(l),t()(d),t()(p);const i=document.getElementById("open-menu"),f=document.getElementById("close-menu"),m=document.getElementById("modal"),u=document.getElementById("nav");i.addEventListener("click",(()=>{m.classList.remove("modal--closed"),u.classList.remove("modal--closed__nav"),m.classList.add("modal--open"),u.classList.add("modal--open__nav")})),f.addEventListener("click",(()=>{m.classList.replace("modal--open","modal--closed"),u.classList.replace("modal--open__nav","modal--closed__nav")})),m.addEventListener("animationend",(e=>{m.classList.remove("modal--closed"),u.classList.remove("modal--closed__nav")}))})()})();