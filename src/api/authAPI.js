import { instance } from "./instance";

export const authAPI = {
    getAuthData() {
        return instance(`auth/me`).then(response => response.data);
    }
}