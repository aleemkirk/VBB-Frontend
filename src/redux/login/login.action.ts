import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import * as api from '../../services/api';
import {
  AUTO_LOGIN,
  AUTO_LOGIN_ACTION,
  AUTO_LOGIN_PAYLOAD,
  LOGIN,
  LOGIN_ACTION,
  LOGIN_PAYLOAD,
} from './login.types';
import { setUser } from '../user/user.actions';
import { User } from '../user/user.types';

// Login Action and Sagas
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

    const res: AxiosResponse<User> = yield api.post<User>(url, {
      data,
    });

    if (res.status === 200) {
      const user = res.data;
      yield put(setUser(user));
      if (user.isMentor && !user.mentorProfile) {
        navigateFunction('/complete-registration');
      }
      navigateFunction('/dashboard');
    } else {
      navigateFunction('/');
    }
  } catch (e) {
    console.error('Could not login user', e);
  }
}

// Auto-Login Action and Sagas
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
    const res: AxiosResponse<User> = yield api.get<User>(url);
    if (res.status === 200) {
      const user = res.data;
      yield put(setUser(user));
      navigateFunction('/complete-registration');
    } else {
      navigateFunction('/');
    }
  } catch (e) {
    console.error('Could not auto login user', e);
  }
}
