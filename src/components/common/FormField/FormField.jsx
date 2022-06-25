import styles from './FormField.module.css';

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError && styles.error}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}