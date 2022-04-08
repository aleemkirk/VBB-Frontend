import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { setUser } from '../user/user.actions';
import * as api from '../../services/api';
import {
  MentorRegistraionForm,
  SubmitMentorRegistrationAction,
  SUBMIT_MENTOR_REGISTRATION,
} from './registration.types';
import { USER } from '../user/user.types';

export const submitMentorRegistration = (payload: MentorRegistraionForm) => ({
  type: SUBMIT_MENTOR_REGISTRATION,
  payload,
});

export function* watchSubmitMentorRegistration() {
  yield takeLatest(SUBMIT_MENTOR_REGISTRATION, hanldeSubmitMentorRegistration);
}

function* hanldeSubmitMentorRegistration(
  action: SubmitMentorRegistrationAction
) {
  try {
    const { payload } = action;
    const url = '/api/v1/mentor-registration/';
    const data = { ...payload };
    const res: AxiosResponse<{ data: USER }> = yield api.post<{ data: USER }>(
      url,
      { data }
    );
    console.log({ res });
    debugger;
    // const { user } = res.data;
    // yield put(setUser({ ...user }));
    // if (res.status === 200) {
    //   navigateFunction('/complete-registration');
    // } else {
    //   navigateFunction('/');
    // }
  } catch (e) {
    console.error('Could not register mentor', e);
  }
}
