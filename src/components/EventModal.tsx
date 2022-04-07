import { Box, Button } from '@mui/material';
import { SlotInfo } from 'react-big-calendar';
import Modal from './shared/Modal';
import { CalendarEvent, isCalendarEvent } from './Advisor/AdvisorCalendar';

interface EventModalProps {
  eventOrSlot: CalendarEvent | SlotInfo | null;
  onClose: () => void;
}

const EventModal = ({ eventOrSlot, onClose }: EventModalProps) => {
  const isEvent = isCalendarEvent(eventOrSlot);
  return (
    <Modal
      open={Boolean(eventOrSlot)}
      onClose={onClose}
      title={`${isEvent ? 'Edit' : 'New'} Event`}
      actions={
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button color="secondary" onClick={onClose}>
            Back
          </Button>
          <Button>Next</Button>
        </Box>
      }
    >
      test
    </Modal>
  );
};

export default EventModal;
