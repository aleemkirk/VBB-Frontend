import * as React from 'react';
import { Modal, Box, Grid, Typography} from '@mui/material';
import scss_variables from '../styles/_variables.scss';

interface Props {
  open:boolean;
  onClose:any;
  children: React.ReactNode | React.ReactNode[]
  title?:string;
}

const style:any = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  borderRadius:"15px",
  boxShadow: 24,
  padding:5
};

export const BasicModal: React.FC<Props> = ({children, open, onClose, title}) => {
  return(
    <Modal
       open={open}
       onClose={onClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style}>
          <div className="modal-header">
            <Typography variant="h5" alignSelf="flex-start" color={scss_variables.primary_color}>
              {title && title || ''}
            </Typography>
          </div>
          <div className="modal-body">
            {children}
          </div>
       </Box>
     </Modal>
  )
}
