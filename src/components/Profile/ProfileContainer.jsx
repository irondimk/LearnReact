import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from "react-redux";
import {setUserProfile, openUserProfile} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';
import { LoginHOC } from '../HOC/LoginHOC';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

    componentDidMount(){
        this.props.openUserProfile(this.props.match.params.userId)
    }

    render(){
        return(
            
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => {
    return(
        {
            profile: state.profilePage.profile
        }
    );
}

let ProfileContainerHOCUrl = compose(LoginHOC, 
    withRouter, 
    connect(mapStateToProps, {setUserProfile, openUserProfile}))
    (ProfileContainer)

// let ProfileWithLoginHOC = LoginHOC(ProfileContainer);
// let withUrlDatacontainerComponent = withRouter(ProfileWithLoginHOC);
// export default connect(mapStateToProps, {setUserProfile, openUserProfile})(withUrlDatacontainerComponent)

export default ProfileContainerHOCUrl;