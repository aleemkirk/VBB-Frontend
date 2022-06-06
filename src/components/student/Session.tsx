import { 
    CalendarMonth as CalendarMonthIcon, 
    Person as PersonIcon, 
    AccessTime as AccessTimeIcon 
} from '@mui/icons-material';
import { Box, Button, Card, CardHeader } from '@mui/material';
import { Session } from '../../utils/Session';
import { getMentorProfile } from '../../utils/api';

// //TODO: Move shared interfaces
// export interface Session {
//     title:string;
//     dayOfWeek:string;
//     timeOfDay:string;
//     start?: Date;
//     end?: Date;
//     meetingLink?: string;
//     mentor?: string;
// }

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
        <div style={{ flex: '0 0 100px'}}> 
            {session.start.getDay()}
        </div>
         <AccessTimeIcon /> 
         <div style={{ flex: '0 0 100px', marginLeft: '10px',}}> 
            {session.start.getUTCDate()}
        </div>
        <PersonIcon/> 
        <div style={{ flex: '1 1 auto', marginLeft: '10px',}}> 
            { session.mentorID ? getMentorProfile(session.mentorID)?.firstName : <div style={{color:'grey'}}>Not paired with a mentor</div >}
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
