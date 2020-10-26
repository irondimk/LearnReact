import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/null.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

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
