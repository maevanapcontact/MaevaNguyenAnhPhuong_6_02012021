import data from './data';
import { createPhotographerElt } from './photographer-elt';

/**
 * DOM Elements
 */
const tagsElt = document.getElementById('tags');
const photographersElt = document.getElementById('photographers');

/**
 * Photographers data
 *
 * @const {Array}
 */
const photographers = data.photographers;

/**
 * Generate an array of photographers to display based on filter tags
 *
 * @return  {[type]}  [return description]
 */
const getFilteredPhotographers = () => {
  const childrenElts = tagsElt.childNodes;
  let photographersToDisplay = [];

  childrenElts.forEach(elt => {
    if (elt.className == 'selected') {
      photographers.forEach(photographer => {
        if (photographer.tags.includes(elt.lastChild.textContent.toLowerCase()) && !photographersToDisplay.includes(photographer)) {
          photographersToDisplay.push(photographer)
        }
      })
    }
  })

  if (photographersToDisplay.length === 0) return photographers;
  return photographersToDisplay;
}

/**
 * Toggle filter tag to display new filtered photographers (DOM)
 *
 * @param   {object}  e  event
 *
 * @return  {void}
 */
const toggleFilter = (e) => {
  const target = e.target;
  if (target.tagName === 'SPAN') target.parentNode.classList.toggle('selected');
  if (target.tagName === 'LI') target.classList.toggle('selected');

  let photographerToDisplay = getFilteredPhotographers();
  photographersElt.innerHTML = '';
  photographerToDisplay.forEach(photographer => photographersElt.appendChild(createPhotographerElt(photographer)));
}

export { getFilteredPhotographers, toggleFilter }