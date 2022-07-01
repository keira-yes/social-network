import { instance } from "./instance";

export const usersAPI = {
    async getUsers(usersCurrentPage = 1, usersPageLimit = 10) {
        const { data } = await instance(`users?page=${usersCurrentPage}&count=${usersPageLimit}`);
        return data;
    },

    async followUser(id) {
        const { data } = await instance.post(`follow/${id}`);
        return data;
    },

    async unFollowUser(id) {
        const { data } = await instance.delete(`follow/${id}`);
        return data;
    }
}