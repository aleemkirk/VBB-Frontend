import { combineReducers } from 'redux';
import { careers } from './careers/careers.reducer';
import { errors } from './errors/errors.reducer';
import { languages } from './language/language.reducer';
import { subjects } from './subjects/subjects.reducer';
import { timezones } from './timezones/timezones.reducer';
import { user } from './user/user.reducer';
import { mentorList } from './mentorList/mentorList.reducer';


const rootReducer = combineReducers({
  careers,
  languages,
  subjects,
  timezones,
  user,
  errors,
  mentorList,
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
