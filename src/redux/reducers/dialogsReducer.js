const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
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

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE:
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

export const updateMessageCreator = (payload) => {
    return { type: UPDATE_MESSAGE, payload }
}

export const addMessageCreator = () => {
    return { type: ADD_MESSAGE };
}
