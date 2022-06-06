import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SessionCard from './Session';
import { Session, Sessions } from '../../utils/Session';
import { useState } from 'react';

const fakeSessions = Sessions;


const EmptySessionMsg = () => {

    return (
        <Grid item xs={12} pb={2}>
            <Typography variant="body1">
                You haven't booked any sessions yet. <Link to='/student/booking'>Book</Link> your sessions now!
            </Typography>
        </Grid>
    );
};

const StudentHome = () => {

    const [checkIn, setCheckIn] = useState<boolean | null>(null);
    
    return (
        <Grid container padding={2} spacing={1}>
            <Grid item xs={12} pb={2}>
            <Typography variant="h4">Hello (Student name)!</Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h4">Upcomming Sessions</Typography>
            </Grid>
                {fakeSessions.length == 0 ? <EmptySessionMsg/> : fakeSessions.map((session) => (
                    <Grid item xs={12}>
                    <SessionCard
                        session={session}
                        onCheckIn={() => setCheckIn(true)}
                    />
                    </Grid>
                ))}
        </Grid>
    );
};

export default StudentHome;

