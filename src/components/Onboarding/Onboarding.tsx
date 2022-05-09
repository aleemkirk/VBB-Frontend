import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid,  Typography, Box, Container, styled, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, FormControlLabel, Checkbox} from '@mui/material';
import { useState, useEffect } from 'react';
import { AppState } from '../../redux/rootReducer';
import CloseIcon from '@mui/icons-material/Close';
import * as actions from '../../redux/actions';

//Approval Status Dialog 
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

const Onboarding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskState = useSelector((state:AppState) => state.addTaskNo);
  const checkState = useSelector((state:AppState) => state.checkTaskNo);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  //track onborading process with redux
  const incTaskNo = (i:number) =>{
    if(taskState<6 && !checkState[i]){
     dispatch(actions.addTask());
     dispatch(actions.checkTask(i));
     
    }
  }
  
    return (
        <>
      <Box>
        <Box sx={{
        border: 1,
        p:1,
        borderColor:'aliceblue',
       }}>
      <Typography>
       It looks like you have a couple more things to fill out before you can book your first
        mentoring session! Click each of the boxes below to complete your tasks ({taskState}/6)
      </Typography>
      </Box>

      <Grid container spacing={3} sx={{mt:5}}>
      <Grid item xs={4}>
      <Button target="_blank" component="a" href='https://portal.villagebookbuilders.org/training' sx={{textTransform: 'none', textAlign: 'left'}}>
      <Box
      sx={{
        border: 1,
        p:1,
        height: 75,
        borderColor:'aliceblue',
        backgroundColor: checkState[0]? 'aliceblue': 'white',
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
        cursor: 'pointer',
      }, }}
      onClick={()=>incTaskNo(0)}>
      <Typography>
        Click here to view mentor training resources
      </Typography>
      </Box>
      </Button>
      </Grid>

      <Grid item xs={4}>
      <Button target="_blank" component="a" href='https://villagebookbuilders.org/donate' sx={{textTransform: 'none', textAlign: 'left'}}>
      <Box sx={{
        border: 1,
        p:1,
        height: 75,
        borderColor:'aliceblue',
        backgroundColor: checkState[1]? 'aliceblue': 'white',
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
        cursor: 'pointer',
      }, }}
      onClick={()=>incTaskNo(1)}>
      <Typography>
        Click here to view the donations page (donations optional)
      </Typography>
      </Box>
      </Button>
      </Grid>

      <Grid item xs={4}>
      <Button onClick={() => navigate('/mentor/onboarding/profile')} sx={{textTransform: 'none', textAlign: 'left'}}>
      <Box sx={{
        border: 1,
        p:1,
        height: 75,
        borderColor:'aliceblue',
        backgroundColor: checkState[2]? 'aliceblue': 'white',
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
        cursor: 'pointer',
      }, }}
      onClick={()=>incTaskNo(2)}>
      <Typography>
        Click here to complete your mentor profile
      </Typography>
      </Box>
      </Button> 
      </Grid>

      <Grid item xs={4}>
      <Button sx={{textTransform: 'none', textAlign: 'left'}} onClick={handleClickOpen}>
      <Box sx={{
        border: 1,
        p:1,
        height: 75,
        borderColor:'aliceblue',
        backgroundColor: checkState[3]? 'aliceblue': 'white',
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
        cursor: 'pointer',
      }, }}
      onClick={()=>incTaskNo(3)}>
      <Typography>
        Await mentor advisor approval / Click here to view your approval status
      </Typography>
      </Box>
      </Button>
      </Grid>

      <Grid item xs={4}>
      <Button target="_blank" component="a" href='/' sx={{textTransform: 'none', textAlign: 'left'}}>
      <Box sx={{
        border: 1,
        p:1,
        height: 75,
        borderColor:'aliceblue',
        backgroundColor: checkState[4]? 'aliceblue': 'white',
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
        cursor: 'pointer',
      }, }}
      onClick={()=>incTaskNo(4)}>
      <Typography>
        Click here to sign up for [meta workplace]
      </Typography>
      </Box>
      </Button>
      </Grid>

      <Grid item xs={4}>
       <Button target="_blank" component="a" href='/' sx={{textTransform: 'none', textAlign: 'left'}}>
      <Box sx={{
        border: 1,
        p:1,
        height: 75,
        borderColor:'aliceblue',
        backgroundColor: checkState[5]? 'aliceblue': 'white',
       '&:hover': {
        backgroundColor: 'aliceblue',
        opacity: [0.9, 0.8, 0.7],
        cursor: 'pointer',
      }, }}
      onClick={()=>incTaskNo(5)}>
        <Typography>
        No content and wait for something here...
      </Typography>
      </Box>
      </Button>
      </Grid>
      </Grid>
    </Box>
  
  {/* Approval Status Dialog */}
     <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Mentor Advisor Approval
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <FormControlLabel disabled control={<Checkbox />} label="Your Status:" />
          </Typography>
          <Typography gutterBottom>
          If this box isn't checked yet, it's because we've still viewing your application to become a VBB mentor. 
          We'll email you as soon as we've reached a decision!
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
  
  export default Onboarding;
  