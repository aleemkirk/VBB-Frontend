import { takeLatest, put } from 'redux-saga/effects';
import {
  Oppty,
  GetOpptyAction,
  GET_OPPTY,
  SET_OPPTY,
  SetOpptyAction,
} from './opportunity.types';
import { AxiosResponse } from 'axios';
import { vbbAPIV1 } from '../../services/api';

export const setOppty = (payload: Oppty[]): SetOpptyAction => ({
  type: SET_OPPTY,
  payload,
});

export const getOppty = (): GetOpptyAction => ({ type: GET_OPPTY });
export function* watchGetOppty() {
  yield takeLatest(GET_OPPTY, handleGetOppty);
}
function* handleGetOppty() {
  try {
    const url = 'oppty/';
    const res: AxiosResponse<Oppty[]> = yield vbbAPIV1.get<Oppty[]>(url);
    if (res.status === 200) {
      yield put(setOppty(res.data));
    } else {
      console.error('Error getting Opptunities');
    }
  } catch (e) {
    console.error('Failed to get Opptunities', { e });
  }
}
