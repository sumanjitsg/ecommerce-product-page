import { incrementCounter, store } from "app/store";

const incrementButtonEl = document.querySelector("[data-increment-item-count]");

incrementButtonEl.addEventListener("click", () => {
  store.dispatch(incrementCounter());
});
