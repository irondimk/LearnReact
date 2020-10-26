import React from 'react';
import classes from './Post.module.css';
// import './../null.css';

const Post = () => {
    return (
              <div className={classes.post}>
                <div className={classes.avatar}>
                <img className={classes.avatar__user} src="https://icons.iconarchive.com/icons/icons8/ios7/96/Logos-Chrome-Copyrighted-icon.png" alt=""/>
                </div>
                <div className={classes.text}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, numquam doloremque accusamus nobis quos distinctio deserunt voluptatem vitae error veniam ipsa et fugit asperiores repudiandae maiores blanditiis doloribus animi aut!
             </p>
                </div>
                 </div> 
              
    );
}

export default Post;