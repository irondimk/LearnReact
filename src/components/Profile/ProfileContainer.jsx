import React from 'react';
import {LoginHOC} from './../HOC/LoginHOC';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {connect} from "react-redux";
import {setUserProfile, openUserProfile, updateStatus, uploadUserPhoto} from './../../redux/profile-reducer';
import { compose } from 'redux';


class ProfileContainer extends React.Component{

    state = {
        userProfileUOpen: false,
    }

    componentDidMount(){
        if(!this.props.match.params.userId){
            this.props.openUserProfile(this.props.userId);
            this.state.userProfileUOpen = true;
        }
        else{
            this.props.openUserProfile(this.props.match.params.userId);
            this.state.userProfileUOpen = false;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            if(!this.props.match.params.userId){
                this.props.openUserProfile(this.props.userId);
                this.state.userProfileUOpen = true;
            }
            else{
                this.props.openUserProfile(this.props.match.params.userId);
                this.state.userProfileUOpen = false;
            }
        }
        
    }

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile} canEditProfile={this.state.userProfileUOpen} />
        );
    }
}

let mapStateToProps = (state) => {
    return(
        {
            status: state.profilePage.status,
            profile: state.profilePage.profile,
            userId: state.auth.userId
        }
    );
}

let ProfileContainerHOCUrl = compose(
    LoginHOC, 
    withRouter, 
    connect(mapStateToProps, {setUserProfile, openUserProfile, updateStatus, uploadUserPhoto}))
    (ProfileContainer);


export default ProfileContainerHOCUrl;