import classes from './InfoBlock.module.css';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

let InfoBlock = (props) => {

    let [isShowLinkEdit, setShowLinkEdit] = useState(false);

    return (
        <div className={classes.infoBlock} 
        onMouseOver={props.canEditProfile ? () => setShowLinkEdit(true): null} 
        onMouseOut={props.canEditProfile ? () => setShowLinkEdit(false): null}>

          {isShowLinkEdit ? 
          <NavLink to="settings" className={classes.editProfileLink}>Edit</NavLink> : 
          null}
          <h3 className={classes.infoTittle}>{props.title}</h3>
          <div className={classes.content}>
            {props.content}
          </div>
        </div>
          )
}

export default InfoBlock;