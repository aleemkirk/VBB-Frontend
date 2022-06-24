import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { SET_USER, GET_USER, SetUserAction,GetUserAction, User } from './user.types';
import { vbbAPIV1 } from '../../services/api';

export const setUser = (payload: User): SetUserAction => ({
  type: SET_USER,
  payload,
});



export const getUserDetail = (): GetUserAction => ({
  type: GET_USER,
});

export function* watchGetUserDetail() {
  yield takeLatest(GET_USER, handleGetUserDetail);
}

function* handleGetUserDetail() {
  try {
    const url = 'users/me';
    const res: AxiosResponse<any> = yield vbbAPIV1.get<any>(url);
    const user = res.data;
    if (res.status === 200 && user) {
      yield put(setUser(user));
      //pushHistory('/dashboard');
    } else {
      //pushHistory('/');
    }
  } catch (e) {
    console.error('Could not retrieve user', e);
  }
}
