import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const MentorHome = () => {

    return(
        <Grid item xs={12} pb={2}>
            <Typography variant="body1">
                You haven't booked any sessions yet. <Link to='/mentor/booking'>Book</Link> 
                your sessions with available students now!
            </Typography>
        </Grid>
    );

}



export default MentorHome;