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
  fillImgElt(elt, imgSrc, imgAlt);
  
  return elt;
}

/** Create textual element with content and class */
const createTextualElt = (eltTag, eltContent, eltClass) => {
  let elt = createEltWithClassName(eltTag, eltClass);
  fillEltWithText(elt, eltContent);

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

/** Get parameter value from URL */
const getParamFromUrl = (urlString, param) => {
  let url = new URL(urlString);
  let paramValue = url.searchParams.get(param);

  return paramValue;
}

/** Fill element with text */
const fillEltWithText = (elt, text) => {
  let content = document.createTextNode(text);
  elt.appendChild(content);

  return elt;
}

/** Fill img element */
const fillImgElt = (elt, imgSrc, imgAlt) => {
  elt.setAttribute('src', imgSrc);
  elt.setAttribute('alt', imgAlt);

  return elt;
}

export {
  createEltWithClassName,
  createLinkElt,
  createImgElt,
  createTextualElt,
  createInteractiveListElt,
  getParamFromUrl,
  fillEltWithText,
  fillImgElt
}