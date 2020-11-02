import React from 'react';

const MDThemeContext = React.createContext([
  {
    darkMode: false,
  },
  () => {},
]);

export default MDThemeContext;
