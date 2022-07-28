import { decrementCounter, store } from "app/store";

const decrementButtonEl = document.querySelector("[data-decrement-item-count]");

// todo: disable button on counter = 0
decrementButtonEl.addEventListener("click", () => {
  store.dispatch(decrementCounter());
});
