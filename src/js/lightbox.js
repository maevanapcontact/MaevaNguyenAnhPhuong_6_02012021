import {
  openDialogModal,
  closeDialogModal,
  photographerWorks
} from './photographer-page';
import { createTextualElt } from './utils';
import MediaFactory from './MediaFactory';

/**
 * Index Position of the current media
 * 
 * @let {number}
 */
let indexCurrentMedia = -1;

/**
 * DOM Variables
 */
const coverElt = document.getElementById('lightbox-cover');
const lightboxElt = document.getElementById('lightbox');
const contentElt = document.getElementById('lightbox-content');
const closeElt = document.getElementById('lightbox-close');
const bodyElt = document.getElementsByTagName('body')[0];
const htmlElt = document.getElementsByTagName('html')[0];
const previousElt = document.getElementById('lightbox-previous');
const nextElt = document.getElementById('lightbox-next');

/**
 * Make nav elements interactive
 *
 * @return  {void}
 */
const configureLightboxControls = () => {
  closeElt.addEventListener('click', closeLightBox);
  previousElt.addEventListener('click', goToPreviousMedia);
  nextElt.addEventListener('click', goToNextMedia);

  window.addEventListener('keydown', manageKeyboardNav);
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

    const mediaClicked = document.getElementById('current-media-lightbox');
    if (mediaElt.type === 'image') closeElt.focus();
    if (mediaElt.type === 'video') mediaClicked.focus();
    lightboxElt.addEventListener('keydown', keyboardTrapLightbox);
  }
}

/**
 * Display the lightbox on the browser
 *
 * @return  {void}
 */
const openLightbox = () => {
  openDialogModal();

  coverElt.style.display = 'block';
  coverElt.setAttribute('aria-hidden', 'false');
  lightboxElt.style.display = 'block';
  lightboxElt.setAttribute('aria-hidden', 'false');
  htmlElt.scrollTop = 0;
  bodyElt.scrollTop = 0;
  bodyElt.style.overflow = 'hidden';
}

/**
 * Manage Keyboard trap on lightbox
 *
 * @param  {object} evt browser event
 * 
 * @return {void}
 */
const keyboardTrapLightbox = evt => {
  const currentMedia = document.getElementById('current-media-lightbox');

  if (currentMedia.tagName === 'IMG') {
    if (evt.keyCode === 9) {
      if (evt.shiftKey) {
        if (document.activeElement === closeElt) {
          evt.preventDefault();
          nextElt.focus();
        }
      } else {
        if (document.activeElement === nextElt) {
          evt.preventDefault();
          closeElt.focus();
        }
      }
    }
  } else {
    if (evt.keyCode === 9) {
      if (evt.shiftKey) {
        if (document.activeElement === currentMedia) {
          evt.preventDefault();
          nextElt.focus();
        }
      } else {
        if (document.activeElement === nextElt) {
          evt.preventDefault();
          currentMedia.focus();
        }
      }
    }
  }

  if (evt.keyCode === 27) closeLightBox();
}


/**
 * Remove the lightbox from the browser view
 *
 * @return  {void}
 */
const closeLightBox = () => {
  closeDialogModal();

  coverElt.style.display = 'none';
  coverElt.setAttribute('aria-hidden', 'true');
  lightboxElt.style.display = 'none';
  lightboxElt.setAttribute('aria-hidden', 'true');
  bodyElt.style.overflow = 'auto';
}

/**
 * Fill the lightbox with the media the user clicked on
 *
 * @param {object} media The img or video element the user clicked on
 */
const fillLightbox = media => {
  contentElt.innerHTML = '';
  contentElt.appendChild(media.createFullElt());
  const mediaTitle = createTextualElt('h3', media.alt, 'lightbox-media-title');
  contentElt.appendChild(mediaTitle);

  indexCurrentMedia = getCurrentMediaPosition(media);
}

/**
 * Get the index of the current media displayed on lightbox
 *
 * @return {number} Index of the media
 */
const getCurrentMediaPosition = media => {
  for (let i = 0; i < photographerWorks.length; i++) {
    if (photographerWorks[i].id === media.id) return i;
  }

  return -1;
}

/**
 * Create a new DOM media
 *
 * @return  {void}
 */
const createNewMedia = () => {
  const mediaData = photographerWorks[indexCurrentMedia];
  const mediaType = mediaData.image ? 'image' : 'video';

  const newMedia = new MediaFactory(mediaType, mediaData);
  fillLightbox(newMedia);
}

/**
 * Display the previous media of the photographer to the lightbox
 *
 * @return  {void}
 */
const goToPreviousMedia = () => {
  if (indexCurrentMedia > 0) indexCurrentMedia--;
  else indexCurrentMedia = photographerWorks.length - 1;

  createNewMedia();
}

/**
 * Display the next media of the photographer to the lightbox
 *
 * @return  {void}
 */
const goToNextMedia = () => {
  if (indexCurrentMedia < photographerWorks.length - 1) indexCurrentMedia++;
  else indexCurrentMedia = 0;

  createNewMedia();
}


/**
 * Manage the keyboard navigation
 *
 * @return {void}
 */
const manageKeyboardNav = evt => {
  switch (evt.key) {
    case "Left":
    case "ArrowLeft":
      goToPreviousMedia();
      break;
    case "Right":
    case "ArrowRight":
      goToNextMedia();
      break;
    case "Esc":
    case "Escape":
      closeLightBox();
      break;
    default:
      return;
  }

  evt.preventDefault();
}

export { manageLightBox, configureLightboxControls };