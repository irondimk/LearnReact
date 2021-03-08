import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { Form, Field } from 'react-final-form';
import FormStateToRedux from './../../../redux/FormStateToRedux';
import { composeValidators, maxCount, required } from '../../../utils/validators';

const MyPosts = (props) => {
  let jsxPosts = props.profilePage.posts.map(
    (elem) => {
      return <Post likescount={elem.likes} message={elem.message} avasrc={elem.avatarsrc} />
    }
  )

  let newPostElement = React.createRef();


  let onSubmit = (values) => {
    props.addPost(values.postText)
  };

  return (
    <div className={classes.posts}>
    <h3 className={classes.title}> My posts </h3>
      

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, reset, form }) => (
          <form
            onSubmit={handleSubmit}
          >
          <FormStateToRedux form="newPostInput" />
            <div>
            <Field validate={composeValidators(required, maxCount(50))} name={"postText"} id={"postText"} >
            {({ input, meta }) => (
              <div className={classes.inputDiv}>
                <textarea {...input} className = {classes.myPostInput} type="text" placeholder={"Your post"} />
                {meta.error && meta.touched && <span className = {classes.errorSpan}>{meta.error}</span>}
              </div>
            )}
            </Field>
              
              <button className={classes.submit} type="submit" disabled={submitting || pristine}>
                Submit
                </button>
                
                <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
              </div>
          </form>


        )}
      />
      <div>
        {jsxPosts}
      </div>
    </div>
  );
}

export default MyPosts;