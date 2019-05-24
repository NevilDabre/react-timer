import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './timer.controller'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <h1 className="title-text">Timer</h1>
          <Timer />
        </p>
      </header>
    </div>
  );
}

export default App;
