import * as React from 'react';
import { Grid, Typography, Box, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppState } from '../../redux/rootReducer'
import { PageLayout, MainCardLayoutWithSideMenu} from '../../components/layout/Page';
import scss_variables from '../../styles/_variables.scss';
import { useDispatch, useSelector } from 'react-redux';

const Computers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const appState = useSelector((store: AppState) => store.appState);
    const user = useSelector((store: AppState) => store.user);

    React.useEffect(() => {

    }, []);


    return(
    <PageLayout>
      <MainCardLayoutWithSideMenu>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="card-container">
                <div className="card-header">
                <Typography variant="h6" alignSelf="flex-start" color={scss_variables.primary_color}>
                  Account Settings
                </Typography>
                </div>
                <div className="card-body">

                </div>
              </div>
            </Grid>
          </Grid>
      </MainCardLayoutWithSideMenu>
    </PageLayout>
  );
}
export default Computers;
