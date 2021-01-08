import '../scss/main.scss';
import { createPhotographerElt } from './photographer-elt';
import { createPhotographerPage } from './photographer-page';
import { filterTags } from './filter-tags';

const photographersSection = document.getElementById('photographers');

if (document.location.pathname.includes('index.html')) {
  let photographerToDisplay = filterTags();
  for (let i = 0; i < photographerToDisplay.length; i++) {
    photographersSection.appendChild(createPhotographerElt(photographerToDisplay[i]));
  }
}

if (document.location.pathname.includes('photographer-page.html')) {
  createPhotographerPage();
}