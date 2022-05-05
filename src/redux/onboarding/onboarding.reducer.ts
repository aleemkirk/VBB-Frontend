import { Action, ActionType } from './onboarding.types';


const initialNoState = 0;
const initialCheckState = [false, false, false, false,false, false];

export const addTaskNo = (state:number = initialNoState, action:Action) => {
  switch (action.type){
    case ActionType.ADD:
      return state+1;
    default:
      return state;
  }
}

export const checkTaskNo  = (state = initialCheckState, action:Action) => {
  switch (action.type){
    case ActionType.CHECK:
      return state.map((temp, idex) => idex ===action.payload? temp = true : temp);
    default:
      return state;
  }
}

