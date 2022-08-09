import { getAuthData } from "./authReducer";
import { ActionsType, DefaultThunkType } from "../store";

const initialState = {
   isInitialized: false
}

type InitialStateType = typeof initialState;
type ActionType = ActionsType<typeof appActions>;
type ThunkType = DefaultThunkType<ActionType>;

export const appReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return { ...state, isInitialized: true }
        default:
            return state;
    }
}

const appActions = {
    setInitialized: () => ({ type: 'SET_INITIALIZED' } as const)
}

export const initializeApp = (): ThunkType => async (dispatch) => {
    await dispatch(getAuthData());
    dispatch(appActions.setInitialized());
}
