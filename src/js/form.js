/**
 * DOM Elements
 */
const contactElt = document.getElementById('ph-contact');
const formElt = document.getElementById('contact-form');
const dialogElt = document.getElementById('form-dialog');
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
  dialogElt.style.display = 'block';
  coverElt.style.display = 'block';
}

/**
 * Close the form
 *
 * @return  {void}
 */
function closeForm() {
  dialogElt.style.display = 'none';
  coverElt.style.display = 'none';
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