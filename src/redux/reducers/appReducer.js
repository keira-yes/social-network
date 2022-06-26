import { getAuthData } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

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

export const initializeApp = () => dispatch => {
    dispatch(getAuthData()).then(() => {
        dispatch(setInitialized());
    })
}