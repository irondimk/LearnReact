import React from 'react';
import { Form, Field } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { composeValidators, maxCount, required } from '../../utils/validators';
import classes from './Login.module.css';


class Login extends React.Component {
    sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    onSubmit = (values) => {
        this.props.enterSite(values.login, values.password, values.rememberme, values.captcha);
    };

    render() {
        if (this.props.isAuth) {
            return <Redirect to={"/profile"} />
        }

        return (
            <div>
                <div>
                    <h2 className={classes.title}>Sign in</h2>
                    <Form
                        onSubmit={this.onSubmit}
                        render={({ handleSubmit, submitting, pristine }) => 
                        (
                            <form onSubmit={handleSubmit} className={classes.form}>
                                <div>
                                    <Field name={"login"} id={"Login"} validate={composeValidators(required, maxCount(30))} >
                                        {({ input, meta }) => (
                                            <div className={classes.inputDiv}>
                                                <label className={classes.inputLabel}>Email</label>
                                                <input {...input} className={classes.input} type="text" />
                                                {meta.error && meta.touched && <span className={classes.errorSpan}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <Field name={"password"} id={"password"} validate={composeValidators(required, maxCount(30))} >
                                    {({ input, meta }) => (
                                        <div className={classes.inputDiv}>
                                            <label className={classes.inputLabel}>Password</label>
                                            <input {...input} className={classes.input} type="password" />
                                            {meta.error && meta.touched && <span className={classes.errorSpan}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                {this.props.captcha && 
                                <Field name={"captcha"} id={"captcha"} >
                                    {({ input, meta }) => (
                                        <div className={classes.captchaDiv}>
                                            <img className={classes.captchaImg} src={this.props.captcha}/>
                                            <input {...input} className={classes.input} type="text" />
                                            {meta.error && meta.touched && <span className={classes.errorSpan}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                }
                                <div className={classes.inputDiv}>
                                    <span>
                                        <Field id={"rememberMeCheckbox"} type={"checkbox"} name={"rememberme"} component={"input"} />
                                        <label for={"rememberMeCheckbox"}>Remember me</label>
                                    </span>
                                </div>
                                {this.props.lastTryIsFalse && 
                                <div className={classes.errorDiv}>
                                    <span className={classes.errorAutorization}>
                                        Uncorrect login or password
                                    </span>
                                </div>}
                                <div>
                                    <button className={classes.submit} type="submit" disabled={submitting || pristine}>
                                    Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default Login;