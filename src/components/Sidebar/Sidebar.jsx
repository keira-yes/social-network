import classes from './Sidebar.module.css';
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink
                            to="/profile"
                            className={ ({ isActive }) => isActive ? classes.active : ""}>Profile</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/messages"
                            className={({ isActive }) => isActive ? classes.active : ""}>Messages</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/users"
                            className={({ isActive }) => isActive ? classes.active : ""}>Users</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/news" className="nav__link">News</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/music" className="nav__link">Music</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/settings" className="nav__link">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
