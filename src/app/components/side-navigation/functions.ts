import { navContainer, navPane } from "./dom";

// Open nav
export function openNav() {
  // Turn nav visible
  navContainer.classList.remove("invisible");

  navContainer.dataset.sideNavContainer = "open";
  navPane.dataset.sideNavPane = "open";
}

// Close nav
export function closeNav() {
  navPane.dataset.sideNavPane = "closed";
  navContainer.dataset.sideNavContainer = "closed";
}

// Remove nav
export function removeNav() {
  navPane.dataset.sideNavContainer = "";
  navContainer.dataset.sideNavPane = "";

  // Turn nav invisible
  navContainer.classList.add("invisible");
}
