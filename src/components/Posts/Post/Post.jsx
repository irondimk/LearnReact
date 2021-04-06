import React from 'react';
import classes from './Post.module.css';
import closeImg from './../../../assets/images/posts/close.png';

let Post = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.user_send}>
                <div className={classes.user_send_pic}>
                    <img className={classes.user_send_pic_img} src={props.src} alt="" />
                </div>
                <div className={classes.user_send_name}>
                    {props.username}
                </div>
            </div>
            <div className={classes.user_message}>
                {props.message}
                <img onClick={()=>props.remove(props.id)} className={classes.closeImg} src={closeImg}/>
            </div>
        </div>
    )
}

export default Post;