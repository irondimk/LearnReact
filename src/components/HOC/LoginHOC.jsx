import { Redirect } from 'react-router-dom';
import React from 'react';
import {connect} from "react-redux";
import Login from '../Login/Login';
// import LoginContainer from '../Login/LoginContainer';
// import ProfileContainer from '../Profile/ProfileContainer';

let mapStateToPropsForRedirect = (state) => {
    return(
        {
            isAuth: state.auth.isAuth,
            userId: state.auth.userId
        }
    );
}

export const LoginHOC = (WrappedComponent) => {

     class RedirectComponent extends React.Component{
        render(){
            if(WrappedComponent == Login){
                if(!this.props.isAuth){
                    // debugger;    
                    return <WrappedComponent {...this.props} />
                    // return <Login {...this.props} />;
                }
                else{
                    let path = "/profile/" + this.props.userId; 
                    return <Redirect to={path}/ >
                }
                
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
