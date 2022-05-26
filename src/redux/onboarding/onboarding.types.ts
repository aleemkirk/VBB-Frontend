export enum ActionType {
  ADD = 'AddTaskNumber',
  COMPLETE_ONBOARDING_STEP = 'CompleteStep',
  UPDATE_ONBOARDING_STEP = 'UpdateStep',
}

export interface AddAction {
  type: ActionType.ADD;
}
// export interface CheckAction {
//   type: ActionType.CHECK;
//   payload: number;
// }

export interface CompleteStepAction{
  type: ActionType.COMPLETE_ONBOARDING_STEP;
  payload: number;
}

export interface UpdateStepAction{
  type: ActionType.UPDATE_ONBOARDING_STEP;
  payload: number;
}

export type Action = AddAction | CompleteStepAction | UpdateStepAction;
