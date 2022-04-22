import { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { setUser } from '../user/user.actions';
import * as api from '../../services/api';

import {
  SubmitMentorRegistrationAction,
  SubmitMentorRegistrationPayload,
  SubmitStudentRegistrationAction,
  SubmitStudentRegistrationPayload,
  SUBMIT_MENTOR_REGISTRATION,
  SUBMIT_STUDENT_REGISTRATION,
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
    const res: AxiosResponse<User> = yield api.post<User>(url, { data });

    if (res.status === 201) {
      const user = res.data;
      yield put(setUser(user));
      navigateFunction('/dashboard');
    } else {
      navigateFunction('/');
    }
  } catch (e) {
    console.error('Could not register mentor', e);
  }
}

/*
 * Student registration actions
 */
export const submitStudentRegistration = (
  payload: SubmitStudentRegistrationPayload
): SubmitStudentRegistrationAction => ({
  type: SUBMIT_STUDENT_REGISTRATION,
  payload,
});

export function* watchSubmitStudentRegistration() {
  yield takeLatest(
    SUBMIT_STUDENT_REGISTRATION,
    hanldeSubmitStudentRegistration
  );
}

function* hanldeSubmitStudentRegistration(
  action: SubmitStudentRegistrationAction
) {
  try {
    const {
      payload: { studentRegistrationForm, navigateFunction },
    } = action;
    const url = '/api/v1/student-registration/';
    const data = { ...studentRegistrationForm };
    const res: AxiosResponse<User> = yield api.post<User>(url, { data });

    if (res.status === 201) {
      const user = res.data;
      yield put(setUser(user));
      navigateFunction('/dashboard');
    } else {
      navigateFunction('/');
    }
  } catch (e) {
    console.error('Could not register mentor', e);
  }
}
