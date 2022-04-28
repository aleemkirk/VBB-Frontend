import { Box, Button } from '@mui/material';
import { SlotInfo } from 'react-big-calendar';
import Modal from './shared/Modal';


interface EventModalProps {
  eventOrSlot: CalendarEvent | SlotInfo | null;
  onClose: () => void;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

export const isCalendarEvent = (
  event: CalendarEvent | SlotInfo | null
): event is CalendarEvent => {
  return event ? 'id' in event : false;
};

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
      {isEvent ? eventOrSlot.title : 'Available Slot'}
    </Modal>
  );
};

export default EventModal;
