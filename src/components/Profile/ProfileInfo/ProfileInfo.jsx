import React, {useState} from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import defaultPicUserProfile from './../../../assets/images/user/userWithoutPhoto.png';
import uploadPhotoIcon from './../../../assets/images/profile/uploadNewPhoto.png';
import SocialNetworkIconFind from './SocialNetworkIconFind';
import { NavLink } from 'react-router-dom';

const ProfileInfo = (props) => {

  let [uploadPhotoVisual, uploadPhotoVisualSet] = useState(false);
  let [isSelectPhoto, setIsSelectPhoto] = useState(true);

  let uploadNewPhotoUser = (e) => {
    props.uploadUserPhoto(e.target.files[0]);
    setIsSelectPhoto(true);
    uploadPhotoVisualSet(false);
  }

  let userChoosePhoto = () => {
    setIsSelectPhoto(false);
  }

  let showUploadPhotoBlock = () => {
    uploadPhotoVisualSet(true);
  }

  let hideUploadPhotoBlock = () => {
    if(isSelectPhoto){
      uploadPhotoVisualSet(false);
    }
  }


  if (!props.profile) {
    return (<Preloader />)
  }
  return (
    <div>
      <div>
      <ProfileStatusWithHooks canEditProfile={props.canEditProfile} status={props.status} updateStatus={props.updateStatus}/>
      </div>

      <div className={classes.wrapper}>
      <div className={classes.photoBlock}> 
        <img className={classes.photoUser} onMouseOver={props.canEditProfile ? showUploadPhotoBlock : null}  src={props.profile.photos.large || defaultPicUserProfile} />
        {uploadPhotoVisual ? 
        <label onMouseOut={hideUploadPhotoBlock} className={classes.uploadProfilePhotoBlock}> 
          <input onClick={userChoosePhoto}  onChange={ uploadNewPhotoUser.bind(this) } className={classes.invisibleInput} type="file"/>
          <p>Upload <br/> new profile photo</p>
          <img className={classes.uploadPic} src={uploadPhotoIcon} />
          
        </label> : 
        <div> </div>
        }
      </div>
        
        <div className={classes.info}>
          <div className={classes.nameBlock}>
          <p className={classes.name}>
            {props.profile.fullName}
            </p>
          </div>

          <div className={classes.infoBlock}>
            {props.canEditProfile ? <NavLink to="settings" className={classes.editProfileLink}>Edit</NavLink> : <div></div>}
            <h3 className={classes.infoTittle}>Работа</h3>
            <p className={classes.description}> 
              Статус поиска работы: 
              {props.profile.lookingForAJob ? 
              <span> Мне нужна работа</span> : 
              <span> Уже работаю</span>} 
            </p>
            <p className={classes.description}> 
              Описание:
              <span> {props.profile.lookingForAJobDescription}</span>
            </p>
          </div>
          


          <div className={classes.infoBlock}>
          <h3 className={classes.infoTittle}>Мои социальные сети</h3>
                <div className={classes.socialNetworksWrapper}>
                {SocialNetworkIconFind(props.profile.contacts)}
                </div>
            
            
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;