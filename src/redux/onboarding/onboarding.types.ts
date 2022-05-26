export enum ActionType {
  ADD = 'AddTaskNumber',
  CHECK = 'CheckTaskStatus',
  ASYNC = 'TaskAsync',
}

export interface AddAction {
  type: ActionType.ADD;
}
export interface CheckAction {
  type: ActionType.CHECK;
  payload: number;
}

export type Action = AddAction | CheckAction;
