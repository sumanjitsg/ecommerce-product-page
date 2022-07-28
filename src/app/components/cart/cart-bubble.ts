import { store } from "app/store";

const cartBubble = document.querySelector("[data-cart-bubble]");
const cartBubbleItemCount = document.querySelector(
  "[data-cart-bubble-item-count]"
);

function render() {
  const counter = store.getState()?.cartCounter ?? 0;

  cartBubbleItemCount.textContent = counter.toString();

  if (counter > 0) {
    cartBubble.classList.replace("hidden", "block");
  }
}

store.subscribe(render);
render();
