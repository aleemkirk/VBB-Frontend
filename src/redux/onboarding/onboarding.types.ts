export enum ActionType {
  ADD = 'addTaskNumber',
  CHECK = 'checkTaskStatus',
  ASYNC = 'taskAsync',
}

export interface addAction {
  type: ActionType.ADD;
}
export interface checkAction {
  type: ActionType.CHECK;
  payload: number;
}

export type Action = addAction | checkAction;
