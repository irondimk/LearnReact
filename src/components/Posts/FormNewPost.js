import React from 'react';
import { Form, Field } from 'react-final-form';
import FormStateToRedux from '../../redux/FormStateToRedux';
import { maxCount, required, composeValidators } from '../../utils/validators';
import { createPersistDecorator } from "final-form-persist";
import classes from './Posts.module.css';


let FormNewPost = (props) => {

    let onSubmit = (value) => {
        props.sendMessage(value.textMessage);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, submitting, pristine, form }) => (
                <form
                     onSubmit={handleSubmit}  
                >
                    <FormStateToRedux form="message" />
                    <div>
                        <Field validate={composeValidators(required, maxCount(50))} name={"textMessage"} id={"textMessage"} >
                            {({ input, meta }) => (
                                <div>
                                    <textarea {...input} className={classes.newMessageBox} type="text" placeholder={"Your message"} />
                                </div>
                            )}

                        </Field>
                    </div>
                    <div>
                        <button className={classes.submitButton} onClick={()=> { handleSubmit(); form.reset();}} type="submit" disabled={submitting || pristine}>
                            Send
                        </button>
                    </div>
                </form>
            )}
        />
    )
}

export default FormNewPost;