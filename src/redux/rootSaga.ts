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
} from './actions';

export default function* rootSaga() {
  yield all([
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
