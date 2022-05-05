export enum ActionType{
    ADD = 'addnumber',
    CHECK = 'finishtask',
  }

export interface addAction {
    type: ActionType.ADD
  }
  export interface checkAction {
    type: ActionType.CHECK;
    payload: number
  }

export type Action = addAction | checkAction