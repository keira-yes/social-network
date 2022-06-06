import React from 'react';
import axios from "axios";
import classes from './Users.module.css';
import avatar from "../../assets/images/avatar.png";

export class Users extends React.Component {
    componentDidMount() {
        const { usersCurrentPage, usersPageLimit, getUsers } = this.props;
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${usersCurrentPage}&count=${usersPageLimit}`).then(({ data }) => {
            getUsers(data.items);
        });
    }

    render() {
        const { users, usersTotal, usersPageLimit, usersCurrentPage, toggleFollowUserCreator } = this.props;

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
                            <button type="button" onClick={() => toggleFollowUserCreator(user.id)}>
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
                        <button type="button" key={page} className={page === usersCurrentPage ? classes.active : ''}>{page}</button>
                    ))}
                </div>
            </div>
        )
    }
}
