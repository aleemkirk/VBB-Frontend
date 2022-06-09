import {
  CalendarMonth as CalendarMonthIcon,
  Person as PersonIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { Box, Button, Card, CardHeader } from '@mui/material';
import { Session } from '../../utils/Session';
import { DateTime } from 'luxon';
import { getStudentProfile } from '../../utils/api';

interface SessionProps {
  session: Session;
  onCheckIn?: () => void;
}

const MentorSessionCard = ({ session, onCheckIn }: SessionProps) => (
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
            {DateTime.fromJSDate(session.start).toFormat('dddd, MMMM Do')}
          </div>
          <AccessTimeIcon />
          <div style={{ flex: '0 0 150px', marginLeft: '10px' }}>
            {DateTime.fromJSDate(session.start).toFormat('h:mm a')}
          </div>
          <PersonIcon />
          <div style={{ flex: '1 1 auto', marginLeft: '10px' }}>
            {session.studentID ? (
              <>
                {getStudentProfile(session.studentID)?.firstName +
                  ' ' +
                  getStudentProfile(session.studentID)?.lastName}
              </>
            ) : (
              <div style={{ color: 'grey' }}>Not paired with student</div>
            )}
          </div>
        </div>
      }
      avatar={<CalendarMonthIcon />}
      action={
        <Box display="flex" alignItems="center">
          <Button onClick={onCheckIn}>
            {session.meetingLink ? 'Meeting Link' : 'No Meeting Link'}
          </Button>
        </Box>
      }
    />
  </Card>
);

export default MentorSessionCard;
