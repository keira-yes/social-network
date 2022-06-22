import { instance } from "./instance";

export const profileAPI = {
    getProfile(id) {
        return instance(`profile/${id}`).then(response => response.data);
    },

    getStatus(id) {
        return instance(`profile/status/${id}`).then(response => response.data);
    },

    updateStatus(status) {
        return instance.put('profile/status', { status }).then(response => response.data);
    }
}