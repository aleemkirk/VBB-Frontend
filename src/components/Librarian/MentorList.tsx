import { getMentorProfiles } from '../../utils/api';
import  ProfileCard from '../shared/ProfileCard';


const MentorList = () => {

    const profiles = getMentorProfiles();

    return(
        <>
        {
            profiles.map(profile => (
                <ProfileCard userProfile={profile}/>
            ))
        }
        </>
        
        
    )

}


export default MentorList;