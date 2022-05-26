export function changeActiveSlide(slides, offset) {
  // get current active slide
  const current =
    slides.querySelector(
      '[data-carousel-slide-active="true"]'
    );

  // get slide at offset
  const slide = getSlideAtOffset(slides, current, offset);

  // change active slide
  current.dataset
    .carouselSlideActive = 'false';

  slide.dataset
    .carouselSlideActive = 'true';
};

export function getParentSlides(button) {
  return (
    button
      .closest('[data-carousel]')
      .querySelector('[data-carousel-slide-list]')
  );
}

export function getChangeOffset(button) {
  return (
    button.dataset.carouselButton === 'prev'
      ? -1
      : 1
  );
}

function getSlideAtOffset(slides, slide, offset) {
  // get next slide index
  let newIndex = [ ...slides.children ].indexOf(slide) + offset;

  // if index < 0
  if (newIndex < 0) {
    newIndex = slides.children.length - 1;
  }

  // if index >= slides.length
  if (newIndex >= slides.children.length) {
    newIndex = 0;
  }

  // return slide at index
  return slides.children[ newIndex ];
}