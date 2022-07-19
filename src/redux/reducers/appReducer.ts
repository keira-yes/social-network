import { getAuthData } from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

type InitialStateType = {
    isInitialized: boolean
}

const initialState: InitialStateType = {
   isInitialized: false
}

export const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, isInitialized: true }
        default:
            return state;
    }
}

type SetInitializedType = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = (): SetInitializedType => {
    return { type: SET_INITIALIZED }
}

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthData());
    dispatch(setInitialized());
}