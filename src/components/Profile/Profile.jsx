import React from 'react';
import classes from './Profile.module.css';
import './../null.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo uploadUserPhoto={props.uploadUserPhoto} canEditProfile={props.canEditProfile} status={props.status} profile={props.profile} updateStatus={props.updateStatus}/>
        </div>
    );
}


export default Profile;