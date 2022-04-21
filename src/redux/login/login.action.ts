import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { setUser } from '../user/user.actions';
import {
  AUTO_LOGIN,
  AUTO_LOGIN_ACTION,
  AUTO_LOGIN_PAYLOAD,
  LOGIN,
  LOGIN_ACTION,
  LOGIN_PAYLOAD,
} from './login.types';
import * as api from '../../services/api';
interface BackendUser {
  username: string;
  email: string;
  timeZone: string;
  name: string;
  isStudent: boolean;
  isLibrarian: boolean;
  isMentor: boolean;
}
interface UserLoginResponse {
  user: BackendUser;
}

export const login = (payload: LOGIN_PAYLOAD): LOGIN_ACTION => ({
  type: LOGIN,
  payload,
});

export function* watchLogin() {
  yield takeLatest(LOGIN, handleLogin);
}
function* handleLogin(action: LOGIN_ACTION) {
  try {
    const { username, password, navigateFunction } = action.payload;
    const url = '/api/v1/login/';
    const data = { username, password };

    const res: AxiosResponse<UserLoginResponse> =
      yield api.post<UserLoginResponse>(url, { data });

    const { user } = res.data;
    yield put(setUser({ ...user }));
    if (res.status === 200) {
      navigateFunction('/complete-registration');
    } else {
      navigateFunction('/');
    }
  } catch (e) {
    console.error('Could not login user', e);
  }
}

export const autoLogin = (payload: AUTO_LOGIN_PAYLOAD): AUTO_LOGIN_ACTION => ({
  type: AUTO_LOGIN,
  payload,
});
export function* watchAutoLogin() {
  yield takeLatest(AUTO_LOGIN, handleAutoLogin);
}
function* handleAutoLogin(action: AUTO_LOGIN_ACTION) {
  const navigateFunction = action.payload.navigateFunction;
  try {
    const url = '/api/v1/users/me';
    const res: AxiosResponse<UserLoginResponse> =
      yield api.get<UserLoginResponse>(url);
    const { user } = res.data;
    yield put(setUser({ ...user }));
    if (res.status === 200) {
      navigateFunction('/complete-registration');
    } else {
      navigateFunction('/');
    }
  } catch (e) {
    console.error('Could not auto login user', e);
  }
}
