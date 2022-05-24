import { openButton, closeButton, navContainer } from './dom';
import { openNav, closeNav, removeNav } from './listeners';

// Event listeners

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);

navContainer.addEventListener('animationend', () => {
  // if nav closing animation
  if (navContainer.classList.contains('closed')
  ) {
    removeNav();
  }
});