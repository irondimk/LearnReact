import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { userAPI } from '../../api/api';
import Login from './Login';
import {enterSite} from './../../redux/auth-reducer';
import { LoginHOC } from '../HOC/LoginHOC';


// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
// }

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        lastTryIsFalse: state.auth.lastTryIsFalse, 
        isLoad: state.auth.isLoad
    }
}

// let LoginWithHOC = LoginHOC(Login);

export default connect(mapStateToProps, {enterSite})(Login);