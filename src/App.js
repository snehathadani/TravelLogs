import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import MapContainer from './Components/MapView/MapContainer';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <LandingPage />
      <MapContainer />
    </MuiThemeProvider>
  );
}

export default App;

