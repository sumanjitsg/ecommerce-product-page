const buttons = document.querySelectorAll('.carousel__btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // get slide list
    const slides = button
      .closest('.carousel')
      .querySelector('.carousel__slide-list');

    // get offset
    const offset = button.classList
      .contains('carousel__btn--next') ? 1 : -1;

    // get current active slide
    const activeSlide = slides.querySelector('.carousel__slide--active');

    // calculate new active slide index
    let newIndex = [ ...slides.children ].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    // change active slide
    slides.children[ newIndex ].classList.add('carousel__slide--active');
    activeSlide.classList.remove('carousel__slide--active');
  });
});