// Side nav container
export const navContainer: HTMLElement = document.querySelector(
  "[data-side-nav-container]"
);

// Side nav pane
export const navPane: HTMLElement = document.querySelector(
  "[data-side-nav-pane]"
);

// Open side nav button
export const openButton: HTMLElement = document.querySelector(
  "[data-btn-open-side-nav]"
);

// Close side nav button
export const closeButton: HTMLElement = navContainer.querySelector(
  "[data-btn-close-side-nav]"
);

// First tabbable child element
export const tabStartEl: HTMLElement =
  navContainer.querySelector("[data-tab-start]");

// Last tabbable child element
export const tabEndEl: HTMLElement =
  navContainer.querySelector("[data-tab-end]");
