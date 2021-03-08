import React from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (<Preloader />)
  }
  return (
    <div>
      <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>

      <div className={classes.wrapper}>
        <img src={props.profile.photos.small} />
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