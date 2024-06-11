import { AppState } from '../rootReducer';
import { initialState } from './app.reducer';

const selectAppState = (state: AppState) => state.appState || initialState;

export const getAppAlert = (state: AppState) => state.appState.alertMsg;

export const getAppAlertIsOpen = (state: AppState) =>
  state.appState.isAlertOpen;

export const getAppAlertSeverity = (state: AppState) =>
  state.appState.alertSeverity;
