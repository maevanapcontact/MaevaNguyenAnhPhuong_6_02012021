import {
  createEltWithClassName,
  createLinkElt,
  createImgElt,
  createTextualElt,
  createInteractiveListElt
} from './utils';

/** Creates the photographer element */
const createPhotographerElt = data => {
  let articleElt = createEltWithClassName('article', 'photographers-elt');
  let aElt = createLinkElt(`photographer-page.html?id=${data.id}`, data.name);
  let pElt = createEltWithClassName('p', 'infos');
  let ulElt = createEltWithClassName('ul', 'tags');
  articleElt.appendChild(aElt);
  articleElt.appendChild(pElt);
  articleElt.appendChild(ulElt);

  let imgElt = createImgElt(`images/${data.portrait}`, data.alt);
  let h2Elt = createTextualElt('h2', data.name, 'photographer-name');
  aElt.appendChild(imgElt);
  aElt.appendChild(h2Elt);

  let cityElt = createTextualElt('span', `${data.city}, ${data.country}`, 'infos-city');
  let taglineElt = createTextualElt('span', data.tagline, 'infos-tagline');
  let priceElt = createTextualElt('span', `${data.price}€/jour`, 'infos-price');
  pElt.appendChild(cityElt);
  pElt.appendChild(taglineElt);
  pElt.appendChild(priceElt);

  data.tags.forEach(tag => createInteractiveListElt(ulElt, tag));

  return articleElt;
}

export { createPhotographerElt };