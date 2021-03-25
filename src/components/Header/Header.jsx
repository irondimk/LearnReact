import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


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
                <img className={classes.image} src="http://aimtechmyanmar.com/assets/img/logo/wifi/wifiprojectmanagement.png"></img>
                <div>
                {this.state.isAuth ? <div><div className={classes.welcomeText}><p>Hello, {this.state.login}</p></div> <div><a href="#" className={classes.logout} onClick={this.props.exitSite}>Logout</a></div> </div> :<div  className={classes.loginBlock}> <NavLink className={classes.loginText} to={'/login'}>Login</NavLink> </div>}
                    
                </div>
            </div>
        </header>
    );
}
}

export default Header;