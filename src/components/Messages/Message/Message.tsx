import React from 'react';
import { MessageType } from "../../../types/types";

const Message: React.FC<MessageType> = ({ message, photo, userId, userName }) => {
    return (
        <div className="item">
            <img src={photo} alt={userName} />
            <h3>{userName}</h3>
            <div>{message}</div>
        </div>
    )
}

export default Message;
