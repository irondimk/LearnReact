import React from 'react';
import classes from './Profile.module.css';
import './../null.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts pst={props.pst.posts} newPostText={props.pst.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}




export default Profile;