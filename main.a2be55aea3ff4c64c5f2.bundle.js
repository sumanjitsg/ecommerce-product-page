(()=>{"use strict";const e=document.querySelector("[data-side-nav-container]"),t=e.querySelector("[data-side-nav-pane]"),n=document.querySelector("[data-btn-open-side-nav]"),a=t.querySelector("[data-btn-close-side-nav]"),c=t.querySelectorAll("a"),r=t.querySelector("[data-tab-start]"),o=t.querySelector("[data-tab-end]");n.addEventListener("click",(function(){e.classList.remove("-translate-x-full"),a.tabIndex=0,c.forEach((e=>{e.tabIndex=0})),r.focus(),e.dataset.sideNavContainer="open",t.dataset.sideNavPane="open"})),a.addEventListener("click",(function(){t.dataset.sideNavPane="closed",e.dataset.sideNavContainer="closed",n.focus()})),e.addEventListener("animationend",(()=>{"closed"==e.dataset.sideNavContainer&&(t.dataset.sideNavContainer="",e.dataset.sideNavPane="",e.classList.add("-translate-x-full"),a.tabIndex=-1,c.forEach((e=>{e.tabIndex=-1})))})),r.addEventListener("keydown",(e=>{"Tab"===e.code&&!0===e.shiftKey&&(e.preventDefault(),o.focus())})),o.addEventListener("keydown",(e=>{"Tab"===e.code&&!1===e.shiftKey&&(e.preventDefault(),r.focus())})),document.querySelectorAll("[data-carousel-button]").forEach((e=>{e.addEventListener("click",(()=>{const t=function(e){return e.closest("[data-carousel]").querySelector("[data-carousel-slide-list]")}(e),n=function(e){return"prev"===e.dataset.carouselButton?-1:1}(e);!function(e,t){const n=e.querySelector('[data-carousel-slide="active"]'),a=function(e,t,n){const a=e.children;let c=Array.prototype.indexOf.call(a,t)+n;return c<0&&(c=a.length-1),c>=a.length&&(c=0),a[c]}(e,n,t);n.dataset.carouselSlide="",a.dataset.carouselSlide="active"}(t,n)}))}));const s=document.querySelector("[data-gallery]"),i=s.querySelector("[data-gallery-preview-image]"),l=s.querySelectorAll("[data-gallery-thumbnail-image]"),d=document.querySelector("[data-lightbox]"),u=d.querySelector("[data-close-lightbox]"),f=d.querySelector("[data-lightbox-preview-image]"),v=d.querySelectorAll("[data-lightbox-thumbnail-image]"),b=document.querySelectorAll("[data-lightbox-button]");function y(e,t){console.log(e),t.src=e.src.slice(0,e.src.indexOf("-thumbnail"))+e.src.slice(e.src.lastIndexOf("."))}l.forEach((e=>{e.addEventListener("click",(()=>{!function(e,t){console.log(e),t.src=e.src.slice(0,e.src.indexOf("-thumbnail"))+e.src.slice(e.src.lastIndexOf("."))}(e,i)}))})),i.addEventListener("click",(function(){d.classList.replace("hidden","flex")})),v.forEach((e=>{e.addEventListener("click",(()=>{y(e,f)}))})),b.forEach((e=>{e.addEventListener("click",(()=>{const t=function(e){return e.closest("[data-lightbox]").querySelector("[data-lightbox-slide-list]")}(e),n=function(e){return"prev"===e.dataset.lightboxButton?-1:1}(e),a=function(e,t){const n=e.querySelector('[data-lightbox-slide="active"]'),a=function(e,t,n){const a=e.children;let c=Array.prototype.indexOf.call(a,t)+n;return c<0&&(c=a.length-1),c>=a.length&&(c=0),a[c]}(e,n,t);return n.dataset.lightboxSlide="",a.dataset.lightboxSlide="active",a}(t,n);console.log(a);const c=a.firstElementChild;console.log(c),y(c,f)}))})),u.addEventListener("click",(function(){d.classList.replace("flex","hidden")}));const h=function(e,t){const n={state:{counter:0}},a={};return{getState:function(){return n.state},subscribe:function(e,t){var n;a[e]=null!==(n=a[e])&&void 0!==n?n:[],a[e].push((()=>t()))},dispatch:function(e){n.state=function(e,t){switch(t.type){case"counter/increment":return Object.assign(Object.assign({},e),{counter:e.counter+1});case"counter/decrement":return 0===e.counter?e:Object.assign(Object.assign({},e),{counter:e.counter-1});case"counter/reset":return Object.assign(Object.assign({},e),{counter:0});default:return e}}(n.state,e),a[e.type]&&a[e.type].forEach((e=>e()))}}}(),g=document.querySelector("[data-item-count]");function m(){var e,t;const n=null!==(t=null===(e=h.getState())||void 0===e?void 0:e.counter)&&void 0!==t?t:0;g.textContent=n}h.subscribe("counter/increment",m),h.subscribe("counter/decrement",m),m(),document.querySelector("[data-increment-item-count]").addEventListener("click",(()=>{h.dispatch({type:"counter/increment"})})),document.querySelector("[data-decrement-item-count]").addEventListener("click",(()=>{h.dispatch({type:"counter/decrement"})}))})();