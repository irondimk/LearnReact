import React, {useState} from 'react';
import classes from './Post.module.css';
import closeImg from './../../../assets/images/posts/close.png';

let Post = (props) => {
    let [isShowPromptClose, setIsShowPromptClose] = useState(false);

    let showPromptClose = () => {
        setIsShowPromptClose(!isShowPromptClose);
    }

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
                <div className={classes.deleteBlock}>
                    <img onClick={()=>props.remove(props.id)} onMouseOver={showPromptClose} onMouseOut={showPromptClose} className={classes.closeImg} src={closeImg}/>
                    {isShowPromptClose && 
                    <div className={classes.prompt}>Delete post</div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Post;