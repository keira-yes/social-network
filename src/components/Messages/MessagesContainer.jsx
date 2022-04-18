import React from 'react';
import { Messages } from './Messages';
import { addMessageCreator, updateMessageCreator } from "../../redux/reducers/dialogsReducer";

export const MessagesContainer = ({ store }) => {
    const state = store.getState().dialogsReducer;

    const addMessage = () => {
        store.dispatch(addMessageCreator());
    }

    const updateMessage = (text) => {
        store.dispatch(updateMessageCreator(text));
    }

    return (
        <Messages
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            addMessage={addMessage}
            updateMessage={updateMessage}
        />
    )
}
