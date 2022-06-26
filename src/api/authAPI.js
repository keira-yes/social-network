import { instance } from "./instance";

export const authAPI = {
    getAuthData() {
        return instance('auth/me').then(response => response.data);
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data);
    }
}