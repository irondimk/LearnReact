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
              <Post likescount="11" message="Npm, npx, react, jsx learn" avasrc="https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1"/>
              <Post likescount="9" message="First post this" avasrc="https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png"/>
              
            </div>
          </div>
    );
}

export default MyPosts;