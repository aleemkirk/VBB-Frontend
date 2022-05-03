import {
    CalendarMonth as CalendarMonthIcon,
    Person as PersonIcon,
    AccessTime as AccessTimeIcon
} from '@mui/icons-material';
import { Box, Button, Card, CardHeader } from '@mui/material';
import { Session } from '../../utils/Session';
import moment from 'moment';


interface SessionProps {
  session: Session;
  onCheckIn?: () => void;
}

const SessionCard = ({ session, onCheckIn }: SessionProps) => (
  <Card>
    <CardHeader
      title={
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    }}>
        <div style={{ flex: '0 0 150px'}}>
            { moment(session.start).format('dddd, h:mm a').toString()}
        </div>
         <AccessTimeIcon />
         <div style={{ flex: '0 0 150px', marginLeft: '10px',}}>
            {moment(session.end).format('dddd, h:mm a').toString()}
        </div>
        <PersonIcon/>
        <div style={{ flex: '1 1 auto', marginLeft: '10px',}}>
            {session.mentorID ? session.mentorID : <div style={{color:'grey'}}>Not paired with a mentor</div >}
        </div>
      </div>
    }
      avatar={<CalendarMonthIcon />}
      action={
        <Box display="flex" alignItems="center">
          <Button onClick={onCheckIn}>{session.meetingLink ? 'Meeting Link' : 'Check In'}</Button>
        </Box>
      }
    />
  </Card>
);

export default SessionCard;
