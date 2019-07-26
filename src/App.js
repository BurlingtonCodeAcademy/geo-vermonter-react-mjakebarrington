import React from 'react';
import './App.css';
import L from 'leaflet';
import Map from './components/Map'
import Controls from './components/Controls'

function App() {
  return (
    <div>
    <Map/>
    <Controls/>
    </div>
  );
}

export default App;
