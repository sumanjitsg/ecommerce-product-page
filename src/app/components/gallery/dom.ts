export const gallery: HTMLElement = document.querySelector("[data-gallery]");
export const previewImage: HTMLImageElement = gallery.querySelector(
  "[data-gallery-preview-image]"
);
export const thumbnails: NodeListOf<HTMLImageElement> =
  gallery.querySelectorAll("[data-gallery-thumbnail-image]");
