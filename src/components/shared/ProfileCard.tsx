import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Profile, ProfileTypes} from '../../utils/Profile';


interface ProfileCardProps {
    userProfile:Profile;
};

const ProfileCard = ({userProfile}:ProfileCardProps) => {

//const profile:Profile = userProfile;

const handleClick = () => {
    console.log(userProfile);
}

  return (
    <Box m={2} pt={3} onClick={handleClick}>
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} variant='h5' component='div' gutterBottom>
          {userProfile.firstName} {userProfile.lastName} {!userProfile.isVerified && <Chip label='Not Verified' color='error'/>}
        </Typography>
        <Stack direction="row" spacing={1}>
            {userProfile.interests.map(interest => (
                <Chip label={interest}/>
            ))}
        </Stack>
        <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
          {userProfile.isBooked ? 'Booked': 'Not Booked'}
        </Typography>
        <Typography variant="body2">
          {userProfile.program}
        </Typography>
      </CardContent>
      {(!userProfile.isVerified && (userProfile.type != ProfileTypes.MENTOR)) && <CardActions><Button size='medium' color='error'>Verify</Button></CardActions>}
    </Card>
    </Box>
  );
};


export default ProfileCard;