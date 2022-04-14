import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 120;

export default function MenteeSideBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <Drawer
        sx={{
          width: drawerWidth,
          zIndex: 1000,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Toolbar />
        <Divider />
        <List>
          {['Home', 'Booking'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
              <Divider/>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
     
    </Box>
  );
}