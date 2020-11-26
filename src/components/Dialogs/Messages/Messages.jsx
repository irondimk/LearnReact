import React from 'react';
import classes from './Messages.module.css';

let MessageDialog = (props) =>{
    return (
        <div className={classes.message}>
                    <div className={classes.user_send}>
                    <div className={classes.user_send_pic}>
                            <img className={classes.user_send_pic_img} src={props.src} alt=""/>
                        </div>
                        <div className={classes.user_send_name}>
                            {props.username}
                        </div>
                    </div>
                    <div className={classes.user_message}>
                    {props.message}
                    </div>
                </div>
    )
}


const Messages = () => {
    return (
        <div>       
           <div className={classes.content}>
           <MessageDialog src="https://hostinpl.ru/templates/hos7ru/dleimages/noavatar.png" username="Me" 
           message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae."/>

<MessageDialog src="https://yt3.ggpht.com/a/AATXAJz5nJXMNqg5InMP61nXvPohz_LHXsDQXr8pS7pv=s900-c-k-c0xffffffff-no-rj-mo" username="Iron" 
           message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae"/>   
           </div>
       </div>
        
    );
}

export default Messages;