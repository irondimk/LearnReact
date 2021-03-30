import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import signInPic from './../../assets/images/header/signin.png';
import logoutPic from './../../assets/images/header/logout.png';
import logoPic from './../../assets/images/header/logo.png';
class Header extends React.Component{

    state = {
        isAuth: this.props.isAuth,
        login: this.props.login
    }

    componentDidMount(){
        this.state.isAuth = this.props.isAuth;
        this.state.login = this.props.login
    }

    componentDidUpdate(prevProps, prevState){
        
        if((prevProps.isAuth !== this.props.isAuth) || (prevProps.login !== this.props.login)){
            this.setState({isAuth : this.props.isAuth,
                login: this.props.login})
        }
    }

    render(){
    return (
        <header>
            <div className={classes.wrapper}>
                <img className={classes.image} src={logoPic}></img>
                <div>
                {this.state.isAuth ? 
                <div>
                <div className={classes.welcomeText}>
                    <p>
                        Hello, {this.state.login}
                    </p>
                </div> 
                <div>
                    <a href="#" className={classes.logout} onClick={this.props.exitSite}>
                        <img src={logoutPic} className={classes.logoutImage}/>
                        <div className={classes.logoutTextBlock}> 
                            Logout
                        </div>
                    </a>
                </div> 
                </div> 
                :
                <div className={classes.loginBlock}> 
                    <NavLink activeClassName={classes.loginPageNow} className={classes.loginButton} to={'/login'}>
                        <img src={signInPic} className={classes.loginImage}/>
                        <div className={classes.loginTextBlock}> 
                            <span className={classes.loginText}>
                            Login
                            </span>
                        </div>
                    </NavLink> 
                </div>}
                    
                </div>
            </div>
        </header>
    );
}
}

export default Header;