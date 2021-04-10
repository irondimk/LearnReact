import React from 'react';
import classes from './Navbar.module.css';
import './../null.css';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={props.className}>
            <ul className={classes.ul}>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.activelink} className={classes.link}>Profile</NavLink></li>
                <li className={classes.item}><NavLink to="/posts" activeClassName={classes.activelink} className={classes.link}>Posts</NavLink></li>
                <li className={classes.item}><NavLink to="/news" activeClassName={classes.activelink} className={classes.link}>News</NavLink></li>
                <li className={classes.item}><NavLink to="/music" activeClassName={classes.activelink} className={classes.link}>Music</NavLink></li>
                <li className={classes.item}><NavLink to="/settings" activeClassName={classes.activelink} className={classes.link}>Settings</NavLink></li>
                <li className={classes.item}><NavLink to="/find-users" activeClassName={classes.activelink} className={classes.link}>Find Users</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;