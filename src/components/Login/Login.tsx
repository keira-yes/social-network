import React from 'react';
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";

type PropsType = {
    isAuth: boolean
    submitForm: any
    captcha: string | null
}

const Login: React.FC<PropsType> = ({ isAuth, submitForm, captcha }) => {
    if (isAuth) return <Navigate to="/profile" />

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={submitForm} captcha={captcha} />
        </div>
    )
}

export default Login;
