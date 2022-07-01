import axios, { AxiosError, AxiosResponse } from 'axios';
import { put, select, takeLatest, delay } from 'redux-saga/effects';
import { setUser } from '../user/user.actions';
import { apiRequest, apiSuccessful, apiFailed, setAppAlert} from '../app/app.actions';

import { vbbAPIV1 } from '../../services/api';

import {
  StudentOnboardingForm,
  MentorOnboardingForm,
  MentorSignUpForm,
  StudentRegistrationForm,
  VerifyTokenForm,
  CompleteStudentOnboardAction,
  CompleteMentorOnboardAction,
  SubmitMentorSignUpAction,
  SubmitMentorSignUpErrorResponse,
  SubmitStudentRegistrationAction,
  VerifyTokenAction,
  SUBMIT_EMAIL_VERIFY,
  VERIFY_RESPONSE,
  COMPLETE_MENTOR_ONBOARD,
  COMPLETE_MENTOR_ONBOARD_SUCCESS,
  COMPLETE_MENTOR_ONBOARD_FAILED,
  COMPLETE_STUDENT_ONBOARD,
  COMPLETE_STUDENT_ONBOARD_SUCCESS,
  COMPLETE_STUDENT_ONBOARD_FAILED,
  SUBMIT_MENTOR_SIGN_UP,
  SUBMIT_STUDENT_REGISTRATION,
} from './registration.types';
import { setErrors } from '../actions';
import { AppState } from '../rootReducer';
import { Errors } from '../errors/errors.types';
import { User } from '../user/user.types';
import { pushHistory } from '../../utils/customHistory';

export const completeMentorOnboard = (payload: MentorOnboardingForm) => ({
  type: COMPLETE_MENTOR_ONBOARD,
  payload,
});

export const completeMentorOnboardSuccess = (payload:any) => ({
  type: COMPLETE_MENTOR_ONBOARD_SUCCESS,
  payload:payload
});

export const completeMentorOnboardFailed = (payload:any) => ({
  type: COMPLETE_MENTOR_ONBOARD_FAILED,
  payload:payload
});


export function* watchOnboardMentor() {
  yield takeLatest(COMPLETE_MENTOR_ONBOARD, handleSubmitMentorRegistration);
}

function* handleSubmitMentorRegistration(
  action: CompleteMentorOnboardAction
) {
  try {
    const url = 'complete-mentor-onboard/';

    yield put(apiRequest(action.payload));
    yield delay(1000)

    const data = { ...action.payload };
    const res: AxiosResponse<User> = yield vbbAPIV1.post<User>(url, data);
    const user = res.data;
    if (res.status === 201 && user) {
      yield put(apiSuccessful(user));
      yield put(setUser(user));
      yield put(setAppAlert({alertMsg:'Mentor Onboarding complete! You will need to wait until the Village Book Builder Team can review your application before mentoring...', alertSeverity:'success'}));
      pushHistory('/?onboard_complete=true');
    } else {
      pushHistory('/');
    }
  } catch (e:any) {
    console.error('Could not complete mentor profile', e);
    yield put(apiFailed(e.response.data));
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
    const url = 'student-sign-up/';
    const data = { ...action.payload };
    yield put(apiRequest(action.payload));

    const res: AxiosResponse<User> = yield vbbAPIV1.post<User>(url, data);

    const user = res.data;
    if (res.status >= 200 && res.status < 300) {
      yield put(setUser(user));
      yield put(apiSuccessful(res.data));
      yield put(setAppAlert({alertMsg:'Student signup complete! You may log in now with your new username and password...', alertSeverity:'success'}));
      pushHistory('/login');
    } else {
      yield put(setAppAlert({alertMsg:'Could not complete registration...', alertSeverity:'error'}));
    }
  } catch (e:any) {
    console.error('Could not register student', e);
    yield put(apiFailed(e.response.data));
    yield put(setAppAlert({alertMsg:'Could not complete registration...', alertSeverity:'error'}));

  }
}


export const completeStudentOnboard = (payload: StudentOnboardingForm) => ({
  type: COMPLETE_STUDENT_ONBOARD,
  payload,
});

export const completeStudentOnboardSuccess = (payload:any) => ({
  type: COMPLETE_STUDENT_ONBOARD_SUCCESS,
  payload:payload
});

export const completeStudentOnboardFailed = (payload:any) => ({
  type: COMPLETE_STUDENT_ONBOARD_FAILED,
  payload:payload
});


export function* watchOnboardStudent() {
  yield takeLatest(COMPLETE_STUDENT_ONBOARD, handleOnboardStudent);
}

function* handleOnboardStudent(
  action: CompleteStudentOnboardAction
) {
  try {
    const url = 'complete-student-onboard/';
    yield put(apiRequest(action.payload));
    yield delay(1000)

    const res: AxiosResponse<User> = yield vbbAPIV1.post<User>(url, action.payload);
    const user = res.data;
    if (res.status === 201 && user) {
      yield put(apiSuccessful(user));
      yield put(setUser(user));
      yield put(setAppAlert({alertMsg:'Onboarding complete! You may now start setting your schedule for computer/mentor hours...', alertSeverity:'success'}));
    } else {
      pushHistory('/');
      yield put(apiFailed(user));

    }
  } catch (e:any) {
    console.error('Could not complete student profile', e);
    yield put(apiFailed(e.response.data));
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
      yield put(setAppAlert({alertMsg:'Successful signup! Please log in with your new password...', alertSeverity:'success'}));
      pushHistory('/login');
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
