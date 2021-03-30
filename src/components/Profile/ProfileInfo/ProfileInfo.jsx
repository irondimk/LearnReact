import React from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import defaultPicUserProfile from './../../../assets/images/user/userWithoutPhoto.png';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (<Preloader />)
  }
  return (
    <div>
      <div>
      <ProfileStatusWithHooks canEditProfile={props.canEditProfile} status={props.status} updateStatus={props.updateStatus}/>
      </div>

      <div className={classes.wrapper}>
        <img className={classes.photoUser} src={props.profile.photos.large || defaultPicUserProfile} />
        <div className={classes.info}>
          <p className={classes.name}>Name: {props.profile.fullName}</p>
          <p className={classes.about}>About me: {props.profile.aboutMe}</p>
          {props.profile.lookingForAJob ? <p>Мне нужна работа</p> : <p>Уже работаю</p>}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;