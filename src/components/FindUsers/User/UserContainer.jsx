import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import User from './User';
import {userAPI} from './../../../api/api';
import {toggleIsFollowingProcessAC} from './../../../redux/users-reducer';

let UsersContainer = (props) => {
    
    
    let follow = (id) => {
        props.toggleIsFollowingProcessAC(true);
        userAPI.follow(id).then(response => {
            if(response.resultCode == 0){
                props.follow(props.id);
            }
            props.toggleIsFollowingProcessAC(false);
        });
    }

    let unfollow = (id) => {
        props.toggleIsFollowingProcessAC(true);
        userAPI.unfollow(id).then(response => {
            if(response.resultCode == 0){
                props.unfollow(props.id);
            }
            props.toggleIsFollowingProcessAC(false);
        });
    }

    return(
        <User isFollowingProcess={props.isFollowingProcess} id={props.id} photos={props.photos} name={props.name} status={props.status} followed={props.followed} unfollow={unfollow} follow={follow} avatarSrc={'https://im0-tub-ru.yandex.net/i?id=0ea34b256aa4cadbdf4631f375db89c7&n=13&exp=1'}/>
    )
}

const mapStateToProps = (state) => {
    return{
        isFollowingProcess: state.usersPage.isFollowingProcess
    }
}

export default connect(mapStateToProps, {toggleIsFollowingProcessAC})(UsersContainer);

// export default UsersContainer;

