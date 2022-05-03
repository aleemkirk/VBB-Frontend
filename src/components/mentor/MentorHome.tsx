import { Card, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getSessions } from '../../utils/api';
import { useMemo, useState } from 'react';
import MentorSessionCard from './MentorSessionCard';
import { getMentorProfile } from '../../utils/api';

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

    const [checkIn, setCheckIn] = useState<boolean | null>(null);
    const user = useMemo(()=> getMentorProfile('1'), []);
    const fakeSessions = useMemo(()=>getSessions(user), []);

    return(
        <Grid container padding={2} spacing={1}>
            <Grid item xs={12} pb={2}>
                <Typography variant="h4">Hello {user?.firstName + ' ' + user?.lastName}!</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4">Upcomming Sessions</Typography>
            </Grid>
            {fakeSessions.length == 0 ? <EmptySessionMsg/> : fakeSessions.map((session) => (
                    <Grid item xs={12}>
                    <MentorSessionCard
                        session={session}
                        onCheckIn={() => setCheckIn(true)}
                    />
                    </Grid>
                ))}
        </Grid>
        
    );

}



export default MentorHome;