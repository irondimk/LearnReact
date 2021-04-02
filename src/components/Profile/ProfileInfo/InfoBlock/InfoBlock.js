import classes from './InfoBlock.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


let InfoBlock = (props) => {
    return (
        <div className={classes.infoBlock}>
          {props.canEditProfile ? <NavLink to="settings" className={classes.editProfileLink}>Edit</NavLink> : <div></div>}
          <h3 className={classes.infoTittle}>{props.title}</h3>
          <div className={classes.content}>
            {props.content}
          </div>
        </div>
          )
}

export default InfoBlock;