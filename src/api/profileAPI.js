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
    },

    async updateAvatar(photo) {
        const formData = new FormData();
        formData.append('image', photo);
        const { data } = await instance.put('profile/photo', formData);
        return data;
    },

    async updateProfile(profile) {
        const { data } = await instance.put('profile', profile);
        return data;
    },
}