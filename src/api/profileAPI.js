import { instance } from "./instance";

export const profileAPI = {
    async getProfile(id) {
        const { data } = await instance(`profile/${id}`);
        return data;
    },

    async getStatus(id) {
        const { data } = await instance(`profile/status/${id}`);
        return data;
    },

    async updateStatus(status) {
        const { data } = await instance.put('profile/status', { status });
        return data;
    }
}