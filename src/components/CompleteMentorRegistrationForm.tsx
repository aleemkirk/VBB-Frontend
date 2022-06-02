import { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';
import { submitMentorRegistration } from '../redux/actions';
import LanguageDropdown from './shared/LanguageDropdown';
import CareerDropdown from './shared/CareerDropdown';
import SubjectDropdown from './shared/SubjectDropdown';
import TimezonesDropdown from './shared/TimezoneSelect';
import DateOfBirthSelector from './DateOfBirthSelect';

const defaultForm = {
  careers: [] as number[],
  mentoringLanguages: [] as number[],
  subjects: [] as number[],
  applicationVideoUrl: '',
  interests: '',
  phoneNumber: '',
  secondaryEmail: '',
  corporateCode: '',
  isOfAge: false,
  timezone: '',
  dateOfBirth: '', // dd/MM/yyyy
};

const RegisterMentorForm = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(defaultForm);
  const [hasCorporateCode, setHasCorporateCode] = useState(true);

  const user = useSelector((store: AppState) => store.user);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(submitMentorRegistration(formValue));
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Register</Typography>
          <Typography variant="h3">Welcome {user.email}!</Typography>
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
          <DateOfBirthSelector
            dateOfBirth={formValue.dateOfBirth}
            handleDateOfBirthChange={(dateOfBirth) =>
              setFormValue({ ...formValue, dateOfBirth })
            }
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
                checked={hasCorporateCode}
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
          <TimezonesDropdown
            selectedTimezone={formValue.timezone}
            handleSelectTimezone={(timezone) =>
              setFormValue({ ...formValue, timezone: timezone })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            variant="standard"
            label="Interests"
            value={formValue.interests}
            onChange={(e) => {
              setFormValue({ ...formValue, interests: e.target.value });
            }}
            name="interests"
          />
        </Grid>
        <Grid item xs={12}>
          <SubjectDropdown
            selectedSubjects={formValue.subjects}
            handleSelectSubjects={(subjectIds) =>
              setFormValue({ ...formValue, subjects: subjectIds })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <LanguageDropdown
            selectedLanguages={formValue.mentoringLanguages}
            handleSelectLanguages={(languageIds) =>
              setFormValue({ ...formValue, mentoringLanguages: languageIds })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CareerDropdown
            selectedCareers={formValue.careers}
            handleSelectCareers={(careerIds) =>
              setFormValue({ ...formValue, careers: careerIds })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="isOfAge"
                required
                value={formValue.isOfAge}
                onChange={() => {
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
