import { takeLatest, put } from 'redux-saga/effects';
import {
  Career,
  GetCareersAction,
  GET_CAREERS,
  SET_CAREERS,
  SetCareersAction,
} from './careers.types';
import { AxiosResponse } from 'axios';
import * as api from '../../services/api';

export const setCareers = (payload: Career[]): SetCareersAction => ({
  type: SET_CAREERS,
  payload,
});

export const getCareers = (): GetCareersAction => ({ type: GET_CAREERS });
export function* watchGetCareers() {
  yield takeLatest(GET_CAREERS, handleGetCareers);
}
function* handleGetCareers() {
  try {
    const url = '/api/v1/careers/';
    const res: AxiosResponse<Career[]> = yield api.get<Career[]>(url);
    if (res.status === 200) {
      console.log(res.data);
      yield put(setCareers(res.data));
    } else {
      console.error('Error getting Careers');
    }
  } catch (e) {
    console.error('Failed to get Careers', { e });
  }
}
