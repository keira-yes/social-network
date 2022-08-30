import React, { useEffect, useState } from 'react';
import DialogsBlock from "./DialogsBlock/DialogsBlock";
import { useSelector } from "react-redux";
import { selectDialogs } from "../../redux/selectors/dialogsSelector";
import {MessageType} from "../../types/types";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const Dialogs = () => {
    // const dialogs = useSelector(selectDialogs);
    const [dialogs, setDialogs] = useState<MessageType[]>([]);

    useEffect(() => {
        ws.addEventListener('message', e => {
            const newDialogs = JSON.parse(e.data);
            setDialogs(prevDialogs => [...prevDialogs, ...newDialogs]);
        });
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            <div>
                {dialogs
                    .filter((item, index, self) => self.findIndex(child => (child.userId === item.userId)) === index)
                    .map((dialog, index) => <DialogsBlock key={index} dialog={dialog} />)
                }
            </div>
        </div>
    )
}

export default Dialogs;
