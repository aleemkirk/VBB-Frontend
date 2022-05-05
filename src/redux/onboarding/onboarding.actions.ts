
// export const setTaskNo = (payload: number): SetTaskNo => ({
//   type: SET_TASKNO,
//   payload,
// });

// export const getTaskNo = (): GetTaskNo  => ({ type: GET_TASKNO});
import { ActionType, Action} from './onboarding.types';
import { Dispatch } from 'redux';
import { takeLatest, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { vbbAPIV1 } from '../../services/api';

export const addTask = () =>{
  return {
      type: ActionType.ADD,
  }
}

// function* taskUpAsync() {
//   yield put({ type: ActionType.ADD, value: 1 });
// }

// export function* watchTaskUp() {
//   yield takeLatest(ActionType.ADD, taskUpAsync);
// }




