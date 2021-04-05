import React from 'react';
import classes from './Posts.module.css';
import MessagesContainer from './Posts/PostsContainer.jsx';
const Posts = (props) => {
        return (
            <div>
                <h2>Dialogs</h2>
                <div className={classes.content}>
                    <MessagesContainer/>
                </div>
            </div>
        );
}

export default Posts;