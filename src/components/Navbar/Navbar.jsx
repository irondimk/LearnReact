import React from 'react';
import classes from './Navbar.module.css';
import './../null.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.activelink} className={classes.link}>Profile</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activelink} className={classes.link}>Messages</NavLink></li>
                <li className={classes.item}><NavLink to="/news" activeClassName={classes.activelink} className={classes.link}>News</NavLink></li>
                <li className={classes.item}><NavLink to="/music" activeClassName={classes.activelink} className={classes.link}>Music</NavLink></li>
                <li className={classes.item}><NavLink to="/settings" activeClassName={classes.activelink} className={classes.link}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;