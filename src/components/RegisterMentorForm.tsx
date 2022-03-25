import { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';
import { useNavigate } from 'react-router-dom';
import { autoLogin } from '../redux/actions';

interface RegisterMentorFormProps {}

const defaultForm = {
  careers: [] as string[],
  // should be a list from all languages in the backend
  mentoringLanguages: [] as string[],
  // should be a list from all subjects in the backend
  subjects: [] as string[],
  applicationVideoUrl: '',
  // string array the user creates
  interests: [] as string[],
  phoneNumber: '',
  secondaryEmail: '',
  corporateCode: '',
  isOfAge: false,
};

const RegisterMentorForm = (props: RegisterMentorFormProps) => {
  const navigateFunction = useNavigate();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(defaultForm);
  const [hasCorporateCode, setHasCorporateCode] = useState(true);

  const user = useSelector((store: AppState) => store.user);
  // if the user isn't logged in try to log them in
  useEffect(() => {
    if (!user.email) {
      // TODO gets in endless loop
      // dispatch(autoLogin({ navigateFunction }));
    }
  }, [user.email]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ formValue });
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Register</Typography>
          <Typography variant="h3">Welcome {user.name}!</Typography>
          <Typography variant="h3">Primary Email: {user.email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            variant="standard"
            label="Phone Number"
            value={formValue.phoneNumber}
            onChange={(e) => {
              setFormValue({ ...formValue, phoneNumber: e.target.value });
            }}
            name="phoneNumber"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            variant="standard"
            label="Additional Email"
            value={formValue.secondaryEmail}
            onChange={(e) => {
              setFormValue({
                ...formValue,
                secondaryEmail: e.target.value ?? '',
              });
            }}
            name="secondaryEmail"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Do you a have corporate code?"
            control={
              <Checkbox
                value={hasCorporateCode}
                onChange={() => setHasCorporateCode(!hasCorporateCode)}
              />
            }
          />
          {hasCorporateCode ? (
            <TextField
              fullWidth
              required
              variant="standard"
              value={formValue.corporateCode}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  corporateCode: e.target.value ?? '',
                });
              }}
              label="Corporate Code"
              name="corporateCode"
            />
          ) : (
            <TextField
              fullWidth
              required
              variant="standard"
              value={formValue.applicationVideoUrl}
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  applicationVideoUrl: e.target.value ?? '',
                });
              }}
              label="Application Video Link"
              name="applicationVideoUrl"
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="isOfAge"
                required
                value={formValue.isOfAge}
                onChange={(e) => {
                  setFormValue({
                    ...formValue,
                    isOfAge: !formValue.isOfAge,
                  });
                }}
              />
            }
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
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterMentorForm;
