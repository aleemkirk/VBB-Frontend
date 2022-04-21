import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { setUser } from '../user/user.actions';
import * as api from '../../services/api';

import {
  SubmitMentorRegistrationAction,
  SubmitMentorRegistrationPayload,
  SUBMIT_MENTOR_REGISTRATION,
} from './registration.types';
import { User } from '../user/user.types';

export const submitMentorRegistration = (
  payload: SubmitMentorRegistrationPayload
) => ({
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
    const {
      payload: { mentorRegistraionForm, navigateFunction },
    } = action;
    const url = '/api/v1/mentor-registration/';
    const data = { ...mentorRegistraionForm };
    const res: AxiosResponse<{ data: User }> = yield api.post<{ data: User }>(
      url,
      { data }
    );

    if (res.status === 201) {
      debugger;
      const user = res.data.data;
      yield put(setUser({ ...user }));
      navigateFunction('/dashboard');
    } else {
      navigateFunction('/');
    }
  } catch (e) {
    console.error('Could not register mentor', e);
  }
}
