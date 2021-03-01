import { render } from '@testing-library/react';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { userAPI } from '../../api/api';
import { composeValidators, maxCount, required } from '../../utils/validators';
import classes from './Login.module.css';


class Login extends React.Component {

    sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    onSubmit = (values) => {
        this.props.enterSite(values.login, values.password, values.rememberme);
    };

    render() {
        return (
            <div>
                <h2 className={classes.title}>Sign in</h2>

                <Form
               
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, submitting, pristine }) => (
                        <form onSubmit={handleSubmit}  className = {classes.form}>
                            <div>
                            <Field name={"login"} id={"Login"} validate={composeValidators(required, maxCount(30))} >
                            {({ input, meta }) => (
              <div className={classes.inputDiv}>
              <label className={classes.inputLabel}>Email</label>
                <input {...input} className = {classes.input} type="text" />
                {meta.error && meta.touched && <span className = {classes.errorSpan}>{meta.error}</span>}
              </div>
            )}
                            </Field>
                            </div>
                            <Field name={"password"} id={"password"} validate={composeValidators(required, maxCount(30))} >
                            {({ input, meta }) => (
              <div className={classes.inputDiv}>
              <label className={classes.inputLabel}>Password</label>
                <input {...input} className = {classes.input} type="password" />
                {meta.error && meta.touched && <span className = {classes.errorSpan}>{meta.error}</span>}
              </div>
            )}
                            </Field>
                            <div className={classes.inputDiv}>
                                <span>
                                    <Field id={"rememberMeCheckbox"} type={"checkbox"} name={"rememberme"} component={"input"} />
                                    <label for={"rememberMeCheckbox"}>Remember me</label>
                                </span>
                            </div>
                            <div><button className={classes.submit} type="submit" disabled={submitting || pristine}>
                                Submit
                </button></div>
                        </form>


                    )}
                />
            </div>
        )
    }
}

export default Login;