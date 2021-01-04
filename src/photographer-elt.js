/** Creates the photographer element */
const createPhotographerElt = data => {
  let articleElt = createEltWithClassName('article', 'photographers-elt');
  let aElt = createLinkElt(`${data.id}.html`, data.name);
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

/** Creates an element with a class */
const createEltWithClassName = (eltTag, eltClass) => {
  let elt = document.createElement(eltTag);
  elt.classList.add(eltClass);

  return elt;
}

/** Create a link element with href and title attributes */
const createLinkElt = (linkHref, linkTitle) => {
  let elt = document.createElement('a');
  elt.setAttribute('href', linkHref);
  elt.setAttribute('title', linkTitle);

  return elt;
}

/** Create an img element with src and alt attributes */
const createImgElt = (imgSrc, imgAlt) => {
  let elt = document.createElement('img');
  elt.setAttribute('src', imgSrc);
  elt.setAttribute('alt', imgAlt);

  return elt;
}

/** Create textual element with content and class */
const createTextualElt = (eltTag, eltContent, eltClass) => {
  let elt = createEltWithClassName(eltTag, eltClass);
  let content = document.createTextNode(eltContent);
  elt.appendChild(content);

  return elt;
}

/** Create a list of interactive elements */
const createInteractiveListElt = (parentElt, elt) => {
  let liElt = document.createElement('li');
  let linkElt = createLinkElt('#', elt);
  let text = document.createTextNode(`#${elt}`);
  linkElt.appendChild(text);
  liElt.appendChild(linkElt);

  parentElt.appendChild(liElt);
}

export { createPhotographerElt };