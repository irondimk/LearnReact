import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
// import './../null.css';

const MyPosts = () => {
    return (
          <div className={classes.posts}>
            My posts
            <div>
              <textarea name="" id="" cols="30" rows="3"></textarea>
              <button>Add post</button>
            </div>
            <div>
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
    );
}

export default MyPosts;