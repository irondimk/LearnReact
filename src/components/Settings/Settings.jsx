import React, { useEffect, useState } from 'react';
import classes from './Settings.module.css'
import FormStateToRedux from './../../redux/FormStateToRedux';
import { Form, Field } from 'react-final-form';
import { composeValidators, maxCount, required } from '../../utils/validators';
const Settings = (props) => {

    let onSubmit = (values) => {
      let profile = {
        aboutMe: props.aboutMe,
        userId: props.userId,
        lookingForAJob: values.isNeedWork,
        lookingForAJobDescription: values.aboutMe,
        fullName: props.fullName,
        contacts: props.contacts
      }
      props.updateProfile(profile)
        console.log(values);
      };


    return(
        <div>
            <div className={classes.settingBlock}> 
            <h3 className={classes.tittle}>About work</h3>
            
            <Form
        onSubmit={onSubmit}
        initialValues={{ isNeedWork: props.lookingForAJob, lookingForAJobDescription: props.lookingForAJobDescription }}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form="example" />
            <div>
              <label>I am looking for a job </label>
              <Field
                name="isNeedWork"
                component="input"
                type="checkbox"
              />
            </div>
            <div>
              <label>What you need to know about me at job </label>
              <Field
                name="lookingForAJobDescription"
                component="textarea"
                type="text"
              />
            </div>

            
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>
            {/* <FormStateFromRedux form="example" /> */}
          </form>
        )}
      </Form>

            </div>



            <div className={classes.settingBlock}> 
                
            </div>
        </div>
        
    );
}




export default Settings;