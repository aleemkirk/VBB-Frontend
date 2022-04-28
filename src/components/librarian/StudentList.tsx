import * as React from 'react';
import { getStduentProfles } from '../../utils/api';
import {Profile} from '../../utils/Profile';
import ProfileListView from '../shared/ProfileListView';




const StudentList = () => {

    const studentProfiles: Profile[] = React.useMemo(() => getStduentProfles(), [])
    //console.log(studentProfiles)

    
    

    return(
        <ProfileListView profileList={studentProfiles}/>
    );

};


export default StudentList;