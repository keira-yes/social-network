import { Field, reduxForm } from 'redux-form';

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login">Login</label>
                <Field name="login" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="rememberMe">Remember me</label>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default reduxForm({ form: 'login' })(LoginForm);