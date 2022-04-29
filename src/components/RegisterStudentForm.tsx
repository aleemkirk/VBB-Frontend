import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitStudentRegistration } from '../redux/actions';
import CareerDropdown from './shared/CareerDropdown';
import SubjectDropdown from './shared/SubjectDropdown';
import TimezonesDropdown from './shared/TimezoneSelect';

const defaultForm = {
  careersOfInterest: [] as number[],
  interests: '',
  libraryCode: '',
  mentoringLanguages: [] as number[],
  name: '',
  password: '',
  subjects: [] as number[],
  timezone: '',
  username: '',
};

const RegisterMenteeForm = () => {
  const [formValue, setFormValue] = useState(defaultForm);
  const navigateFunction = useNavigate();
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          submitStudentRegistration({
            studentRegistrationForm: formValue,
            navigateFunction,
          })
        );
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Register</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            variant="standard"
            label="Name"
            name="name"
            value={formValue.name}
            onChange={(e) => {
              setFormValue({ ...formValue, name: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TimezonesDropdown
            selectedTimezone={formValue.timezone}
            handleSelectTimezone={(timezone) =>
              setFormValue({ ...formValue, timezone: timezone })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            variant="standard"
            label="Library Code"
            name="libraryCode"
            value={formValue.libraryCode}
            onChange={(e) => {
              setFormValue({ ...formValue, libraryCode: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth
            required
            label="Username"
            name="username"
            value={formValue.username}
            onChange={(e) => {
              setFormValue({ ...formValue, username: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            type="password"
            fullWidth
            required
            label="Password"
            name="password"
            value={formValue.password}
            onChange={(e) => {
              setFormValue({ ...formValue, password: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <SubjectDropdown
            selectedSubjects={formValue.subjects}
            handleSelectSubjects={(subjectIds) =>
              setFormValue({ ...formValue, subjects: subjectIds })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CareerDropdown
            selectedCareers={formValue.careersOfInterest}
            handleSelectCareers={(careerIds) =>
              setFormValue({ ...formValue, careersOfInterest: careerIds })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            variant="standard"
            label="Other subject and career interests"
            name="other"
            value={formValue.interests}
            onChange={(e) => {
              setFormValue({ ...formValue, interests: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterMenteeForm;
