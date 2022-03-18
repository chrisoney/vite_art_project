import { lyrics, savedImages, links } from './content';

const checkExistence = (indexString) => {
  return savedImages.includes(indexString);
}

const addNewImage = (indexString) => {
  savedImages.push(indexString);
}

const getSavedImage = (index) => {
  return savedImages[index]
}

const getSavedImageLength = () => {
  return savedImages.length;
}

const getLyric = (idx) => {
  return lyrics[idx];
}

const getLink = (linkName) => {
  return links[linkName];
}

export {
  checkExistence,
  addNewImage,
  getSavedImage,
  getSavedImageLength,
  getLyric,
  getLink,
}