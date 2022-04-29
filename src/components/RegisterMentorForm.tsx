import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../redux/rootReducer';

const defaultForm = {
  email: '',
  name: '',
  password: '',
};

const RegisterMentorForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const errors = useSelector((state: AppState) => state.errors);

  const [formValue, setFormValue] = useState(defaultForm);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // redux action
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
            fullWidth
            required
            variant="standard"
            type="email"
            label="Email"
            name="email"
            value={formValue.email}
            onChange={(e) => {
              setFormValue({ ...formValue, email: e.target.value });
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

export default RegisterMentorForm;
