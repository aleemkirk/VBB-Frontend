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
  ]);
}
