import React, { useState } from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import SocialNetworkIconFind from './SocialNetworkIconFind';
import InfoBlock from './InfoBlock/InfoBlock';
import PhotoUser from './PhotoUser/PhotoUser';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return (<Preloader />)
  }
  return (
    <div>
      <div>
        <ProfileStatusWithHooks
          canEditProfile={props.canEditProfile}
          status={props.status}
          updateStatus={props.updateStatus} />
      </div>

      <div className={classes.wrapper}>
        <PhotoUser
          canEditProfile={props.canEditProfile}
          photo={props.profile.photos.large}
          uploadUserPhoto={props.uploadUserPhoto}
        />

        <div className={classes.info}>
          <div className={classes.nameBlock}>
            <p className={classes.name}>
              {props.profile.fullName}
            </p>
          </div>

          <InfoBlock
            title={"About me"}
            canEditProfile={props.canEditProfile}
            content={
              <div>
                <p className={classes.description}>
                  {props.profile.aboutMe}
                </p>
              </div>
            } />

          <InfoBlock
            title={"Job"}
            canEditProfile={props.canEditProfile}
            content={
              <div>
                <p className={classes.description}>
                  Job search status :
              {props.profile.lookingForAJob ?
                    <span> I need a job</span> :
                    <span> I'm already working </span>}
                </p>
                <p className={classes.description}>
                  Decsription:
              <span> {props.profile.lookingForAJobDescription}</span>
                </p>
              </div>
            } />

          <InfoBlock
            title={"My social networks "}
            canEditProfile={props.canEditProfile}
            content={<div className={classes.socialNetworksWrapper}>
              {SocialNetworkIconFind(props.profile.contacts)}
            </div>}
          />

        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;