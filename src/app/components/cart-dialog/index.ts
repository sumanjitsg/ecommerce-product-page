import { store, resetCartCounter } from "app/store";

const cartDialogContentEl = document.querySelector(
  "[data-cart-dialog-content]"
);

function removeItemsFromCart() {
  store.dispatch(resetCartCounter());
}

function render() {
  const counter = store.getState()?.cartCounter ?? 0;

  if (counter === 0) {
    console.log("cart dialog: " + counter);
    cartDialogContentEl.innerHTML = `
    <div
    class="flex items-center justify-center min-h-[12rem]"
    >
      <p class="text-gray-400 font-bold leading-relaxed">You cart is empty.</p>
    </div>
    `;
  } else {
    console.log("cart dialog: " + counter);

    cartDialogContentEl.innerHTML = `
    <div class="min-h-[12rem]">
    <div class="px-6 py-6 flex items-center justify-between">
      <div class="w-[50px] rounded-[4px] overflow-hidden">
        <img src="assets/image-product-1-thumbnail.jpg" alt="" />
      </div>
      <div>
        <p class="text-gray-400 leading-relaxed">
          Fall Limited Edition Snickers
        </p>
        <div class="flex gap-x-2">
          <p class="text-gray-400 leading-relaxed">
            $125.00 x <span>${counter}</span>
          </p>
          <p
            class="font-bold text-gray-700 leading-relaxed"
            data-cart-dialog-total-cost
          >$${125.0 * counter}</p>
        </div>
      </div>
      <div>
        <button data-remove-cart-items>
          <img src="assets/icon-delete.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="mx-6 mb-8">
      <button
        class="w-full py-4 rounded-[10px] bg-orange-400 font-bold leading-tight text-white"
      >
        Checkout
      </button>
    </div>
  </div>
    `;

    const cartDialogRemoveItemsButtonEl = document.querySelector(
      "[data-remove-cart-items]"
    );

    cartDialogRemoveItemsButtonEl.addEventListener(
      "click",
      removeItemsFromCart
    );
  }
}

store.subscribe(render);
render();
