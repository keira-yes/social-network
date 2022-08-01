import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/authAPI";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const RESET_AUTH_DATA = 'auth/RESET_AUTH_DATA';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

type AuthDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type InitialStateType = {
    authData: AuthDataType | null
    isAuth: boolean
    captcha: string | null
}

const initialState: InitialStateType = {
    authData: null,
    isAuth: false,
    captcha: null
}

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, authData: action.payload, isAuth: true }
        case RESET_AUTH_DATA:
            return { ...state, authData: null, isAuth: false }
        case SET_CAPTCHA:
            return { ...state, captcha: action.payload }
        default:
            return state;
    }
}

type ActionType = SetAuthDataType | ResetAuthDataType | SetCaptchaType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionType>;

type SetAuthDataType = {
    type: typeof SET_AUTH_DATA
    payload: AuthDataType
}

export const setAuthData = (payload: AuthDataType): SetAuthDataType => {
    return { type: SET_AUTH_DATA, payload }
}

type ResetAuthDataType = {
    type: typeof RESET_AUTH_DATA
}

export const resetAuthData = (): ResetAuthDataType => {
    return { type: RESET_AUTH_DATA }
}

export const getAuthData = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getAuthData();
    if (data.resultCode === 0) {
        dispatch(setAuthData(data));
    }
    return data;
}

type SetCaptchaType = {
    type: typeof SET_CAPTCHA
    payload: string
}

export const setCaptcha = (payload: string): SetCaptchaType => {
    return { type: SET_CAPTCHA, payload }
}

export const getCaptcha = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getCaptcha();
    dispatch(setCaptcha(data.url));
}

export const logIn = (email: string, password: string, rememberMe = false, captcha: string): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthData());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        const errorMessage = data.messages.length ? data.messages[0] : 'Something went wrong...';
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
}

export const logOut = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(resetAuthData());
    }
}
