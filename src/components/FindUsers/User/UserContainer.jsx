import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import {toggleIsFollowingProcessAC, follow, unfollow} from './../../../redux/users-reducer';

let UsersContainer = (props) => {
    


    return(
        <User isFollowingProcess={props.isFollowingProcess} id={props.id} photos={props.photos} name={props.name} status={props.status} followed={props.followed} unfollow={props.unfollow} follow={props.follow} avatarSrc={'https://im0-tub-ru.yandex.net/i?id=0ea34b256aa4cadbdf4631f375db89c7&n=13&exp=1'}/>
    )
}

const mapStateToProps = (state) => {
    return{
        isFollowingProcess: state.usersPage.isFollowingProcess
    }
}

export default connect(mapStateToProps, {toggleIsFollowingProcessAC, follow})(UsersContainer);

// export default UsersContainer;

