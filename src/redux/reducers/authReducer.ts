import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/authAPI";
import { ActionsType, DefaultThunkType } from "../store";
import { ResultCode } from "../../types/types";

type AuthDataType = any;

const initialState = {
    authData: null as AuthDataType | null,
    isAuth: false,
    captcha: null as string | null
}

type InitialStateType = typeof initialState;
type ActionType = ActionsType<typeof authActions>;
type ThunkType = DefaultThunkType<ActionType>;

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return { ...state, authData: action.payload, isAuth: true }
        case 'RESET_AUTH_DATA':
            return { ...state, authData: null, isAuth: false }
        case 'SET_CAPTCHA':
            return { ...state, captcha: action.payload }
        default:
            return state;
    }
}

const authActions = {
    setAuthData: (payload: AuthDataType) => ({ type: 'SET_AUTH_DATA', payload } as const),
    resetAuthData: () => ({ type: 'RESET_AUTH_DATA' } as const),
    setCaptcha: (payload: string) => ({ type: 'SET_CAPTCHA', payload } as const)
}

export const getAuthData = () => async (dispatch: any) => {
    const data = await authAPI.getAuthData();
    if (data.resultCode === ResultCode.Success) {
        dispatch(authActions.setAuthData(data));
    }
    return data;
}

export const getCaptcha = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getCaptcha();
    dispatch(authActions.setCaptcha(data.url));
}

export const logIn = (email: string, password: string, rememberMe = false, captcha: string | null): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCode.Success) {
        dispatch(getAuthData());
    } else {
        if (data.resultCode === ResultCode.CaptchaIsRequired) {
            dispatch(getCaptcha());
        }
        const errorMessage = data.messages.length ? data.messages[0] : 'Something went wrong...';
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
}

export const logOut = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === ResultCode.Success) {
        dispatch(authActions.resetAuthData());
    }
}
