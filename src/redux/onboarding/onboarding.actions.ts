import { ActionType, Action} from './onboarding.types';
import { takeLatest, put, takeEvery, delay } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { vbbAPIV1 } from '../../services/api';

export const addTask = () =>{
  return {
      type: ActionType.ADD,
  }
}

export const checkTask = (payload: number) =>{
  return {
      type: ActionType.CHECK,
      payload,
  }
}

function* taskAync(){
  yield put({type: ActionType.ADD});
  yield put({type: ActionType.CHECK});
}

export function* watchTaskAsync(){
  yield takeEvery(ActionType.ASYNC, taskAync);
}


