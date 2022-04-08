import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Profile} from '../../utils/Profile';
import { ConstructionOutlined } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

interface ProfileCardProps {
    userProfile:Profile;
};

const ProfileCard = ({userProfile}:ProfileCardProps) => {

const profile:Profile = userProfile;

const handleClick = (e:any) => {
    console.log(profile);
}

  return (
    <Box m={2} pt={3} onClick={handleClick}>
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} variant='h5' component='div' gutterBottom>
          {profile.firstName} {profile.lastName} {!profile.isVerified && <Chip label='Not Verified' color='error'/>}
        </Typography>
        <Stack direction="row" spacing={1}>
            {profile.interests.map(interest => (
                <Chip label={interest}/>
            ))}
        </Stack>
        <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
          {profile.isBooked ? 'Booked': 'Not Booked'}
        </Typography>
        <Typography variant="body2">
          {profile.program}
        </Typography>
      </CardContent>
      {!profile.isVerified && <CardActions><Button size='medium' color='error'>Verify</Button></CardActions>}
    </Card>
    </Box>
  );
};


export default ProfileCard;