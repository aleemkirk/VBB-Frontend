import { combineReducers } from 'redux';
import { careers } from './careers/careers.reducer';
import { languages } from './language/language.reducer';
import { subjects } from './subjects/subjects.reducer';
import { timezones } from './timezones/timezones.reducer';
import { user } from './user/user.reducer';
import { addTaskNo, onbaordingSteps } from './onboarding/onboarding.reducer';
import { opportunity } from './opportunity/opportunity.reducer';

const rootReducer = combineReducers({
  careers,
  languages,
  subjects,
  timezones,
  user,
  addTaskNo,
  onbaordingSteps,
  opportunity,
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
