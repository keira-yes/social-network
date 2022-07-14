import React from 'react';
import { connect } from "react-redux";
import Login from "./Login";
import { logIn } from "../../redux/reducers/authReducer";

const LoginContainer = ({ isAuth, logIn, captcha }) => {
    const submitForm = formData => {
        logIn(formData.login, formData.password, formData.rememberMe);
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