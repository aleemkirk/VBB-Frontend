import { all } from 'redux-saga/effects';
import { watchGetMentorList, watchLogin } from './actions';


export default function* rootSaga() {
  yield all([
    // add watch functions here
    watchLogin(),
    watchGetMentorList(),
  ]);
}
