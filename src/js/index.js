import "../scss/main.scss";
import { createHomepage } from "./homepage";
import { createPhotographerPage } from "./photographer-page";

const path = window.location.pathname;
const linkElt = document.getElementById("link-content");

/**
 * Create correct page based on the pathname
 */
if (path.includes("photographer-page.html")) createPhotographerPage();
else {
  createHomepage();
  document.addEventListener("scroll", manageContentNav);
}

/**
 * Display or hide link to main content based on focus event
 *
 */
linkElt.addEventListener("focus", () => (linkElt.style.top = "6px"));
linkElt.addEventListener("blur", () => (linkElt.style.top = "-100px"));

/**
 * Display or hide link to main content based on croll event
 *
 * @return  {void}
 */
function manageContentNav() {
  const bannerElt = document.getElementById("header-banner");

  if (window.scrollY >= bannerElt.offsetHeight - 20) {
    linkElt.style.top = "6px";
  }
  if (window.scrollY < bannerElt.offsetHeight - 20) {
    linkElt.style.top = "-100px";
  }
}
