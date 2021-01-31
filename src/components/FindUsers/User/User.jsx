import React from 'react';
import classes from './User.module.css';
import { NavLink } from 'react-router-dom';

let User = (props) => {
    let follow = (id) => {
        props.follow(id);
    }
    let unfollow = (id) => {
        props.unfollow(id);
    }
    return (
        <div className={classes.userInSearch}>
            <div>
                <NavLink to={'profile/' + props.id}>
                    <img src={props.avatarSrc} alt="" className={classes.avatar}/>
                </NavLink>
                {
                    props.followed ?  <a href="#" className={classes.unfollow} onClick={()=> {unfollow(props.id)}}>Unfollowed</a> : <a href="#" className={classes.follow} onClick={()=> {follow(props.id)}}>Followed</a>
                }
            </div>
            <div className={classes.aboutUser}>
                <div className={classes.top}>
                    <div>
                    {props.name}
                    </div>
                   
                    <div>
                    {/* {props.country} */}
                    </div>
                </div>
                <div className={classes.city}>
                {/* {props.city} */}
                </div>
                <div className={classes.status}>
                {props.status}
                </div>
            </div>
        </div>
    )
}

export default User;