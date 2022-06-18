import {
  openButton,
  closeButton,
  navContainer,
  tabStartEl,
  tabEndEl,
} from "./dom";
import { openNav, closeNav, removeNav } from "./functions";

// Event listeners

openButton.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);

navContainer.addEventListener("animationend", () => {
  // if nav closing animation
  if (navContainer.dataset.sideNavContainer == "closed") {
    removeNav();
  }
});

tabStartEl.addEventListener("keydown", (e) => {
  if (e.code === "Tab" && e.shiftKey === true) {
    e.preventDefault();
    tabEndEl.focus();
  }
});

tabEndEl.addEventListener("keydown", (e) => {
  if (e.code === "Tab" && e.shiftKey === false) {
    e.preventDefault();
    tabStartEl.focus();
  }
});
