import { Form, Field } from 'react-final-form';
import React from 'react';
import { composeValidators, maxCount, required, socialNetworkLink} from '../../utils/validators';
import classes from './Settings.module.css'
let TemplateFieldInput = (props) => {
  debugger;
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
                <input {...input} className = {classes.input} type="textarea" placeholder="" /> 
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
              </Field>
              )
}

export default TemplateFieldInput;