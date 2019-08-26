import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import MapContainer from './Components/MapView/MapContainer';

function App() {
  return (
    <div className="App">
     <LandingPage/>
     <MapContainer />
    </div>
  );
}

export default App;

