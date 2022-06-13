import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { profileReducer } from "./reducers/profileReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";

const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer
})

const store = createStore(reducers);

export default store;
