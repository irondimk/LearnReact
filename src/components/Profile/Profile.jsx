import React from 'react';
import classes from './Profile.module.css';
import './../null.css';
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';
const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo status={props.status} profile={props.profile} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
}




export default Profile;