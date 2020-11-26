import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';

const DialogUser = (props) => {
    let path = "/dialogs/" + props.id; 
    return(
    <li className={classes.bla_usr_item}><NavLink to={path} activeClassName={classes.bla_usr_item_selected} className={classes.bla_usr_link}> {props.name} </NavLink></li>
        )
    }


const Users = (props) => {
    let DialogUsers = props.dialogusers.map(
        (elem) => {
            return <DialogUser id={elem.id} name={elem.name}/>
        }
    )
    return (
        <div className={classes.content}>
                <ul className={classes.bla_usr}>
                    {DialogUsers}
                </ul>
        </div>
    );
}

export default Users;