import { createImgElt, createTextualElt } from './utils';

class ImageFactory {
  constructor(props) {
    this.src = props.image;
    this.alt = props.alt;
  }

  createElt() {
    return createImgElt(`images/${this.src}`, `${this.alt}, closeup view`);
  }

  createFullElt() {
    return createImgElt(`images/${this.src}`, this.alt);
  }
}

class VideoFactory {
  constructor(props) {
    this.src = props.video;
    this.alt = props.alt;
  }

  domCreation(text) {
    let elt = createTextualElt('video', text, 'video-elt');
    let srcElt = document.createElement('source');
    srcElt.setAttribute('src', `videos/${this.src}`);
    elt.appendChild(srcElt);

    return elt;
  }

  createElt() {
    return this.domCreation(`${this.alt}, closeup view`);
  }

  createFullElt() {
    let elt = this.domCreation(this.alt);
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