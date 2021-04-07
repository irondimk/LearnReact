import classes from './InfoBlock.module.css';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

let InfoBlock = (props) => {

    let [isShowLinkEdit, setShowLinkEdit] = useState(false);
    let [isShowEditPrompt, setisShowEditPrompt] = useState(false);

    let showEditLink = () => {
      setShowLinkEdit(true);
    }

    let hideEditLink = () => {
      setShowLinkEdit(false);
    }

    let showEditPrompt = () => {
      setisShowEditPrompt(true);
    }

    let hideEditPrompt = () => {
      setisShowEditPrompt(false);
    }

    return (
        <div className={classes.infoBlock} 
        onMouseEnter={props.canEditProfile ? showEditLink: null}
        onMouseLeave={props.canEditProfile ? hideEditLink: null}
        >

          {isShowLinkEdit ? 
            <div>
          <NavLink to="settings" className={classes.editProfileLink} onMouseOver={showEditPrompt}
          onMouseOut={hideEditPrompt}>Edit</NavLink>
          {isShowEditPrompt? <div className={classes.prompt}>Edit profile</div> : <> </> }
           
           </div> : 
          <></>}
          <h3 className={classes.infoTittle}>{props.title}</h3>
          <div className={classes.content}>
            {props.content}
          </div>
        </div>
          )
}

export default React.memo(InfoBlock);