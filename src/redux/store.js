import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { dialogsReducer } from "./reducers/dialogsReducer";
import { profileReducer } from "./reducers/profileReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";
import { appReducer } from "./reducers/appReducer";

const reducers = combineReducers({
    form,
    appReducer,
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
