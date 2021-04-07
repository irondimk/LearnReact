import { Form, Field } from 'react-final-form';
import React from 'react';
import { composeValidators, maxCount, required, socialNetworkLink} from '../../utils/validators';
import classes from './Settings.module.css'
let TemplateFieldInput = (props) => {
    return(
    <Field            
                className = {classes.input}
                name={props.name}
                component="input"
                type="textarea"
                validate={props.valid}
              >
            {({ input, meta }) => (
              <div className={classes.inputForm}>
                <label class={classes.label}>{props.description}</label>
                <div className={classes.inputBlock}>
                <input {...input} className = {classes.input} type="textarea" placeholder="" /> 
                {meta.error && meta.touched && <span className={classes.validError}>{meta.error}</span>}
                </div>
                
              </div>
            )}
              </Field>
              )
}

export default TemplateFieldInput;