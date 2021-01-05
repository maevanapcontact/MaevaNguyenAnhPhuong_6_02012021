import data from './data';
import { getParamFromUrl,
  fillEltWithText,
  createInteractiveListElt,
  fillImgElt
} from './utils';

const createPhotographerPage = () => {
  const photographerId = getParamFromUrl(document.location.href, 'id');
  const photographerData = data.photographers.filter(elt => elt.id == photographerId)[0];

  fillPhotographerData(photographerData);

  console.log(photographerData);
}

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

export { createPhotographerPage }