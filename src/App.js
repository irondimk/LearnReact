import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/null.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {

  return (
    <BrowserRouter>
      <div className="main">
        <Header/>
        <div className="wrapper center">
          <Navbar />
          <Route path="/profile" render={() => <Profile pst={props.appState.profilePage} addPost={props.addPost} editTextNewPost={props.editTextNewPost}/>} />
          <Route path="/dialogs" render={() => <Dialogs dialogusers={props.appState.dialogsPage}/>} />
          <Route path="/news" render={() => <News/>} />
          <Route path="/music" render={() => <Music/>} /> 
          <Route path="/settings" render={() => <Settings/>} />
        </div>
      </div>
    </BrowserRouter>

  );
}



export default App;
