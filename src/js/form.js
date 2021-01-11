/**
 * DOM Elements
 */
const contactElt = document.getElementById('ph-contact');
const formElt = document.getElementById('contact-form');
const coverElt = document.getElementById('cover');
const closeBtnElt = document.getElementById('close-btn');

/**
 * Add the event listeners for the form
 */
const path = document.location.pathname;
if (path.includes('photographer-page.html')) {
  contactElt.addEventListener('click', openForm);
  closeBtnElt.addEventListener('click', closeForm);
  formElt.addEventListener('submit', submitForm);
}

/**
 * Open the form
 *
 * @return  {void}
 */
function openForm() {
  formElt.style.display = 'flex';
  coverElt.style.display = 'block';
}

/**
 * Close the form
 *
 * @return  {void}
 */
function closeForm() {
  formElt.style.display = 'none';
  coverElt.style.display = 'none';
}

/**
 * Submit the form
 *
 * @return  {void}
 */
function submitForm(e) {
  e.preventDefault();
  closeForm();
}

/**
 * Add the photographer name to the form title
 *
 * @return  {void}
 */
const addPhotographerNameInForm = photographerName => {
  const nameElt = document.getElementById('ph-form-name');
  nameElt.textContent = photographerName;
}

export { addPhotographerNameInForm }