import { getAuthData } from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

const initialState = {
   isInitialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, isInitialized: true }
        default:
            return state;
    }
}

export const setInitialized = () => {
    return { type: SET_INITIALIZED }
}

export const initializeApp = () => async dispatch => {
    await dispatch(getAuthData());
    dispatch(setInitialized());
}