import React from 'react';
import logo from './logo.svg';
import './App.css';
import './null.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="main">
      <Header/>
      <div className="wrapper center">
        <Navbar/>
        <Profile/>
      </div>
    </div>
  );
}



export default App;
