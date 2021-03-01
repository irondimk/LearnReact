import { Redirect } from 'react-router-dom';
import React from 'react';
import {connect} from "react-redux";
import Login from '../Login/Login';
// import ProfileContainer from '../Profile/ProfileContainer';

let mapStateToPropsForRedirect = (state) => {
    return(
        {
            isAuth: state.auth.isAuth,
        }
    );
}

export const LoginHOC = (WrappedComponent) => {

     class RedirectComponent extends React.Component{
        render(){
            if(WrappedComponent == Login){
                if(!this.props.isAuth){
                    return <Login {...this.props} />;
                }
    
                return <Redirect to="/profile"/>
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
