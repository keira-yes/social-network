import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { postsReducer } from "./reducers/postsReducer";
import { usersReducer } from "./reducers/usersReducer";

const reducers = combineReducers({
    postsReducer,
    dialogsReducer,
    usersReducer
})

const store = createStore(reducers);

export default store;
