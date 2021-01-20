import { createPhotographerWorksSection } from "./photographer-page";

/**
 * DOM Variables
 */
const sortCoverElt = document.getElementById("sort-cover");
const sortBtnElt = document.getElementById("sort-btn");
const sortListElt = document.getElementById("sort-list");
const option1Elt = document.getElementById("sort-1");
const option2Elt = document.getElementById("sort-2");
const option3Elt = document.getElementById("sort-3");

/**
 * Sort the works array based on the filter type
 *
 * @param   {array}   works  Elements to sort
 * @param   {string}  type   chosen sorting tag
 *
 * @return  {array}         sorted works
 */
const sortPhotographers = (works, type) => {
  if (type === "Popularité") return works.sort((a, b) => b.likes - a.likes);
  if (type === "Date")
    return works.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (type === "Titre") {
    return works.sort((a, b) => {
      const titleA = a.alt.toUpperCase();
      const titleB = b.alt.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  }
};

/**
 * Add click event listener to the sort btn
 *
 * @return  {void}
 */
const manageSortEvents = () => {
  sortBtnElt.addEventListener("click", displaySortList);
};

/**
 * Display the sort list and add the keydown listener for it
 *
 * @return  {void}
 */
const displaySortList = () => {
  sortListElt.style.display = "block";
  sortCoverElt.style.display = "block";
  sortListElt.addEventListener("keydown", sortKeyboardNav);
  sortListElt.addEventListener("click", validateSortChoice);
  sortCoverElt.addEventListener("click", hideSortList);
  option1Elt.focus();
};

/**
 * Hide the sort list and returns focus to the sort button element
 *
 * @return  {void}
 */
const hideSortList = () => {
  sortListElt.style.display = "none";
  sortCoverElt.style.display = "none";
  sortBtnElt.focus();
};

/**
 * Manage the keyboard navigation inside the sort list
 *
 * @param   {object}  evt browser event
 *
 * @return  {void}
 */
const sortKeyboardNav = (evt) => {
  const focusedElt = document.activeElement;
  const blurKeys =
    evt.key === "Escape" ||
    evt.key === "Esc" ||
    evt.key === "Tab" ||
    (evt.key === "Shift" && evt.key === "Tab");

  if (evt.key === "ArrowDown" || evt.key === "Down") {
    evt.preventDefault();
    if (focusedElt === option1Elt) option2Elt.focus();
    if (focusedElt === option2Elt) option3Elt.focus();
    if (focusedElt === option3Elt) option1Elt.focus();
  }
  if (evt.key === "ArrowUp" || evt.key === "Up") {
    evt.preventDefault();
    if (focusedElt === option1Elt) option3Elt.focus();
    if (focusedElt === option2Elt) option1Elt.focus();
    if (focusedElt === option3Elt) option2Elt.focus();
  }
  if (evt.key === "Enter") {
    evt.preventDefault();
    hideSortList();
    sortBtnElt.innerHTML = `${focusedElt.textContent}<span class="fas fa-chevron-down sort-arrow"></span>`;
    createPhotographerWorksSection(focusedElt.textContent);
  }

  if (blurKeys) {
    evt.preventDefault();
    hideSortList();
  }
};

/**
 * Validate user choice when clicking on an item
 *
 * @param   {object}  evt browser event
 *
 * @return  {void}
 */
const validateSortChoice = (evt) => {
  const target = evt.target;

  if (target.tagName == "LI") {
    createPhotographerWorksSection(target.textContent);
    sortBtnElt.innerHTML = `${target.textContent}<span class="fas fa-chevron-down sort-arrow"></span>`;
  }
  if (target.tagName == "SPAN") {
    createPhotographerWorksSection(target.parentNode.textContent);
    sortBtnElt.innerHTML = `${target.parentNode.textContent}<span class="fas fa-chevron-down sort-arrow"></span>`;
  }

  hideSortList();
};

export { sortPhotographers, manageSortEvents };
