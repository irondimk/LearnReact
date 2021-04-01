import { connect } from 'react-redux';
import Login from './Login';
import {enterSite} from './../../redux/auth-reducer';


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        lastTryIsFalse: state.auth.lastTryIsFalse,
        captcha: state.auth.captcha
    }
}

export default connect(mapStateToProps, {enterSite})(Login);