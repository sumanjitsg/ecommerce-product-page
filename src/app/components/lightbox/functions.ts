export function updatePreview(
  thumbnailImage: HTMLImageElement,
  previewImage: HTMLImageElement
) {
  console.log(thumbnailImage);
  previewImage.src =
    thumbnailImage.src.slice(0, thumbnailImage.src.indexOf("-thumbnail")) +
    thumbnailImage.src.slice(thumbnailImage.src.lastIndexOf("."));
}

export function changeActiveSlide(
  slides: HTMLUListElement,
  offset: number
): HTMLLIElement {
  // get current active slide
  const activeSlide: HTMLLIElement = slides.querySelector(
    '[data-lightbox-slide="active"]'
  );

  // get slide at offset
  const offsetSlide: HTMLLIElement = getSlideAtOffset(
    slides,
    activeSlide,
    offset
  );

  // change active slide
  activeSlide.dataset.lightboxSlide = "";
  offsetSlide.dataset.lightboxSlide = "active";

  return offsetSlide;
}

export function getParentSlides(button: HTMLButtonElement): HTMLUListElement {
  return button
    .closest("[data-lightbox]")
    .querySelector("[data-lightbox-slide-list]");
}

export function getChangeOffset(button: HTMLButtonElement): number {
  return button.dataset.lightboxButton === "prev" ? -1 : 1;
}

function getSlideAtOffset(
  slides: HTMLUListElement,
  slide: HTMLLIElement,
  offset: number
): HTMLLIElement {
  // get next slide index
  const slideCollection = slides.children;
  let newIndex = Array.prototype.indexOf.call(slideCollection, slide) + offset;

  // if index < 0
  if (newIndex < 0) {
    newIndex = slideCollection.length - 1;
  }

  // if index >= slides.length
  if (newIndex >= slideCollection.length) {
    newIndex = 0;
  }

  // return slide at index
  return slideCollection[newIndex] as HTMLLIElement;
}
