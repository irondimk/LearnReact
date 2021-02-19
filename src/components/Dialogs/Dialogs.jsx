import React from 'react';
import classes from './Dialogs.module.css';
import Users from './Users/Users.jsx';
// import Messages from './Messages/Messages.jsx';
import MessagesContainer from './Messages/MessagesContainer.jsx';
import UsersContainer from './Users/UsersContainer.jsx';
import { Redirect } from 'react-router-dom';
const Dialogs = (props) => {
        return (
            <div>
                <h2>Dialogs</h2>
                <div className={classes.content}>
                    <UsersContainer/>
                    <MessagesContainer/>
                </div>
            </div>
        );
}

export default Dialogs;