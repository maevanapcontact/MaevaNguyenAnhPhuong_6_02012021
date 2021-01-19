import { createPhotographerElt } from "./photographer-elt";
import { getFilteredPhotographers, toggleFilter } from "./filter-tags";

/**
 * DOM Elements
 */
const photographersElt = document.getElementById("photographers");
const tagsElt = document.getElementById("tags");

/**
 * Build the homepage (DOM + filter logic)
 *
 * @return  {void}
 */
const createHomepage = () => {
  tagsElt.addEventListener("click", toggleFilter);

  let photographersToDisplay = getFilteredPhotographers([]);
  photographersToDisplay.forEach((photographer) =>
    photographersElt.appendChild(createPhotographerElt(photographer))
  );

  const tagsListElts = document.querySelectorAll(".ph-elt-tags");
  tagsListElts.forEach((elt) => elt.addEventListener("click", toggleFilter));
};

export { createHomepage };
