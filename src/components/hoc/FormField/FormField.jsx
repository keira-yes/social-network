import React from 'react';
import styles from "./FormField.module.css";

const FormField = Component => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? styles.error : ""}>
            <Component {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = FormField('textarea');
export const Input = FormField('input');