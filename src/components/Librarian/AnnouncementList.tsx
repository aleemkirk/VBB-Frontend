import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { getAnnounements } from '../../utils/api';
import AnnouncementCard from '../shared/AnnouncementCard';

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const AnnouncementList = () => {

    const announcements = getAnnounements();

    return (
        <Box flex="1 1 auto" maxWidth={800} maxHeight={800} overflow='auto'>
            <Fab color="primary" aria-label="add" sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
            }}>
                <AddIcon />
            </Fab>
            {
                announcements.map(announcement => (
                    <AnnouncementCard announcement={announcement}/>
                ))
            }
        </Box>
    );
};


export default AnnouncementList;