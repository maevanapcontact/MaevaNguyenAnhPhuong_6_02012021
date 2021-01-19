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
 * Manage the whole toggle logic to display correct photographers in the DOM
 *
 * @param   {object}  evt  event
 *
 * @return  {void}
 */
const toggleFilter = (evt) => {
  evt.preventDefault();
  const selectedTag = getClassToToggle(evt.target);
  addTagParamToURL(selectedTag);
  toggleNavSelectedTags();
  const tagsInURL = getParamsFromURL("tag");
  const photographerToDisplay = getFilteredPhotographers(tagsInURL);

  displayFilteredPhotographers(photographerToDisplay);
  toggleEltSelectedTags();

  const tagsListElts = document.querySelectorAll(".ph-elt-tags");
  tagsListElts.forEach((elt) => elt.addEventListener("click", toggleFilter));
};

/**
 * Get the class that was clicked
 *
 * @param   {object}  target  the element that was clicked
 *
 * @return  {string}          the tag clicked
 */
const getClassToToggle = (target) => {
  let tagSelected = "";
  if (target.tagName === "A") tagSelected = target.textContent;
  if (target.tagName === "LI") tagSelected = target.lastChild.textContent;

  return tagSelected.toLowerCase();
};

/**
 * Get the params from the current URL
 *
 * @param   {string}  param  the name of the param to search for
 *
 * @return  {array}          The list of params included in the URL
 */
const getParamsFromURL = (param) => {
  const currentPath = window.location.href;
  const currentParams = new URL(currentPath).searchParams;

  return currentParams.getAll(param);
};

/**
 * Add a new tag to the current URL
 *
 * @param   {string}  tagToAdd  the tag to add to the URL
 *
 * @return  {void}
 */
const addTagParamToURL = (tagToAdd) => {
  if (tagToAdd == "") return;

  let url = "index.html";
  let tagParams = getParamsFromURL("tag");

  if (tagParams.includes(tagToAdd))
    tagParams = tagParams.filter((tag) => tag !== tagToAdd);
  else tagParams.push(tagToAdd);

  tagParams.forEach((tag, index) => {
    if (index === 0) url += `?tag=${tag}`;
    else url += `&tag=${tag}`;
  });
  window.history.pushState({}, "", url);
};

/**
 * Toggle the selected class to the tags on the main navbar
 *
 * @return  {void}
 */
const toggleNavSelectedTags = () => {
  const tagParams = getParamsFromURL("tag");
  tagsElt.childNodes.forEach((elt) => {
    if (tagParams.includes(elt.lastChild.textContent.toLowerCase()))
      elt.classList.add("selected");
    else elt.className = "";
  });
};

/**
 * Create the DOM with the photographer elements to display
 *
 * @param   {array}  photographerToDisplay  List of photographers to display in the HTML page
 *
 * @return  {void}
 */
const displayFilteredPhotographers = (photographerToDisplay) => {
  photographersElt.innerHTML = "";
  photographerToDisplay.forEach((photographer) =>
    photographersElt.appendChild(createPhotographerElt(photographer))
  );
};

/**
 * Toggle the selected class to the tags on the photograhers' elements
 *
 * @return  {void}
 */
const toggleEltSelectedTags = () => {
  const tagParams = getParamsFromURL("tag");
  const phTagsElts = document.querySelectorAll(".ph-elt-tags li");
  phTagsElts.forEach((elt) => {
    if (tagParams.includes(elt.lastChild.textContent.toLowerCase()))
      elt.classList.add("selected");
    else elt.className = "";
  });
};

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
 * Display the filtered photographers based on the params in the URL (page creation)
 *
 * @return  {void}
 */
const checkFilterOnPageCreation = () => {
  toggleNavSelectedTags();
  const tagsInURL = getParamsFromURL("tag");
  const photographerToDisplay = getFilteredPhotographers(tagsInURL);

  displayFilteredPhotographers(photographerToDisplay);
  toggleEltSelectedTags();

  const tagsListElts = document.querySelectorAll(".ph-elt-tags");
  tagsListElts.forEach((elt) => elt.addEventListener("click", toggleFilter));
};

export { getFilteredPhotographers, toggleFilter, checkFilterOnPageCreation };
