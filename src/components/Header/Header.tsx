import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData, selectIsAuth } from "../../redux/selectors/authSelector";
import { logOut } from "../../redux/reducers/authReducer";

const Header = () => {
    const isAuth = useSelector(selectIsAuth);
    const authData = useSelector(selectAuthData);

    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch<any>(logOut());
    }

    return (
        <header className={classes.header}>
            <NavLink to="/">Logo</NavLink>
            {isAuth ?
                <div>
                    <strong>{authData.data.login}</strong>
                    <button type="button" onClick={onLogOut}>Logout</button>
                </div> :
                <NavLink to="/login">Login</NavLink>}
        </header>
    )
}

export default Header;
