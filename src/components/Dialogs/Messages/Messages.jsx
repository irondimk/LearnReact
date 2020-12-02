import React from 'react';
import classes from './Messages.module.css';

let MessageDialog = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.user_send}>
                <div className={classes.user_send_pic}>
                    <img className={classes.user_send_pic_img} src={props.src} alt="" />
                </div>
                <div className={classes.user_send_name}>
                    {props.username}
                </div>
            </div>
            <div className={classes.user_message}>
                {props.message}
            </div>
        </div>
    )
}



const Messages = (props) => {
    let DialogMessages = props.MessagesData.map((elem) => {
        return (
            <MessageDialog src={elem.src} username={elem.username} message={elem.message} />
        )
    })
    return (
        <div>
            <div className={classes.content}>
                {DialogMessages}
            </div>
        </div>
    );
}

export default Messages;