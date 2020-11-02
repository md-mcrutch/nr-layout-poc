import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import MainLayout from '../MainLayout/MainLayout';
import RiskMatrix from '../../components/RiskMatrix/RiskMatrix';
import CombinedMap from '../../components/CombinedMap/CombinedMap';
import AssetList from '../../components/AssetList/AssetList';

const useStyles = makeStyles(() => ({
  box: {
    height: '100%',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const leftControls = <p>Dashboard controls</p>;

  return (
    <MainLayout leftControls={leftControls}>
      <Grid container direction="column">
        <Grid item container direction="row" style={{ flex: 1 }}>
          <Grid item xs>
            <Box className={classes.box} bgcolor="salmon" p={1}>
              <RiskMatrix />
            </Box>
          </Grid>

          <Grid item xs>
            <Box className={classes.box} bgcolor="lightblue" p={1}>
              <CombinedMap />
            </Box>
          </Grid>
        </Grid>

        <Grid item style={{ flex: 1 }}>
          <Box className={classes.box} bgcolor="lightgreen" p={1}>
            <AssetList />
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;
