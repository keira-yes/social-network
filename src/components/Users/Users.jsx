import axios from "axios";
import avatar from "../../assets/images/avatar.png";

export const Users = ({ users, getUsers, toggleFollowUserCreator, }) => {

    if (users.length === 0) {
        axios("https://social-network.samuraijs.com/api/1.0/users").then(({ data }) => {
            getUsers(data.items);
        });
    }

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
