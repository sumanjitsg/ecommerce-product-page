import {
  thumbnails,
  previewImage,
  buttons,
  closeLightboxButton,
  lightbox,
} from "./dom";
import {
  updatePreview,
  getParentSlides,
  getChangeOffset,
  changeActiveSlide,
} from "./functions";

thumbnails.forEach((thumbnailImage) => {
  thumbnailImage.addEventListener("click", () => {
    updatePreview(thumbnailImage, previewImage);
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // get parent slides
    const slides = getParentSlides(button);

    // get offset
    const offset = getChangeOffset(button);

    // change active slide
    const offsetSlide = changeActiveSlide(slides, offset);
    console.log(offsetSlide);
    // update preview
    const slideImage: HTMLImageElement =
      offsetSlide.firstElementChild as HTMLImageElement;
    console.log(slideImage);
    updatePreview(slideImage, previewImage);
  });
});

function closeLightbox() {
  lightbox.classList.replace("flex", "hidden");
}

closeLightboxButton.addEventListener("click", closeLightbox);
