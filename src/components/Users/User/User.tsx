import React from 'react';
import { NavLink } from "react-router-dom";
import avatar from "../../../assets/images/avatar.png";
import { useDispatch } from "react-redux";
import {UserType} from "../../../types/types";

type PropsType = {
    user: UserType
    fetchingItems: Array<number>
    setFollowUser: (followed: boolean, id: number) => void
}

const User: React.FC<PropsType> = ({ user, fetchingItems, setFollowUser }) => {
    const dispatch = useDispatch();

    return (
        <article key={user.id}>
            <div>
                <NavLink to={`/users/${user.id}`}>
                    <img src={user.photos.small !== null ? user.photos.small : avatar} alt={user.name} />
                </NavLink>
                <button
                    type="button"
                    disabled={fetchingItems.includes(user.id)}
                    onClick={() => {dispatch<any>(setFollowUser(user.followed, user.id))}}
                >
                    {user.followed ? "Unfollow" : "Follow"}
                </button>
            </div>
            <div>
                <h3>{user.name}</h3>
                <div>Country</div>
                <strong>{user.status}</strong>
                <div>City</div>
            </div>
        </article>
    )
}

export default User;