import React from 'react';
import Post from './Post/Post';
import FormNewPost from './FormNewPost';

let Posts = (props) => {

    let PostsArr = props.PostsData.map((elem) => {
        return (
            <Post src={elem.src} username={elem.username} message={elem.message} />
        )
    })

    

    return (
        <div>
            <div>
                {PostsArr}
                <FormNewPost sendMessage={props.sendMessage}/>
            </div>
        </div>
    )
}

export default Posts;

