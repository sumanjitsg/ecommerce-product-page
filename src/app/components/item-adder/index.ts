import {
  addToCartButton,
  cartBubble,
  cartBubbleItemCount,
  cartButton,
  cartDialog,
  cartDialogEmpty,
  cartDialogItemCount,
  cartDialogItems,
  cartDialogRemoveItemsButton,
  cartDialogTotalCost,
  itemCount,
} from "./dom";

let count = parseInt(itemCount.textContent);
let cartItemCount = parseInt(cartBubbleItemCount.textContent);

function addToCart() {
  cartItemCount += count;

  cartDialogItemCount.textContent = cartItemCount.toString();
  cartDialogTotalCost.textContent = `$${125 * cartItemCount}.00`;

  count = 1;
  itemCount.textContent = count.toString();

  cartDialogEmpty.classList.add("hidden");
  cartDialogItems.classList.replace("hidden", "block");
}

function removeItemsFromCart() {
  cartDialogItems.classList.replace("block", "hidden");
  cartDialogEmpty.classList.remove("hidden");
  cartBubble.classList.replace("block", "hidden");

  cartItemCount = 0;
}

function toggleCartDialogView() {
  cartDialog.classList.toggle("hidden");
}

addToCartButton.addEventListener("click", addToCart);
cartDialogRemoveItemsButton.addEventListener("click", removeItemsFromCart);
cartButton.addEventListener("click", toggleCartDialogView);
