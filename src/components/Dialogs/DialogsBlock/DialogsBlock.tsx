import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./DialogsBlock.module.css";

type PropsType = {
    id: number
    name: string
}

const DialogsBlock: React.FC<PropsType> = ({ id, name }) => {
    const path = `/messages/${id}`
    return (
        <div className={`${classes.block} ${classes.active}`}>
            <NavLink to={path}>{name}</NavLink>
            <p>Last message...</p>
        </div>
    )
}

export default DialogsBlock;
