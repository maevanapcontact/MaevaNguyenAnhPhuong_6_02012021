import "../scss/main.scss";
import { createHomepage } from "./homepage";
import { createPhotographerPage } from "./photographer-page";

const path = window.location.pathname;

/**
 * Create correct page based on the pathname
 */
if (path.includes("photographer-page.html")) createPhotographerPage();
else {
  createHomepage();
  document.addEventListener("scroll", manageContentNav);
}

/**
 * Display or hide link to main content
 *
 * @return  {void}
 */
function manageContentNav() {
  const bannerElt = document.getElementById("header-banner");
  const linkElt = document.getElementById("link-content");

  if (window.scrollY >= bannerElt.offsetHeight - 20) {
    linkElt.style.top = "6px";
  }
  if (window.scrollY < bannerElt.offsetHeight - 20) {
    linkElt.style.top = "-100px";
  }
}
