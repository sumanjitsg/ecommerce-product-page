export function changeActiveSlide( slides: HTMLUListElement, offset: number ): void {
  // get current active slide
  const activeSlide: HTMLLIElement = slides.querySelector(
    '[data-carousel-slide-active="true"]'
  );

  // get slide at offset
  const offsetSlide: HTMLLIElement = getSlideAtOffset( slides, activeSlide, offset );

  // change active slide
  activeSlide.dataset.carouselSlideActive = 'false';
  offsetSlide.dataset.carouselSlideActive = 'true';
};

export function getParentSlides( button: HTMLButtonElement ): HTMLUListElement {
  return (
    button
      .closest( '[data-carousel]' )
      .querySelector( '[data-carousel-slide-list]' )
  );
}

export function getChangeOffset( button: HTMLButtonElement ): number {
  return button.dataset.carouselButton === 'prev' ? -1 : 1;
}

function getSlideAtOffset( slides: HTMLUListElement, slide: HTMLLIElement, offset: number ): HTMLLIElement {
  // get next slide index
  const slideCollection = slides.children;
  let newIndex = Array.prototype.indexOf.call( slideCollection, slide ) + offset;

  // if index < 0
  if ( newIndex < 0 ) {
    newIndex = slideCollection.length - 1;
  }

  // if index >= slides.length
  if ( newIndex >= slideCollection.length ) {
    newIndex = 0;
  }

  // return slide at index
  return slideCollection[ newIndex ] as HTMLLIElement;
}