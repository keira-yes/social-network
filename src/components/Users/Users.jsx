import React from 'react';
import axios from "axios";
import avatar from "../../assets/images/avatar.png";

export class Users extends React.Component {

    componentDidMount() {
        axios("https://social-network.samuraijs.com/api/1.0/users").then(({ data }) => {
            this.props.getUsers(data.items);
        });
    }

    render() {
        const { users, toggleFollowUserCreator } = this.props;
        return (
            <div>
                {users.map(user => (
                    <article key={user.id}>
                        <div>
                            <figure>
                                <img src={user.photos.small !==null ? user.photos.small : avatar} alt={user.name} />
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
            </div>
        )
    }
}
