import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { vbbAPIV1 } from '../../services/api';
import {
  AUTO_LOGIN,
  AUTO_LOGIN_ACTION,
  LOGIN,
  LOGIN_ACTION,
  LOGIN_PAYLOAD,
} from './login.types';
import { setUser, getUserDetail} from '../user/user.actions';
import { setAppToken, setAppAlert} from '../app/app.actions';
import { User, AuthToken} from '../user/user.types';
import { pushHistory } from '../../utils/customHistory';

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
    const { username, password } = action.payload;
    const url = 'auth/jwt/create/';
    const data = { username, password };

    const res: AxiosResponse<AuthToken> = yield vbbAPIV1.post<User>(url, data);
    const user = res.data;

    if (res.status === 200 && user) {
      //yield put(setUser(user));
      yield localStorage.setItem('token', user.access)
      yield localStorage.setItem('refresh_token', user.refresh)
      yield put(setAppToken({refresh_token:user.refresh, access_token:user.access}));
      yield put(getUserDetail());
      yield put(setAppAlert({alertMsg:'Successful login! Redirecting to dashboard...', alertSeverity:'success'}));

      // if (user.isMentor && !user.mentorProfile) {
      //   pushHistory('/complete-registration');
      // }
      pushHistory('/');
    } else {
      pushHistory('/login');
    }
  } catch (e:any) {
    console.log(e)
    let message:any = e.response?.data?.detail
    yield put(setAppAlert({alertMsg:message, alertSeverity:'error'}));
    console.error('Could not login user', e);
  }
}

// Auto-Login Action and Sagas
export const autoLogin = (): AUTO_LOGIN_ACTION => ({
  type: AUTO_LOGIN,
});
export function* watchAutoLogin() {
  yield takeLatest(AUTO_LOGIN, handleAutoLogin);
}
function* handleAutoLogin() {
  try {
    const url = 'users/me';
    const res: AxiosResponse<User> = yield vbbAPIV1.get<User>(url);
    const user = res.data;
    if (res.status === 200 && user) {
      yield put(setUser(user));
      pushHistory('/dashboard');
    } else {
      pushHistory('/');
    }
  } catch (e) {
    console.error('Could not auto login user', e);
  }
}
