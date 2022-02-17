import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
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
              Welcome to Village Portal new Mentor!
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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">Register</Typography>
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
                Register
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </form>
  );
};

export default Login;
