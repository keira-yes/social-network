import { Field, reduxForm } from 'redux-form';
import { Input } from "../../hoc/FormField/FormField";
import { maxLength, required } from "../../../utils/validators";

const maxLength16 = maxLength(16);

const LoginForm = ({ handleSubmit }) => {
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
                    type="text"
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
            <button type="submit">Login</button>
        </form>
    )
}

export default reduxForm({ form: 'login' })(LoginForm);