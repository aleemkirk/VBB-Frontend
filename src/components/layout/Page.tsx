import { ReactNode, useState } from 'react';
import {
  FormControl,
  FormControlProps,
  InputLabel,
  Select,
  SelectChangeEvent,
  Box
} from '@mui/material';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { Grid } from '@mui/material';

interface PageProps {
  hideNav?: boolean;
  children: ReactNode;
}


export const PageLayout = ({children, hideNav}: PageProps) => {
  return (<>
        <div className='app-layout' style={{background:`url('${process.env.PUBLIC_URL +'/bg.svg'}')`, backgroundSize:'cover', backgroundPosition:'center'}}>
          <Header />
          <Box pt={10}>
            {children}
          </Box>
        </div>
    </>
  );
};


export const MainCardLayoutWithSideMenu = ({children, hideNav}: PageProps) => {
  return (<>
        <div>
          <Grid container padding={3} spacing={3} mt={3}>
            <Grid item xs={2}>
                <SideMenu/>
            </Grid>
            <Grid item xs={10}>
              {children}
            </Grid>
          </Grid>
        </div>
    </>
  );
};
