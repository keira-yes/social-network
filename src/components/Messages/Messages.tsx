import React from 'react';
import {useParams} from "react-router-dom";

const Messages = () => {
    const params = useParams();

    return (
        <div>
            <h1>Chat with {params.id}</h1>
        </div>
    )
}

export default Messages;
