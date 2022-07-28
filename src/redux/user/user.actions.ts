import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { SET_USER, GET_USER, SetUserAction,GetUserAction, User } from './user.types';
import * as userTypes from './user.types';

import { vbbAPIV1 } from '../../services/api';
import { apiRequest, apiSuccessful, apiFailed, setAppAlert} from '../app/app.actions';
import { renderAPIMsg } from '../../utils/api';

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
      yield localStorage.setItem('user', JSON.stringify(user))
      //pushHistory('/dashboard');
    } else {
      //pushHistory('/');
    }
  } catch (e) {
    console.error('Could not retrieve user', e);
  }
}


export const updateMentorProfile = (payload: userTypes.UpdateMentorProfileAction) => ({
  type: userTypes.UPDATE_MENTOR_PROFILE,
  payload,
});

export const updateMentorProfileSuccess = (payload:any) => ({
  type: userTypes.UPDATE_MENTOR_PROFILE_SUCCESS,
  payload:payload
});

export const updateMentorProfileFailed = (payload:any) => ({
  type: userTypes.UPDATE_MENTOR_PROFILE_FAILED,
  payload:payload
});


export function* watchUpdateMentorProfile() {
  yield takeLatest(userTypes.UPDATE_MENTOR_PROFILE, handleMentorUpdate);
  yield takeLatest(userTypes.UPDATE_MENTOR_PROFILE_SUCCESS, handleGetUserDetail);

}

function* handleMentorUpdate(
  action: userTypes.UpdateMentorProfileAction
) {
  try {
    const url = 'profile/mentor/';

    yield put(apiRequest(action.payload));
    //yield delay(500)
    const data = { ...action.payload };
    const res: AxiosResponse<User> = yield vbbAPIV1.post<any>(url, data);
    if (res.status >= 200 && res.status < 300) {
      yield put(apiSuccessful(res.data));
      //yield put(setUser(res.data));
      yield put(setAppAlert({alertMsg:'Profile updated successfully...', alertSeverity:'success'}));
    } else {
      yield put(apiFailed(res.data));
      yield put(setAppAlert({alertMsg:'Profile updated failed...', alertSeverity:'error'}));
    }
  } catch (e:any) {
    console.error('Could not complete mentor profile', e);
    yield put(apiFailed(e.response.data));
  }
}
