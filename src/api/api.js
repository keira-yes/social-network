import axios from "axios";

export const getAuthData = () => {
    return axios(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
        .then(response => response.data);
}

export const getUsers = (usersCurrentPage = 1, usersPageLimit = 10) => {
    return axios(`https://social-network.samuraijs.com/api/1.0/users?page=${usersCurrentPage}&count=${usersPageLimit}`,
        { withCredentials: true })
        .then(response => response.data);
}

export const followUser = (id) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "70166802-e642-44ee-a14c-87b3ffa9a643"
        }
    }).then(response => response.data);
}

export const unFollowUser = (id) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "70166802-e642-44ee-a14c-87b3ffa9a643"
        }
    }).then(response => response.data);
}