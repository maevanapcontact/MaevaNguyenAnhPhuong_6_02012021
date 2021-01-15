import { createImgElt, createTextualElt } from './utils';

class ImageFactory {
  constructor(props) {
    this.src = props.image;
    this.alt = props.alt;
    this.id = props.id;
    this.type = 'image';
  }

  createElt() {
    const elt = createImgElt(`images/${this.src}`, `${this.alt}, closeup view`);
    elt.setAttribute('role', 'button');

    return elt;
  }

  createFullElt() {
    const elt = createImgElt(`images/${this.src}`, this.alt);
    elt.setAttribute('id', 'current-media-lightbox');

    return elt;
  }
}

class VideoFactory {
  constructor(props) {
    this.src = props.video;
    this.alt = props.alt;
    this.id = props.id;
    this.type = 'video';
  }

  domCreation(text) {
    let elt = createTextualElt('video', text, 'video-elt');
    let srcElt = document.createElement('source');
    srcElt.setAttribute('src', `videos/${this.src}`);
    elt.appendChild(srcElt);

    return elt;
  }

  createElt() {
    const elt = this.domCreation(`${this.alt}, closeup view`);
    elt.setAttribute('role', 'button');

    return elt;
  }

  createFullElt() {
    let elt = this.domCreation(this.alt);
    elt.setAttribute('controls', true);
    elt.setAttribute('id', 'current-media-lightbox');

    return elt;
  }
}

export default class MediaFactory {
  constructor(type, props) {
    if (type === 'image') return new ImageFactory(props);
    if (type === 'video') return new VideoFactory(props);
  }
}