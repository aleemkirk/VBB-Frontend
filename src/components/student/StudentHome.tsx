import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SessionCard, {Session} from './Session';
import { useState } from 'react';

const fakeSessions: Session[] = [
    {
        title: 'Session 1',
        dayOfWeek: 'Monday', 
        timeOfDay: '1:00 pm',
    },
    {
        title: 'Session 2',
        meetingLink:'xyz-ABC',
        dayOfWeek: 'Tuesday', 
        timeOfDay: '5:00 pm',
        mentor: 'John Doe',
    },
    {
        title: 'Session 2',
        dayOfWeek: 'Wednesday', 
        timeOfDay: '8:00 am',
    },
];

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
                {fakeSessions.map((session) => (
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