export function updatePreview(
  thumbnailImage: HTMLImageElement,
  previewImage: HTMLImageElement
) {
  console.log(thumbnailImage);
  previewImage.src =
    thumbnailImage.src.slice(0, thumbnailImage.src.indexOf("-thumbnail")) +
    thumbnailImage.src.slice(thumbnailImage.src.lastIndexOf("."));
}
