// import Posts from "./Posts";
import {connect} from "react-redux";
import  {LoginHOC}  from "../HOC/LoginHOC";
import Messages from "./Messages/Messages";
import {SendMessageActionCreate} from './../../redux/dialogs-reducer'

let mapStateToProps = (state) => {
    return {
        MessagesData : state.dialogsPage.MessagesData,
        newMessageText : state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : (message)=> {dispatch(SendMessageActionCreate(message))}
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


let PostsWithHOC = LoginHOC(MessagesContainer);


export default PostsWithHOC;




