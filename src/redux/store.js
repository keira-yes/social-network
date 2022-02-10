import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { postsReducer } from "./reducers/postsReducer";

const reducers = combineReducers({
    postsReducer,
    dialogsReducer
})

const store = createStore(reducers);

export default store;
