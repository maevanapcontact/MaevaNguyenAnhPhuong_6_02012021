import { createEltWithClassName } from "./utils";
import { photographerWorks } from "./photographer-page";

/**
 * DOM Variables
 */
const worksElt = document.getElementById("works-elts");

/**
 * Setup the likes
 */
const path = document.location.pathname;
if (path.includes("photographer-page.html")) {
  worksElt.addEventListener("click", incrementLikesOnClick);
}

/**
 * Increment likes when pressing enter
 *
 * @param   {object}  evt  event
 *
 * @return  {void}
 */
const incrementLikesOnKeyboard = (evt) => {
  if (evt.key === "Enter") {
    evt.preventDefault();
    incrementLikes(evt.target);
  }
};

/**
 * Increment likes when clicking
 *
 * @param   {object}  evt  event
 *
 * @return  {void}
 */
function incrementLikesOnClick(evt) {
  if (evt.target.tagName === "SPAN") {
    evt.preventDefault();
    incrementLikes(evt.target);
  }
}

/**
 * Increment likes logic and display on DOM
 *
 * @param   {object}  target  The media clicked
 *
 * @return  {void}
 */
const incrementLikes = (target) => {
  let currentWork = photographerWorks.filter(
    (elt) => elt.id == target.parentElement.id
  )[0];
  currentWork.likes++;
  target.parentElement.childNodes[0].nodeValue = currentWork.likes;
  updateTotalLikesElt();
};

/**
 * Create total likes element
 *
 * @return  {object}  Created element
 */
const createTotalLikeElt = () => {
  const elt = document.createElement("span");
  elt.setAttribute("id", "total-likes");
  let totalLikes = 0;
  photographerWorks.forEach((work) => (totalLikes += work.likes));

  const heartElt = createEltWithClassName("i", "fas");
  heartElt.classList.add("fa-heart");
  heartElt.setAttribute("aria-label", "likes");
  elt.textContent = `${totalLikes} `;
  elt.appendChild(heartElt);

  return elt;
};

/**
 * Update total likes element
 *
 * @return  {void}
 */
const updateTotalLikesElt = () => {
  const totalLikesElt = document.getElementById("total-likes");
  let totalLikes = 0;
  photographerWorks.forEach((work) => (totalLikes += work.likes));
  totalLikesElt.childNodes[0].nodeValue = `${totalLikes} `;
};

export { createTotalLikeElt, incrementLikesOnKeyboard };
