import React from 'react';
import { connect } from "react-redux";
import Login from "./Login";
import { logIn } from "../../redux/reducers/authReducer";

const LoginContainer = ({ isAuth, logIn, captcha }) => {
    const submitForm = formData => {
        const { login, password, rememberMe, captcha } = formData;
        logIn(login, password, rememberMe, captcha);
    }
    return <Login isAuth={isAuth} submitForm={submitForm} captcha={captcha} />
}

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth,
        captcha: state.authReducer.captcha
    }
}

export default connect(mapStateToProps, { logIn })(LoginContainer);