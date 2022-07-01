import { Field, reduxForm } from "redux-form";
import { Input } from "../../hoc/FormField/FormField";
import { maxLength, required } from "../../../utils/validators";
import styles from "../../hoc/FormField/FormField.module.css";

const maxLength16 = maxLength(16);

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login">Login</label>
                <Field
                    name="login"
                    component={Input}
                    type="text"
                    validate={required}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field
                    name="password"
                    component={Input}
                    type="password"
                    validate={[required, maxLength16]}
                />
            </div>
            <div>
                <Field
                    name="rememberMe"
                    component="input"
                    type="checkbox"
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            {error && <div className={styles.errorWindow}>{error}</div>}
            <button type="submit">Login</button>
        </form>
    )
}

export default reduxForm({ form: 'login' })(LoginForm);