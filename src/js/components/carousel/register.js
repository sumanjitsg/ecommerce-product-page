import { buttons } from './dom';
import { getParentSlides, getChangeOffset, changeActiveSlide } from './functions';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // get parent slides
    const slides = getParentSlides(button);

    // get offset
    const offset = getChangeOffset(button);

    // change active slide
    changeActiveSlide(slides, offset);
  });
});