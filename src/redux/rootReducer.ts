import { combineReducers } from 'redux';
import { user } from './user/user.reducer';
import { mentorList } from './mentorList/mentorList.reducer';


const rootReducer = combineReducers({ user, mentorList });

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
