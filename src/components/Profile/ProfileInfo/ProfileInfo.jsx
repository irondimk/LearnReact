import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
    <div>
          <div>
            <img className={classes.fon} src="https://im0-tub-ru.yandex.net/i?id=a8f059ca819afbe3ff5356a98882b49b&n=13&exp=1"></img>
          </div>
          <div>
            avatar + description
          </div>
        </div>
    );
}

export default ProfileInfo;