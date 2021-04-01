import React, { useEffect, useState } from 'react';
import classes from './Settings.module.css'
import FormStateToRedux from './../../redux/FormStateToRedux';
import { Form, Field } from 'react-final-form';
import { composeValidators, maxCount, required } from '../../utils/validators';
import Preloader from '../Preloader/Preloader';
const Settings = (props) => {

    let onSubmit = (values) => {
      let profile = {
        aboutMe: props.aboutMe,
        userId: props.userId,
        lookingForAJob: values.isNeedWork,
        lookingForAJobDescription: values.lookingForAJobDescription,
        fullName: props.fullName,
        contacts: props.contacts
        }
        props.updateProfile(profile);
      }

      let onSubmitSocialNetworks = (values) => {
        let profile = {
          aboutMe: props.aboutMe,
          userId: props.userId,
          lookingForAJob: props.lookingForAJob,
          lookingForAJobDescription: props.lookingForAJobDescription,
          fullName: props.fullName,
          contacts: values
          }
          props.updateProfile(profile);
      }

      let onSubmitAboutMe = (values) => {
        let profile = {
          aboutMe: values.aboutMe,
          userId: props.userId,
          lookingForAJob: props.lookingForAJob,
          lookingForAJobDescription: props.lookingForAJobDescription,
          fullName: props.fullName,
          contacts: props.contacts
          }
          props.updateProfile(profile);
      }

    return(
        <div>


<div className={classes.settingBlock}> 
            <h3 className={classes.tittle}>About me</h3>
            
            <Form
        onSubmit={onSubmitAboutMe}
        initialValues={{ aboutMe: props.aboutMe }}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form="example" />
            <div>
              <label class={classes.label}>Tell me about yourself  </label>
              <Field            
                className = {classes.input}
                name="aboutMe"
                component="input"
                type="textarea"
              />
            </div>

            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Form>

            </div>





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
              <label class={classes.label}>I am looking for a job </label>
              <Field
                name="isNeedWork"
                component="input"
                type="checkbox"
              />
            </div>
            <div>
              <label class={classes.label}>What you need to know about me at job </label>
              <Field
              className={classes.textArea}
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
          </form>
        )}
      </Form>

            </div>



<div className={classes.settingBlock}> 
            <h3 className={classes.tittle}>Social networks</h3>
            
            <Form
        onSubmit={onSubmitSocialNetworks}
        initialValues={{ 
          facebook: props.facebook,
          website: props.website,
          vk: props.vk,
          twitter: props.twitter,
          instagram: props.instagram,
          youtube: props.youtube,
          github: props.github,
          mainLink: props.mainLink
         }}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form="example" />

            <div className = {classes.inputForm}>
              <label className={classes.label}>Facebook profile </label>
              <Field
               className = {classes.input}
                name="facebook"
                component="input"
                type="textarea"
              />
            </div>

            <div className = {classes.inputForm}>
              <label className={classes.label}>Website  </label>
              <Field
              className = {classes.input}
                name="website"
                component="input"
                type="textarea"
              />
            </div>

            <div className = {classes.inputForm}>
              <label className={classes.label}>VK profile  </label>
              <Field
              className = {classes.input}
                name="vk"
                component="input"
                type="textarea"
              />
            </div>

            <div className = {classes.inputForm}>
              <label className={classes.label}>Twitter profile  </label>
              <Field
              className = {classes.input}
                name="twitter"
                component="input"
                type="textarea"
              />
            </div>

            <div className = {classes.inputForm}>
              <label className={classes.label}>Instagram profile  </label>
              <Field
              className = {classes.input}
                name="instagram"
                component="input"
                type="textarea"
              />
            </div>

            <div className = {classes.inputForm}>
              <label className={classes.label}>Youtube profile  </label>
              <Field
              className = {classes.input}
                name="youtube"
                component="input"
                type="textarea"
              />
            </div>

            <div className = {classes.inputForm}>
              <label className={classes.label}>Github profile  </label>
              <Field
              className = {classes.input}
                name="github"
                component="input"
                type="textarea"
              />
            </div>

            <div className = {classes.inputForm}>
              <label className={classes.label}>Mail  </label>
              <Field
              className = {classes.input}
                name="mainLink"
                component="input"
                type="textarea"
              />
            </div>

            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Form>

            </div>

          
        </div>
        
    );
}




export default Settings;