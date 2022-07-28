import { store } from "app/store";

const counterEl = document.querySelector("[data-item-count]");

function render() {
  // todo: check if counter defined
  const counterValue = store.getState()?.counter ?? 0;
  counterEl.textContent = counterValue;
}

store.subscribe(render);

render();
