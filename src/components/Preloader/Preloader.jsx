import React from 'react';
import classes from './Preloader.module.css';
import PreloaderPicture from '../../assets/images/spin.png';

let Preloader = () => {
    return(
        <div className={classes.preloaderContainer}>
        <img src={PreloaderPicture} className={classes.preloader}/> 
        </div>
    )
}

export default Preloader;