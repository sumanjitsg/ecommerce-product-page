import { store } from "app/store";

import "app/components/cart/cart-bubble";

const cartButtonEl = document.querySelector("[data-cart]");

function render() {
  const counter = store.getState()?.cartCounter ?? 0;

  // todo: aria live region probably (shift screen reader focus on items added)
  // todo: re-use label text, used in html and here
  cartButtonEl.ariaLabel = `Cart, ${
    counter === 1 ? "1 item" : `${counter} items`
  }, Open cart`;
}

store.subscribe(render);
render();
