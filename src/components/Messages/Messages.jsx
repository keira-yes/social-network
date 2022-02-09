import React from 'react';
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/state";
import classes from './Messages.module.css';
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { Message } from './Message/Message';

export const Messages = ({ dialogs, messages, newMessageText, dispatch }) => {

    const addMessage = () => {
        dispatch(addMessageActionCreator());
    }

    const handleTextarea = (e) => {
        let messageContent = e.target.value;
        dispatch(updateNewMessageTextActionCreator(messageContent));
    }

    return (
        <div>
            <h1>Messages</h1>
            <div className={classes.columns}>
                <div className="blocks">
                    {dialogs.map(item => <MessagesBlock key={item.id} id={item.id} name={item.name} />)}
                </div>
                <div className="list">
                    {messages.map(item => <Message key={item.id} text={item.message} />)}
                    <div className="form">
                        <textarea value={newMessageText} onChange={handleTextarea} />
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
