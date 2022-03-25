import { all } from 'redux-saga/effects';
import { watchAutoLogin, watchLogin } from './actions';

export default function* rootSaga() {
  yield all([
    // add watch functions here
    watchLogin(),
    watchAutoLogin(),
  ]);
}
