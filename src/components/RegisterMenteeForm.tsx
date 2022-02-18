import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import formToJson from '../utils/formToJson';
import MultipleSelect from './MultipleSelect';

interface RegisterMenteeFormProps {
  onSubmit: (formData: ReturnType<typeof formToJson>) => void;
}

const RegisterMenteeForm = (props: RegisterMenteeFormProps) => {
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
            variant="standard"
            label="Last Name (or last initial)"
            name="lastName"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            type="email"
            variant="standard"
            label="My Program Director's Email"
            name="programDirectorEmail"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth
            required
            label="Username"
            name="username"
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
          <TextField
            variant="standard"
            type="password"
            fullWidth
            required
            label="Verify Password"
            name="verifyPassword"
          />
        </Grid>
        <Grid item xs={12}>
          <MultipleSelect label="Subjects I'm interested in" name="subjects">
            {[
              'ESL',
              'Elementary School Math',
              'High School Math',
              'Reading for Beginners',
              'Elementary English',
              'Physics',
              'Chemistry',
              'Biology',
              'Earth Science',
              'Business',
              'Computer Skills',
            ].map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </MultipleSelect>
        </Grid>
        <Grid item xs={12}>
          <MultipleSelect label="Careers I'm interested in" name="careers">
            {[
              'Information Technology',
              'Business and Finance',
              'Education and Training',
              'Architecture and Construction',
            ].map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </MultipleSelect>
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            variant="standard"
            label="Other subject and career interests"
            name="other"
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
