import '../sass/styles.scss';
import './carousel';

const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const modal = document.getElementById('modal');
const nav = document.getElementById('nav');

openMenu.addEventListener('click', () => {
  modal.classList.remove('modal--closed');
  nav.classList.remove('modal--closed__nav');

  modal.classList.add('modal--open');
  nav.classList.add('modal--open__nav');
});

closeMenu.addEventListener('click', () => {
  modal.classList.replace(
    'modal--open', 'modal--closed'
  );
  nav.classList.replace(
    'modal--open__nav', 'modal--closed__nav'
  );
});

modal.addEventListener('animationend', (e) => {
  modal.classList.remove('modal--closed');
  nav.classList.remove('modal--closed__nav');
});