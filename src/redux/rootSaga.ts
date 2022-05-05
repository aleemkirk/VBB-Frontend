import { all } from 'redux-saga/effects';
import {
  watchAutoLogin,
  watchGetCareers,
  watchGetLanguages,
  watchGetSubjects,
  watchGetTimezones,
  watchLogin,
  watchSubmitMentorRegistration,
  watchSubmitStudentRegistration,
  // watchTaskUp
} from './actions';

export default function* rootSaga() {
  yield all([
    // add watch functions here
    watchAutoLogin(),
    watchGetCareers(),
    watchGetLanguages(),
    watchGetSubjects(),
    watchGetTimezones(),
    watchLogin(),
    watchSubmitMentorRegistration(),
    watchSubmitStudentRegistration(),
    // watchTaskUp(),
  ]);
}
