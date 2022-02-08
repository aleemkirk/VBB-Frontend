import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const flexContainerStyles = {
  maxWidth: '200px',
  flex: '1 1 auto',
};

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          sx={(theme) => ({
            ...flexContainerStyles,
            [theme.breakpoints.down('sm')]: { display: 'none' },
          })}
        >
          Village Book Builders
        </Typography>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={flexContainerStyles}
        >
          Village Portal
        </Typography>
        <Box display="flex" justifyContent="flex-end" sx={flexContainerStyles}>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
