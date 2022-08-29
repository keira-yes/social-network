import React from 'react';
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import { LoginDataType } from "../../types/types";
import { logIn } from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCaptcha, selectIsAuth } from "../../redux/selectors/authSelector";

const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const captcha = useSelector(selectCaptcha);

    const dispatch = useDispatch();

    if (isAuth) return <Navigate to="/profile" />

    const submitForm = (formData: LoginDataType) => {
        const { login, password, rememberMe, captcha } = formData;
        dispatch<any>(logIn(login, password, rememberMe, captcha));
    }

    return <LoginForm onSubmit={submitForm} captcha={captcha} />
}

export default Login;
