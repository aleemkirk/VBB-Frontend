import axios, { AxiosResponse } from 'axios';
import { put, select, takeLatest } from 'redux-saga/effects';
import { setUser } from '../user/user.actions';
import { vbbAPIV1 } from '../../services/api';

import {
  SubmitMentorRegistrationAction,
  SubmitMentorRegistrationPayload,
  SubmitMentorSignUpAction,
  SubmitMentorSignUpPayload,
  SubmitMentorSignUpErrorResponse,
  SubmitStudentRegistrationAction,
  SubmitStudentRegistrationPayload,
  SUBMIT_MENTOR_REGISTRATION,
  SUBMIT_MENTOR_SIGN_UP,
  SUBMIT_STUDENT_REGISTRATION,
} from './registration.types';
import { setErrors } from '../actions';
import { AppState } from '../rootReducer';
import { Errors } from '../errors/errors.types';
import { User } from '../user/user.types';

export const submitMentorRegistration = (
  payload: SubmitMentorRegistrationPayload
) => ({
  type: SUBMIT_MENTOR_REGISTRATION,
  payload,
});

export function* watchSubmitMentorRegistration() {
  yield takeLatest(SUBMIT_MENTOR_REGISTRATION, handleSubmitMentorRegistration);
}

function* handleSubmitMentorRegistration(
  action: SubmitMentorRegistrationAction
) {
  try {
    const {
      payload: { mentorRegistrationForm, navigateFunction },
    } = action;
    const url = 'mentor-registration/';
    const data = { ...mentorRegistrationForm };
    const res: AxiosResponse<User> = yield vbbAPIV1.post<User>(url, { data });
    const user = res.data;
    if (res.status === 201 && user) {
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
    handleSubmitStudentRegistration
  );
}

function* handleSubmitStudentRegistration(
  action: SubmitStudentRegistrationAction
) {
  try {
    const {
      payload: { studentRegistrationForm, navigateFunction },
    } = action;
    const url = 'student-registration/';
    const data = { ...studentRegistrationForm };
    const res: AxiosResponse<User> = yield vbbAPIV1.post<User>(url, { data });

    const user = res.data;
    if (res.status === 201 && user) {
      yield put(setUser(user));
      navigateFunction('/dashboard');
    } else {
      navigateFunction('/');
    }
  } catch (e) {
    console.error('Could not register mentor', e);
  }
}

export const submitMentorSignUp = (
  payload: SubmitMentorSignUpPayload
): SubmitMentorSignUpAction => ({
  type: SUBMIT_MENTOR_SIGN_UP,
  payload,
});
export function* watchSubmitMentorSignUpForm() {
  yield takeLatest(SUBMIT_MENTOR_SIGN_UP, handleSubmitMentorSignUpForm);
}
function* handleSubmitMentorSignUpForm(action: SubmitMentorSignUpAction) {
  const defaultErrorMessage = 'There was an error processing your sign up.';
  const current_errors: Errors = yield select(
    (state: AppState) => state.errors
  );
  try {
    const { mentorSignUpForm, navigateFunction } = action.payload;
    const url = 'mentor-sign-up/';
    const res: AxiosResponse<undefined | SubmitMentorSignUpErrorResponse> =
      yield vbbAPIV1.post<undefined | SubmitMentorSignUpErrorResponse>(url, {
        ...mentorSignUpForm,
      });
    if (res.status === 201) {
      navigateFunction('/email-sent');
    } else {
      const errors = {
        ...current_errors,
        mentorSignUpErrors: { message: defaultErrorMessage },
      };
      yield put(setErrors(errors));
    }
  } catch (err) {
    console.error('Error signing up mentor', { err });
    if (axios.isAxiosError(err)) {
      const errorMessage = err.response?.data?.message ?? defaultErrorMessage;
      const errors = {
        ...current_errors,
        mentorSignUpErrors: { message: errorMessage },
      };
      yield put(setErrors(errors));
    } else {
      const errors = {
        ...current_errors,
        mentorSignUpErrors: { message: defaultErrorMessage },
      };
      yield put(setErrors(errors));
    }
  }
}
