import {
  createEltWithClassName,
  createLinkElt,
  createImgElt,
  createTextualElt,
  createInteractiveListElt
} from './utils';

/**
 * Build DOM photographer Element
 * 
 * @param {object} data The database model
 *
 * @return {object} The element created
 */
const createPhotographerElt = data => {
  const articleElt = createEltWithClassName('article', 'photographers-elt');
  const aElt = createLinkElt(`photographer-page.html?id=${data.id}`, data.name);
  const pElt = createEltWithClassName('p', 'infos');
  const ulElt = createEltWithClassName('ul', 'tags');
  articleElt.appendChild(aElt);
  articleElt.appendChild(pElt);
  articleElt.appendChild(ulElt);

  const imgElt = createImgElt(`images/${data.portrait}`, '');
  const h2Elt = createTextualElt('h2', data.name, 'photographer-name');
  aElt.appendChild(imgElt);
  aElt.appendChild(h2Elt);

  const cityElt = createTextualElt('span', `${data.city}, ${data.country}`, 'infos-city');
  const taglineElt = createTextualElt('span', data.tagline, 'infos-tagline');
  const priceElt = createTextualElt('span', `${data.price}€/jour`, 'infos-price');
  pElt.appendChild(cityElt);
  pElt.appendChild(taglineElt);
  pElt.appendChild(priceElt);

  data.tags.forEach(tag => createInteractiveListElt(ulElt, tag));

  return articleElt;
}

export { createPhotographerElt };