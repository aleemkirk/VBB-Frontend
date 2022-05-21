import { Button, Typography } from '@mui/material';
import Modal from './Modal';

interface SimpleModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
}

const SimpleModal = ({ open, title, onClose, onSubmit }: SimpleModalProps) => (
  <Modal
    onClose={onClose}
    open={open}
    actions={
      <>
        <Button sx={{ mr: 2 }} onClick={onSubmit}>
          Yes
        </Button>
        <Button color="secondary" onClick={onClose}>
          No
        </Button>
      </>
    }
  >
    <Typography variant="h5" mt={2}>
      {title}
    </Typography>
  </Modal>
);

export default SimpleModal;
