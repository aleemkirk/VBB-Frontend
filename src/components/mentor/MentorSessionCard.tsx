import { 
    CalendarMonth as CalendarMonthIcon, 
    Person as PersonIcon, 
    AccessTime as AccessTimeIcon 
} from '@mui/icons-material';
import { Box, Button, Card, CardHeader } from '@mui/material';
import { Session } from '../../utils/Session';


interface SessionProps {
  session: Session;
  onCheckIn?: () => void;
}

const MentorSessionCard = ({ session, onCheckIn }: SessionProps) => (
  <Card>
    <CardHeader
      title={
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    }}>
        <div style={{ flex: '0 0 100px'}}> 
            {session.dayOfWeek}
        </div>
         <AccessTimeIcon /> 
         <div style={{ flex: '0 0 100px', marginLeft: '10px',}}> 
            {session.timeOfDay}
        </div>
        <PersonIcon/> 
        <div style={{ flex: '1 1 auto', marginLeft: '10px',}}> 
            {session.mentor ? session.mentor : <div style={{color:'grey'}}>Not paired with a mentor</div >}
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

export default MentorSessionCard;
