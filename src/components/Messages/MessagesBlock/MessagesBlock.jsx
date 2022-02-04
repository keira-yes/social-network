import classes from './MessagesBlock.module.css';
import { NavLink } from "react-router-dom";

export const MessagesBlock = ({ id, name }) => {
    const path = `/messages/${id}`
    return (
        <div className={`${classes.block} ${classes.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}
