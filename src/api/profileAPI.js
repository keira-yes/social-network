import { instance } from "./instance";

export const profileAPI = {
    getProfile(id) {
        return instance(`profile/${id}`).then(response => response.data);
    }
}