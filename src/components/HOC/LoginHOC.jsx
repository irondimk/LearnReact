import { Redirect } from 'react-router-dom';
import React from 'react';
import {connect} from "react-redux";
import Login from '../Login/Login';
import { auth } from '../../redux/auth-reducer';
import Preloader from '../Preloader/Preloader';
// import LoginContainer from '../Login/LoginContainer';
// import ProfileContainer from '../Profile/ProfileContainer';

let mapStateToPropsForRedirect = (state) => {
    return(
        {
            isAuth: state.auth.isAuth,
            userId: state.auth.userId,
            isLoad: state.auth.isLoadComplete
        }
    );
}

export const LoginHOC = (WrappedComponent) => {

     class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isLoad){
                return <Preloader/>
            }

            if(!this.props.isAuth){
                return <Redirect to="/login"/>
            }

            return <WrappedComponent {...this.props}/>
        }
    }

    let ProfileWithLoginHOC = connect(mapStateToPropsForRedirect, {})(RedirectComponent);

    return ProfileWithLoginHOC;
}
