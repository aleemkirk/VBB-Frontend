import * as React from 'react';
import {
  CalendarMonth as CalendarMonthIcon,
  Person as PersonIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { Box, Button, Card, CardHeader, Link,Typography, Grid, Menu, MenuItem} from '@mui/material';
import { Session } from '../../utils/Session';
import { DateTime } from 'luxon';
import { getStudentProfile } from '../../utils/api';
import moment from 'moment';
import {FaDesktop, FaEllipsisV} from 'react-icons/fa'
interface SessionProps {
  session: Session;
  onCheckIn: (link:string) => void;
  manage?:boolean;
}

export const EmptySessionMsg = () => {
  return (
    <Grid item xs={12} pb={2}>
      <Typography variant="body1">
        You haven't booked any sessions yet.{' '}
      </Typography>
    </Grid>
  );
};


const StudentSessionCard = ({ session, onCheckIn, manage }: SessionProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
    <Card>
      <CardHeader
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: '0 0 150px' }}>
              {moment(session.startTime).format('dddd, MMMM Do')}
            </div>
            <AccessTimeIcon />
            <div style={{ flex: '0 0 150px', marginLeft: '10px' }}>
              {moment(session.startTime).format('h:mm a')} -
              {moment(session.endTime).format('h:mm a')}
            </div>
            <FaDesktop/>
            <div style={{ flex: '0 0 150px', marginLeft: '10px' }}>
              {session.computer ? (
                <>
                  <p style={{margin:0}}>
                    {'Computer: '}<b>{session.computer?.name}</b>
                  </p>
                </>
              ) : (
                <div style={{ color: 'grey' }}>No computer.</div>
              )}
            </div>
            <PersonIcon />
            <div style={{ flex: '1 1 auto', marginLeft: '10px' }}>
              {session.mentor ? (
                <>
                  {session.mentor?.firstName +
                    ' ' +
                    session.mentor?.lastName}
                </>
              ) : (
                <div style={{ color: 'grey' }}>Not paired with a mentor</div>
              )}
            </div>
          </div>
        }
        avatar={<CalendarMonthIcon />}
        action={
          <Box display="flex" alignItems="center">
            {session.conferenceURL && session.conferenceURL !== null
              ? (
                <Button onClick={()=>onCheckIn(session.conferenceURL || '')}>
                  {session.conferenceURL !== null ? 'Meeting Link' : 'No Meeting Link'}
                </Button>
              )
              : null
            }

            {manage === true
              ? (<>
                <Button
                   id="demo-positioned-button"
                   aria-controls={open ? 'demo-positioned-menu' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   onClick={handleClick}
                 >
                   <FaEllipsisV/>
                 </Button>
                <Menu
                     id="demo-positioned-menu"
                     aria-labelledby="demo-positioned-button"
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                     anchorOrigin={{
                       vertical: 'bottom',
                       horizontal: 'left',
                     }}
                     transformOrigin={{
                       vertical: 'top',
                       horizontal: 'left',
                     }}
                   >
                     <MenuItem onClick={handleClose}>Cancel Appointment</MenuItem>
                 </Menu>
                 </>
              )
              : null
            }
          </Box>
        }
      />
    </Card>
  )
}

export default StudentSessionCard;
