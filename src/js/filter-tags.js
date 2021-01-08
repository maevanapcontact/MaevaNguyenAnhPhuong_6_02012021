import data from './data';

/** Filter tags */
const filterTags = () => {
  const tagsElt = document.getElementById('tags');
  let childrenElts = tagsElt.childNodes;

  let photographersToDisplay = [];

  for (let i = 0; i < childrenElts.length; i++) {
    if (childrenElts[i].className == 'selected') {
      for (let j = 0; j < data.photographers.length; j++) {
        if (data.photographers[j].tags.includes(childrenElts[i].lastChild.textContent.toLowerCase())) photographersToDisplay.push(data.photographers[j]);
      }
    }
  }

  if (photographersToDisplay.length === 0) return data.photographers;
  return photographersToDisplay;
}

export { filterTags }