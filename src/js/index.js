import '../scss/main.scss';
import { createHomepage } from './homepage';
import { createPhotographerPage } from './photographer-page';

const path = document.location.pathname;

/**
 * Build the homepage
 */
if (path.includes('index.html')) createHomepage();


/**
 * Build the photographer page
 */
if (path.includes('photographer-page.html')) createPhotographerPage();