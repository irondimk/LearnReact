import React, {useState} from 'react';
import defaultPicUserProfile from './../../../../assets/images/user/userWithoutPhoto.png';
import uploadPhotoIcon from './../../../../assets/images/profile/uploadNewPhoto.png';
import classes from './PhotoUser.module.css'

let PhotoUser = (props) => {

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

    return (
        <div className={classes.photoBlock}> 
        <img className={classes.photoUser} onMouseOver={props.canEditProfile ? showUploadPhotoBlock : null}  src={props.photo || defaultPicUserProfile} />
        {uploadPhotoVisual ? 
        <label onMouseOut={hideUploadPhotoBlock} className={classes.uploadProfilePhotoBlock}> 
          <input onClick={userChoosePhoto}  onChange={ uploadNewPhotoUser.bind(this) } className={classes.invisibleInput} type="file"/>
          <p className={classes.uploadText}>Upload <br/> new profile photo</p>
          <img className={classes.uploadPic} src={uploadPhotoIcon} />
          
        </label> : 
        <div> </div>
        }
      </div>
    )
}

export default PhotoUser;