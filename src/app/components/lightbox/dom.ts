export const lightbox: HTMLElement = document.querySelector("[data-lightbox]");

export const closeLightboxButton: HTMLImageElement = lightbox.querySelector(
  "[data-close-lightbox]"
);

export const previewImage: HTMLImageElement = lightbox.querySelector(
  "[data-lightbox-preview-image]"
);

export const thumbnails: NodeListOf<HTMLImageElement> =
  lightbox.querySelectorAll("[data-lightbox-thumbnail-image]");

// lightbox buttons
export const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
  "[data-lightbox-button]"
);
