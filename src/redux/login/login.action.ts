import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
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
}
interface UserLoginResponse {
  user: BackendUser;
  users: BackendUser[];
}

export const login = (payload: LOGIN_PAYLOAD): LOGIN_ACTION => ({
  type: LOGIN,
  payload,
});

export function* watchLogin() {
  yield takeEvery(LOGIN, handleLogin);
}
function* handleLogin(action: LOGIN_ACTION) {
  try {
    const { username, password, navigateFunction } = action.payload;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
      body: { username, password },
    };
    const url = 'https://localhost.vbb.org/api/login/';
    // const { data } = yield call(api.post, url, options);
    const res: AxiosResponse<UserLoginResponse> = yield call(
      axios.post,
      url,
      options
    );
    console.log(res);
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
  yield takeEvery(AUTO_LOGIN, handleAutoLogin);
}
function* handleAutoLogin(action: AUTO_LOGIN_ACTION) {
  const navigateFunction = action.payload.navigateFunction;
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    };
    const url = 'https://localhost.vbb.org/api/users/me';
    const res: AxiosResponse<UserLoginResponse> = yield call(
      axios.get,
      url,
      options
    );
    console.log(res);
    const { user } = res.data;
    debugger;
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
