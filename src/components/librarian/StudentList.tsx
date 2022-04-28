import * as React from 'react';
import { getStudentProfles } from '../../utils/api';
import {Profile} from '../../utils/Profile';
import ProfileListView from '../shared/ProfileListView';




const StudentList = () => {

    const studentProfiles: Profile[] = React.useMemo(() => getStudentProfles(), [])
    //console.log(studentProfiles)

    
    

    return(
        <ProfileListView verify profileList={studentProfiles}/>
    );

};


export default StudentList;