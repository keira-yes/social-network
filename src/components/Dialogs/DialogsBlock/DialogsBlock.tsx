import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./DialogsBlock.module.css";
import { MessageType } from "../../../types/types";

type PropsType = {
    dialog: MessageType
}

const DialogsBlock: React.FC<PropsType> = ({ dialog }) => {
    const path = `/messages/${dialog.userId}`
    return (
        <div className={`${classes.block} ${classes.active}`}>
            <NavLink to={path}>{dialog.userName}</NavLink>
            <p>Last message...</p>
        </div>
    )
}

export default DialogsBlock;
