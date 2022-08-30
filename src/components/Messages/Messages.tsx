import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Message from './Message/Message';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const Messages = () => {
    const params = useParams();
    const [message, setMessage] = useState('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        ws.addEventListener('open', () => {
            setReadyStatus('ready');
        })
    }, []);

    const handleSendMessage = () => {
        if (!message.length) return;
        ws.send(message);
        setMessage('');
    }

    return (
        <div>
            <h1>Chat with {params.id}</h1>
            <Message />
            <div>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message}/>
                <button disabled={readyStatus !== 'ready'} onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages;
