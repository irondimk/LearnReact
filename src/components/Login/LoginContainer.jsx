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
        lastTryIsFalse: state.auth.lastTryIsFalse
    }
}

let LoginWithHOC = LoginHOC(Login);

export default connect(mapStateToProps, {enterSite})(LoginWithHOC);