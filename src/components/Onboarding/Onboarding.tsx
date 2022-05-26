import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useState } from 'react';
import { AppState } from '../../redux/rootReducer';
import { addTask, updateOnboardingStep } from '../../redux/actions';
import Modal from '../shared/Modal';
import OnboardingButton from '../shared/OnboardingButton';

const Onboarding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskState = useSelector((state: AppState) => state.addTaskNo);
  const stepState = useSelector((state: AppState) => state.onbaordingSteps);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //track onborading process with redux
  const incTaskNo = (i: number) => {
    if (taskState < 6 && !stepState[i]) {
      dispatch(addTask());
      dispatch(updateOnboardingStep(i));
    }
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            border: 1,
            p: 1,
            borderColor: 'aliceblue',
          }}
        >
          <Typography>
            It looks like you have a couple more things to fill out before you
            can book your first mentoring session! Click each of the boxes below
            to complete your tasks ({taskState}/6)
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={4}>
            <OnboardingButton
              renderAs="a"
              href="https://portal.villagebookbuilders.org/training"
              target="_blank"
              disabled={false}
              complete={stepState[0]}
              onClick={() => incTaskNo(0)}
            >
              Click here to view mentor training resources
            </OnboardingButton>
          </Grid>

          <Grid item xs={4}>
            <OnboardingButton
              renderAs="a"
              href="https://villagebookbuilders.org/donate"
              target="_blank"
              disabled={false}
              complete={stepState[1]}
              onClick={() => incTaskNo(1)}
            >
              Click here to view the donations page (donations optional)
            </OnboardingButton>
          </Grid>

          <Grid item xs={4}>
            <OnboardingButton
              disabled={false}
              complete={stepState[2]}
              onClick={() => navigate('/mentor/onboarding/profile')}
            >
              Click here to complete your mentor profile
            </OnboardingButton>
          </Grid>

          <Grid item xs={4}>
            <OnboardingButton
              disabled={false}
              complete={stepState[3]}
              onClick={() => {
                handleClickOpen();
                incTaskNo(3);
              }}
            >
              Await mentor advisor approval / Click here to view your approval
              status
            </OnboardingButton>
          </Grid>

          <Grid item xs={4}>
            <OnboardingButton
              renderAs="a"
              href="/"
              target="_blank"
              disabled={
                !stepState[0] ||
                !stepState[1] ||
                !stepState[2] ||
                !stepState[3]
              }
              complete={stepState[4]}
              onClick={() => incTaskNo(4)}
            >
              Click here to sign up for [meta workplace]
            </OnboardingButton>
          </Grid>

          <Grid item xs={4}>
            <OnboardingButton
              renderAs="a"
              href="/"
              target="_blank"
              disabled={false}
              complete={stepState[5]}
              onClick={() => incTaskNo(5)}
            >
              No content and need something here...
            </OnboardingButton>
          </Grid>
        </Grid>
      </Box>

      {/* Approval Status Dialog */}
      <Modal
        open={open}
        onClose={handleClose}
        title="Mentor Advisor Approval"
        actions={
          <>
            <Button autoFocus onClick={handleClose}>
              OK
            </Button>
          </>
        }
      >
        <Typography gutterBottom>
          <FormControlLabel
            disabled
            control={<Checkbox />}
            label="Your Status:"
          />
        </Typography>
        <Typography gutterBottom>
          If this box isn't checked yet, it's because we've still viewing your
          application to become a VBB mentor. We'll email you as soon as we've
          reached a decision!
        </Typography>
      </Modal>
    </>
  );
};

export default Onboarding;
