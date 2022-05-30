import { thumbnails, previewImage } from "./dom";
import { updatePreview } from "./functions";

thumbnails.forEach((thumbnailImage) => {
  thumbnailImage.addEventListener("click", () => {
    updatePreview(thumbnailImage, previewImage);
  });
});
