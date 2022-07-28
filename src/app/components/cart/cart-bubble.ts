import { store } from "app/store";

const cartBubbleEl = document.querySelector("[data-cart-bubble]");
const cartBubbleItemCountEl = document.querySelector(
  "[data-cart-bubble-item-count]"
);

function render() {
  const counter = store.getState()?.cartCounter ?? 0;

  cartBubbleItemCountEl.textContent = counter.toString();

  if (counter === 0) {
    cartBubbleEl.classList.add("hidden");
  } else {
    cartBubbleEl.classList.remove("hidden");
  }
}

store.subscribe(render);
render();
