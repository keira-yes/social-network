import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { profileReducer } from "./reducers/profileReducer";
import { usersReducer } from "./reducers/usersReducer";

const reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer
})

const store = createStore(reducers);

export default store;
