import React, {Suspense} from 'react';
import './App.css';
import './components/null.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {auth} from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SettingsContainer from './components/Settings/SettingsContainer';
import Footer from './components/Footer/Footer';
//lazy load
const PostsContainer = React.lazy(()=> import ('./components/Posts/PostsContainer'));
const News = React.lazy(()=> import ('./components/News/News'));
const Music = React.lazy(()=> import ('./components/Music/Music'));

class App extends React.Component {

  componentDidMount(){
    this.props.auth();
  }

  render(){
return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="main">
        <HeaderContainer/>
        <div className="wrapper center">
          <Navbar />
          <div className="content">
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
          <Suspense fallback={<div>Загрузка...</div>}>
          <Route path="/posts" render={() => <PostsContainer/>} />
          <Route path="/news" render={() => <News/>} />
          <Route path="/music" render={() => <Music/>} /> 
          </Suspense>
          <Route path="/settings" render={() => <SettingsContainer/>} />
          <Route path="/find-users" render={() => <FindUsersContainer/>} />
          <Route path="/login" render={() => <LoginContainer/>} />
          </div>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
}



export default compose(connect(null, {auth}))(App);
