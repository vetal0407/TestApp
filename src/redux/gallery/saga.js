import {put, takeLatest, call} from 'redux-saga/effects';
import axios from 'axios';

import {FETCH_IMAGES_GET} from './types';
import * as galleryActions from './actions';

function* getImages() {
  yield put(galleryActions.fetchImagesStart());
  try {
    const response = yield call(
      axios.get,
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    );

    yield put(galleryActions.fetchImagesSuccess(response.data));
  } catch (e) {
    galleryActions.fetchImagesError(e);
  }
}

export default function* watchGallery() {
  yield takeLatest(FETCH_IMAGES_GET, getImages);
}
