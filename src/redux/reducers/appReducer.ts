import { getAuthData } from "./authReducer";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

type InitialStateType = {
    isInitialized: boolean
}

const initialState: InitialStateType = {
   isInitialized: false
}

export const appReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, isInitialized: true }
        default:
            return state;
    }
}

type ActionType = SetInitializedType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionType>;

type SetInitializedType = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = (): SetInitializedType => {
    return { type: SET_INITIALIZED }
}

export const initializeApp = (): ThunkType => async (dispatch) => {
    await dispatch(getAuthData());
    dispatch(setInitialized());
}
