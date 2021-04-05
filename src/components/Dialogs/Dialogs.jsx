import React from 'react';
import classes from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer.jsx';
const Dialogs = (props) => {
        return (
            <div>
                <h2>Dialogs</h2>
                <div className={classes.content}>
                    <MessagesContainer/>
                </div>
            </div>
        );
}

export default Dialogs;