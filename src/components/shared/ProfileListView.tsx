import * as React from 'react';
import Box from '@mui/material/Box';
import ProfileCard from '../shared/ProfileCard';
import {Profile} from '../../utils/Profile';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ProfileModal from '../shared/ProfileModal';
import { Card, Grid, Typography } from '@mui/material';



interface ProfileListViewProps {
    profileList:Profile[];
    verify?: boolean;
}


const ProfileListView = ({profileList, verify=false}: ProfileListViewProps) => {

    //Needs list of student/mentor profiles    

    const [profiles, setProfiles] = React.useState(profileList);
    const [modalProfile, setModalProfile] = React.useState<Profile | null>(null);

    const handleKeyPress = (e:React.BaseSyntheticEvent):void => {
        const subString = e.target.value;
        const filteredProfiles = profileList.filter(profile => {
            return (profile.firstName.includes(subString) || profile.lastName.includes(subString));
        });
        setProfiles(filteredProfiles);
        console.log(filteredProfiles);
    }

    return(
        <Grid container padding={2} spacing={1}>
            <Grid item xs={3}/>
            <Grid item xs={6} pb={2}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
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
            </Grid>
            <Grid item xs={3}/>

                {profiles.map(profile => (
                    <Grid item xs={12}>
                        <ProfileCard verify={verify} userProfile={profile} handleClick={() => setModalProfile(profile)}/>
                    </Grid>
                ))}
            
            <ProfileModal userProfile={modalProfile} onClose={() => setModalProfile(null)}/>
        </Grid>
              
    )

}

export default ProfileListView;