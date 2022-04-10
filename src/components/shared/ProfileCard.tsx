import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Profile, ProfileTypes} from '../../utils/Profile';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ProfileCardProps {
    userProfile:Profile;
};

const ProfileCard = ({userProfile}:ProfileCardProps) => {

//const profile:Profile = userProfile;
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const handleClick = () => {
    console.log(userProfile);
}

  return (
    <Box m={2} pt={3} onClick={handleOpen}>
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
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {userProfile.firstName} {userProfile.lastName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Date of Birth: {userProfile.dob?.toString()}
          </Typography>
        </Box>
      </Modal>
    </Box>
    
  );
};


export default ProfileCard;