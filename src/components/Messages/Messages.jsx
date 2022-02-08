import React from 'react';
import classes from './Messages.module.css';
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { Message } from './Message/Message';

export const Messages = ({ dialogs, messages }) => {
    const newMessage = React.createRef();

    const addMessage = () => {
        const messageContent = newMessage.current.value;
        console.log(messageContent);
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
                        <textarea ref={newMessage} name="message" id="message" cols="30" rows="5"></textarea>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
