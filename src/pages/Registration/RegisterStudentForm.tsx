import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitStudentRegistration } from '../../redux/actions';
import CareerDropdown from '../../components/shared/CareerDropdown';
import SubjectDropdown from '../../components/shared/SubjectDropdown';
import TimezonesDropdown from '../../components/shared/TimezoneSelect';
import { renderAPIMsg } from '../../utils/api';
import { AppState } from '../../redux/rootReducer';
import scss_variables from '../../styles/_variables.scss';

const defaultForm = {
  libraryCode: '',
  first_name: '',
  last_name: '',
  password: '',
  confirm_password: '',
  username: '',
};

const RegisterMenteeForm = () => {
  const [formValue, setFormValue] = useState(defaultForm);
  const dispatch = useDispatch();
  const appState = useSelector((store: AppState) => store.appState);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(submitStudentRegistration(formValue));
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Register</Typography>
        </Grid>

        <Grid item xs={12}>
          {appState.error === null ? null : (
            <>
              <Typography
                mt={1}
                mb={1}
                variant="body1"
                alignSelf="flex-start"
                color={scss_variables.primary_color}
              >
                <b>{renderAPIMsg(appState.error)}</b>
              </Typography>
            </>
          )}
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
            label="Confrim Password"
            name="confirm_password"
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

export default RegisterMenteeForm;
