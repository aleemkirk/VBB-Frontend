import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const flexContainerStyles = {
  maxWidth: '200px',
  flex: '1 1 auto',
};

const MentorHeader = () => {
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
          Mentor Portal
        </Typography>
          <Box display="flex" justifyContent="flex-end" sx={flexContainerStyles}>
          <Typography
          variant="h6"
          component="div"
          align="center"
          sx={flexContainerStyles}
        >
          Hi MentorName!
        </Typography>
        </Box>
     
      </Toolbar>
    </AppBar>
  );
};

export default MentorHeader;
