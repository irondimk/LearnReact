import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {

  let jsxPosts = props.pst.map(
    (elem) => {
      return <Post likescount={elem.likes} message={elem.message} avasrc={elem.avatarsrc} />
    }
  )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.editTextNewPost('');
  }

  let onPostChange = () => {
    props.editTextNewPost(newPostElement.current.value);
  }

  return (
    <div className={classes.posts}>
      My posts
      <div>
        <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} name="" id="" cols="30" rows="3"></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {jsxPosts}
      </div>
    </div>
  );
}

export default MyPosts;