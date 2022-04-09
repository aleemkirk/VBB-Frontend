import * as React from 'react';
import Box from '@mui/material/Box';
import ProfileCard from '../shared/ProfileCard';
import { getStduentProfles } from '../../utils/api';
import {Profile} from '../../utils/Profile';
import { AnyRecord } from 'dns';



const StudentList = () => {

    const studentProfiles: Profile[] = getStduentProfles();
    //console.log(studentProfiles)


    return(
        <>
            {studentProfiles.map(student => (
                    <ProfileCard userProfile={student}/>
            ))}
        </>
            
        
        
    )

};


export default StudentList;