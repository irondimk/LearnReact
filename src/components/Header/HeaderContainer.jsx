import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {auth, setAuthUserData, exitSite} from './../../redux/auth-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
class HeaderContainer extends React.Component{

        render(){
            return(
                <Header{...this.props}/>
            )
        }
    
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData, auth, exitSite})(HeaderContainer);

// export default compose(connect(mapStateToProps, {setAuthUserData, auth, exitSite}), withRouter)(HeaderContainer);

