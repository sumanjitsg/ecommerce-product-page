import { store, resetCounter, incrementCartCounterBy } from "app/store";

const addToCartButton = document.querySelector("[data-add-to-cart]");

addToCartButton.addEventListener("click", () => {
  const value = store.getState()?.counter ?? 0;
  store.dispatch(resetCounter());
  store.dispatch(incrementCartCounterBy(value));
});
