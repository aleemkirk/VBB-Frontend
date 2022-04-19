import * as React from 'react';
import Box from '@mui/material/Box';
import ProfileCard from '../shared/ProfileCard';
import { getStduentProfles } from '../../utils/api';
import {Profile} from '../../utils/Profile';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ProfileModal from '../shared/ProfileModal';


interface ProfileListViewProps {
    profileList:Profile[];
}


const ProfileListView = ({profileList}: ProfileListViewProps) => {

    //Needs list of student/mentor profiles    

    const [profiles, setProfiles] = React.useState(profileList);
    const [modalProfile, setModalProfile] = React.useState<Profile | null>(null);

    const handleKeyPress = (e:React.BaseSyntheticEvent):void => {
        const subString = e.target.value;
        const filteredProfiles: Profile[] = profileList.filter(profile => {
            return (profile.firstName.includes(subString) || profile.lastName.includes(subString));
        });
        setProfiles(filteredProfiles);
        console.log(filteredProfiles);
    }

    return(
        <Box>
            <Box m={2}>
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
            </Box>
            <Box flex="1 1 auto"  minWidth={800} maxHeight={800} overflow='auto'>

                {profiles.map(profile => (
                        <ProfileCard userProfile={profile} handleClick={() => setModalProfile(profile)}/>
                ))}
            </Box>
            <ProfileModal userProfile={modalProfile} onClose={() => setModalProfile(null)}/>
        </Box>
              
    )

}

export default ProfileListView;