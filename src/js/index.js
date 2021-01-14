import '../scss/main.scss';
import { createHomepage } from './homepage';
import { createPhotographerPage } from './photographer-page';

const path = window.location.pathname;

/**
 * Create correct page based on the pathname
 */
if (path.includes('photographer-page.html')) createPhotographerPage();
else createHomepage();