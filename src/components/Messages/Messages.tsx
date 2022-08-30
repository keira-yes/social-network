import React from 'react';
import { useParams } from "react-router-dom";
import Message from './Message/Message';

const Messages = () => {
    const params = useParams();

    return (
        <div>
            <h1>Chat with {params.id}</h1>
            <Message />
        </div>
    )
}

export default Messages;
