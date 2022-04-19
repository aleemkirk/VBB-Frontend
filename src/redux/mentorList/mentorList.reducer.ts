import { actionChannel } from 'redux-saga/effects';
import { Profile } from '../../utils/Profile';
import { put, takeEvery } from 'redux-saga/effects';
import { getMentorProfiles } from '../../utils/api';

export const mentorList = (state=[] as Profile[], action: MentorListActions):Profile[] => {

    switch(action.type){
        
        case SET_MENTOR_LIST:
            return action.payload;
        default:
            return state;
    }

};


//Types
const GET_MENTOR_LIST = 'GET_MENTOR_LIST';
const SET_MENTOR_LIST = 'SET_MENTOR_LIST';


interface SetMentorListAction {
    type: typeof SET_MENTOR_LIST;
    payload: Profile[];
}

interface GetMentorListAction {
    type: typeof GET_MENTOR_LIST;
}

type MentorListActions = SetMentorListAction | GetMentorListAction;

//Actions
export const setMentorList = (payload:Profile[]):SetMentorListAction => ({
    type: SET_MENTOR_LIST,
    payload
});

export const getMentorList = (): GetMentorListAction => ({ type: GET_MENTOR_LIST });


export function* watchGetMentorList() {
  yield takeEvery(GET_MENTOR_LIST, handleGetMentorList);
}
function* handleGetMentorList(action: GetMentorListAction) {
  try {
    const mentorList:Profile[] = yield getMentorProfiles();
    yield put(
      setMentorList(mentorList)
    );
  } catch (e) {
    console.error('Could not get mentor list', e);
  }
}
