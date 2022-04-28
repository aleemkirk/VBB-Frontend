import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import ProfileListView from '../shared/ProfileListView';
import {getMentorList} from '../../redux/actions';


const MentorList = () => {

    const mentorList = useSelector((state: AppState) => {
        return state.mentorList;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (mentorList.length == 0){
            dispatch(getMentorList());
        }
    }, [mentorList]);

    return(
        <ProfileListView  profileList={mentorList}/>  
    );
};


export default MentorList;