import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrors, submitMentorSignUp } from '../redux/actions';
import { mentorSignUpErrors } from '../redux/selectors';

const defaultForm = {
  email: '',
  name: '',
  password: '',
};

const MentorSignUpForm = () => {
  const errorMessages = useSelector(mentorSignUpErrors);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [formValue, setFormValue] = useState(defaultForm);
  const clearErrorOnChange = () => {
    if (errorMessages) {
      dispatch(clearErrors());
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const { email, name, password } = formValue;
        if (email && name && password) {
          dispatch(
            submitMentorSignUp({
              mentorSignUpForm: formValue,
              navigateFunction: navigation,
            })
          );
        }
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
          <TextField
            error={!!errorMessages}
            helperText={errorMessages}
            fullWidth
            required
            variant="standard"
            type="email"
            label="Email"
            name="email"
            value={formValue.email}
            onChange={(e) => {
              setFormValue({ ...formValue, email: e.target.value });
              clearErrorOnChange();
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
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MentorSignUpForm;
