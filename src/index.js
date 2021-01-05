import './scss/main.scss';
import data from './data';
import { createPhotographerElt } from './photographer-elt';
import { createPhotographerPage } from './photographer-page';

const photographersSection = document.getElementById('photographers');

if (document.location.pathname.includes('index.html')) {
  for (let i = 0; i < data.photographers.length; i++) {
    photographersSection.appendChild(createPhotographerElt(data.photographers[i]));
  }
}

if (document.location.pathname.includes('photographer-page.html')) {
  createPhotographerPage();
}