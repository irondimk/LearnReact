import React from 'react';
import classes from './Messages.module.css';
import { Form, Field } from 'react-final-form';
import { editTextNewMessageActionCreate, SendMessageActionCreate } from './../../../redux/dialogs-reducer';
import FormStateToRedux from './../../../redux/FormStateToRedux';
import { maxCount, required, composeValidators } from '../../../utils/validators';

let MessageDialog = (props) => {
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
            </div>
        </div>
    )
}



const Messages = (props) => {

    let DialogMessages = props.MessagesData.map((elem) => {
        return (
            <MessageDialog src={elem.src} username={elem.username} message={elem.message} />
        )
    })
    let newMessageElement = React.createRef();

    let editNewMessageText = () => {
        props.updateTextNewMessage(newMessageElement.current.value);
        // props.dispatch(editTextNewMessageActionCreate(newMessageElement.current.value));
    }
    let sendMessage = () => {
        props.sendMessage();
        // props.dispatch(SendMessageActionCreate())
    }
    let onSubmit = (value) => {
        props.sendMessage(value.textMessage);
    };

    return (
        <div>
            <div className={classes.content}>
                {DialogMessages}

                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, submitting, pristine, reset, form }) => (
                        <form
                            onSubmit={handleSubmit}   
                        >
                        <FormStateToRedux form="message" />
                            <div>
                            <Field validate={composeValidators(required, maxCount(50))}  name={"textMessage"} id={"textMessage"} >
                            {({ input, meta }) => (
                                <div>
                                    <textarea {...input} className={(meta.error && meta.touched) ? classes.newMessageBoxError : classes.newMessageBox} type="text" placeholder={"Your message"} />
                                    {meta.error && meta.touched && <span className={classes.spanError}>{meta.error}</span>}
                                </div>
                                )}
                            
                            </Field>
                            </div><div><button className={classes.sendMessage} type="submit" disabled={submitting || pristine}>
                                    Send
                </button>

                                
                            </div>
                        </form>


                    )}
                />

                {/* <textarea ref={newMessageElement} onChange={editNewMessageText} className={classes.newMessageBox} value={props.newMessageText} name="" id="" cols="30" rows="10"></textarea>
                <a onClick={sendMessage} className={classes.sendMessage} >Отправить</a> */}
            </div>
        </div>
    );
}


export default Messages;