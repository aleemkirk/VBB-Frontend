import { CalendarMonth as CalendarMonthIcon } from '@mui/icons-material';
import { Box, Button, Card, CardHeader } from '@mui/material';
import { CalendarEvent } from '../advisor/AdvisorCalendar';

//TODO: Move shared interfaces
export interface Session {
    title:string;
    timeOfDay?:string;
    start?: Date;
    end?: Date;
    meetingLink?: string;
    mentor?: string;
}

interface SessionProps {
  session: Session;
  onCheckIn?: () => void;
}

const SessionCard = ({ session, onCheckIn }: SessionProps) => (
  <Card>
    <CardHeader
      title={session.title}
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
