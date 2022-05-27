import { navContainer, navPane } from './dom';

// Open nav
export const openNav = () => {
  // Turn nav visible
  navContainer.classList.remove( 'invisible' );

  // Add open classes
  navContainer.classList.add( 'open' );
  navPane.classList.add( 'open' );
};

// Close nav
export const closeNav = () => {
  // Remove open classes. Add closed classes
  navPane.classList.replace( 'open', 'closed' );
  navContainer.classList.replace( 'open', 'closed' );
};

// Remove nav
export const removeNav = () => {
  // Remove closed classes
  navPane.classList.remove( 'closed' );
  navContainer.classList.remove( 'closed' );

  // Turn nav invisible
  navContainer.classList.add( 'invisible' );
};