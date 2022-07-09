import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./MessagesBlock.module.css";

const MessagesBlock = ({ id, name }) => {
    const path = `/messages/${id}`
    return (
        <div className={`${classes.block} ${classes.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default MessagesBlock;
