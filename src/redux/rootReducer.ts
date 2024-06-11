import { combineReducers } from 'redux';
import { careers } from './careers/careers.reducer';
import { errors } from './errors/errors.reducer';
import { languages } from './language/language.reducer';
import { bookings } from './bookings/bookings.reducer';
import { subjects } from './subjects/subjects.reducer';
import { timezones } from './timezones/timezones.reducer';
import { user } from './user/user.reducer';
import { addTaskNo, onboardingSteps } from './onboarding/onboarding.reducer';
import { opportunity } from './opportunity/opportunity.reducer';
import { appState } from './app/app.reducer';
import { genres } from './genre/genre.reducer';
import { library } from './library/library.reducer';

const rootReducer = combineReducers({
  appState,
  careers,
  bookings,
  genres,
  library,
  languages,
  subjects,
  timezones,
  user,
  addTaskNo,
  onboardingSteps,
  opportunity,
  errors,
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
