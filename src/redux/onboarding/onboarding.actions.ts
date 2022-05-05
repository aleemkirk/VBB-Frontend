
// export const setTaskNo = (payload: number): SetTaskNo => ({
//   type: SET_TASKNO,
//   payload,
// });

// export const getTaskNo = (): GetTaskNo  => ({ type: GET_TASKNO});
import { ActionType, Action} from './onboarding.types';
import { Dispatch } from 'redux';

export const addTask = (amount: number) =>{
  return (dispatch: Dispatch<Action>) =>{
    dispatch({
      type: ActionType.ADD,
      payload: amount
    })
  }
}




