import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Announcement} from '../../utils/Announcements';


interface AnnouncementCardProps {
    announcement: Announcement;
}

const AnnouncementCard = ({announcement}:AnnouncementCardProps) => {
       
    const handleClick = () => null;

    return(
        <Box m={2} pt={3} onClick={handleClick}>
        <Card sx={{ minWidth: 275 }} >
        <CardContent>
            <Typography sx={{ fontSize: 20 }} variant='h5' component='div' gutterBottom>
            {announcement.subject}
            </Typography>
            <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
            {announcement.datePosted}
            </Typography>
            <Typography variant="body2">
            {announcement.content}
            </Typography>
        </CardContent>
    </Card>
    </Box>
    );

};


export default AnnouncementCard;