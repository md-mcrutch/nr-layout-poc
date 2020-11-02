import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import MainLayout from '../MainLayout/MainLayout';

const useStyles = makeStyles(() => ({
  box: {
    height: '100%',
  },

  paper: {
    height: '100%',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const leftControls = <p>Combined Map controls</p>;

  return (
    <MainLayout leftControls={leftControls}>
      <Grid container direction="column">
        <Grid item xs>
          <Box className={classes.box} bgcolor="salmon" p={1}>
            MAP
          </Box>
        </Grid>

        <Grid item style={{ height: '150px' }}>
          <Box className={classes.box} p={1}>
            <Paper elevation={1} className={classes.paper}>
              <Box p={1}>Actions</Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;
