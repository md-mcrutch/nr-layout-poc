import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Brightness7 from '@material-ui/icons/Brightness7';
import Brightness3 from '@material-ui/icons/Brightness3';

import ThemeContext from '../../context/MDThemeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },

  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
  },

  link: {
    color: theme.palette.text.primary,
  },

  iconButton: {
    // color: theme.palette.primary.contrastText,
    padding: '6px',
  },

  verticalCenterWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [MDTheme, SetMDTheme] = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.root}>
          <Tooltip title="Return to NR main site">
            <Link className={classes.link} href="/">
              <IconButton className={classes.iconButton}>
                <ArrowBackIos />
              </IconButton>
            </Link>
          </Tooltip>

          <Link className={classes.link} href="/">
            Dashboard
          </Link>

          <Link className={classes.link} href="/CombinedMap">
            Combined Map
          </Link>

          <Link className={classes.link} href="/ForecastTable">
            Forecast Table
          </Link>
        </Typography>

        <Box className={classes.verticalCenterWrapper}>
          <IconButton
            className={classes.iconButton}
            onClick={() => SetMDTheme({ darkMode: false })}
          >
            <Brightness7 fontSize="small" />
          </IconButton>
          <Switch
            size="small"
            checked={MDTheme.darkMode}
            onChange={() => SetMDTheme({ darkMode: !MDTheme.darkMode })}
          />
          <IconButton
            className={classes.iconButton}
            onClick={() => SetMDTheme({ darkMode: true })}
          >
            <Brightness3 fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
