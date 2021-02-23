import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {setUserProfile, openUserProfile, updateStatus} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

    componentDidMount(){
        this.props.openUserProfile(this.props.match.params.userId)
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
            profile: state.profilePage.profile
        }
    );
}

let ProfileContainerHOCUrl = compose(
    // LoginHOC, 
    withRouter, 
    connect(mapStateToProps, {openUserProfile, updateStatus}))
    (ProfileContainer)


export default ProfileContainerHOCUrl;