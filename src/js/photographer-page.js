import data from "./data";
import {
  getParamFromUrl,
  fillEltWithText,
  createInteractiveListElt,
  fillImgElt,
  createEltWithClassName,
  createTextualElt,
  createLinkElt,
} from "./utils";
import { addPhotographerNameInForm } from "./form";
import { createTotalLikeElt, incrementLikesOnKeyboard } from "./likes";
import {
  manageLightBox,
  configureLightboxControls,
  manageLightBoxOnKeyboard,
} from "./lightbox";
import { sortPhotographers, manageSortEvents } from "./sort";
import MediaFactory from "./MediaFactory";

/**
 * DOM variables
 */
const headerBannerElt = document.getElementById("header-banner");
const photographerPageElt = document.getElementById("photographer-page");

/**
 * Photographer's variables
 */
const photographerId = getParamFromUrl(document.location.href, "id");
const photographerData = data.photographers.filter(
  (elt) => elt.id == photographerId
)[0];
const photographerWorks = data.media.filter(
  (elt) => elt.photographerId == photographerId
);

/**
 * Build the DOM photographer page
 *
 * @return  {void}
 */
const createPhotographerPage = () => {
  fillPhotographerHeader();
  createPhotographerWorksSection("Popularité");
  fillPhotographerData();
  addPhotographerNameInForm(photographerData.name);
  manageSortEvents();
};

/**
 * Fill the HTML photographer header with photographer's data
 *
 * @return  {void}
 */
const fillPhotographerHeader = () => {
  const titleElt = document.getElementById("ph-title");
  fillEltWithText(titleElt, photographerData.name);

  const cityElt = document.getElementById("ph-city");
  fillEltWithText(
    cityElt,
    `${photographerData.city}, ${photographerData.country}`
  );

  const taglineElt = document.getElementById("ph-tagline");
  fillEltWithText(taglineElt, photographerData.tagline);

  const tagsElt = document.getElementById("ph-tags");
  photographerData.tags.forEach((tag) =>
    createInteractiveListElt(tagsElt, tag, `index.html?tag=${tag}`)
  );

  const portraitElt = document.getElementById("ph-portrait");
  fillImgElt(
    portraitElt,
    `images/${photographerData.portrait}`,
    photographerData.alt
  );

  configureLightboxControls();
};

/**
 * Add each work element of the current photographer
 *
 * @return  {void}
 */
const createPhotographerWorksSection = (filterTag) => {
  const worksElts = document.getElementById("works-elts");
  worksElts.innerHTML = "";
  const sortedWorks = sortPhotographers(photographerWorks, filterTag);
  sortedWorks.forEach((work) => worksElts.appendChild(createWorkElt(work)));
};

/**
 * Create a single work element for a photographer
 *
 * @param  {object} workData A single work object (from database)
 *
 * @return  {object} The element created
 */
const createWorkElt = (workData) => {
  const elt = createEltWithClassName("div", "work-elt");
  const aElt = createLinkElt("#", `${workData.alt}, closeup view`);
  const infosElt = createEltWithClassName("div", "work-elt-infos");
  const titleElt = createTextualElt("h2", workData.alt, "work-title");
  const priceElt = createTextualElt(
    "span",
    `${workData.price} €`,
    "work-price"
  );
  const likeElt = createTextualElt("span", workData.likes, "work-like");
  likeElt.setAttribute("id", workData.id);
  const heartElt = createEltWithClassName("span", "fas");

  heartElt.classList.add("fa-heart");
  heartElt.setAttribute("aria-label", "likes");
  heartElt.setAttribute("role", "button");
  heartElt.setAttribute("tabindex", "0");
  heartElt.addEventListener("keydown", incrementLikesOnKeyboard);

  const workType = workData.video === undefined ? "image" : "video";
  const media = new MediaFactory(workType, workData);
  const mediaElt = media.createElt();
  aElt.appendChild(mediaElt);
  mediaElt.addEventListener("click", manageLightBox(media));

  likeElt.appendChild(heartElt);
  infosElt.appendChild(titleElt);
  infosElt.appendChild(priceElt);
  infosElt.appendChild(likeElt);
  elt.appendChild(aElt);
  elt.appendChild(infosElt);

  aElt.addEventListener("keydown", manageLightBoxOnKeyboard(media));

  return elt;
};

/**
 * Fill HTML element with photographer data
 *
 * @return  {void}
 */
const fillPhotographerData = () => {
  const pageElt = document.getElementById("photographer-page");
  const elt = createEltWithClassName("aside", "ph-data");
  elt.setAttribute("aria-label", "photographer likes and price");
  const priceElt = document.createElement("span");

  priceElt.textContent = `${photographerData.price}€ / jour`;

  elt.appendChild(createTotalLikeElt());
  elt.appendChild(priceElt);

  pageElt.appendChild(elt);
};

/**
 * Hide page content from accessibility when opening a modal
 *
 * @return  {void}
 */
const openDialogModal = () => {
  headerBannerElt.setAttribute("aria-hidden", "true");
  photographerPageElt.setAttribute("aria-hidden", "true");
};

/**
 * Show page content from accessibility when closing a modal
 *
 * @return  {void}
 */
const closeDialogModal = () => {
  headerBannerElt.setAttribute("aria-hidden", "false");
  photographerPageElt.setAttribute("aria-hidden", "false");
};

export {
  createPhotographerPage,
  photographerWorks,
  openDialogModal,
  closeDialogModal,
  createPhotographerWorksSection,
};
