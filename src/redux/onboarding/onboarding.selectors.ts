import { AppState } from '../rootReducer';
export const hasCompletedFirstStep = (state: AppState) =>
  state.onboardingSteps[0];
export const hasCompletedSecondStep = (state: AppState) =>
  state.onboardingSteps[1];
export const hasCompletedThirdStep = (state: AppState) =>
  state.onboardingSteps[2];
export const hasCompletedForthStep = (state: AppState) =>
  state.onboardingSteps[3];
export const hasCompletedFifthStep = (state: AppState) =>
  state.onboardingSteps[4];
export const hasCompletedSixthStep = (state: AppState) =>
  state.onboardingSteps[5];
