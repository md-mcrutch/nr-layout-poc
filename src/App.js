import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MDThemeContext from './context/MDThemeContext';
import Dashboard from './containers/Dashboard/Dashboard';
import ForecastTable from './containers/ForecastTable/ForcecastTable';
import CombinedMap from './containers/CombinedMap/CombinedMap';

function App() {
  const MDTheme = useState({ darkMode: false });

  const theme = createMuiTheme({
    palette: {
      type: MDTheme[0].darkMode ? 'dark' : 'light',
    },
  });

  return (
    <MDThemeContext.Provider value={MDTheme}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            exact
            path="/CombinedMap"
            render={(props) => <CombinedMap {...props} />}
          />

          <Route
            exact
            path="/ForecastTable"
            render={(props) => <ForecastTable {...props} />}
          />

          <Route
            exact
            path="/Dashboard"
            render={(props) => <Dashboard {...props} />}
          />

          <Route path="/" render={(props) => <Dashboard {...props} />} />
        </Switch>
      </ThemeProvider>
    </MDThemeContext.Provider>
  );
}

export default App;
