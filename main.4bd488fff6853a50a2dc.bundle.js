(()=>{"use strict";const e=document.querySelector("[data-side-nav-container]"),t=e.querySelector("[data-side-nav-pane]"),n=document.querySelector("[data-btn-open-side-nav]"),a=t.querySelector("[data-btn-close-side-nav]"),c=t.querySelectorAll("a"),r=t.querySelector("[data-tab-start]"),o=t.querySelector("[data-tab-end]");n.addEventListener("click",(function(){e.classList.remove("-translate-x-full"),a.tabIndex=0,c.forEach((e=>{e.tabIndex=0})),r.focus(),e.dataset.sideNavContainer="open",t.dataset.sideNavPane="open"})),a.addEventListener("click",(function(){t.dataset.sideNavPane="closed",e.dataset.sideNavContainer="closed",n.focus()})),e.addEventListener("animationend",(()=>{"closed"==e.dataset.sideNavContainer&&(t.dataset.sideNavContainer="",e.dataset.sideNavPane="",e.classList.add("-translate-x-full"),a.tabIndex=-1,c.forEach((e=>{e.tabIndex=-1})))})),r.addEventListener("keydown",(e=>{"Tab"===e.code&&!0===e.shiftKey&&(e.preventDefault(),o.focus())})),o.addEventListener("keydown",(e=>{"Tab"===e.code&&!1===e.shiftKey&&(e.preventDefault(),r.focus())})),document.querySelectorAll("[data-carousel-button]").forEach((e=>{e.addEventListener("click",(()=>{const t=function(e){return e.closest("[data-carousel]").querySelector("[data-carousel-slide-list]")}(e),n=function(e){return"prev"===e.dataset.carouselButton?-1:1}(e);!function(e,t){const n=e.querySelector('[data-carousel-slide="active"]'),a=function(e,t,n){const a=e.children;let c=Array.prototype.indexOf.call(a,t)+n;return c<0&&(c=a.length-1),c>=a.length&&(c=0),a[c]}(e,n,t);n.dataset.carouselSlide="",a.dataset.carouselSlide="active"}(t,n)}))}));const i=document.querySelector("[data-gallery]"),s=i.querySelector("[data-gallery-preview-image]"),l=i.querySelectorAll("[data-gallery-thumbnail-image]"),d=document.querySelector("[data-lightbox]"),u=d.querySelector("[data-close-lightbox]"),v=d.querySelector("[data-lightbox-preview-image]"),g=d.querySelectorAll("[data-lightbox-thumbnail-image]"),b=document.querySelectorAll("[data-lightbox-button]");function f(e,t){console.log(e),t.src=e.src.slice(0,e.src.indexOf("-thumbnail"))+e.src.slice(e.src.lastIndexOf("."))}l.forEach((e=>{e.addEventListener("click",(()=>{!function(e,t){console.log(e),t.src=e.src.slice(0,e.src.indexOf("-thumbnail"))+e.src.slice(e.src.lastIndexOf("."))}(e,s)}))})),s.addEventListener("click",(function(){d.classList.replace("hidden","flex")})),g.forEach((e=>{e.addEventListener("click",(()=>{f(e,v)}))})),b.forEach((e=>{e.addEventListener("click",(()=>{const t=function(e){return e.closest("[data-lightbox]").querySelector("[data-lightbox-slide-list]")}(e),n=function(e){return"prev"===e.dataset.lightboxButton?-1:1}(e),a=function(e,t){const n=e.querySelector('[data-lightbox-slide="active"]'),a=function(e,t,n){const a=e.children;let c=Array.prototype.indexOf.call(a,t)+n;return c<0&&(c=a.length-1),c>=a.length&&(c=0),a[c]}(e,n,t);return n.dataset.lightboxSlide="",a.dataset.lightboxSlide="active",a}(t,n);console.log(a);const c=a.firstElementChild;console.log(c),f(c,v)}))})),u.addEventListener("click",(function(){d.classList.replace("flex","hidden")}));const m=function(e,t){const n={state:{counter:0,cartCounter:0}},a=[];return{getState:function(){return n.state},subscribe:function(e){a.push((()=>e()))},dispatch:function(e){n.state=function(e,t){var n;switch(t.type){case"counter/increment":return Object.assign(Object.assign({},e),{counter:e.counter+1});case"counter/decrement":return 0===e.counter?e:Object.assign(Object.assign({},e),{counter:e.counter-1});case"counter/reset":return Object.assign(Object.assign({},e),{counter:0});case"cartCounter/incrementBy":return console.log("cartCounter/incrementBy: ",t,e),Object.assign(Object.assign({},e),{cartCounter:e.cartCounter+(null===(n=t.payload)||void 0===n?void 0:n.value)});case"cartCounter/reset":return console.log("cartCounter/reset: ",t,e),Object.assign(Object.assign({},e),{cartCounter:0});default:return e}}(n.state,e),a.forEach((e=>e()))}}}(),y=document.querySelector("[data-item-count]");function p(){var e,t;const n=null!==(t=null===(e=m.getState())||void 0===e?void 0:e.counter)&&void 0!==t?t:0;y.textContent=n}m.subscribe(p),p(),document.querySelector("[data-increment-item-count]").addEventListener("click",(()=>{m.dispatch({type:"counter/increment"})})),document.querySelector("[data-decrement-item-count]").addEventListener("click",(()=>{m.dispatch({type:"counter/decrement"})})),document.querySelector("[data-add-to-cart]").addEventListener("click",(()=>{var e,t;const n=null!==(t=null===(e=m.getState())||void 0===e?void 0:e.counter)&&void 0!==t?t:0;m.dispatch({type:"counter/reset"}),m.dispatch(function(e){return{type:"cartCounter/incrementBy",payload:{value:e}}}(n))}));const h=document.querySelector("[data-cart-bubble]"),x=document.querySelector("[data-cart-bubble-item-count]");function S(){var e,t;const n=null!==(t=null===(e=m.getState())||void 0===e?void 0:e.cartCounter)&&void 0!==t?t:0;x.textContent=n.toString(),0===n?h.classList.add("hidden"):h.classList.remove("hidden")}m.subscribe(S),S();const q=document.querySelector("[data-cart]"),L=document.querySelector("[data-cart-dialog]");function E(){var e,t;const n=null!==(t=null===(e=m.getState())||void 0===e?void 0:e.cartCounter)&&void 0!==t?t:0;q.ariaLabel=`Cart, ${1===n?"1 item":`${n} items`}, Open cart`}q.addEventListener("click",(function(){L.classList.toggle("hidden")})),m.subscribe(E),E();const C=document.querySelector("[data-cart-dialog-content]");function k(){m.dispatch({type:"cartCounter/reset"})}function O(){var e,t;const n=null!==(t=null===(e=m.getState())||void 0===e?void 0:e.cartCounter)&&void 0!==t?t:0;0===n?(console.log("cart dialog: "+n),C.innerHTML='\n    <div\n    class="flex items-center justify-center min-h-[12rem]"\n    >\n      <p class="text-gray-400 font-bold leading-relaxed">You cart is empty.</p>\n    </div>\n    '):(console.log("cart dialog: "+n),C.innerHTML=`\n    <div class="min-h-[12rem]">\n    <div class="px-6 py-6 flex items-center justify-between">\n      <div class="w-[50px] rounded-[4px] overflow-hidden">\n        <img src="assets/image-product-1-thumbnail.jpg" alt="" />\n      </div>\n      <div>\n        <p class="text-gray-400 leading-relaxed">\n          Fall Limited Edition Snickers\n        </p>\n        <div class="flex gap-x-2">\n          <p class="text-gray-400 leading-relaxed">\n            $125.00 x <span>${n}</span>\n          </p>\n          <p\n            class="font-bold text-gray-700 leading-relaxed"\n            data-cart-dialog-total-cost\n          >$${125*n}</p>\n        </div>\n      </div>\n      <div>\n        <button data-remove-cart-items>\n          <img src="assets/icon-delete.svg" alt="" />\n        </button>\n      </div>\n    </div>\n    <div class="mx-6 mb-8">\n      <button\n        class="w-full py-4 rounded-[10px] bg-orange-400 font-bold leading-tight text-white"\n      >\n        Checkout\n      </button>\n    </div>\n  </div>\n    `,document.querySelector("[data-remove-cart-items]").addEventListener("click",k))}m.subscribe(O),O()})();