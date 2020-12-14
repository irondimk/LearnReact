import React from 'react';
import classes from './Messages.module.css';
import { editTextNewMessageActionCreate, SendMessageActionCreate } from './../../../redux/dialogs-reducer';

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
    let newMessageElement = React.createRef();

    let editNewMessageText = () => {
        props.updateTextNewMessage(newMessageElement.current.value);
        // props.dispatch(editTextNewMessageActionCreate(newMessageElement.current.value));
    }
    let sendMessage = () => {
        props.sendMessage();
        // props.dispatch(SendMessageActionCreate())
    }
    return (
        <div>
            <div className={classes.content}>
                {DialogMessages}
                <textarea ref={newMessageElement} onChange={editNewMessageText} className={classes.newMessageBox} value={props.newMessageText} name="" id="" cols="30" rows="10"></textarea>
                <a onClick={sendMessage} className={classes.sendMessage} >Отправить</a>
            </div>
        </div>
    );
}


export default Messages;