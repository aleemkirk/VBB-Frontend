import { getMentorProfiles } from '../../utils/api';
import  ProfileCard from '../shared/ProfileCard';
import Box from '@mui/material/Box';


const MentorList = () => {

    const profiles = getMentorProfiles();

    return(
        <>
        <Box flex="1 1 auto" maxWidth={800} maxHeight={800} overflow='auto'>
        {
            profiles.map(profile => (
                <ProfileCard userProfile={profile}/>
            ))
        }
        </Box>
        </>
        
        
    )

}


export default MentorList;