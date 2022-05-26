import { Action, ActionType } from './onboarding.types';

const initialNoState = 0;
const initialCheckState = [false, false, false, false, false, false];

export const onboardingSteps = (state = initialCheckState, action: Action) => {
  switch (action.type) {
    case ActionType.COMPLETE_ONBOARDING_STEP:
      const completedIndex = action.payload - 1;
      return state.map((value, index) =>
        index === completedIndex + 1 ? (value = true) : value
      );
    case ActionType.UPDATE_ONBOARDING_STEP:
      const updateIndex = action.payload - 1;
      return state.map((value, index) =>
        index === updateIndex + 1 ? !value : value
      );
    default:
      return state;
  }
};

export const addTaskNo = (state: number = initialNoState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD:
      return state + 1;
    default:
      return state;
  }
};
