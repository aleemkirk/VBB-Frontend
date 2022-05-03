import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const EmptySessionMsg = () => {

    return (
        <Grid item xs={12} pb={2}>
            <Typography variant="body1">
                You haven't booked any sessions yet. <Link to='/student/booking'>Book</Link> your sessions now!
            </Typography>
        </Grid>
    );
};


const MentorHome = () => {

    return(
        <Grid container padding={2} spacing={1}>
            <Grid item xs={12} pb={2}>
                <Typography variant="h4">Hello (Mentor name)!</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4">Upcomming Sessions</Typography>
            </Grid>
            <EmptySessionMsg />
        </Grid>
        
    );

}



export default MentorHome;