import { Computer as ComputerIcon } from '@mui/icons-material';
import { Box, Button, Card, CardHeader } from '@mui/material';

interface ComputerProps {
  computer: string;
}

const Computer = ({ computer }: ComputerProps) => (
  <Card>
    <CardHeader
      title={computer}
      avatar={<ComputerIcon />}
      action={
        <Box display="flex" alignItems="center">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Box>
      }
    />
  </Card>
);

export default Computer;
