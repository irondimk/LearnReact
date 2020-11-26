import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

// let posts = [
//   {likes: 11, message:"Npm, npx, react, jsx learn", avatarsrc:"https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1"},
//   {likes: 99, message:"First post this", avatarsrc:"https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png"}
// ]



const MyPosts = (props) => {
  
  let jsxPosts = props.pst.map(
    (elem) => {
      return <Post likescount={elem.likes} message={elem.message} avasrc={elem.avatarsrc}/>
    }
  )
    return (
          <div className={classes.posts}>
            My posts
            <div>
              <textarea name="" id="" cols="30" rows="3"></textarea>
              <button>Add post</button>
            </div>
            <div>
              {jsxPosts}
            </div>
          </div>
    );
}

export default MyPosts;