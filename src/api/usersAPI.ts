import { instance } from "./instance";
import { UpdateType, UserType } from "../types/types";

type UsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {
    async getUsers(usersCurrentPage = 1, usersPageLimit = 10) {
        const { data } = await instance.get<UsersType>(`users?page=${usersCurrentPage}&count=${usersPageLimit}`);
        return data;
    },

    async followUser(id: number) {
        const { data } = await instance.post<UpdateType>(`follow/${id}`);
        return data;
    },

    async unFollowUser(id: number) {
        const { data } = await instance.delete<UpdateType>(`follow/${id}`);
        return data;
    }
}
