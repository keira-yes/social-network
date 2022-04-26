import React from 'react';
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { Message } from './Message/Message';
import classes from './Messages.module.css';

export const Messages = ({ dialogsReducer, addMessage, updateMessage }) => {

    const onAddMessage = () => {
        addMessage();
    }

    const onUpdateMessage = (e) => {
        let messageContent = e.target.value;
        updateMessage(messageContent);
    }

    return (
        <div>
            <h1>Messages</h1>
            <div className={classes.columns}>
                <div className="blocks">
                    {dialogsReducer.dialogs.map(item => <MessagesBlock key={item.id} id={item.id} name={item.name} />)}
                </div>
                <div className="list">
                    {dialogsReducer.messages.map(item => <Message key={item.id} text={item.message} />)}
                    <div className="form">
                        <textarea value={dialogsReducer.newMessageText} onChange={onUpdateMessage} />
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
