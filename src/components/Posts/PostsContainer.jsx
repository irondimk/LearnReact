import {connect} from "react-redux";
import  {LoginHOC}  from "../HOC/LoginHOC";
import {SendMessageActionCreate} from './../../redux/posts-reducer'
import Posts from "./Posts";
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        PostsData : state.postsPage.MessagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : (message)=> {dispatch(SendMessageActionCreate(message))}
    }
}

let PostsContainer = compose(LoginHOC, connect(mapStateToProps, mapDispatchToProps))(Posts);

export default PostsContainer;




