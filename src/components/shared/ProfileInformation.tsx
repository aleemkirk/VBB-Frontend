import {Box} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import {Profile} from '../../utils/Profile';

interface ProfileInformationProps {
    userProfile:Profile;
}

const ProfileInformation = ({userProfile}:ProfileInformationProps) => {

    return(
        <Box display='flex' flexDirection='column'>

            <Box flex='1 1 auto' flexDirection='row'>
                <Box display='flex' flex='1 1 auto'>
                    <Avatar sx={{ width: 72, height: 72 }} alt="Remy Sharp" src="https://i.pravatar.cc/72" />
                </Box>
                <Box display='flex' flex='1 1 auto'>
                    <Typography sx={{ fontSize: 20 }} variant='h5' component='div' gutterBottom>
                        {userProfile.firstName} {userProfile.lastName}
                    </Typography>
                </Box>
            </Box>
            
            <Box>
            {
                    userProfile.interests.map((interest) => (
                        <Typography sx={{ fontSize: 20 }} variant='h5' component='div' gutterBottom>
                            {interest}
                        </Typography>
                    ))
                };
            </Box>            
        </Box>
    );

};


export default ProfileInformation;

// import React from 'react';
// import {
//   makeStyles,
//   Card,
//   CardContent,
//   CardMedia,
//   Avatar,
//   Typography,
// } from '@material-ui/core';
// import PhoneIcon from '@material-ui/icons/Phone';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import defaultTheme from '../../theme';
// import {Profile} from '../../utils/Profile';

// const useStyles = makeStyles((theme: any) => ({
//   text: {
//     margin: theme.spacing(0, 0, 0.5),
//     //color: theme.palette.secondary.contrastText,
//   },
//   avatar: {
//     verticalAlign: 'middle',
//     marginRight: theme.spacing(0.5),
//   },
//   large: {
//     width: theme.spacing(12),
//     height: theme.spacing(12),
//     margin: theme.spacing(2, 2, 0),
//   },
//   card: {
//     borderRadius: 15,
//     maxWidth: '270px',
//     minWidth: '270px',
//     height: '330px',
//     backgroundColor: theme.palette.background.card,
//   },
//   cardContent: {
//     padding: theme.spacing(2, 0, 0, 0),
//   },
// }));

// interface ProfileInformationProps {
//     userProfile:Profile;
// }

// const ProfileInformation = ({userProfile}: ProfileInformationProps) => {
//   const classes = useStyles();

//   return (
//     <Card
//       variant='outlined'
//       className={classes.card}
//       style={{ display: 'inline-block' }}
//     >
//       <CardMedia >
//         <Avatar
//           alt='Remy Sharp'
//           src='https://i.pravatar.cc/72'
//           className={classes.large}
//         />
//       </CardMedia>
//       <CardContent className={classes.cardContent}>
//         <Typography
//           className={classes.text}
//           color='textSecondary'
//           variant='h6'
//           align='center'
//         >
//           {userProfile.firstName} {userProfile.lastName}
//         </Typography>{' '}
//       </CardContent>
//     </Card>
//   );
// }


// export default ProfileInformation;