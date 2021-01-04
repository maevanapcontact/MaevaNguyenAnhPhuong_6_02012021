import './scss/main.scss';
import data from './data';
import { createPhotographerElt } from './photographer-elt';

const photographersSection = document.getElementById('photographers');

for (let i = 0; i < data.photographers.length; i++) {
  photographersSection.appendChild(createPhotographerElt(data.photographers[i]));
}