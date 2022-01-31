import { all } from 'redux-saga/effects';
import { watchLogin } from './actions';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    // add watch functions here
  ]);
}
