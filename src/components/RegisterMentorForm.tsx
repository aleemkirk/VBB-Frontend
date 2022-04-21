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
import { autoLogin, submitMentorRegistration } from '../redux/actions';
import LanguageDropdown from './LanguageDropdown';
import CareerDropdown from './CareerDropdown';
import SubjectDropdown from './SubjectDropdown';
import TimezonesDropdown from './TimezoneSelect';

interface RegisterMentorFormProps {}

const defaultForm = {
  careers: [] as number[],
  mentoringLanguages: [] as number[],
  // should be a list from all subjects in the backend
  subjects: [] as number[],
  applicationVideoUrl: '',
  interests: '',
  phoneNumber: '',
  secondaryEmail: '',
  corporateCode: '',
  isOfAge: false,
  timezone: '',
};

const RegisterMentorForm = (props: RegisterMentorFormProps) => {
  const navigateFunction = useNavigate();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(defaultForm);
  const [hasCorporateCode, setHasCorporateCode] = useState(true);

  const user = useSelector((store: AppState) => store.user);
  // if the user isn't logged in try to log them in
  // useEffect(() => {
  //   if (!user.email) {
  //     // TODO gets in endless loop
  //     // dispatch(autoLogin({ navigateFunction }));
  //   }
  // }, [user.email]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ formValue });
        dispatch(submitMentorRegistration(formValue));
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
