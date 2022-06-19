import {
  closeButton,
  links,
  navContainer,
  navPane,
  openButton,
  tabStartEl,
} from "./dom";

// Open nav
export function openNav() {
  // Turn nav visible
  navContainer.classList.remove("-translate-x-full");

  closeButton.tabIndex = 0;
  links.forEach((link) => {
    link.tabIndex = 0;
  });

  tabStartEl.focus();

  navContainer.dataset.sideNavContainer = "open";
  navPane.dataset.sideNavPane = "open";
}

// Close nav
export function closeNav() {
  navPane.dataset.sideNavPane = "closed";
  navContainer.dataset.sideNavContainer = "closed";
  openButton.focus();
}

// Remove nav
export function removeNav() {
  navPane.dataset.sideNavContainer = "";
  navContainer.dataset.sideNavPane = "";

  // Turn nav invisible
  navContainer.classList.add("-translate-x-full");

  closeButton.tabIndex = -1;
  links.forEach((link) => {
    link.tabIndex = -1;
  });
}
