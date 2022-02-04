import classes from './Messages.module.css';
import {NavLink} from "react-router-dom";

export const Messages = () => {
    return (
        <div>
            <h1>Messages</h1>
            <div className={classes.columns}>
                <div className="dialogs">
                    <div className={`${classes.dialog} ${classes.active}`}>
                        <NavLink to="/messages/1">Name 1</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/messages/2">Name 2</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/messages/3">Name 3</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/messages/4">Name 4</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/messages/5">Name 5</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/messages/6">Name 6</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/messages/7">Name 7</NavLink>
                    </div>
                </div>
                <div className="messages">
                    <div className="message">Hi</div>
                    <div className="message">How are you doing</div>
                    <div className="message">Miss you</div>
                </div>
            </div>
        </div>
    )
}
