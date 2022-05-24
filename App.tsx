import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { Dashboard } from './src/screens/Dashboard/Dashboard';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) { return <AppLoading /> }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
