import { decrementCounter, store } from "app/store";

const decrementBtnEl = document.querySelector("[data-decrement-item-count]");

// todo: disable button on counter = 0
decrementBtnEl.addEventListener("click", () => {
  store.dispatch(decrementCounter());
});
