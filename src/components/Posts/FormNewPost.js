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

    const { persistDecorator, clear } = createPersistDecorator({
        name: "myPersistKey",
        debounceTime: 500,
        whitelist: ["textMessage"]
      });
      const initialValues = {
        name: "Hello"
      };

    return (
        <Form
                decorators={[persistDecorator]}
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
    )
}

export default FormNewPost;