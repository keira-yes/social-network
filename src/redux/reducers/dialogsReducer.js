const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

export const updateNewMessageTextActionCreator = (payload) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, payload }
}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
}

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload;
            return state;
        case ADD_MESSAGE:
            const messages = state.messages;
            const id = messages.length + 1;
            const newMessage = {
                id,
                message: state.newMessageText,
            }
            messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}
