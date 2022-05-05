import { combineReducers } from 'redux';
import {addTaskNo} from './onboarding.reducer'


const reducers = combineReducers({
    task: addTaskNo
})

export default reducers

export type RootState = ReturnType<typeof reducers>