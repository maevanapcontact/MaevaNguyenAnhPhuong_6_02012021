import { createImgElt, createTextualElt } from './utils';

class ImageFactory {
  constructor(props) {
    this.src = props.image;
    this.alt = props.alt;
  }

  createElt() {
    return createImgElt(`images/${this.src}`, this.alt);
  }

  createFullElt() {
    return this.createElt();
  }
}

class VideoFactory {
  constructor(props) {
    this.src = props.video;
  }

  createElt() {
    let elt = createTextualElt('video', `Le format de vidéo n'est pas reconnu par votre navigateur`, 'video-elt');
    let srcElt = document.createElement('source');
    srcElt.setAttribute('src', `videos/${this.src}`);
    elt.appendChild(srcElt);

    return elt;
  }

  createFullElt() {
    let elt = this.createElt();
    elt.setAttribute('controls', true);

    return elt;
  }
}

export default class MediaFactory {
  constructor(type, props) {
    if (type === 'image') return new ImageFactory(props);
    if (type === 'video') return new VideoFactory(props);
  }
}