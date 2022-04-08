import * as React from 'react';
import Box from '@mui/material/Box';
import ProfileCard from '../shared/ProfileCard';
import { getStduentProfles } from '../../utils/api';
import {Profile} from '../../utils/Profile';
import { AnyRecord } from 'dns';



const StudentList = () => {

    const studentProfiles: Profile[] = getStduentProfles();
    //console.log(studentProfiles)

    const handleClick = (e: any) => {
        console.log('A profile card was clicked!');
    }

    return(
        <Box
        sx={{
            width: 600,
            height: 600,
            backgroundColor: 'white',
            '&:hover': {
            backgroundColor: 'white',
            opacity: [0.9, 0.8, 0.7],
            },
            maxHeight: 10000,
            overflow: 'auto',
        }}>
            {studentProfiles.map(student => (
                <ProfileCard userProfile={student}/>
            ))}
        </Box>
        
    )

};


export default StudentList;