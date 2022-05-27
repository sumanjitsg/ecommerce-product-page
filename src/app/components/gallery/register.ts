const gallery: HTMLElement = document.querySelector( '.gallery' );
const preview: HTMLElement = gallery.querySelector( '.gallery__preview' );
const thumbnails: NodeListOf<HTMLElement> = gallery.querySelectorAll( '.gallery__thumbnail' );
const previewImage: HTMLElement = gallery.querySelector( '[data-gallery-preview-image]' );

thumbnails.forEach( thumbnail => {
  thumbnail.addEventListener( 'click', ( { target } ) => {
    // activeImage.src =
    //   target.src.slice(
    //     0,
    //     target.src.indexOf( '-thumbnail' )
    //   ) +
    //   target.src.slice(
    //     target.src.lastIndexOf( '.' )
    //   );
  } );
} );