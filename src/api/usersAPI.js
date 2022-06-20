import { instance } from "./instance";

export const usersAPI = {
    getUsers(usersCurrentPage = 1, usersPageLimit = 10) {
        return instance(`users?page=${usersCurrentPage}&count=${usersPageLimit}`).then(response => response.data);
    },

    getProfile(id) {
        return instance(`profile/${id}`).then(response => response.data);
    },

    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    unFollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}