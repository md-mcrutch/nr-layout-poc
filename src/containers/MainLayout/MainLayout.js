import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import NavBar from '../../components/NavBar/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },

  mainGrid: {
    height: '100%',
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();

  const leftControls = props.leftControls ? (
    <Grid item container direction="column" xs>
      <Box p={1}>{props.leftControls}</Box>
    </Grid>
  ) : null;

  return (
    <Paper elevation={0} className={classes.root}>
      <NavBar />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        className={classes.mainGrid}
      >
        {leftControls}
        <Grid item container direction="row" xs={props.leftControls ? 9 : 12}>
          {props.children}
        </Grid>
      </Grid>
    </Paper>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  leftControls: PropTypes.node,
};

export default MainLayout;
