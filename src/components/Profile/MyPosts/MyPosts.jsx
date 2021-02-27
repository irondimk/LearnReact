import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { Form, Field } from 'react-final-form';
import { render } from "react-dom";;

const MyPosts = (props) => {
  let jsxPosts = props.profilePage.posts.map(
    (elem) => {
      return <Post likescount={elem.likes} message={elem.message} avasrc={elem.avatarsrc} />
    }
  )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
  }


  let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  let onSubmit = (values) => {
    props.addPost(values.postText)
    // reset
  };

  return (
    <div className={classes.posts}>
      My posts

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, reset }) => (
          <form
            onSubmit={handleSubmit}
            // onSubmit={event => {
            //   handleSubmit(event).then(reset);
            // }}
          >
            <div><Field placeholder={"Your post"} name={"postText"} component={"textarea"} id={"postText"} />
              <button type="submit" disabled={submitting || pristine}>
                Submit
                </button>
              </div>
          </form>


        )}
      />

      {/* <div>
        <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement} name="" id="" cols="30" rows="3"></textarea>
        <button onClick={addPost}>Add post</button>
      </div> */}
      <div>
        {jsxPosts}
      </div>
    </div>
  );
}

export default MyPosts;