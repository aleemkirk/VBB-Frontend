import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import formToJson from '../utils/formToJson';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const values = formToJson(e.target as HTMLFormElement);
        dispatch(
          actions.login({
            username: values.username as string,
            password: values.password as string,
          })
        );
      }}
    >
      <Paper
        sx={{ pl: 3, mt: 10, maxWidth: '720px', mx: 'auto', display: 'flex' }}
        elevation={0}
        variant="outlined"
        square
      >
        <Paper
          sx={{ p: 3, my: -4, maxWidth: '320px' }}
          elevation={0}
          variant="outlined"
          square
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">Login</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="standard"
                label="Username"
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
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
            <Typography variant="h6">Welcome back to Village Portal</Typography>
            <Typography variant="h6">Let's give hope...</Typography>
          </div>
          <div>
            <Typography mt={3} variant="h6" alignSelf="flex-end">
              Don't have an account?
            </Typography>
            <Button component={Link} to="/register">
              Register
            </Button>
          </div>
        </Paper>
      </Paper>
    </form>
  );
};

export default Login;
