import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Users.module.css';
import avatar from "../../assets/images/avatar.png";
import { followUser, unFollowUser } from "../../api/api";

export const Users = ({ usersTotal, usersPageLimit, users, toggleFollowUser, usersCurrentPage, handlePageChange }) => {
    const pages = [];
    const pagesCount = Math.ceil(usersTotal / usersPageLimit);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {users.map(user => (
                <article key={user.id}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : avatar} alt={user.name} />
                        </NavLink>
                        <button type="button" onClick={() => {
                            if (!user.followed) {
                                followUser(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        toggleFollowUser(user.id);
                                    }
                                });
                            } else {
                                unFollowUser(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        toggleFollowUser(user.id);
                                    }
                                });
                            }
                        }}>
                            {user.followed ? "Unfollow" : "Follow"}
                        </button>
                    </div>
                    <div>
                        <h3>{user.name}</h3>
                        <div>{"Country"}</div>
                        <strong>{user.status}</strong>
                        <div>{"City"}</div>
                    </div>
                </article>
            ))}
            <div>
                {pages.map(page => (
                    <button
                        type="button"
                        key={page}
                        className={page === usersCurrentPage ? classes.active : ''}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    )
}
