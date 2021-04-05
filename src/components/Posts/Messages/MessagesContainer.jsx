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
        sendMessage : (message)=> {dispatch(SendMessageActionCreate(message))},
        updateTextNewMessage : (text)=> {dispatch(editTextNewMessageActionCreate(text))}
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;