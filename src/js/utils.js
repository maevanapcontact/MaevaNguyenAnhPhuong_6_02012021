/**
 * Creates an element with a class
 *
 * @param   {string}  eltTag    tag to create
 * @param   {string}  eltClass  class to add to the tag
 *
 * @return  {object}            created element
 */
const createEltWithClassName = (eltTag, eltClass) => {
  const elt = document.createElement(eltTag);
  elt.classList.add(eltClass);

  return elt;
}

/**
 * Create a link element with href and title attributes
 *
 * @param   {string}  linkHref   link href
 * @param   {string}  linkTitle  link title
 *
 * @return  {object}             created element
 */
const createLinkElt = (linkHref, linkTitle) => {
  const elt = document.createElement('a');
  elt.setAttribute('href', linkHref);
  elt.setAttribute('title', linkTitle);

  return elt;
}

/**
 * Create an img element with src and alt attributes
 *
 * @param   {string}  imgSrc  img src
 * @param   {string}  imgAlt  img alt text
 *
 * @return  {object}          created element
 */
const createImgElt = (imgSrc, imgAlt) => {
  const elt = document.createElement('img');
  fillImgElt(elt, imgSrc, imgAlt);
  
  return elt;
}

/**
 * Create textual element with content and class
 *
 * @param   {string}  eltTag      tag to create
 * @param   {string}  eltContent  text content to add to the tag
 * @param   {string}  eltClass    class to add to the tag
 *
 * @return  {elt}              created element
 */
const createTextualElt = (eltTag, eltContent, eltClass) => {
  const elt = createEltWithClassName(eltTag, eltClass);
  fillEltWithText(elt, eltContent);

  return elt;
}

/**
 * Create a list of interactive elements
 *
 * @param   {object}  parentElt  element to add child to
 * @param   {string}  eltText    text to add to the created element
 *
 * @return  {void}
 */
const createInteractiveListElt = (parentElt, eltText) => {
  const liElt = document.createElement('li');
  const linkElt = createLinkElt('#', eltText);
  const text = document.createTextNode(`#${eltText}`);
  linkElt.appendChild(text);
  liElt.appendChild(linkElt);

  parentElt.appendChild(liElt);
}

/**
 * Get parameter value from URL
 *
 * @param   {string}  urlString  full URL path
 * @param   {string}  param      parameter to get value of
 *
 * @return  {string}             value of the parameter for the given URL
 */
const getParamFromUrl = (urlString, param) => {
  const url = new URL(urlString);
  const paramValue = url.searchParams.get(param);

  return paramValue;
}

/**
 * Fill element with text
 *
 * @param   {object}  elt   Element to add text to
 * @param   {string}  text  Text to add to the element
 *
 * @return  {object}        The updated element
 */
const fillEltWithText = (elt, text) => {
  const content = document.createTextNode(text);
  elt.appendChild(content);

  return elt;
}

/**
 * Fill img element
 *
 * @param   {object}  elt     Image element to update
 * @param   {string}  imgSrc  Img src
 * @param   {string}  imgAlt  Img alt text
 *
 * @return  {object}          The updated img element
 */
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