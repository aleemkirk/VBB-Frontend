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
// export function* watchGetTaskNo() {
//   yield takeLatest(ActionType.ADD, handleGetTaskNo);
// }
// function* handleGetTaskNo() {
//   try {
//     const url = 'onboarding/taskNumber';
//     const res: AxiosResponse<ActionType.ADD> = yield vbbAPIV1.get<ActionType.ADD>(url);
//     if (res.status === 200) {
//       yield put(addTask);
//     } else {
//       console.error('Error getting Careers');
//     }
//   } catch (e) {
//     console.error('Failed to get Careers', { e });
//   }
// }


// export function* watchGetTaskCheck() {
//   yield takeLatest(ActionType.CHECK, handleGetTaskCheck);
// }
// function* handleGetTaskCheck() {
//   try {
//     const url = 'onboarding/taskCheck';
//     const res: AxiosResponse<ActionType.CHECK> = yield vbbAPIV1.get<ActionType.CHECK>(url);
//     if (res.status === 200) {
//       yield put(checkTask);
//     } else {
//       console.error('Error getting Careers');
//     }
//   } catch (e) {
//     console.error('Failed to get Careers', { e });
//   }
// }

