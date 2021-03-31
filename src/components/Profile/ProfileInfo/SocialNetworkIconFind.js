import youtube from './../../../assets/images/socialNetwork/youtube.png';
import facebook from './../../../assets/images/socialNetwork/facebook.png';
import twitter from './../../../assets/images/socialNetwork/twitter.png';
import vk from './../../../assets/images/socialNetwork/vk.png';
import github from './../../../assets/images/socialNetwork/github.png';
import website from './../../../assets/images/socialNetwork/website.png';
import instagram from './../../../assets/images/socialNetwork/instagram.png';
import mail from './../../../assets/images/socialNetwork/mail.png';
import React from 'react';
import classes from './ProfileInfo.module.css';



const SocialNetworkIconFind = (contacts) => {
    let iconsArr = [youtube, facebook, twitter, vk, github, website, instagram, mail];
    let iconsNameArr = ["youtube", "facebook", "twitter", "vk", "github", "website", "instagram", "mainLink"];

    let newArrWithIcons = iconsNameArr.map((elem, index)=> {
        let url;
        for(let key in contacts){
            if((key == elem) && (contacts[key] != null)){
                if(contacts[key].indexOf("https://") == -1){
                    url = "https://" + contacts[key];
                }
                else{
                    url = contacts[key];
                }
                return (
                    <a href={url} className={classes.socialNetworkLogo}>
                        <img className={classes.socialNetworkLogoPic} src={iconsArr[index]}/>
                    </a>
                )
            }
        }
    })
    
    return newArrWithIcons;
}

export default SocialNetworkIconFind;