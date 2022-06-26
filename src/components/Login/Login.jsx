import LoginForm from './LoginForm/LoginForm';
import {Navigate} from "react-router-dom";

export const Login = ({ isAuth, submitForm }) => {
    if (isAuth) return <Navigate to="/profile" />

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={submitForm} />
        </div>
    )
}