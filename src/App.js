import React from 'react';
import logo from './logo.svg';
import './App.css';
import Geolocation from "./components/geolocation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Geolocation />
      </header>
    </div>
  );
}

export default App;
