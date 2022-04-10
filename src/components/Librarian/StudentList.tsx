import * as React from 'react';
import Box from '@mui/material/Box';
import ProfileCard from '../shared/ProfileCard';
import { getStduentProfles } from '../../utils/api';
import {Profile} from '../../utils/Profile';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const StudentList = () => {

    const studentProfiles: Profile[] = React.useMemo(() => getStduentProfles(), [])
    //console.log(studentProfiles)

    const [profiles, changeProfiles] = React.useState(studentProfiles);

    const handleKeyPress = (e:React.BaseSyntheticEvent):void => {
        const subString = e.target.value;
        const filteredProfiles: Profile[] = studentProfiles.filter(profile => {
            return (profile.firstName.includes(subString) || profile.lastName.includes(subString));
        });
        changeProfiles(filteredProfiles);
        console.log(filteredProfiles);
    }

    return(
        <Box>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Student First or Last Name"
                    inputProps={{ 'aria-label': 'search student name' }}
                    onKeyUp = {handleKeyPress}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Box flex="1 1 auto"  overflow='auto'>

                {profiles.map(student => (
                        <ProfileCard userProfile={student}/>
                ))}
            </Box>
        </Box>
              
    );

};


export default StudentList;