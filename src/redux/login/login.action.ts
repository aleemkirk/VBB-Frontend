import {put, takeEvery} from 'redux-saga/effects'
import { setUser } from '../user/user.actions';
import { LOGIN, LOGIN_ACTION, LOGIN_PAYLOAD } from "./login.types";

export const login = (payload: LOGIN_PAYLOAD)=>({type: LOGIN, payload})

export function* watchLogin(){
  yield takeEvery(LOGIN, handleLogin)
}
function* handleLogin(action:LOGIN_ACTION){
  try{
    yield put(setUser({firstName: 'TEST_FIRSTNAME', lastName: 'TEST_LASTNAME'}))
  }catch(e){
    console.error("Could not login user", e)
  }
}
