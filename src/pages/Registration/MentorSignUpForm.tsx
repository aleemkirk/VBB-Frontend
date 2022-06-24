import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, submitMentorSignUp } from '../../redux/actions';
import { mentorSignUpErrors } from '../../redux/selectors';

const defaultForm = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  confirm_password: '',
  corporateCode:''
};

const MentorSignUpForm = () => {
  const errorMessages = useSelector(mentorSignUpErrors);
  const dispatch = useDispatch();

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
        console.log(formValue)
        const { email, first_name, last_name, confirm_password, password, corporateCode } = formValue;
        if (email && first_name && last_name && password && confirm_password) {
          dispatch(submitMentorSignUp(formValue));
        }
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Register</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            variant="standard"
            label="First Name"
            name="first_name"
            value={formValue.first_name}
            onChange={(e) => {
              setFormValue({ ...formValue, first_name: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            variant="standard"
            label="Last Name"
            name="last_name"
            value={formValue.last_name}
            onChange={(e) => {
              setFormValue({ ...formValue, last_name: e.target.value });
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
            error={!!errorMessages}
            helperText={errorMessages}
            fullWidth
            variant="standard"
            type="corporateCode"
            label="Corporate or Charter Registration Code"
            name="corporateCode"
            value={formValue.corporateCode}
            onChange={(e) => {
              setFormValue({ ...formValue, corporateCode: e.target.value });
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
          <TextField
            variant="standard"
            type="password"
            fullWidth
            required
            label="Confirm Password"
            name="password"
            value={formValue.confirm_password}
            onChange={(e) => {
              setFormValue({ ...formValue, confirm_password: e.target.value });
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
