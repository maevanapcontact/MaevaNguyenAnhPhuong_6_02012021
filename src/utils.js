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

export {
  createEltWithClassName,
  createLinkElt,
  createImgElt,
  createTextualElt,
  createInteractiveListElt
}