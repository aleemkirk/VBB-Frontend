import { Button, Paper, Typography } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import RegisterMenteeForm from './RegisterStudentForm';
import MentorSignUpForm from './MentorSignUpForm';
import { PageLayout } from '../../components/layout/Page';
import scss_variables from '../../styles/_variables.scss';

const Register = () => {
  const [searchParams] = useSearchParams();
  const isMentee = searchParams.get('type') === 'mentee';

  return (
    <PageLayout>
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
          <Typography variant="h6" color={scss_variables.primary_color} mb={3}>
            Welcome to Village Portal <br/> New {isMentee ? 'Mentee' : 'Mentor'}!
          </Typography>
          <Typography variant="h6" color={scss_variables.primary_color} mb={3}><i>Let's give <b>hope</b>...</i></Typography>
        </div>
        <div>
          <Typography mt={3} variant="body1" alignSelf="flex-end" color={scss_variables.primary_color}>
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
    </PageLayout>
  );
};

export default Register;
