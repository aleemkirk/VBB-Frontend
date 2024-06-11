import { Grid, Typography } from '@mui/material';

const flexContainerStyles = {
  maxWidth: '40rem',
  flex: '1 1 auto',
};
const EmailSent = () => (
  <Grid
    container
    spacing={5}
    direction="column"
    alignItems={'center'}
    justifyContent="center"
  >
    <Grid item xs={12}>
      <Typography
        variant="h3"
        align="center"
        sx={(theme) => ({
          ...flexContainerStyles,
          [theme.breakpoints.down('sm')]: { display: 'none' },
        })}
      >
        Thank you for giving hope!
      </Typography>
    </Grid>
    <Grid
      item
      direction="column"
      alignItems="center"
      justifyItems={'center'}
      xs={12}
    >
      <Typography
        variant="h4"
        align="center"
        sx={(theme) => ({
          ...flexContainerStyles,
          [theme.breakpoints.down('sm')]: { display: 'none' },
        })}
      >
        Please confirm your email address by clicking the link in the email that
        was just sent.
      </Typography>
    </Grid>
  </Grid>
);
export default EmailSent;
