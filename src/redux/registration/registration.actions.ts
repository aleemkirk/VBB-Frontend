import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, select, takeLatest } from 'redux-saga/effects';
import { setUser } from '../user/user.actions';
import { vbbAPIV1 } from '../../services/api';

import {
  MentorRegistrationForm,
  MentorSignUpForm,
  StudentRegistrationForm,
  VerifyTokenForm,
  SubmitMentorRegistrationAction,
  SubmitMentorSignUpAction,
  SubmitMentorSignUpErrorResponse,
  SubmitStudentRegistrationAction,
  VerifyTokenAction,
  SUBMIT_EMAIL_VERIFY,
  VERIFY_RESPONSE,
  SUBMIT_MENTOR_REGISTRATION,
  SUBMIT_MENTOR_SIGN_UP,
  SUBMIT_STUDENT_REGISTRATION,
} from './registration.types';
import { setErrors } from '../actions';
import { AppState } from '../rootReducer';
import { Errors } from '../errors/errors.types';
import { User } from '../user/user.types';
import { pushHistory } from '../../utils/customHistory';

export const submitMentorRegistration = (payload: MentorRegistrationForm) => ({
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
    const url = 'mentor-registration/';
    const data = { ...action.payload };
    const res: AxiosResponse<User> = yield vbbAPIV1.post<User>(url, { data });
    const user = res.data;
    if (res.status === 201 && user) {
      yield put(setUser(user));
      pushHistory('/dashboard');
    } else {
      pushHistory('/');
    }
  } catch (e) {
    console.error('Could not register mentor', e);
  }
}

export const verifyMentorEmail = (payload: VerifyTokenForm) => ({
  type: SUBMIT_EMAIL_VERIFY,
  payload
});

export function* watchVerifyMentorEmail() {
  yield takeLatest(SUBMIT_EMAIL_VERIFY, handleWatchVerifyMentorEmail);
}

function* handleWatchVerifyMentorEmail(
  action: VerifyTokenAction
) {
  try {
    const url = 'mentor-email-confirmation/';
    const res: AxiosResponse<User> = yield vbbAPIV1.post<User>(url, action.payload);
    const response = res.data;
    if (res.status === 200 && response) {
      console.log(response)
      yield put(verifyEmailResponse());
      //yield pushHistory('/dashboard');
    } else {
      yield put(verifyEmailResponseFailed(response));
    }
  } catch (e:any) {
    yield put(verifyEmailResponseFailed(e.response.data));
    console.error('Could not verify mentor email address', e);
  }
}


export const verifyEmailResponse = () => ({
  type: VERIFY_RESPONSE
});

export const verifyEmailResponseFailed = (payload:any) => ({
  type: VERIFY_RESPONSE,
  payload:payload
});


/*
 * Student registration actions
 */
export const submitStudentRegistration = (
  payload: StudentRegistrationForm
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
    const url = 'student-registration/';
    const data = { ...action.payload };
    const res: AxiosResponse<User> = yield vbbAPIV1.post<User>(url, { data });

    const user = res.data;
    if (res.status === 201 && user) {
      yield put(setUser(user));
      pushHistory('/dashboard');
    } else {
      pushHistory('/');
    }
  } catch (e) {
    console.error('Could not register mentor', e);
  }
}

export const submitMentorSignUp = (
  payload: MentorSignUpForm
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
    const url = 'mentor-sign-up/';
    const res: AxiosResponse<undefined | SubmitMentorSignUpErrorResponse> =
      yield vbbAPIV1.post<undefined | SubmitMentorSignUpErrorResponse>(url, {
        ...action.payload,
      });
    if (res.status === 201) {
      pushHistory('/email-sent');
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
      const error = err as AxiosError<any>;
      const errorMessage = error.response?.data?.message ?? defaultErrorMessage;
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
