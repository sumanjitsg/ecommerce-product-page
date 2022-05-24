const navContainer = document.querySelector('[data-side-nav-container]');
const navPane = document.querySelector('[data-side-nav-pane]');

const openButton = document.querySelector('[data-btn-open-side-nav]');

const closeButton = navContainer.querySelector('[data-btn-close-side-nav]');

openButton.addEventListener('click', () => {
  navContainer.classList.remove('invisible');
  navContainer.classList.add('show-nav');
});

closeButton.addEventListener('click', () => {
  navContainer.classList.remove('show-nav');
  navContainer.classList.add('hide-nav');
});

// Hide navigation on completion of close animation
navContainer.addEventListener('animationend', ({ target }) => {
  if (target === nav && navContainer.classList.contains('hide-nav')) {
    navContainer.classList.remove('hide-nav');
    navContainer.classList.add('invisible');
  }
});