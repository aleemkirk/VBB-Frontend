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
  watchGetMentorList,
} from './actions';

export default function* rootSaga() {
  yield all([
    watchAutoLogin(),
    watchGetCareers(),
    watchGetLanguages(),
    watchGetSubjects(),
    watchGetTimezones(),
    watchLogin(),
    watchGetMentorList(),
    watchSubmitMentorRegistration(),
    watchSubmitMentorSignUpForm(),
    watchSubmitStudentRegistration(),
  ]);
}
