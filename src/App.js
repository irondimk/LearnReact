import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Test />
      <header className="App-header">
        
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Test = () => {
  return (
    <div>
      1234
        <h1>IronDimk</h1>
        <p>Loremlorem lorem lorem</p>
        <a href="#">Clicked</a>
    </div>
  );
}

export default App;
