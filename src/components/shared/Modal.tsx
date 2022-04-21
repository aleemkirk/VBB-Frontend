import { Close } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';

interface ModalProps {
  actions?: React.ReactNode;
  children: React.ReactNode;
  onClose?: () => void;
  open: boolean;
  title?: string;
}

const Modal = ({ actions, children, onClose, open, title }: ModalProps) => (
  <Dialog open={open}>
    <DialogTitle>
      {title}
      {onClose && (
        <Box position="absolute" right="8px" top="8px">
          <IconButton aria-label="close" onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      )}
    </DialogTitle>
    <DialogContent sx={{ minWidth: 480 }}>{children}</DialogContent>
    {actions && <DialogActions>{actions}</DialogActions>}
  </Dialog>
);

export default Modal;
