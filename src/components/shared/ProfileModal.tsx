import { Box, Button } from '@mui/material';
import Modal from './Modal';
import {Profile} from '../../utils/Profile';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ProfileModalProps {
    userProfile:Profile | null;
    actions?: React.ReactNode;
    onClose:() => void;
}

const ProfileModal = ({userProfile, onClose}: ProfileModalProps) => {

    return(
        <Modal title={''}  open={Boolean(userProfile)} onClose={onClose} 
        actions={
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button color="primary" onClick={onClose}>
            Edit
          </Button>
          {userProfile && !userProfile.isVerified && <Button color='error' onClick={onClose}>Verify</Button>}
        </Box>}
        >
          <CardContent>
        <Typography sx={{ fontSize: 20 }} variant='h5' component='div' gutterBottom>
          {userProfile && (userProfile.firstName + ' '+ userProfile.lastName)}
        </Typography>
        
      </CardContent>
       </Modal>
    );
};

export default ProfileModal;