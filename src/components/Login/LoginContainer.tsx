import React from 'react';
import { connect } from "react-redux";
import Login from "./Login";
import { logIn } from "../../redux/reducers/authReducer";
import { AppStateType } from "../../redux/store";
import { LoginDataType } from "../../types/types";

type MapStatePropsType = {
    isAuth: boolean
    captcha: string | null
}

type MapDispatchPropsType = {
    logIn: (login: string, password: string, rememberMe: boolean | undefined, captcha: string | null) => void
}

const LoginContainer: React.FC<MapStatePropsType & MapDispatchPropsType> = ({ isAuth, captcha , logIn}) => {
    const submitForm = (formData: LoginDataType) => {
        const { login, password, rememberMe, captcha } = formData;
        logIn(login, password, rememberMe, captcha);
    }
    return <Login isAuth={isAuth} submitForm={submitForm} captcha={captcha} />
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        captcha: state.authReducer.captcha
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { logIn })(LoginContainer);
