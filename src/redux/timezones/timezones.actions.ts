import { takeLatest, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as api from '../../services/api';
import {
  GetTimezonesAction,
  GET_TIMEZONES,
  SetTimezonesAction,
  SET_TIMEZONES,
} from './timezones.types';

export const setTimezones = (payload: string[]): SetTimezonesAction => ({
  type: SET_TIMEZONES,
  payload,
});

export const getTimezones = (): GetTimezonesAction => ({ type: GET_TIMEZONES });
export function* watchGetTimezones() {
  yield takeLatest(GET_TIMEZONES, handleGetTimezones);
}
function* handleGetTimezones() {
  try {
    const url = '/api/v1/timezones/';
    const res: AxiosResponse<string[]> = yield api.get<string[]>(url);
    if (res.status === 200) {
      yield put(setTimezones(res.data));
    } else {
      console.warn('Error getting Timezones');
    }
  } catch (e) {
    console.error('Failed to get Timezones', { e });
  }
}
