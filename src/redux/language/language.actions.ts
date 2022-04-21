import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_LANGUAGUES,
  GetLanguagueAction,
  SET_LANGUAGUES,
  SetLanguageAction,
  Language,
} from './language.types';
import * as api from '../../services/api';

export const setLanguages = (payload: Language[]): SetLanguageAction => ({
  type: SET_LANGUAGUES,
  payload,
});

// get languages from api
export const getLanguages = (): GetLanguagueAction => ({
  type: GET_LANGUAGUES,
});
export function* watchGetLanguages() {
  yield takeLatest(GET_LANGUAGUES, handleGetLanguages);
}
function* handleGetLanguages() {
  try {
    const url = '/api/v1/languages/';
    const res: AxiosResponse<Language[]> = yield api.get<Language[]>(url);
    if (res.status === 200) {
      yield put(setLanguages(res.data));
    } else {
      console.error('Error getting languages');
    }
  } catch (e) {
    console.error('Failed to get languages', { e });
  }
}
