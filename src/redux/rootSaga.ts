import { all } from 'redux-saga/effects';
import {
  watchAutoLogin,
  watchGetCareers,
  watchGetLanguages,
  watchGetSubjects,
  watchGetTimezones,
  watchLogin,
  watchSubmitMentorRegistration,
  watchSubmitMentorSignUpForm,
  watchSubmitStudentRegistration,
  watchTaskStep,
  watchGetOpportunity,
  watchGetUserDetail,
  watchVerifyMentorEmail,
  watchLogout
} from './actions';

export default function* rootSaga() {
  yield all([
    watchLogout(),
    watchVerifyMentorEmail(),
    watchGetUserDetail(),
    watchAutoLogin(),
    watchGetCareers(),
    watchGetLanguages(),
    watchGetSubjects(),
    watchGetTimezones(),
    watchLogin(),
    watchSubmitMentorRegistration(),
    watchSubmitMentorSignUpForm(),
    watchSubmitStudentRegistration(),
    watchTaskStep(),
    watchGetOpportunity(),
  ]);
}
