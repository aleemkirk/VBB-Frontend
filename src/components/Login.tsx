import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import formToJson from '../utils/formToJson';

const Login = () => {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formToJson(e.target as HTMLFormElement));
        navigate('/');
      }}
    >
      <Paper sx={{ p: 3, mt: 3, maxWidth: '640px', mx: 'auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Login</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Username" name="username" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              fullWidth
              label="Password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default Login;
