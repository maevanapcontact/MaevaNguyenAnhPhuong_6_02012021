import data from "./data";
import { createPhotographerElt } from "./photographer-elt";

/**
 * DOM Elements
 */
const tagsElt = document.getElementById("tags");
const photographersElt = document.getElementById("photographers");

/**
 * Photographers data
 *
 * @const {Array}
 */
const photographers = data.photographers;

/**
 * Generate an array of photographers to display based on a given array of tags
 *
 * @param   {array}  tagsList  The list of filtering tags
 *
 * @return  {[type]}
 */
const getFilteredPhotographers = (tagsList) => {
  let photographersToDisplay = photographers;
  photographersToDisplay = photographersToDisplay.filter((photographer) => {
    for (let i = 0; i < tagsList.length; i++) {
      if (!photographer.tags.includes(tagsList[i])) return false;
    }
    return true;
  });
  return photographersToDisplay;
};

/**
 * Toggle filter tag to display new filtered photographers (DOM)
 *
 * @param   {object}  e  event
 *
 * @return  {void}
 */
const toggleFilter = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  if (target.tagName === "A") target.parentNode.classList.toggle("selected");
  if (target.tagName === "SPAN")
    target.parentNode.parentNode.classList.toggle("selected");
  if (target.tagName === "LI") target.classList.toggle("selected");

  const childrenElts = tagsElt.childNodes;
  let tagsSelected = [];
  childrenElts.forEach((elt) => {
    if (elt.className == "selected")
      tagsSelected.push(elt.lastChild.lastChild.textContent.toLowerCase());
  });

  let photographerToDisplay = getFilteredPhotographers(tagsSelected);
  photographersElt.innerHTML = "";
  photographerToDisplay.forEach((photographer) =>
    photographersElt.appendChild(createPhotographerElt(photographer))
  );
};

const toggleFilterFromPhotographerElt = (evt) => {
  evt.preventDefault();
  const target = evt.target;
  let tagSelected = "";
  if (target.tagName === "A") {
    target.parentNode.classList.toggle("selected");
    tagSelected = target.lastChild.textContent;
  }
  if (target.tagName === "SPAN") {
    target.parentNode.parentNode.classList.toggle("selected");
    tagSelected = target.textContent;
  }
  if (target.tagName === "LI") {
    target.classList.toggle("selected");
    tagSelected = target.childNodes[0].lastChild.textContent;
  }

  tagsElt.childNodes.forEach((elt) => {
    if (elt.childNodes[0].lastChild.textContent.toLowerCase() == tagSelected)
      elt.classList.toggle("selected");
  });
};

export {
  getFilteredPhotographers,
  toggleFilter,
  toggleFilterFromPhotographerElt,
};
