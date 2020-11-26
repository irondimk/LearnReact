import React from 'react';
import classes from './Header.module.css';


function Header(props) {
    return (
        <header>
            <div className={classes.wrapper}>
                <img className={classes.image} src="http://aimtechmyanmar.com/assets/img/logo/wifi/wifiprojectmanagement.png"></img>
            </div>
        </header>
    );
}

export default Header;