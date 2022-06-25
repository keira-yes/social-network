import LoginForm from './LoginForm/LoginForm';

export const Login = () => {
    const submitForm = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={submitForm} />
        </div>
    )
}