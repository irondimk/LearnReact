import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import {toggleIsFollowingProcessAC, follow, unfollow} from './../../../redux/users-reducer';

let UsersContainer = (props) => {
    return(
        <User isFollowingProcess={props.isFollowingProcess} id={props.id} photos={props.photos} name={props.name} status={props.status} followed={props.followed} unfollow={props.unfollow} follow={props.follow}/>
    )
}

const mapStateToProps = (state) => {
    return{
        isFollowingProcess: state.usersPage.isFollowingProcess
    }
}

export default connect(mapStateToProps, {toggleIsFollowingProcessAC, follow, unfollow})(UsersContainer);


