import { render } from '@testing-library/react';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { userAPI } from '../../api/api';



class Login extends React.Component{

    sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    onSubmit = (values) => {
        debugger;
        this.props.enterSite(values.login, values.password, values.rememberme)
        // console.log(values);
    
        // userAPI.enterSite(values.login, values.password, values.rememberme).then(response => {
        //     
        // });
        
    };
      
    render(){
        return(
            <div>
                <h1>Login</h1>
                <Form 
                onSubmit={this.onSubmit}
                // validate={validate}
                render={({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                    <div><Field placeholder={"Login"} name={"login"} component={"input"} id={"Login"}/></div>
                    <div><Field placeholder={"Password"} name={"password"} component={"input"}/></div>
                    <div>
                    <span>
                    <Field id={"rememberMeCheckbox"} type={"checkbox"} name={"rememberme"} component={"input"}/>
                    <label for={"rememberMeCheckbox"}>Remember me</label>
                    </span>
                    </div>
                    <div><button type="submit" disabled={submitting || pristine}>
                  Submit
                </button></div>
                </form>
    
    
                )}
                 />
            </div>
        )
    }
}

    

// const LoginForm = (props) => {
//     return(
            
//     )
// }

export default Login;