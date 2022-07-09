import React from 'react';
import MessagesBlock from "./MessagesBlock/MessagesBlock";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";
import classes from "./Messages.module.css";

const Messages = ({ dialogs, messages, addMessage }) => {

    const addNewMessage = data => {
        addMessage(data.message);
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
                    <MessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Messages;
