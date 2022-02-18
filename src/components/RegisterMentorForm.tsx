import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import formToJson from '../utils/formToJson';

interface RegisterMentorFormProps {
  onSubmit: (formData: ReturnType<typeof formToJson>) => void;
}

const RegisterMentorForm = (props: RegisterMentorFormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(formToJson(e.target as HTMLFormElement));
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
            label="First Name"
            name="firstName"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            variant="standard"
            label="Last Name"
            name="lastName"
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="standard"
            type="tel"
            label="Phone Number"
            name="phone"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="isOfAge" required />}
            label="Verify that you are 18 or older"
          />
          <FormControlLabel
            control={<Checkbox name="agreedToTerms" required />}
            label={
              <>
                You agree to the{' '}
                <Link
                  href="https://portal.villagebookbuilders.org/terms"
                  target="_blank"
                  rel="noreferrer noopenner"
                >
                  terms of service
                </Link>
              </>
            }
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
