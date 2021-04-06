import {connect} from "react-redux";
import  {LoginHOC}  from "../HOC/LoginHOC";
import {SendMessageActionCreate, removeMessage} from './../../redux/posts-reducer'
import Posts from "./Posts";
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        postsData : state.postsPage.Posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : (message)=> {dispatch(SendMessageActionCreate(message))},
        removeMessage : (idMessage) => {dispatch(removeMessage(idMessage))}
    }
}

let PostsContainer = compose(LoginHOC, connect(mapStateToProps, mapDispatchToProps))(Posts);

export default PostsContainer;




