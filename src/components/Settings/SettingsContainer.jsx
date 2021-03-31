import {connect} from "react-redux";
import Settings from "./Settings";
import React, {useEffect} from 'react';
import { LoginHOC } from "../HOC/LoginHOC";
import { openUserProfile } from "../../redux/profile-reducer";

let mapStateToProps = (state) => {
    if(state.profilePage.profile == null){
        return null;
    }
    return(
        {
            userId: state.auth.userId,
            //about work
            lookingForAJob: state.profilePage.profile.lookingForAJob,
            lookingForAJobDescription: state.profilePage.profile.lookingForAJobDescription,
            //contacts in profile
            facebook: state.profilePage.profile.contacts.facebook,
            website: state.profilePage.profile.contacts.website,
            vk: state.profilePage.profile.contacts.vk,
            twitter: state.profilePage.profile.contacts.twitter,
            instagram: state.profilePage.profile.contacts.instagram,
            youtube: state.profilePage.profile.contacts.youtube,
            github: state.profilePage.profile.contacts.github,
            mailLink: state.profilePage.profile.contacts.mailLink,

            fullName: state.profilePage.profile.fullName,
        }
    );
}

let SettingsContainer = connect(mapStateToProps, {})(Settings);


let authMapStateToProps = (state) => {
    return(
        {
            userId: state.auth.userId,
        }
    );
}

let SettingsAuthContainer = (props) => {
    useEffect(() => {
        console.log(props.userId);
        props.openUserProfile(props.userId)
    })

    return (<SettingsContainer props={props}/>)
}

export default LoginHOC(connect(authMapStateToProps, {openUserProfile})(SettingsAuthContainer));;