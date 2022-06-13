const SET_AUTH_DATA = 'SET_AUTH_DATA';

const initialState = {
    authData: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return { ...state, authData: action.payload, isAuth: true }
        default:
            return state;
    }
}

export const setAuthData = (payload) => {
    return { type: SET_AUTH_DATA, payload }
}