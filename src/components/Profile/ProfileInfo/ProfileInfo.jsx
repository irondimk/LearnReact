import React from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return (<Preloader />)
  }
  return (
    <div>
      <div>
        <img className={classes.fon} src="https://im0-tub-ru.yandex.net/i?id=a8f059ca819afbe3ff5356a98882b49b&n=13&exp=1"></img>
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