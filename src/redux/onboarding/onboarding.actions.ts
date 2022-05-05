import { ActionType, Action} from './onboarding.types';
import { takeLatest, put } from 'redux-saga/effects';
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

// export const taskUpAsync(){
//   return{
//     type: "ASYNC_TASK"
//   };
// }
// function* runTaskUpAsync() {
//   // yield put({ type: ActionType.ADD, value: 1 });

// }

// export function* watchTaskUp() {
//   // yield takeLatest(ActionType.ADD, taskUpAsync);
//   yield takeLatest("ASYNC_TASK");
// }




