// import * as React from 'react';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Checkbox, FormControlLabel, FormGroup, Button, Grid, Paper, TextField, Typography, Box, Container, styled } from '@mui/material';
// import SelectTimezoneMaterialUi from 'select-timezone-material-ui';
// import TimezoneSelect from 'react-timezone-select';
// import TimezonePicker from 'react-bootstrap-timezone-picker';
// import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

import OpportunitySelect from './OpportunitySelect';
import SelectTopic from '../Profile/SelectTopic';
import MentorHeader from '../MentorHeader'; 
import MentorSideBar from '../MentorSideBar';



const Profile = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({})


    return (
      <>
      <MentorHeader/>
      <MentorSideBar/>
      <Box sx={{
         ml: 20,
         mt: 15,
         mr: 15
      }}>
      <Typography variant='h6'>Video Upload</Typography>
      <Typography variant='body1'>Please uploa  a 2-3 mins video:</Typography>
      <Grid container spacing={3} sx={{mt:2}}>
        <Grid item xs={3}><Button variant="outlined">YouTube</Button></Grid>
        <Grid item xs={3}><Button variant="outlined">Google Drive</Button></Grid>
        <Grid item xs={3}><Button variant="outlined">Drop Box</Button></Grid>
      </Grid>

      <p><TextField id="standard-basic" label="URL:" variant="standard" />
      </p>
      <p><TextField id="standard-basic" label="Year of Birth:" variant="standard" />
      </p>

      <Typography variant='h6' sx={{mt:5}}>Do you have any crimes or misdemeanors?</Typography>
      <FormGroup  row>
        <FormControlLabel  control={<Checkbox />} label="YES" />
        <FormControlLabel  control={<Checkbox />} label="NO" />
      </FormGroup>
      <Typography variant='body1' sx={{mt:2}}>If YES, please list every record:</Typography>
      <p><TextField id="standard-basic"  variant="standard" />
      </p>

      <Typography variant='h6' sx={{mt:5}}>How do you find out this opportunity?</Typography>
     <OpportunitySelect/>

     <Typography variant='h6' sx={{mt:5}}>Time Zone</Typography>
     {/* <TimezoneSelect
          // value='Africa/Casablanca'
          // value={selectedTimezone}
          value = ''
          onChange={setSelectedTimezone}
        /> */}
<Typography variant='h6'>Which languages would you be comfortable mentoring in?</Typography>
<Typography variant='h6'>Which topics would you be comfortabele tororing a student in?</Typography>
<SelectTopic/>

<Typography variant='h6'>Which careers/professional disciplines are you familiar with or have experience in?  </Typography>
<Typography variant='h6'>What other subjects or careers do you have experience with or knowledge about? </Typography>
<TextField
          id="outlined-multiline-static"
          label="Please enter here..."
          multiline
          rows={4}
        />
<Typography variant='h6'>Please indicate whether you would like to mentor via Microsoft Teams or Google Meets. </Typography>
<FormGroup >
        <FormControlLabel  control={<Checkbox />} label="Microsoft Teams"/>
        <FormControlLabel  control={<Checkbox />} label="Google Meet" />
  </FormGroup>

<Typography variant='h6'> Once you book a mentoring session, will you be able to meet with your student consistently every week for at least 3 months?
</Typography>
<FormGroup  row>
        <FormControlLabel  control={<Checkbox />} label="YES" />
        <FormControlLabel  control={<Checkbox />} label="NO" />
  </FormGroup>

      </Box>
      </>
      );      
  };
  export default Profile;