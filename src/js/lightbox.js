/**
 * DOM Variables
 */
const coverElt = document.getElementById('lightbox-cover');
const lightboxElt = document.getElementById('lightbox');
const contentElt = document.getElementById('lightbox-content');
const closeElt = document.getElementById('lightbox-close');
const bodyElt = document.getElementsByTagName('body')[0];
const htmlElt = document.getElementsByTagName('html')[0];

/**
 * Make nav elements interactive
 *
 * @return  {void}
 */
const configureLightboxControls = () => {
  closeElt.addEventListener('click', closeLightBox);
}

/**
 * Manage individual media element inside the lightbox
 *
 * @param   {object}  mediaElt  The img or video element the user clicked on
 *
 * @return  {void}
 */
const manageLightBox = function(mediaElt) {
  return function manage() {
    openLightbox();
    fillLightbox(mediaElt)
  }
}

/**
 * Display the lightbox on the browser
 *
 * @return  {void}
 */
const openLightbox = () => {
  coverElt.style.display = 'block';
  lightboxElt.style.display = 'block';
  htmlElt.scrollTop = 0;
  bodyElt.scrollTop = 0;
  bodyElt.style.overflow = 'hidden';
}

/**
 * Remove the lightbox from the browser view
 *
 * @return  {void}
 */
const closeLightBox = () => {
  coverElt.style.display = 'none';
  lightboxElt.style.display = 'none';
  bodyElt.style.overflow = 'auto';
}

/**
 * Fill the lightbox with the media the user clicked on
 *
 * @param {object} media The img or video element the user clicked on
 */
const fillLightbox = media => {
  contentElt.innerHTML = '';
  contentElt.appendChild(media.createElt());
}

export { manageLightBox, configureLightboxControls };