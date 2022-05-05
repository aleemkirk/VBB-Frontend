// import {INCREMENT, TAction, TaskAction, incTaskNo} from './onboarding.types';
// import { SET_TASKNO , TaskActions } from './onboarding.types';
// import {Action} from './onboarding.actions';
import { Action, ActionType } from './onboarding.types';


const initialState = 0;
// export const changeTaskNo = (state = initialState, action: TAction) => {
//     switch(action.type){
//         case INCREMENT: return state + action.type;

//         default: return state;
//     }
//   };

// export const tasknumbers = (state = initialState, action: TaskActions) => {
//   switch (action.type) {
//     case SET_TASKNO :
//       return action.payload;
//     default:
//       return state;
//   }
// };

export const addTaskNo = (state:number = initialState, action:Action) => {

  switch (action.type){
    case ActionType.ADD:
      return state+1;

    default:
      return state;
  }
}
