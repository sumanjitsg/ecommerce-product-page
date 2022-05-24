const gallery = document.querySelector('.gallery');
const preview = gallery.querySelector('.gallery__preview');
const thumbnails = gallery.querySelectorAll('.gallery__thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', ({ target }) => {
    activeImage.src =
      target.src.slice(
        0,
        target.src.indexOf('-thumbnail')
      ) +
      target.src.slice(
        target.src.lastIndexOf('.')
      );
  });
});