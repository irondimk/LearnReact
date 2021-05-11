import React, { useEffect, useState } from 'react';
import classes from './Settings.module.css'
import FormStateToRedux from './../../redux/FormStateToRedux';
import { Form, Field } from 'react-final-form';
import { composeValidators, maxCount, required, socialNetworkLink } from '../../utils/validators';
import Preloader from '../Preloader/Preloader';
import TemplateFieldInput from './TemplateFieldInput';
const Settings = (props) => {
  debugger;
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


  return (
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
              <TemplateFieldInput name="aboutMe" 
              description="Tell me about yourself short" 
              valid={composeValidators(maxCount(10))} />

              <div className="buttons">
                <button type="submit" disabled={submitting || pristine} className={classes.submitButton}>
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
              <div className={classes.checkboxLookingJob}>
                <label class={classes.label}>I am looking for a job </label>
                <Field
                  name="isNeedWork"
                  component="input"
                  type="checkbox"
                />
              </div>
              <div>

                <Field
                  name="lookingForAJobDescription"
                  component="input"
                  type="text"
                  validate={maxCount(90)}
                >
                  {({ input, meta }) => (
                    <div>
                      <label class={classes.label}>What you need to know about me at job </label>
                      <div className={classes.inputBlock}>
                      <textarea {...input} className={classes.textArea} placeholder="" />
                      {meta.error && meta.touched && <span className={classes.validError}>{meta.error}</span>}
                    
                      </div>
                      </div>
                  )}
                </Field>
              </div>

              <div className="buttons">
                <button type="submit" disabled={submitting || pristine} className={classes.submitButton}>
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
              <TemplateFieldInput name="facebook" description="Facebook profile" valid={composeValidators(socialNetworkLink)} />
              <TemplateFieldInput name="website" description="Website" valid={composeValidators(socialNetworkLink)}/>
              <TemplateFieldInput name="vk" description="VK profile"valid={composeValidators(socialNetworkLink)} />
              <TemplateFieldInput name="twitter" description="Twitter profile" valid={composeValidators(socialNetworkLink)}/>
              <TemplateFieldInput name="instagram" description="Instagram profile" valid={composeValidators(socialNetworkLink)} />
              <TemplateFieldInput name="youtube" description="Youtube profile" valid={composeValidators(socialNetworkLink)}/>
              <TemplateFieldInput name="github" description="Github profile" valid={composeValidators(socialNetworkLink)}/>
              <TemplateFieldInput name="mainLink" description="Mail" valid={composeValidators(socialNetworkLink)}/>

              <div className="buttons">
                <button type="submit" disabled={submitting || pristine} className={classes.submitButton}>
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