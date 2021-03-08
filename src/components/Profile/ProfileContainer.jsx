import React from 'react';
import {LoginHOC} from './../HOC/LoginHOC';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {connect} from "react-redux";
import {setUserProfile, openUserProfile, updateStatus} from './../../redux/profile-reducer';
import { compose } from 'redux';


class ProfileContainer extends React.Component{

    componentDidMount(){
        if(!this.props.match.params.userId){
            this.props.openUserProfile(this.props.userId)
        }
        else{
            this.props.openUserProfile(this.props.match.params.userId)
        }
    }

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile} />
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
    connect(mapStateToProps, {setUserProfile, openUserProfile, updateStatus}))
    (ProfileContainer);


export default ProfileContainerHOCUrl;