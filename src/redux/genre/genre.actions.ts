import { AxiosResponse } from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import {
  GET_GENRES,
  GetGenreAction,
  SET_GENRES,
  SetGenreAction,
  Genre,
} from './genre.types';
import { vbbAPIV1 } from '../../services/api';

export const setGenres = (payload: Genre[]): SetGenreAction => ({
  type: SET_GENRES,
  payload,
});

// get genres from api
export const getGenres = (): GetGenreAction => ({
  type: GET_GENRES,
});
export function* watchGetGenres() {
  yield takeLatest(GET_GENRES, handleGetGenres);
}
function* handleGetGenres() {
  try {
    const url = 'genres/';
    const res: AxiosResponse<Genre[]> = yield vbbAPIV1.get<Genre[]>(url);
    if (res.status === 200) {
      yield put(setGenres(res.data));
    } else {
      console.error('Error getting genres');
    }
  } catch (e) {
    console.error('Failed to get genres', { e });
  }
}
