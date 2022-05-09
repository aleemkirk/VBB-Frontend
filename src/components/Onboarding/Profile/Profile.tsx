import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Checkbox, FormControlLabel, FormControl, FormGroup, Button, Grid, Paper, TextField, Typography, Box, Container, styled, Radio, RadioGroup, FormLabel } from '@mui/material';
import OpportunitySelect from './OpportunitySelect';
import LanguageDropdown from '../../shared/LanguageDropdown';
import CareerDropdown from '../../shared/CareerDropdown';
import SubjectDropdown from '../../shared/SubjectDropdown';
import TimezonesDropdown from '../../shared/TimezoneSelect';

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



const Profile = () => {

const [formValue, setFormValue] = useState(defaultForm);

    return (
      <>
      <Box>
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography variant='h6'>Video Upload</Typography>
      <Typography variant='body1'>Please Upload a 2-3 mins video:</Typography>
      <Grid container spacing={3} sx={{mt:2}}>
        <Grid item xs={3}><Button variant="outlined" href='https://studio.youtube.com/channel'>YouTube</Button></Grid>
        <Grid item xs={3}><Button variant="outlined" href='https://drive.google.com/drive/my-drive'>Google Drive</Button></Grid>
        <Grid item xs={3}><Button variant="outlined" href='https://www.dropbox.com/home'>Drop Box</Button></Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
      <TextField id="standard-basic" label="URL:" variant="standard" />
      </Grid>
      <Grid item xs={12}>
      <TextField id="standard-basic" label="Year of Birth:" variant="standard" />
      </Grid>
      
      <Grid item xs={12} sx={{mt:5}}>
      <FormControl>
<Typography variant='h6' >Do you have any crimes or misdemeanors?</Typography>
  <RadioGroup 
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group">
        <FormControlLabel  value="yes" control={<Radio/>} label="YES" />
        <FormControlLabel  value="no" control={<Radio/>} label="NO" />
  </RadioGroup>
  </FormControl>
      </Grid>

      <Grid item xs={12} sx={{mt:2}}>
      <Typography variant='body1' >If YES, please list every record:</Typography>
      <TextField id="standard-basic"  variant="standard" />
    </Grid>

    <Grid item xs={12}  sx={{mt:5}}>
      <Typography variant='h6'>How do you find out this opportunity?</Typography>
     <OpportunitySelect/>
</Grid>

<Grid item xs={12} sx={{mt:5}}>
     <Typography variant='h6' >Time Zone</Typography>
          <TimezonesDropdown
            selectedTimezone={formValue.timezone}
            handleSelectTimezone={(timezone) =>
              setFormValue({ ...formValue, timezone: timezone })
            }
          />
        </Grid>

<Grid item xs={12} sx={{mt:5}}>
<Typography variant='h6' >Which languages would you be comfortable mentoring in?</Typography>
<LanguageDropdown  
selectedLanguages={formValue.mentoringLanguages}
handleSelectLanguages={(languageIds) =>
setFormValue({ ...formValue, mentoringLanguages: languageIds })
            }/>
  </Grid>

  <Grid item xs={12} sx={{mt:5}}>
<Typography variant='h6' >Which topics would you be comfortabele tororing a student
 in?</Typography>
          <SubjectDropdown
            selectedSubjects={formValue.subjects}
            handleSelectSubjects={(subjectIds) =>
              setFormValue({ ...formValue, subjects: subjectIds })
            }
          />
        </Grid>

<Grid item xs={12} sx={{mt:5}}>
<Typography variant='h6' >Which careers/professional disciplines are you familiar with or 
have experience in?  </Typography>
<CareerDropdown
            selectedCareers={formValue.careers}
            handleSelectCareers={(careerIds) =>
              setFormValue({ ...formValue, careers: careerIds })
            }
          />
  </Grid>

  <Grid item xs={12} sx={{mt:5}}>
<Typography variant='h6' >What other subjects or careers do you have experience with 
or knowledge about? </Typography>
<TextField
          id="outlined-multiline-static"
          label="Please enter here..."
          multiline
          rows={4}
        />
  </Grid>

  <Grid item xs={12} sx={{mt:5}}>
  <FormControl>
 <Typography variant='h6' >Please indicate whether you would like to mentor via Microsoft Teams or Google Meets</Typography>
<FormGroup ></FormGroup>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="GoogleMeet"
    name="radio-buttons-group">
    <FormControlLabel value="GoogleMeet" control={<Radio />} label="Google Meet" />
    <FormControlLabel value="MicrosoftTeams" control={<Radio />} label="Microsoft Teams" />
  </RadioGroup>
</FormControl>
  </Grid>

  <Grid item xs={12} sx={{mt:5}}>
  <FormControl>
<Typography variant='h6'> Once you book a mentoring session, will you be able to meet with your student consistently every week for at least 3 months?
</Typography>
  <RadioGroup 
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group">
        <FormControlLabel  value="yes" control={<Radio/>} label="YES" />
        <FormControlLabel  value="no" control={<Radio/>} label="NO" />
  </RadioGroup>
  </FormControl>
  </Grid>
<Grid item xs={3} sx={{mt:5}}>
  <Button variant="contained">Save</Button></Grid>
  <Grid item xs={3} sx={{mt:5}}>
  <Button variant="contained">Submit</Button></Grid>
  </Grid>
      </Box>
      </>
      );      
  };
  export default Profile;