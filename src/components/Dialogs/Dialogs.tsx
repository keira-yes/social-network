import React from 'react';
import DialogsBlock from "./DialogsBlock/DialogsBlock";
import { useSelector } from "react-redux";
import { selectDialogs } from "../../redux/selectors/dialogsSelector";

const Dialogs = () => {
    const dialogs = useSelector(selectDialogs);

    return (
        <div>
            <h1>Messages</h1>
            <div>
                {dialogs.map(item => <DialogsBlock key={item.id} id={item.id} name={item.name} />)}
            </div>
        </div>
    )
}

export default Dialogs;
