import React from 'react';
import {AddPostActionCreate, editTextNewPostActionCreate} from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
  return{
    profilePage: state.profilePage
  }
}
let mapDispatchToProps = (dispatch)=>{
  return {
    addPost: () => {
      dispatch(AddPostActionCreate())
    },
    updateNewPostText: (text) => {dispatch(editTextNewPostActionCreate(text))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;