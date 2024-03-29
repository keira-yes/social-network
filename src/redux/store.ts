import { combineReducers, createStore, applyMiddleware, compose, Action } from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import { reducer as form } from "redux-form";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { profileReducer } from "./reducers/profileReducer/profileReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";
import { appReducer } from "./reducers/appReducer";

const RootReducer = combineReducers({
    form,
    appReducer,
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer
});

type RootReducerType = typeof RootReducer; // (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export type ActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

export type DefaultThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, any, A>;

// @ts-ignore
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
const store = createStore(RootReducer, enhancer);

export default store;
