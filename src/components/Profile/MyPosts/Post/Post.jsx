import React from 'react';
import classes from './Post.module.css';
// import './../null.css';
import likePic from './like.png'
const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.avatar}>
        <img className={classes.avatar__user} src={props.avasrc} alt="" />  </div>
      <div className={classes.text}>
        <p> {props.message}  </p>

      </div>
      <div className={classes.like}>
        <a href="#"><img className={classes.likePicture} src="https://pngimg.com/uploads/like/like_PNG88.png" alt="" /></a>
        <p>Likes is {props.likescount} </p>
      </div>
    </div>
  );
}

export default Post;