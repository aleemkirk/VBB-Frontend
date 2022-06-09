import { Computer as ComputerIcon } from '@mui/icons-material';
import { Box, Button, Card, CardHeader } from '@mui/material';

interface ComputerProps {
  computer: string;
  onDelete?: () => void;
}

const Computer = ({ computer, onDelete }: ComputerProps) => (
  <Card>
    <CardHeader
      title={computer}
      avatar={<ComputerIcon />}
      action={
        <Box display="flex" alignItems="center">
          <Button>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </Box>
      }
    />
  </Card>
);

export default Computer;
