import { incrementCounter, store } from "app/store";

const incrementBtnEl = document.querySelector("[data-increment-item-count]");

incrementBtnEl.addEventListener("click", () => {
  store.dispatch(incrementCounter());
});
