import { authAPI } from "../../api/authAPI";
import { stopSubmit } from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const RESET_AUTH_DATA = 'RESET_AUTH_DATA';

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

export const getAuthData = () => dispatch => {
    authAPI.getAuthData().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(data));
        }
    });
}

export const logIn = (email, password, rememberMe = false) => dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthData());
        } else {
            const errorMessage = data.messages.length ? data.messages[0] : 'Something went wrong...';
            dispatch(stopSubmit("login", {_error: errorMessage}));
        }
    });
}

export const logOut = () => dispatch => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(resetAuthData());
        }
    });
}