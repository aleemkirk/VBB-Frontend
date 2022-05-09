import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';
import { Checkbox, FormControlLabel, FormControl, FormGroup, Button, Grid, Paper, TextField, Typography, Box, Container, styled, Radio, RadioGroup, FormLabel, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OpptyDropdown from './OpptyDropdown';
import LanguageDropdown from '../../shared/LanguageDropdown';
import CareerDropdown from '../../shared/CareerDropdown';
import SubjectDropdown from '../../shared/SubjectDropdown';
import TimezonesDropdown from '../../shared/TimezoneSelect';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import * as actions from '../../../redux/actions';


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
  oppties: [] as number[],
};

//Dialog after submit
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskState = useSelector((state:AppState) => state.addTaskNo);
  const checkState = useSelector((state:AppState) => state.checkTaskNo);
  const incTaskNo = (i:number) =>{
    if(taskState<6 && !checkState[i]){
     dispatch(actions.addTask());
     dispatch(actions.checkTask(i));
    }
  }

  const [formValue, setFormValue] = useState(defaultForm);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate('/mentor/onboarding');
  };

    return (
      <>
      <Box>
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography variant='h6'>Video Upload</Typography>
      <Typography variant='body1'>Please Upload a 2-3 mins video:</Typography>
      <Grid container spacing={3} sx={{mt:2}}>
        <Grid item xs={3}><Button variant="outlined" target="_blank" component="a" href='https://studio.youtube.com/channel'>YouTube</Button></Grid>
        <Grid item xs={3}><Button variant="outlined" target="_blank" component="a" href='https://drive.google.com/drive/my-drive'>Google Drive</Button></Grid>
        <Grid item xs={3}><Button variant="outlined" target="_blank" component="a" href='https://www.dropbox.com/home'>Drop Box</Button></Grid>
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
     <OpptyDropdown
      selectedOppties={formValue.oppties}
      handleSelectOppties={(opptyIds) =>
        setFormValue({ ...formValue, oppties: opptyIds })
      }
     />
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
  <Button variant="contained" 
  onClick={()=>{incTaskNo(2); handleClickOpen()}}
  >
  Submit</Button></Grid>
  </Grid>
      </Box>

    {/* Submit Dialog */}
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Congratulations!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Thanks for Sumbitting your Profile! Your data is recorded. Please go ahead with next steps of Onboarding! 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
      </>
      );      
  };
  export default Profile;