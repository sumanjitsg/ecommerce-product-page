const nav = document.querySelector('.nav');
const openBtn = document.querySelector('.nav__btn--open');
const closeBtn = nav.querySelector('.nav__btn--close');

openBtn.addEventListener('click', () => {
  nav.classList.add('nav--open');
});

closeBtn.addEventListener('click', () => {
  nav.classList.replace(
    'nav--open', 'nav--closed'
  );
});

// Hide navigation on close animation completion
nav.addEventListener('animationend', ({ target }) => {
  if (target === nav && nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
  }
});