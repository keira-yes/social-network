import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/authAPI";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const RESET_AUTH_DATA = 'auth/RESET_AUTH_DATA';

const initialState = {
    authData: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, authData: action.payload, isAuth: true }
        case RESET_AUTH_DATA:
            return { ...state, authData: null, isAuth: false }
        default:
            return state;
    }
}

export const setAuthData = (payload) => {
    return { type: SET_AUTH_DATA, payload }
}

export const resetAuthData = () => {
    return { type: RESET_AUTH_DATA }
}

export const getAuthData = () => async dispatch => {
    const data = await authAPI.getAuthData();
    if (data.resultCode === 0) {
        dispatch(setAuthData(data));
    }
    return data;
}

export const logIn = (email, password, rememberMe = false) => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthData());
    } else {
        const errorMessage = data.messages.length ? data.messages[0] : 'Something went wrong...';
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
}

export const logOut = () => async dispatch => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(resetAuthData());
    }
}