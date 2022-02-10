import { postsReducer } from "./reducers/postsReducer";
import { dialogsReducer } from "./reducers/dialogsReducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello World!", likes: 5},
                {id: 2, message: "My first post...", likes: 12}
            ],
            newPostText: 'Enter post'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Name 1"},
                {id: 2, name: "Name 2"},
                {id: 3, name: "Name 3"},
                {id: 4, name: "Name 4"},
                {id: 5, name: "Name 5"},
                {id: 6, name: "Name 6"}
            ],
            messages: [
                {id: 1, message: "Hi world"},
                {id: 2, message: "How are you doing"},
                {id: 3, message: "Miss you"}
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log('rerender');
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {

        this._state.profilePage = postsReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscribe(this._state);
    }
}

export default store;
