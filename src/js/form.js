import {
  openDialogModal,
  closeDialogModal
} from './photographer-page';

/**
 * DOM Elements
 */
const contactElt = document.getElementById('ph-contact');
const formElt = document.getElementById('contact-form');
const formDialogElt = document.getElementById('form-dialog');
const coverFormElt = document.getElementById('cover');
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
  openDialogModal();

  formDialogElt.style.display = 'block';
  formDialogElt.setAttribute('aria-hidden', 'false');
  coverFormElt.style.display = 'block';
  coverFormElt.setAttribute('aria-hidden', 'false');
}

/**
 * Close the form
 *
 * @return  {void}
 */
function closeForm() {
  closeDialogModal();

  formDialogElt.style.display = 'none';
  formDialogElt.setAttribute('aria-hidden', 'true');
  coverFormElt.style.display = 'none';
  coverFormElt.setAttribute('aria-hidden', 'true');
}

/**
 * Display form content when submitting it
 *
 * @return  {void}
 */
function submitForm(e) {
  e.preventDefault();
  const firstnameInput = document.getElementById('first-name');
  const lastnameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  console.log(`Prénom : ${firstnameInput.value}`);
  console.log(`Nom : ${lastnameInput.value}`);
  console.log(`Email : ${emailInput.value}`);
  console.log(`Votre message : ${messageInput.value}`);

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