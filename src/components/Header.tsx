import * as React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
  Menu,
  ListItemIcon,
  IconButton,
  MenuItem,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import scss_variables from '../styles/_variables.scss';
import * as actions from '../redux/actions';

const flexContainerStyles = {
  maxWidth: '200px',
  flex: '1 1 auto',
};

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const appState = useSelector((store: AppState) => store.appState);
  const user = useSelector((store: AppState) => store.user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, set_open] = React.useState(false);
  const handleClick = (event: any) => {
    if (open) {
      set_open(false);
    } else {
      setAnchorEl(event.currentTarget);
      set_open(true);
    }
  };

  function handleLogout(e: any) {
    setTimeout(() => dispatch(actions.logout()), 100);
  }

  return (
    <div className="header">
      <img className="logo" src={process.env.PUBLIC_URL + '/logo.svg'} />
      {appState.isAuthenticated ? (
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={flexContainerStyles}
          pr={10}
        >
          <Button onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Typography
              mt={3}
              mb={3}
              variant="body2"
              alignSelf="flex-end"
              color={scss_variables.primary_color}
            >
              {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Avatar
              src={
                user.profileImage ||
                'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'
              }
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClick}
            onClick={handleClick}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                borderRadius: 5,
                width: 235,
                mt: 7,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            {appState.isAuthenticated ? (
              <>
                <MenuItem onClick={(e) => navigate('/')}>
                  <ListItemIcon></ListItemIcon>
                  Dashboard
                </MenuItem>

                <MenuItem onClick={(e) => handleLogout(e)}>
                  <ListItemIcon></ListItemIcon>
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <ListItemIcon></ListItemIcon>
                  Log in
                </MenuItem>
                <MenuItem>
                  <ListItemIcon></ListItemIcon>
                  Create Account
                </MenuItem>
              </>
            )}
          </Menu>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={flexContainerStyles}
          pr={10}
        >
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{ mr: 2, color: '#003066' }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/register"
            sx={{ color: '#003066' }}
          >
            Register
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Header;
