import data from './data';
import { getParamFromUrl,
  fillEltWithText,
  createInteractiveListElt,
  fillImgElt,
  createEltWithClassName,
  createTextualElt
} from './utils';
import MediaFactory from './MediaFactory';

/** Create Photographer HTML page based on ID argument */
const createPhotographerPage = () => {
  const photographerId = getParamFromUrl(document.location.href, 'id');
  const photographerData = data.photographers.filter(elt => elt.id == photographerId)[0];
  const photographerWorks = data.media.filter(elt => elt.photographerId == photographerId);

  fillPhotographerData(photographerData);
  createPhotographerWorksSection(photographerWorks);
  createPhotographerData(photographerData, photographerWorks);
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
  let infosElt =  createEltWithClassName('div', 'work-elt-infos');
  let titleElt =  createTextualElt('span', workData.id, 'work-title');
  let priceElt =  createTextualElt('span', `${workData.price} €`, 'work-price');
  let likeElt =  createTextualElt('span', workData.likes, 'work-like');
  let heartElt =  createEltWithClassName('i', 'fas');

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
const createPhotographerData = (phData, worksData) => {
  let elt = createEltWithClassName('div', 'ph-data');
  let likesElt = document.createElement('span');
  let priceElt = document.createElement('span');
  let heartElt = createEltWithClassName('i', 'fas');
  heartElt.classList.add('fa-heart');

  let totalLikes = 0;
  worksData.forEach(work => totalLikes += work.likes);

  likesElt.textContent = `${totalLikes} `;
  likesElt.appendChild(heartElt);

  priceElt.textContent = `${phData.price}€ / jour`;

  elt.appendChild(likesElt);
  elt.appendChild(priceElt);

  document.getElementById('photographer-page').appendChild(elt);

  return elt;
}

export { createPhotographerPage }