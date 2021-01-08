import data from './data';
import { getParamFromUrl,
  fillEltWithText,
  createInteractiveListElt,
  fillImgElt,
  createEltWithClassName,
  createTextualElt
} from './utils';
import MediaFactory from './MediaFactory';

const photographerId = getParamFromUrl(document.location.href, 'id');
const photographerData = data.photographers.filter(elt => elt.id == photographerId)[0];
const photographerWorks = data.media.filter(elt => elt.photographerId == photographerId);

let contactElt = document.getElementById('ph-contact');
let formElt = document.getElementById('contact-form');
let coverElt = document.getElementById('cover');
let closeBtnElt = document.getElementById('close-btn');
let worksElt = document.getElementById('works-elts');

/** Setup the form */
if (document.location.pathname.includes('photographer-page.html')) {
  contactElt.addEventListener('click', openForm);
  closeBtnElt.addEventListener('click', closeForm);
  formElt.addEventListener('submit', submitForm);

  worksElt.addEventListener('click', incrementLikes);
}

/** Create Photographer HTML page based on ID argument */
const createPhotographerPage = () => {
  fillPhotographerData(photographerData);
  createPhotographerWorksSection(photographerWorks);
  createPhotographerData(photographerData);
  addPhotographerName(photographerData);
}

/** Fill existing HTML content with photographer data */
const fillPhotographerData = photographerData => {
  let titleElt = document.getElementById('ph-title');
  fillEltWithText(titleElt, photographerData.name);

  let cityElt = document.getElementById('ph-city');
  fillEltWithText(cityElt, `${photographerData.city}, ${photographerData.country}`);

  let taglineElt = document.getElementById('ph-tagline');
  fillEltWithText(taglineElt, photographerData.tagline);

  let tagsElt = document.getElementById('ph-tags');
  photographerData.tags.forEach(tag => createInteractiveListElt(tagsElt, tag));

  let portraitElt = document.getElementById('ph-portrait');
  fillImgElt(portraitElt, `images/${photographerData.portrait}`, photographerData.alt);
}

/** Create the photographer work section */
const createPhotographerWorksSection = works => {
  let workEltsElt = document.getElementById('works-elts');
  for (let i = 0; i < works.length; i++) {
    workEltsElt.appendChild(createWorkElt(works[i]));
  }
}

/** Create a single work element */
const createWorkElt = workData => {
  let elt =  createEltWithClassName('div', 'work-elt');
  let infosElt = createEltWithClassName('div', 'work-elt-infos');
  let titleElt = createTextualElt('span', workData.alt, 'work-title');
  let priceElt = createTextualElt('span', `${workData.price} €`, 'work-price');
  let likeElt = createTextualElt('span', workData.likes, 'work-like');
  likeElt.setAttribute('id', workData.id);
  let heartElt = createEltWithClassName('i', 'fas');

  heartElt.classList.add('fa-heart');
  
  let workType = workData.video === undefined ? 'image' : 'video';
  let media = new MediaFactory(workType, workData);
  elt.appendChild(media.createElt());

  likeElt.appendChild(heartElt);
  infosElt.appendChild(titleElt);
  infosElt.appendChild(priceElt);
  infosElt.appendChild(likeElt);
  elt.appendChild(infosElt);

  return elt;
}

/** Create photographer data */
const createPhotographerData = phData => {
  let elt = createEltWithClassName('div', 'ph-data');
  let priceElt = document.createElement('span');

  priceElt.textContent = `${phData.price}€ / jour`;

  elt.appendChild(createTotalLikeElt());
  elt.appendChild(priceElt);

  document.getElementById('photographer-page').appendChild(elt);

  return elt;
}

/** Open Form */
function openForm() {
  formElt.style.display = 'flex';
  coverElt.style.display = 'block';
}

/** Close Form */
function closeForm() {
  formElt.style.display = 'none';
  coverElt.style.display = 'none';
}

/** Submit Form */
function submitForm(e) {
  e.preventDefault();
  closeForm();
}

/** Add Photographer name in form */
const addPhotographerName = phData => {
  let PhNameElt = document.getElementById('ph-form-name');
  PhNameElt.textContent = phData.name;
}

/** Increment likes on photographer's media */
function incrementLikes(e) {
  if (e.target.tagName === 'I') {
    let currentWork = photographerWorks.filter(elt => elt.id == e.target.parentElement.id)[0];
    currentWork.likes++;
    e.target.parentElement.childNodes[0].nodeValue = currentWork.likes;
    updateTotalLikesElt();
  }
}

/** Creates total likes element */
const createTotalLikeElt = () => {
  let elt = document.createElement('span');
  elt.setAttribute('id', 'total-likes');
  let totalLikes = 0;
  photographerWorks.forEach(work => totalLikes += work.likes);

  let heartElt = createEltWithClassName('i', 'fas');
  heartElt.classList.add('fa-heart');
  elt.textContent = `${totalLikes} `;
  elt.appendChild(heartElt);

  return elt;
}

/** Update total likes element */
const updateTotalLikesElt = () => {
  let totalLikesElt = document.getElementById('total-likes');
  let totalLikes = 0;
  photographerWorks.forEach(work => totalLikes += work.likes);
  totalLikesElt.childNodes[0].nodeValue = `${totalLikes} `;
}

export { createPhotographerPage }