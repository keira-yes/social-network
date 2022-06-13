import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

export const Header = ({ isAuth, authData }) => {
    return (
        <header className={classes.header}>
            <NavLink to="/">Logo</NavLink>
            {isAuth ? <strong>{authData.data.login}</strong> : <NavLink to="/login">Login</NavLink>}
        </header>
    )
}
