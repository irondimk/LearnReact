import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/null.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
        <BrowserRouter>
        <div className="main">
        <Header/>
        <div className="wrapper center">
          <Navbar />
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
          <Route path="/dialogs" render={() => <Dialogs/>} />
          <Route path="/news" render={() => <News/>} />
          <Route path="/music" render={() => <Music/>} /> 
          <Route path="/settings" render={() => <Settings/>} />

          <Route path="/find-users" render={() => <FindUsersContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
