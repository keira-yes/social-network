import React from 'react';
import { Navigate } from "react-router-dom";
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { Message } from './Message/Message';
import classes from './Messages.module.css';

export const Messages = ({ isAuth, dialogs, messages, newMessageText, addMessage, updateMessage }) => {

    const onUpdateMessage = (e) => {
        let messageContent = e.target.value;
        updateMessage(messageContent);
    }

    if (!isAuth) return <Navigate to="/login" />

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
                        <textarea value={newMessageText} onChange={onUpdateMessage} />
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
