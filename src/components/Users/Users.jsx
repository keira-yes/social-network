import React from 'react';
import classes from './Users.module.css';
import avatar from "../../assets/images/avatar.png";

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
                        <figure>
                            <img src={user.photos.small !== null ? user.photos.small : avatar} alt={user.name} />
                        </figure>
                        <button type="button" onClick={() => toggleFollowUser(user.id)}>
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
