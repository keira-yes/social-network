import axios from "axios";

export const getUsers = (usersCurrentPage = 1, usersPageLimit = 10) => {
    return axios(`https://social-network.samuraijs.com/api/1.0/users?page=${usersCurrentPage}&count=${usersPageLimit}`,
        { withCredentials: true })
        .then(response => response.data);
}