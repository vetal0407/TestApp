import {
  FETCH_IMAGES_GET,
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
} from './types';

export const fetchImagesGet = () => ({type: FETCH_IMAGES_GET});
export const fetchImagesStart = () => ({type: FETCH_IMAGES_START});
export const fetchImagesSuccess = (data) => ({
  type: FETCH_IMAGES_SUCCESS,
  data,
});
export const fetchImagesError = (e) => console.log(e);
