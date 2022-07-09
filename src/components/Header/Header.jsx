import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = ({ isAuth, authData, logOut }) => {
    return (
        <header className={classes.header}>
            <NavLink to="/">Logo</NavLink>
            {isAuth ?
                <div>
                    <strong>{authData.data.login}</strong>
                    <button type="button" onClick={logOut}>Logout</button>
                </div> :
                <NavLink to="/login">Login</NavLink>}
        </header>
    )
}

export default Header;
