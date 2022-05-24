import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

import { Dashboard } from './src/screens/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
