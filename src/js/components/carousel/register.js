import { buttons } from './dom';
import { changeActiveSlide } from './functions';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    changeActiveSlide(button);
  });
});