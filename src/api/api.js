import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "70166802-e642-44ee-a14c-87b3ffa9a643"}
})

export const getAuthData = () => {
    return instance(`auth/me`).then(response => response.data);
}

export const getUsers = (usersCurrentPage = 1, usersPageLimit = 10) => {
    return instance(`users?page=${usersCurrentPage}&count=${usersPageLimit}`).then(response => response.data);
}

export const getProfile = (id) => {
    return instance(`profile/${id}`).then(response => response.data);
}

export const followUser = (id) => {
    return instance.post(`follow/${id}`).then(response => response.data);
}

export const unFollowUser = (id) => {
    return instance.delete(`follow/${id}`).then(response => response.data);
}