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
  decrementButton,
  incrementButton,
  itemCount,
} from "./dom";

let count = parseInt(itemCount.textContent);
let cartItemCount = parseInt(cartBubbleItemCount.textContent);

function incrementCount() {
  ++count;
  itemCount.textContent = count.toString();
}
function decrementCount() {
  if (count > 1) {
    --count;
    itemCount.textContent = count.toString();
  }
}

function addToCart() {
  cartItemCount += count;
  cartBubbleItemCount.textContent = cartItemCount.toString();
  cartDialogItemCount.textContent = cartItemCount.toString();
  cartDialogTotalCost.textContent = `$${125 * cartItemCount}.00`;

  count = 1;
  itemCount.textContent = count.toString();

  cartBubble.classList.replace("hidden", "block");
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

incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount);
addToCartButton.addEventListener("click", addToCart);
cartDialogRemoveItemsButton.addEventListener("click", removeItemsFromCart);
cartButton.addEventListener("click", toggleCartDialogView);
