import React, {Suspense} from 'react';
import './App.css';
import './components/null.css';
import Navbar from './components/Navbar/Navbar';
// import Dialogs from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
// import News from './components/News/News';
// import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {auth} from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
//lazy load
const Dialogs = React.lazy(()=> import ('./components/Dialogs/DialogsContainer'));
const News = React.lazy(()=> import ('./components/News/News'));
const Music = React.lazy(()=> import ('./components/Music/Music'));

class App extends React.Component {

  componentDidMount(){
    this.props.auth();
  }

  render(){
return (
        <BrowserRouter>
        <div className="main">
        <HeaderContainer/>
        <div className="wrapper center">
          <Navbar />
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
          <Suspense fallback={<div>Загрузка...</div>}>
          <Route path="/dialogs" render={() => <Dialogs/>} />
          <Route path="/news" render={() => <News/>} />
          <Route path="/music" render={() => <Music/>} /> 
          </Suspense>
          <Route path="/settings" render={() => <Settings/>} />
          <Route path="/find-users" render={() => <FindUsersContainer/>} />
          <Route path="/login" render={() => <LoginContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}
}



export default compose(connect(null, {auth}))(App);
