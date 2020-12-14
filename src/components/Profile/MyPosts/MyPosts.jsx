import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {AddPostActionCreate, editTextNewPostActionCreate} from './../../../redux/profile-reducer';

const MyPosts = (props) => {
  let jsxPosts = props.profilePage.posts.map(
    (elem) => {
      return <Post likescount={elem.likes} message={elem.message} avasrc={elem.avatarsrc} />
    }
  )

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.dispatch(AddPostActionCreate());
    props.addPost();
  }

  let onPostChange = () => {
    // props.dispatch(editTextNewPostActionCreate(newPostElement.current.value));
    props.updateNewPostText(newPostElement.current.value);
  }

  return (
    <div className={classes.posts}>
      My posts
      <div>
        <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement} name="" id="" cols="30" rows="3"></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {jsxPosts}
      </div>
    </div>
  );
}

export default MyPosts;