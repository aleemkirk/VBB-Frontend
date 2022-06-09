import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box, Button, Card, CardHeader } from '@mui/material';

import {Profile, ProfileTypes} from '../../utils/Profile';
import {Session, Sessions} from '../../utils/Sessions';
import { getSessions } from '../../utils/api';
import { 
  CalendarMonth as CalendarMonthIcon, 
  Person as PersonIcon, 
  AccessTime as AccessTimeIcon 
} from '@mui/icons-material';

interface ProfileCardProps {
    userProfile:Profile;
    verify:boolean;
    handleClick?: () => void;
};

const ProfileCard = ({userProfile, verify, handleClick}:ProfileCardProps) => {

//const profile:Profile = userProfile;
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const Sessions = React.useMemo(() => {
  return getSessions(userProfile)
}, [userProfile])

  return (
    <Box onClick={handleClick}>
    <Card sx={{ minWidth: 275 }} >

    <CardHeader
      title={
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    }}>
        <div style={{ flex: '0 0 150px'}}> 
          {userProfile.firstName} {userProfile.lastName}
        </div>

        <CalendarMonthIcon />

        <div style={{ flex: '1 1 auto', alignSelf: 'left'}}> 
          {/* {(Sessions.length > 0) ? moment(Sessions[0].start).format('dddd, h:mm a').toString() : 'No Booked Sessions'} */}
        </div>

      </div>
    }
      avatar={<PersonIcon />}
      action={
        <Box display="flex" alignItems="center">
          { verify && (!userProfile.isVerified ? <Button size='medium' color='error'>Verify</Button> : <Button disabled size='medium' color='primary'>Verified</Button>)}
        </Box>
      }
    />

      
    </Card>
    </Box>
    
  );
};


export default ProfileCard;