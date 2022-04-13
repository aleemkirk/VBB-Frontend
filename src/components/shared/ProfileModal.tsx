import { Box, Button } from '@mui/material';
import Modal from './Modal';
import {Profile} from '../../utils/Profile';
import ProfileInformation from '../shared/ProfileInformation';

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
          {userProfile ? <ProfileInformation userProfile={userProfile}/> : ''}
        </Modal>
    );
};

export default ProfileModal;