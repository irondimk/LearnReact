import React, {useState} from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import defaultPicUserProfile from './../../../assets/images/user/userWithoutPhoto.png';
import uploadPhotoIcon from './../../../assets/images/profile/uploadNewPhoto.png';

const ProfileInfo = (props) => {

  let [uploadPhotoVisual, uploadPhotoVisualSet] = useState(false);
  // let [newPhoto, setNewPhoto] = useState(null);
  let [isSelectPhoto, setIsSelectPhoto] = useState(true);

  // newPhoto = React.createRef();

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
    if(isSelectPhoto == false){

    }
    else{
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
        <img className={classes.photoUser} onMouseOver={props.canEditProfile ? showUploadPhotoBlock : {}}  src={props.profile.photos.large || defaultPicUserProfile} />
        {uploadPhotoVisual ? 
        <label onMouseOut={hideUploadPhotoBlock} className={classes.uploadProfilePhotoBlock}> 
          <input onClick={userChoosePhoto} onPointerCancel={() => {console.log("cancel")}}  onChange={ uploadNewPhotoUser.bind(this) } className={classes.invisibleInput} type="file"/>
          <p>Upload <br/> new profile photo</p>
          <img className={classes.uploadPic} src={uploadPhotoIcon} />
          
        </label> : 
        <div> </div>
        }
        
        {/* <input type="file" name="AddImage" id="AddImage" accept="image/*" /> */}
      </div>
        
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