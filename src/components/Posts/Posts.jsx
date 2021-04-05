import React from 'react';
import classes from './Posts.module.css';
<<<<<<< HEAD:src/components/Posts/Posts.jsx
import MessagesContainer from './Posts/PostsContainer.jsx';
=======
import MessagesContainer from './Messages/MessagesContainer.jsx';
>>>>>>> master:src/components/Dialogs/Dialogs.jsx
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