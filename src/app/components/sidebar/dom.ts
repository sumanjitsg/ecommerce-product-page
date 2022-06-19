// Side nav container
export const navContainer: HTMLElement = document.querySelector(
  "[data-side-nav-container]"
);

// Side nav pane
export const navPane: HTMLElement = navContainer.querySelector(
  "[data-side-nav-pane]"
);

// Open side nav button
export const openButton: HTMLElement = document.querySelector(
  "[data-btn-open-side-nav]"
);

// Close side nav button
export const closeButton: HTMLElement = navPane.querySelector(
  "[data-btn-close-side-nav]"
);

// todo: better querySelector, probably add data- attr to all tabbable elements
export const links: NodeListOf<HTMLElement> = navPane.querySelectorAll("a");

// First tabbable child element
export const tabStartEl: HTMLElement =
  navPane.querySelector("[data-tab-start]");

// Last tabbable child element
export const tabEndEl: HTMLElement = navPane.querySelector("[data-tab-end]");
