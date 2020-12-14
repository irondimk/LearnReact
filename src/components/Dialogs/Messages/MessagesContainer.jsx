import React from 'react';
import { editTextNewMessageActionCreate, SendMessageActionCreate } from './../../../redux/dialogs-reducer';
import Messages from './Messages';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        MessagesData : state.dialogsPage.MessagesData,
        newMessageText : state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : ()=> {dispatch(SendMessageActionCreate())},
        updateTextNewMessage : (text)=> {dispatch(editTextNewMessageActionCreate(text))}
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

// const MessagesContainer = (props) => {

//     let dialogs = props.store.getState().dialogsPage;

//     let editNewMessageText = (text) => {
//         props.store.dispatch(editTextNewMessageActionCreate(text));
//     }
//     let sendMessage = () => {
//         props.store.dispatch(SendMessageActionCreate())
//     }
//     return (
//         <Messages sendMessage={sendMessage} updateTextNewMessage={editNewMessageText} MessagesData={dialogs.MessagesData}
//         newMessageText = {dialogs.newMessageText}
//         />
//     );
// }


export default MessagesContainer;