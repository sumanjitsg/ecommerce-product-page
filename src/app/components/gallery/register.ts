import { thumbnails, previewImage } from "./dom";
import { lightbox } from "../lightbox/dom";
import { updatePreview } from "./functions";

thumbnails.forEach((thumbnailImage) => {
  thumbnailImage.addEventListener("click", () => {
    updatePreview(thumbnailImage, previewImage);
  });
});

function activateLightboxView() {
  lightbox.classList.replace("hidden", "flex");
}

previewImage.addEventListener("click", activateLightboxView);
