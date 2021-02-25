import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { userAPI } from '../../api/api';
import Login from './Login';
import {enterSite} from './../../redux/auth-reducer';


// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
// }

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {enterSite})(Login);