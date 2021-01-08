import data from './data';
import { createPhotographerElt } from './photographer-elt';

/** Filter tags */
const filterTags = () => {
  const tagsElt = document.getElementById('tags');
  let childrenElts = tagsElt.childNodes;

  let photographersToDisplay = [];

  for (let i = 0; i < childrenElts.length; i++) {
    if (childrenElts[i].className == 'selected') {
      for (let j = 0; j < data.photographers.length; j++) {
        if (data.photographers[j].tags.includes(childrenElts[i].lastChild.textContent.toLowerCase()) &&
          !photographersToDisplay.includes(data.photographers[j])
        ) photographersToDisplay.push(data.photographers[j]);
      }
    }
  }

  if (photographersToDisplay.length === 0) return data.photographers;
  return photographersToDisplay;
}

/** Toggle filter */
const toggleFilter = (e) => {
  const photographersSection = document.getElementById('photographers');

  if (e.target.tagName === 'SPAN') e.target.parentNode.classList.toggle('selected');
  if (e.target.tagName === 'LI') e.target.classList.toggle('selected');

  let photographerToDisplay = filterTags();
  photographersSection.innerHTML = '';
  for (let i = 0; i < photographerToDisplay.length; i++) {
    photographersSection.appendChild(createPhotographerElt(photographerToDisplay[i]));
  }
}

export { filterTags, toggleFilter }