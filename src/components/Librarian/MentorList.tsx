import * as React from 'react';
import { getMentorProfiles } from '../../utils/api';
import {Profile} from '../../utils/Profile';
import ProfileListView from '../shared/ProfileListView';


const MentorList = () => {

    const mentorProfiles:Profile[] = React.useMemo(() => getMentorProfiles(), []) ;

    return(
        <ProfileListView profileList={mentorProfiles}/>  
    );
};


export default MentorList;