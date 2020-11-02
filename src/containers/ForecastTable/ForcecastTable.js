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

const ForecastTable = () => {
  const classes = useStyles();

  const leftControls = <p>Forecast controls</p>;

  return (
    <MainLayout leftControls={leftControls}>
      <Grid item container direction="column" xs>
        <Grid item>
          <Box bgcolor="#ddd" p={1}>
            Time bar (if needed)
          </Box>
        </Grid>

        <Grid item container direction="row" xs>
          <Grid item container direction="column" xs>
            <Grid item style={{ flex: 1 }}>
              <Box className={classes.box} bgcolor="salmon" p={1}>
                Forecast Table
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

          <Grid item container direction="column" xs={4}>
            <Grid item style={{ flex: 2 }}>
              <Box className={classes.box} bgcolor="lightblue" p={1}>
                Map
              </Box>
            </Grid>
            <Grid item style={{ flex: 1 }}>
              <Box className={classes.box} bgcolor="lightgreen" p={1}>
                Hourly Rainfall Obs
              </Box>
            </Grid>
            <Grid item style={{ flex: 1 }}>
              <Box className={classes.box} bgcolor="#fcf" p={1}>
                6 Hourly Rainfall Forecast
              </Box>
            </Grid>
            <Grid item style={{ flex: 1 }}>
              <Box className={classes.box} bgcolor="lightgray" p={1}>
                3 Hourly SMI Values
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default ForecastTable;
