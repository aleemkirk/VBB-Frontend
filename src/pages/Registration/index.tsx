import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Paper, Typography } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import RegisterMenteeForm from './RegisterStudentForm';
import MentorSignUpForm from './MentorSignUpForm';

import moment from 'moment';

// interface ComputerProps {
//   computer: string;
//   onDelete?: () => void;
// }

export default function Registration() {
  const [searchParams] = useSearchParams();
  const isMentee = searchParams.get('type') === 'mentee';

  return (
    <Paper
      sx={{ pr: 3, mt: 10, maxWidth: '720px', mx: 'auto', display: 'flex' }}
      elevation={0}
      variant="outlined"
      square
    >
      <Paper
        sx={{
          p: 3,
          flexGrow: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        elevation={0}
      >
        <div>
          <Typography variant="h6">
            Welcome to Village Portal new {isMentee ? 'Mentee' : 'Mentor'}!
          </Typography>
          <Typography variant="h6">Let's give hope...</Typography>
        </div>
        <div>
          <Typography mt={3} variant="h6" alignSelf="flex-end">
            Already have an account?
          </Typography>
          <Button component={Link} to="/login">
            Login
          </Button>
        </div>
      </Paper>
      <Paper
        sx={{ p: 3, my: -4, maxWidth: '320px' }}
        elevation={0}
        variant="outlined"
        square
      >
        {isMentee ? <RegisterMenteeForm /> : <MentorSignUpForm />}
      </Paper>
    </Paper>
  );
}
