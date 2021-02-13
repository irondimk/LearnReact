import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';


function Header(props) {
    return (
        <header>
            <div className={classes.wrapper}>
                <img className={classes.image} src="http://aimtechmyanmar.com/assets/img/logo/wifi/wifiprojectmanagement.png"></img>
                <div className={classes.loginBlock}>
                {props.isAuth ? <p>Hello {props.login}</p> : <NavLink className={classes.loginText} to={'/login'}>Login</NavLink>}
                    
                </div>
            </div>
        </header>
    );
}

export default Header;