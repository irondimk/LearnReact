import React from 'react';
import classes from './Dialogs.module.css';
import Users from './Users/Users.jsx';
import Messages from './Messages/Messages.jsx';
const Dialogs = (props) => {
    return (
        <div>
            <h2>Dialogs</h2>
            <div className={classes.content}>
                <Users dialogusers={props.dialogusers}/>
                <Messages />
            </div>
        </div>
    );
}

export default Dialogs;