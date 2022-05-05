import { Box } from '@mui/material';
import SideNav from '../shared/SideNav';
import { Route, Routes } from 'react-router-dom';
import Onboarding from './Onboarding';
import Profile from './Profile/Profile';

const menuItems = [
  { label: 'Profile', url: '/mentor/onboarding/profile' },
  { label: 'Session', url: '/mentor/onboarding/session' },
  { label: 'Training', url: '/mentor/onboarding/training' },
  { label: 'Help?', url: '/mentor/onboarding/help' },
];

const OnboardingIndex = () => {
  return (
    <Box maxWidth={1024} mx="auto" mt={6} display="flex" p={2}>
      <Box minWidth={200} flexShrink="0">
        <SideNav menuItems={menuItems} />
      </Box>
      <Box flex="1 1 auto">
        <Routes>
          <Route index element={<Onboarding />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default OnboardingIndex;
