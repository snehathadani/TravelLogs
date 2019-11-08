import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import MapContainer from './Components/MapView/MapContainer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import LoginModal from './Components/Login/LoginModal';
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Route exact path = '/' component = {LandingPage}/>
      <Route exact path = '/map' component = {MapContainer}/>
  
    </MuiThemeProvider>
  );
}

export default App;

