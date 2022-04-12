import { Box, Button } from '@mui/material';
import Modal from './Modal';
import {Profile} from '../../utils/Profile';

interface ProfileModalProps {
    userProfile:Profile | null;
    actions?: React.ReactNode;
    onClose:() => void;
}

const ProfileModal = ({userProfile, onClose}: ProfileModalProps) => {
  const emptyProfile:Profile = {
    id:'',
    userName: '',
    firstName: '',
    lastName: '',
    program: '',
    interests: [],
    isVerified: false,
  }

  const profile:Profile = userProfile ? userProfile : emptyProfile;

    return(
        <Modal title={userProfile ? (userProfile.firstName+' '+userProfile.lastName) : ''}  open={Boolean(userProfile)} onClose={onClose} 
        actions={
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button color="primary" onClick={onClose}>
            Edit
          </Button>
          {userProfile && !userProfile.isVerified && <Button color='error'>Verify</Button>}
        </Box>}
        >
          Profile information
        </Modal>
    );
};

export default ProfileModal;