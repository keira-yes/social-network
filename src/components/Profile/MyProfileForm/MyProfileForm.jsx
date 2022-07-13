import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../hoc/FormField/FormField";
import styles from "../../hoc/FormField/FormField.module.css";

const MyProfileForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full name</label>
                <Field
                    id="fullName"
                    name="fullName"
                    component={Input}
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="aboutMe">About me</label>
                <Field
                    id="aboutMe"
                    name="aboutMe"
                    component={Textarea}
                />
            </div>
            <div>
                <Field
                    id="lookingForAJob"
                    name="lookingForAJob"
                    component={Input}
                    type="checkbox"
                />
                <label htmlFor="lookingForAJob">Looking for a job</label>
            </div>
            <div>
                <label htmlFor="lookingForAJobDescription">Job description</label>
                <Field
                    id="lookingForAJobDescription"
                    name="lookingForAJobDescription"
                    component={Textarea}
                />
            </div>
            {error && <div className={styles.errorWindow}>{error}</div>}
            <button type="submit">Save</button>
        </form>
    )
}

export default reduxForm({ form: 'profile' })(MyProfileForm);