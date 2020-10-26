import React from 'react';
import classes from './Navbar.module.css';
import './../null.css';

function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li className={classes.item}><a href="#" className={classes.link}>Profile</a></li>
                <li className={classes.item}><a href="#" className={classes.link}>Messages</a></li>
                <li className={classes.item}><a href="#" className={classes.link}>News</a></li>
                <li className={classes.item}><a href="#" className={classes.link}>Music</a></li>
                <li className={classes.item}><a href="#" className={classes.link}>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;