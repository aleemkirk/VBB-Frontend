// export interface onboarding {
//   id: number;
//   name: string;
//   taskNo:number;
//   taskCheck: Array<boolean>;
// }

export enum ActionType{
    ADD = 'addnumber',
    CHECK = 'finishtask',
    ASYNC = 'task_async',
  }

export interface addAction {
    type: ActionType.ADD
  }
  export interface checkAction {
    type: ActionType.CHECK;
    payload: number
  }

export type Action = addAction | checkAction

