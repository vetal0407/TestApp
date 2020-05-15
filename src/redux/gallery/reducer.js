import {FETCH_IMAGES_START, FETCH_IMAGES_SUCCESS} from './types';

const initialState = {
  data: [],
  isLoading: false,
};

export default function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    default:
      return state;
  }
}
